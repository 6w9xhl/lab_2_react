// Допоміжні функції для роботи з інформацією про ОС/браузер та localStorage

// Збирає всю доступну інформацію про операційну систему та браузер
export function collectSystemInfo() {
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
export function saveSystemInfo(info) {
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

export function readStorage() {
  try {
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
      keys.push(localStorage.key(i));
    }
    return keys.sort().map((key) => [key, localStorage.getItem(key)]);
  } catch {
    return [];
  }
}