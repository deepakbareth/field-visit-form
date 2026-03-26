'use client';

export default function DutyDetails({ formData, handleChange }) {
  const labelStyle = "block text-sm font-semibold text-slate-700 mb-2 ml-1";
  const inputStyle = "w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 hover:border-slate-400";

  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-8">
      
      {/* Section Header */}
      <div className="border-b border-slate-100 pb-4">
        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full"></span>
          2. Duty & Visit Details
        </h2>
      </div>

      {/* Purpose - Full Width */}
      <div>
        <label className={labelStyle}>Purpose of Visit / Assignment</label>
        <textarea
          name="purpose"
          value={formData.purpose}
          onChange={handleChange}
          className={`${inputStyle} min-h-[100px] resize-none`}
          rows={3}
          placeholder="Briefly describe the objective of this visit..."
          required
        />
      </div>

      {/* Duty Type - Improved Radio Buttons */}
      <div>
        <label className={labelStyle}>Type of Duty</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className={`
            relative flex items-center p-4 border rounded-xl cursor-pointer transition-all
            ${formData.dutyType === 'NCR' ? 'border-blue-500 bg-blue-50' : 'border-slate-200 hover:bg-slate-50'}
          `}>
            <input
              type="radio"
              name="dutyType"
              value="NCR"
              checked={formData.dutyType === 'NCR'}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 focus:ring-blue-500"
            />
            <div className="ml-3">
              <span className="block font-semibold text-slate-800">Local / NCR</span>
              <span className="block text-xs text-slate-500 text-nowrap">Field work within the region</span>
            </div>
          </label>

          <label className={`
            relative flex items-center p-4 border rounded-xl cursor-pointer transition-all
            ${formData.dutyType === 'Outstation' ? 'border-blue-500 bg-blue-50' : 'border-slate-200 hover:bg-slate-50'}
          `}>
            <input
              type="radio"
              name="dutyType"
              value="Outstation"
              checked={formData.dutyType === 'Outstation'}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 focus:ring-blue-500"
            />
            <div className="ml-3">
              <span className="block font-semibold text-slate-800">Outstation</span>
              <span className="block text-xs text-slate-500 text-nowrap">Official travel outside NCR</span>
            </div>
          </label>
        </div>
      </div>

      {/* Location and Client - Two Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelStyle}>Location</label>
          <div className="relative">
            <span className="absolute left-3 top-3 text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              className={`${inputStyle} pl-10`}
              placeholder="City, Site, or Branch"
              required
            />
          </div>
        </div>

        <div>
          <label className={labelStyle}>Client / Project Name</label>
          <input
            name="client"
            value={formData.client}
            onChange={handleChange}
            className={inputStyle}
            placeholder="Name of client (if any)"
          />
        </div>
      </div>

    </div>
  );
}