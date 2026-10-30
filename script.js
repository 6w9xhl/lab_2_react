'use strict';

const VARIANT = 14; 
const COMMENTS_URL = `https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`;
const MODAL_DELAY_MS = 60 * 1000;                 // 1 хвилина
const MODAL_DISMISSED_KEY = 'contactModalDismissed'; // прапорець у sessionStorage
const THEME_CHECK_INTERVAL_MS = 60 * 1000;

/*  1. localStorage: інформація про ОС та браузер */

// Збирає всю доступну інформацію про операційну систему та браузер
function collectSystemInfo() {
    const nav = window.navigator;
    const uaData = nav.userAgentData; 

    const info = {
        userAgent: nav.userAgent,
        platform: nav.platform,
        vendor: nav.vendor,
        language: nav.language,
        languages: (nav.languages || []).join(', '),
        cookieEnabled: nav.cookieEnabled,
        onLine: nav.onLine,
        hardwareConcurrency: nav.hardwareConcurrency,
        deviceMemory: nav.deviceMemory,
        maxTouchPoints: nav.maxTouchPoints,
        screenSize: `${window.screen.width}x${window.screen.height}`,
        colorDepth: window.screen.colorDepth,
        devicePixelRatio: window.devicePixelRatio,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };

    if (uaData) {
        info.uaPlatform = uaData.platform;
        info.uaMobile = uaData.mobile;
        info.uaBrands = uaData.brands.map((b) => `${b.brand} ${b.version}`).join(', ');
    }
    return info;
}

// localStorage зберігає лише рядки, тому кожне значення перетворюємо на рядок
function saveSystemInfo(info) {
    try {
        Object.entries(info).forEach(([key, value]) => {
            if (value === undefined || value === null || value === '') return;
            const text = typeof value === 'object' ? JSON.stringify(value) : String(value);
            localStorage.setItem(key, text);
        });
    } catch (error) {
        console.warn('Не вдалося записати в localStorage:', error);
    }
}

function renderStorageInfo() {
    const list = document.getElementById('storage-info');
    list.replaceChildren();

    try {
        const keys = [];
        for (let i = 0; i < localStorage.length; i++) {
            keys.push(localStorage.key(i));
        }
        keys.sort();

        keys.forEach((key) => {
            const dt = document.createElement('dt');
            dt.textContent = key;
            const dd = document.createElement('dd');
            dd.textContent = localStorage.getItem(key);
            list.append(dt, dd);
        });
    } catch (error) {
        list.textContent = 'localStorage недоступний.';
    }
}

/* 2. Відгуки з сервера (JSONPlaceholder)*/

function createCommentCard(comment) {
    const card = document.createElement('article');
    card.className = 'comment-card';

    const name = document.createElement('h3');
    name.className = 'comment-name';
    name.textContent = comment.name;

    const email = document.createElement('span');
    email.className = 'comment-email';
    email.textContent = comment.email;

    const body = document.createElement('p');
    body.className = 'comment-body';
    body.textContent = comment.body;

    card.append(name, email, body);
    return card;
}

async function loadComments() {
    const status = document.getElementById('reviews-status');
    const list = document.getElementById('reviews-list');

    try {
        const response = await fetch(COMMENTS_URL);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        const comments = await response.json();

        comments.forEach((comment) => list.append(createCommentCard(comment)));
        status.hidden = true;
    } catch (error) {
        status.textContent = `Не вдалося завантажити відгуки (${error.message}).`;
    }
}

/* 3. Модальне вікно зворотного зв'язку */

function wasModalDismissed() {
    try {
        return sessionStorage.getItem(MODAL_DISMISSED_KEY) === '1';
    } catch (error) {
        return false;
    }
}

function rememberDismissed() {
    try {
        sessionStorage.setItem(MODAL_DISMISSED_KEY, '1');
    } catch (error) {
    }
}

function initContactModal() {
    const modal = document.getElementById('contact-modal');
    const closeButton = document.getElementById('modal-close');
    const form = modal.querySelector('form');

    function openModal() {
        modal.hidden = false;
        document.body.classList.add('modal-open');
        modal.querySelector('input[type="text"]').focus();
    }

    function closeModal() {
        modal.hidden = true;
        document.body.classList.remove('modal-open');
        rememberDismissed();
    }

    closeButton.addEventListener('click', closeModal);
    form.addEventListener('submit', rememberDismissed); // після відправки теж не показуємо знову
    modal.addEventListener('click', (event) => {
        if (event.target === modal) closeModal(); // клік поза вікном
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !modal.hidden) closeModal();
    });

    if (!wasModalDismissed()) {
        setTimeout(openModal, MODAL_DELAY_MS);
    }
}

/* 4. Денна / нічна тема */

// Денна тема: 07:00–21:00, нічна — увесь інший час
function getThemeByTime(date = new Date()) {
    const hours = date.getHours();
    return hours >= 7 && hours < 21 ? 'light' : 'dark';
}

function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;

    const button = document.getElementById('theme-toggle');
    button.textContent = theme === 'dark' ? '☀️ Світла тема' : '🌙 Темна тема';
    button.setAttribute('aria-pressed', String(theme === 'dark'));
}

function initTheme() {
    let autoTheme = getThemeByTime();
    applyTheme(autoTheme);

    // Ручне перемикання
    document.getElementById('theme-toggle').addEventListener('click', () => {
        const current = document.documentElement.dataset.theme;
        applyTheme(current === 'dark' ? 'light' : 'dark');
    });

    // Автоматичне перемикання, коли настає інша пора доби
    setInterval(() => {
        const nextAutoTheme = getThemeByTime();
        if (nextAutoTheme !== autoTheme) {
            autoTheme = nextAutoTheme;
            applyTheme(autoTheme);
        }
    }, THEME_CHECK_INTERVAL_MS);
}

/*  Запуск */
initTheme();
saveSystemInfo(collectSystemInfo());
renderStorageInfo();
loadComments();
initContactModal();