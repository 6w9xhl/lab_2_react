import { useCallback, useEffect, useState } from 'react';

const FORMSPREE_ACTION = 'https://formspree.io/f/mqppdznq';
const MODAL_DELAY_MS = 60000; // 1 хвилина
const DISMISSED_KEY = 'contactFormDismissed'; 

function wasDismissed() {
  try {
    return sessionStorage.getItem(DISMISSED_KEY) === '1';
  } catch {
    return false;
  }
}

function markDismissed() {
  try {
    sessionStorage.setItem(DISMISSED_KEY, '1'); 
  } catch {
  }
}

const inputClass =
  'w-full bg-slate-900/50 border border-slate-800 text-slate-200 p-2 mb-4 focus:outline-none focus:border-red-500';
const labelClass = 'block text-xs uppercase tracking-widest text-red-500 mb-1';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  // Показуємо вікно через 1 хвилину, якщо користувач ще не закривав його в цій сесії
  useEffect(() => {
    if (wasDismissed()) return;

    const timerId = setTimeout(() => setIsOpen(true), MODAL_DELAY_MS);
    return () => clearTimeout(timerId); // очищення таймера при розмонтуванні
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    markDismissed();
  }, []);

  // Закриття клавішею Escape 
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
      onClick={(event) => {
        if (event.target === event.currentTarget) handleClose(); // клік поза вікном
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        className="w-full max-w-md max-h-full overflow-y-auto bg-[color:var(--panel-bg)] border-2 border-red-700 shadow-[0_0_40px_rgba(220,38,38,0.4)] p-6 font-mono"
      >
        <h2 id="contact-title" className="text-xl font-bold text-white mb-5">
          Зворотний зв’язок
        </h2>

        <form action={FORMSPREE_ACTION} method="POST" onSubmit={markDismissed}>
          <input type="hidden" name="_subject" value="Нове повідомлення з портфоліо (Лабораторна №4)" />

          <label htmlFor="contact-name" className={labelClass}>Ім’я</label>
          <input id="contact-name" name="name" type="text" required autoComplete="name" autoFocus className={inputClass} />

          <label htmlFor="contact-email" className={labelClass}>Email</label>
          <input id="contact-email" name="email" type="email" required autoComplete="email" className={inputClass} />

          <label htmlFor="contact-phone" className={labelClass}>Номер телефону</label>
          <input id="contact-phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} />

          <label htmlFor="contact-message" className={labelClass}>Повідомлення</label>
          <textarea id="contact-message" name="message" rows={4} required className={`${inputClass} resize-y`} />

          <div className="flex justify-end gap-3">
            <button
              type="submit"
              className="bg-red-700 text-black font-bold uppercase tracking-widest text-sm px-4 py-2 hover:bg-white transition-colors cursor-pointer"
            >
              Надіслати
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="border border-red-700 text-red-500 uppercase tracking-widest text-sm px-4 py-2 hover:bg-red-950 transition-colors cursor-pointer"
            >
              Закрити
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;