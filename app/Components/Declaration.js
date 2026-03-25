'use client';

export default function Declaration({ formData, handleChange }) {
  const labelStyle = "block text-sm font-bold text-slate-700 mb-2 ml-1";
  const inputStyle = "w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all";

  return (
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-3">
        <h2 className="text-xl font-extrabold text-slate-800 flex items-center gap-2">
          <span className="w-2 h-6 bg-blue-600 rounded-full"></span>
          6. Employee Declaration
        </h2>
      </div>

      {/* Legal Text Box */}
      <div className="bg-white border-l-2  p-4 rounded-r-lg shadow-sm italic text-slate-600 text-sm leading-relaxed">
        "I hereby confirm that the information provided above is true and accurate to the best of my knowledge. I agree to adhere to all company policies and safety protocols during this official duty. I understand that the company shall not be held liable for any unauthorized acts performed outside my official capacity."
      </div>

      {/* Signature & Date Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
        
        {/* Signature - Styled to look like a signature field */}
        <div>
          <label className={labelStyle}>Digital Signature</label>
          <div className="relative">
            <input
              type="text"
              name="signature"
              value={formData.signature}
              onChange={handleChange}
              placeholder="Type your full legal name"
              className={`${inputStyle} font-serif italic text-lg`} // Font-serif makes it look more like a signature
              required
            />
            <p className="mt-2 text-[10px] text-slate-400 uppercase tracking-widest font-bold">
              Digitally signing as: {formData.signature || '________________'}
            </p>
          </div>
        </div>

        {/* Date Field */}
        <div>
          <label className={labelStyle}>Date of Declaration</label>
          <input
            type="date"
            name="declarationDate"
            value={formData.declarationDate}
            onChange={handleChange}
            className={inputStyle}
            required
          />
        </div>

      </div>

      {/* Final Checkbox for extra "Good" UX */}
      <div className="flex items-start gap-3 pt-2">
        <input 
          type="checkbox" 
          id="agree" 
          required 
          className="mt-1 w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
        />
        <label htmlFor="agree" className="text-xs text-slate-500 cursor-pointer">
          I understand that this digital signature is legally binding and equivalent to a handwritten signature.
        </label>
      </div>
    </div>
  );
}