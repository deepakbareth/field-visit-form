'use client';

export default function ApprovalSection({ formData, handleChange }) {
  const inputStyle =
    "w-full px-4  py-2 bg-white text-black placeholder-gray-500 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500";

  const sectionCard =
    "bg-slate-50 p-4 rounded-lg text-black placeholder-gray-500 border border-slate-200 space-y-3";

  const titleStyle =
    "text-sm font-semibold text-slate-700 flex text-black placeholder-gray-500 items-center gap-2";

  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">

      {/* Heading */}
      <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
        <span className="w-2 h-6 bg-blue-600 rounded-full"></span>
        7. Approval Section (Mandatory)
      </h2>

      {/* 🔹 Reporting Manager */}
      <div className={sectionCard}>
        <h3 className={`${titleStyle} text-blue-600`}>
          👨‍💼 Reporting Manager
        </h3>

        <input
          name="reportingManager"
          value={formData.reportingManager}
          onChange={handleChange}
          placeholder="Name"
          className={inputStyle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="reportingManagerSign"
            value={formData.reportingManagerSign}
            onChange={handleChange}
            placeholder="Signature"
            className={inputStyle}
          />

          <input
            type="date"
            name="reportingManagerDate"
            value={formData.reportingManagerDate}
            onChange={handleChange}
            className={inputStyle}
          />
        </div>
      </div>

      {/* 🔹 Department Head */}
      <div className={sectionCard}>
        <h3 className={`${titleStyle} text-purple-600`}>
          🧑‍💼 Department Head
        </h3>

        <input
          name="departmentHead"
          value={formData.departmentHead}
          onChange={handleChange}
          placeholder="Name"
          className={inputStyle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="departmentHeadSign"
            value={formData.departmentHeadSign}
            onChange={handleChange}
            placeholder="Signature"
            className={inputStyle}
          />

          <input
            type="date"
            name="departmentHeadDate"
            value={formData.departmentHeadDate}
            onChange={handleChange}
            className={inputStyle}
          />
        </div>
      </div>

      {/* 🔹 HR/Admin */}
      <div className={sectionCard}>
        <h3 className={`${titleStyle} text-rose-600`}>
          🏢 HR / Admin
        </h3>

        <input
          name="hrName"
          value={formData.hrName}
          onChange={handleChange}
          placeholder="Name"
          className={inputStyle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="hrSign"
            value={formData.hrSign}
            onChange={handleChange}
            placeholder="Signature"
            className={inputStyle}
          />

          <input
            type="date"
            name="hrDate"
            value={formData.hrDate}
            onChange={handleChange}
            className={inputStyle}
          />
        </div>
      </div>

    </div>
  );
}