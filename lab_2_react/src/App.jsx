import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050000] py-16 px-4 font-mono text-red-500 relative overflow-hidden flex flex-col items-center">
      
      {/* Ефект старого CRT монітора (сканлайни) - накладається поверх усього */}
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.4)_50%)] bg-[length:100%_4px] z-50 opacity-60 mix-blend-overlay"></div>
      
      {/* Банер тривоги */}
      <div className="fixed top-0 left-0 w-full bg-red-950 border-b-2 border-red-600 text-center py-1.5 text-[10px] md:text-xs font-black tracking-[0.4em] text-red-500 shadow-[0_0_20px_#ef4444] z-50 uppercase flex justify-center items-center gap-4">
        <span className="w-2 h-2 bg-red-500 rounded-none animate-ping"></span>
        [ WARNING: TOP SECRET CLEARANCE REQUIRED / UNAUTHORIZED ACCESS LOGGED ]
        <span className="w-2 h-2 bg-red-500 rounded-none animate-ping"></span>
      </div>

      {/* Вікно хакерського терміналу */}
      <div className="max-w-4xl w-full mx-auto bg-[#0a0000] shadow-[0_0_50px_rgba(220,38,38,0.5),inset_0_0_30px_rgba(220,38,38,0.1)] border-2 border-red-700 relative z-10">
        
        {/* Шапка вікна консолі */}
        <div className="w-full bg-red-950 border-b-2 border-red-700 flex items-center px-4 py-2 justify-between">
          <div className="text-xs text-red-400 font-bold tracking-widest flex items-center gap-2">
            <span className="animate-pulse">🔴</span> ROOT@KUCHMA_OS:~/sys/portfolio
          </div>
          <div className="flex gap-2">
            {/* Квадратні жорсткі кнопки терміналу */}
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
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;