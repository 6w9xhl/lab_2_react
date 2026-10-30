import { useEffect, useState } from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const THEME_CHECK_INTERVAL_MS = 60 * 1000;

// Денна тема: 07:00–21:00, нічна — увесь інший час
function getThemeByTime(date = new Date()) {
  const hours = date.getHours();
  return hours >= 7 && hours < 21 ? 'light' : 'dark';
}

function App() {
  // Початкова тема визначається за поточним часом
  const [theme, setTheme] = useState(getThemeByTime);

  // Автоматичне перемикання: раз на хвилину перевіряємо, чи не настала інша пора доби
  useEffect(() => {
    let autoTheme = getThemeByTime();

    const intervalId = setInterval(() => {
      const nextAutoTheme = getThemeByTime();
      if (nextAutoTheme !== autoTheme) {
        autoTheme = nextAutoTheme;
        setTheme(nextAutoTheme);
      }
    }, THEME_CHECK_INTERVAL_MS);

    return () => clearInterval(intervalId);
  }, []);

  // Ручне перемикання
  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <div className={`${theme === 'light' ? 'theme-light' : 'theme-dark'} min-h-screen bg-[color:var(--app-bg)] py-16 px-4 font-mono text-red-500 relative overflow-hidden flex flex-col items-center`}>

      <div className="scanlines fixed inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.4)_50%)] bg-[length:100%_4px] z-50 opacity-60 mix-blend-overlay"></div>
      
      {/* Банер тривоги */}
      <div className="fixed top-0 left-0 w-full bg-red-950 border-b-2 border-red-600 text-center py-1.5 text-[10px] md:text-xs font-black tracking-[0.4em] text-red-500 shadow-[0_0_20px_#ef4444] z-50 uppercase flex justify-center items-center gap-4">
        <span className="w-2 h-2 bg-red-500 rounded-none animate-ping"></span>
        [ WARNING: TOP SECRET CLEARANCE REQUIRED / UNAUTHORIZED ACCESS LOGGED ]
        <span className="w-2 h-2 bg-red-500 rounded-none animate-ping"></span>
      </div>

      <div className="max-w-4xl w-full mx-auto bg-[color:var(--panel-bg)] shadow-[0_0_50px_rgba(220,38,38,0.5),inset_0_0_30px_rgba(220,38,38,0.1)] border-2 border-red-700 relative z-10">
        
        {/* Шапка */}
        <div className="w-full bg-red-950 border-b-2 border-red-700 flex items-center px-4 py-2 justify-between">
          <div className="text-xs text-red-400 font-bold tracking-widest flex items-center gap-2">
            <span className="animate-pulse">🔴</span> ROOT@KUCHMA_OS:~/sys/portfolio
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-pressed={theme === 'dark'}
              className="mr-2 px-3 py-0.5 text-[10px] font-bold tracking-widest uppercase border border-red-700 text-red-400 hover:bg-red-800 hover:text-white transition-colors cursor-pointer"
            >
              {theme === 'dark' ? '☀ Світла тема' : '🌙 Темна тема'}
            </button>

            <div className="w-4 h-4 bg-red-950 border border-red-700 hover:bg-red-800 cursor-pointer"></div>
            <div className="w-4 h-4 bg-red-950 border border-red-700 hover:bg-red-800 cursor-pointer"></div>
            <div className="w-4 h-4 bg-red-600 border border-red-400 shadow-[0_0_10px_#ef4444] cursor-pointer"></div>
          </div>
        </div>

        <div className="p-0">
          <Header />
          <main className="p-8 md:p-12 space-y-12 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.05)_0%,transparent_100%)]">
            <Education />
            <Experience />
            <Reviews />
          </main>
          <Footer />
        </div>
      </div>

      <ContactForm />
    </div>
  );
}

export default App;