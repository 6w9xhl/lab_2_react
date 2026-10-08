function Header() {
  return (
    <header className="p-10 border-b-2 border-red-900 relative bg-[#050000] overflow-hidden">
      {/* Декоративний код на фоні */}
      <div className="absolute top-4 right-6 text-[10px] leading-tight text-red-900/40 select-none text-right font-mono hidden md:block">
        01001011 01010101<br/>
        01000011 01001000<br/>
        01001101 01000001<br/>
        SYS.INIT()_OK
      </div>

      {/* ГЛІТЧ ЕФЕКТ для імені */}
      <div className="relative inline-block mb-8 mt-4">
        <h1 className="text-3xl md:text-4xl font-black tracking-tighter text-white uppercase relative z-10 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)] whitespace-nowrap">
          Кучма Христина Юріївна
        </h1>
        <h1 className="text-3xl md:text-4xl font-black tracking-tighter text-red-600 uppercase absolute top-0 -left-1 opacity-70 mix-blend-screen animate-pulse pointer-events-none whitespace-nowrap">
          Кучма Христина Юріївна
        </h1>
        <h1 className="text-3xl md:text-4xl font-black tracking-tighter text-blue-600 uppercase absolute top-[2px] left-[2px] opacity-70 mix-blend-screen animate-pulse pointer-events-none delay-75 whitespace-nowrap">
          Кучма Христина Юріївна
        </h1>
      </div>
      
      {/* Командний рядок спеціальності */}
      <div className="mb-8 text-sm md:text-lg font-mono text-red-400 font-bold bg-red-950/40 inline-block px-4 py-2 border border-red-800 shadow-[inset_0_0_10px_rgba(0,0,0,0.8)]">
        <span className="text-red-600 font-black mr-2">#</span> 
        ./execute --role "Junior Cybersecurity Specialist" 
        <span className="w-3 h-5 bg-red-500 inline-block align-middle animate-ping ml-2"></span>
      </div>
      
      {/* Контакти (Виправлено на TEL) */}
      <div className="flex flex-wrap gap-x-8 gap-y-4 text-xs text-red-500/70 font-mono mb-10 uppercase tracking-widest">
        <span className="flex items-center gap-2 hover:text-red-400 hover:shadow-[0_0_10px_#f87171] transition-all cursor-crosshair">
          <span className="w-2 h-2 bg-red-600 rounded-none animate-pulse"></span> [ LOC: LVIV_UA ]
        </span>
        <span className="flex items-center gap-2 hover:text-red-400 hover:shadow-[0_0_10px_#f87171] transition-all cursor-crosshair">
           [ TEL: 098 700 37 77 ]
        </span>
        <a href="mailto:kucmahristina5@gmail.com" className="flex items-center gap-2 hover:text-white hover:drop-shadow-[0_0_10px_#ef4444] transition-all border-b border-red-900 hover:border-red-500 pb-0.5">
          &lt;kucmahristina5@gmail.com&gt;
        </a>
      </div>

      {/* Бруталістичні квадратні бейджі */}
      <div className="flex flex-wrap gap-3 mb-8">
        {['Python', 'C#', 'Burp Suite', 'Nmap', 'ISO 27001', 'Kali Linux'].map((tech) => (
          <span key={tech} className="relative group px-4 py-1.5 text-xs font-bold font-mono text-black bg-red-700 uppercase tracking-widest cursor-crosshair transition-all hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]">
            <span className="relative z-10">{tech}</span>
          </span>
        ))}
      </div>

      {/* Професійний профіль (Відновлено весь текст) */}
      <div className="bg-[#0a0000] border border-red-900/50 p-5 font-mono text-sm relative shadow-[inset_0_0_20px_rgba(220,38,38,0.05)]">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-900 to-transparent"></div>
        <p className="text-red-500 font-bold mb-3 flex items-center gap-2">
          <span className="text-red-700">~</span> $ cat profile_summary.txt
        </p>
        <p className="text-slate-400 leading-relaxed text-justify">
          Цілеспрямована студентка 2-го курсу спеціальності «Кібербезпека», яка активно здобуває практичний досвід у сфері наступальної безпеки. Маю практичний досвід у сфері тестування на проникнення (пошук та експлуатація вебвразливостей SQLi, XSS), проведення командних аудитів інформаційної безпеки за стандартом ISO/IEC 27001, а також розробки криптографічних алгоритмів мовою Python. Є співавтором наукової публікації з дослідження еліптичної криптографії (ECC). Володію сильними організаційними навичками завдяки досвіду на посаді старости групи. Прагну застосувати свої аналітичні здібності та технічний бекграунд для вирішення складних інженерних задач у сфері інформаційної безпеки.
        </p>
      </div>
    </header>
  );
}

export default Header;