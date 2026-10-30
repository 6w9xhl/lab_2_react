import { useEffect, useState } from 'react';
import { collectSystemInfo, saveSystemInfo, readStorage } from '../utils/systemInfo';

function Footer() {
  const [storageItems, setStorageItems] = useState([]);

  // Після монтування: зчитуємо дані про ОС/браузер, зберігаємо їх у localStorage
  // і одразу отримуємо назад усе, що там є, щоб показати у футері
  useEffect(() => {
    saveSystemInfo(collectSystemInfo());
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStorageItems(readStorage());
  }, []);

  return (
    <footer className="bg-black border-t border-slate-800 p-6 text-center">
      <p className="text-slate-500 text-sm font-medium tracking-wide">
        © 2026 | Створено для Лабораторної роботи №4 (Частина 2 - React)
      </p>

      <div className="mt-6 text-left">
        <h3 className="text-xs font-bold text-red-500 uppercase tracking-widest mb-3">
          [ SYSTEM INFO · localStorage ]
        </h3>
        <dl className="grid grid-cols-1 md:grid-cols-[max-content_1fr] gap-x-6 gap-y-1 text-[11px] font-mono leading-snug">
          {storageItems.map(([key, value]) => (
            <div key={key} className="contents">
              <dt className="text-red-500 font-bold">{key}</dt>
              <dd className="text-slate-400 break-all">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </footer>
  );
}

export default Footer;