function Experience() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-white border-b-2 border-slate-800 pb-2 mb-8 flex items-center gap-2">
        <span className="w-2 h-6 bg-red-600 rounded-sm"></span> Проєкти в сфері розробки та ІБ
      </h2>
      
      <ul className="space-y-8 list-none p-0 pl-3">
        <li className="relative pl-8 border-l-2 border-slate-800 hover:border-red-600 transition-colors duration-300 group">
          <div className="absolute w-3.5 h-3.5 bg-slate-600 group-hover:bg-red-500 rounded-full -left-[9px] top-1.5 ring-4 ring-slate-950 transition-colors"></div>
          <h3 className="font-bold text-xl text-slate-200 group-hover:text-white transition-colors">Аудит кібербезпеки підприємства (ISO/IEC 27001)</h3>
          <p className="text-xs font-mono text-red-500/80 tracking-widest uppercase mb-3 mt-1">Академічний проєкт | 2026</p>
          <p className="text-slate-400 text-sm leading-relaxed">У складі команди провела комплексний аудит інформаційної безпеки. Здійснила оцінку ризиків, розробила матрицю загроз. Співавтор розробки «Політики контролю доступу підприємства», що базується на принципах Least Privilege, Need-to-know та Zero Trust.</p>
        </li>
        
        <li className="relative pl-8 border-l-2 border-slate-800 hover:border-red-600 transition-colors duration-300 group">
          <div className="absolute w-3.5 h-3.5 bg-slate-600 group-hover:bg-red-500 rounded-full -left-[9px] top-1.5 ring-4 ring-slate-950 transition-colors"></div>
          <h3 className="font-bold text-xl text-slate-200 group-hover:text-white transition-colors">Програмна реалізація алгоритмів криптографії</h3>
          <p className="text-xs font-mono text-red-500/80 tracking-widest uppercase mb-3 mt-1">Науково-практичний проєкт | 2026</p>
          <p className="text-slate-400 text-sm leading-relaxed">Розробила програмну реалізацію схеми сліпого підпису Фу-Гво Дженга мовою Python. Провела експериментальне порівняння продуктивності алгоритмів ECC та класичного RSA. Проєкт викладено у відкритий доступ на GitHub.</p>
        </li>
        
        <li className="relative pl-8 border-l-2 border-slate-800 hover:border-red-600 transition-colors duration-300 group">
          <div className="absolute w-3.5 h-3.5 bg-slate-600 group-hover:bg-red-500 rounded-full -left-[9px] top-1.5 ring-4 ring-slate-950 transition-colors"></div>
          <h3 className="font-bold text-xl text-slate-200 group-hover:text-white transition-colors">Web Penetration Testing & CTF</h3>
          <p className="text-xs font-mono text-red-500/80 tracking-widest uppercase mb-3 mt-1">Самостійна практика | 2025 - дотепер</p>
          <p className="text-slate-400 text-sm leading-relaxed">Регулярне розв'язання задач на Hack TheBox та TryHackMe. Використання Burp Suite для аналізу вебтрафіку. Написання автоматизованих скриптів на Python для парсингу даних та OSINT.</p>
        </li>
      </ul>
    </section>
  );
}

export default Experience;