'use client';

export default function ReportingDetails({ formData, handleChange }) {
  const labelStyle = "block text-sm font-bold text-slate-700 mb-2 ml-1";
  const inputStyle = "w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 hover:border-slate-400 shadow-sm";

  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-8">
      
      {/* Section Header */}
      <div className="border-b border-slate-100 pb-4">
        <h2 className="text-sm sm:text-xl md:text-2xl font-extrabold text-slate-800 flex items-center gap-2">
     <span className="w-1.5 sm:w-2 h-5 sm:h-6 md:h-7 bg-blue-600 rounded-full"></span>
          5. Reporting & Responsibility
        </h2>
      </div>

      <div className="space-y-6">
        {/* Manager Name */}
        <div>
          <label htmlFor="managerName" className={labelStyle}>
            Reporting Manager Name <span className="text-rose-500">*</span>
          </label>
          <div className="relative group">
            <input
              type="text"
              id="managerName"
              name="managerName"
              value={formData.managerName}
              onChange={handleChange}
              placeholder="e.g. Sarah Jenkins"
              className={inputStyle}
              required
            />
          </div>
        </div>

        {/* Deliverables */}
        <div>
          <label htmlFor="deliverables" className={labelStyle}>
            Expected Deliverables / Work Plan
          </label>
          <textarea
            id="deliverables"
            name="deliverables"
            value={formData.deliverables}
            onChange={handleChange}
            rows={4}
            placeholder="Outline your primary objectives for this visit..."
            className={`${inputStyle} resize-none min-h-[120px]`}
          />
          <div className="mt-2 flex items-start gap-2 px-1 text-slate-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-0.5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-[11px] leading-tight">
              A clear work plan helps expedite the approval process. List tasks, meetings, or site audits expected.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}