function Education() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-white border-b-2 border-slate-800 pb-2 mb-6 flex items-center gap-2">
        <span className="w-2 h-6 bg-red-600 rounded-sm"></span> Освіта
      </h2>
      
      <div className="space-y-5">
        <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.15)] hover:-translate-y-1 transition-all duration-300 group">
          <h3 className="font-bold text-xl text-slate-200 group-hover:text-red-400 transition-colors">Національний університет «Львівська політехніка»</h3>
          <p className="text-xs font-mono text-red-500/80 tracking-widest uppercase mb-4 mt-2">Бакалавр, «Кібербезпека» | 2025 - дотепер</p>
          <p className="text-slate-400 text-sm leading-relaxed">Фокус навчання: Інформаційна безпека, криптографічні системи, аудит кібербезпеки, бази даних (SQL) та адміністрування мереж.</p>
        </div>
        
        <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.15)] hover:-translate-y-1 transition-all duration-300 group">
          <h3 className="font-bold text-xl text-slate-200 group-hover:text-red-400 transition-colors">Львівська загальноосвітня школа №82</h3>
          <p className="text-xs font-mono text-red-500/80 tracking-widest uppercase mt-2">Повна загальна середня освіта | 2014 - 2025</p>
        </div>
      </div>
    </section>
  );
}

export default Education;