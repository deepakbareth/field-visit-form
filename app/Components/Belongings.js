'use client';

export default function Belongings({ formData, handleChange, handleBelongingsChange }) {
  const inputStyle = "w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all hover:border-slate-400";

  return (
    <div className="space-y-8">
      
      {/* 8. Belongings / Instruments Section */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
       <div className="flex flex-row items-center justify-between flex-wrap gap-4 mb-6 border-b border-slate-100 pb-4">
  <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
    <span className="w-2 h-6 bg-blue-500 rounded-full"></span>
    8. Belongings / Instruments
  </h2>
  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-100 px-2 py-1 rounded whitespace-nowrap">
    Laptop, Tools, etc.
  </span>
</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {formData.belongings.map((item, index) => (
            <div key={index} className="relative group animate-in fade-in slide-in-from-left-2 duration-200">
              <div className="absolute left-3 top-2.5 text-xs font-bold text-slate-300 group-focus-within:text-blue-400">
                0{index + 1}
              </div>
              <input
                value={item}
                onChange={(e) => handleBelongingsChange(index, e.target.value)}
                placeholder="Item name / Serial No."
                className={`${inputStyle} pl-10`}
              />
            </div>
          ))}
        </div>
        
        <p className="mt-4 text-[11px] text-slate-500 italic">
          * List all company assets being carried for this field visit.
        </p>
      </div>

      {/* 9. Remarks Section */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <span className="w-2 h-6 bg-slate-400 rounded-full"></span>
          9. Additional Remarks
        </h2>

        <div className="relative">
          <textarea
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
            rows={3}
            placeholder="Enter any additional information or special requirements here..."
            className={`${inputStyle} resize-none bg-slate-50/50 focus:bg-white`}
          />
        </div>
      </div>

    </div>
  );
}