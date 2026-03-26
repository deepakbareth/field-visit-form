'use client';

export default function DurationDetails({ formData, handleChange }) {
  const labelStyle = "block text-sm font-semibold text-slate-700 mb-1.5 ml-1";
  const inputStyle = "w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 hover:border-slate-400";
  const readonlyStyle = "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-600 font-medium cursor-not-allowed";

  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
      
      {/* Section Header */}
      <div className="border-b border-slate-100 pb-4">
        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full"></span>
           3. Duration of Duty
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Start Date & Time */}
        <div className="space-y-1.5">
          <label className={labelStyle}>Departure Date & Time</label>
          <div className="relative">
            <input
              type="datetime-local"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className={inputStyle}
              required
            />
          </div>
        </div>

        {/* End Date & Time */}
        <div className="space-y-1.5">
          <label className={labelStyle}>Expected Return Date & Time</label>
          <div className="relative">
            <input
              type="datetime-local"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className={inputStyle}
            //   required
            />
          </div>
        </div>
      </div>

      {/* Total Duration - Styled as a summary box */}
      <div className="pt-4 mt-2">
        <div className="flex items-center justify-between mb-2 px-1">
          <label className="text-sm font-semibold text-slate-700 italic">
            Calculated Duration
          </label>
         
        </div>
        
        <div className="relative group">
          <input
            type="text"
            name="totalDuration"
            value={formData.totalDuration}
            readOnly
            className={readonlyStyle}
            placeholder="Duration will appear here..."
          />
          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <p className="mt-2 text-xs text-slate-500 ml-1">
          * Total time includes travel and site work hours.
        </p>
      </div>
    </div>
  );
}