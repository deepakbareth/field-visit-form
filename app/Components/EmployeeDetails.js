'use client';

export default function EmployeeDetails({ formData, handleChange }) {
    // Shared styles for a consistent, professional look
    const labelStyle = "block text-sm font-semibold text-slate-700 mb-1.5 ml-1";
    const inputStyle = "w-full px-4 py-2 bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 hover:border-slate-400";

    return (
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
                <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    <span className="w-2 h-6 bg-blue-600 rounded-full"></span>
                    1. Employee Details
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">

                {/* Row 1: Name (Full Width on mobile, span 2 on desktop if you prefer) */}
                <div className="md:col-span-2">
                    <label htmlFor="employeeName" className={labelStyle}>Employee Name</label>
                    <input
                        type="text"
                        id="employeeName"
                        name="employeeName"
                        value={formData.employeeName}
                        onChange={handleChange}
                        placeholder="Enter full legal name"
                        className={inputStyle}
                        required
                    />
                </div>

                {/* Row 2: ID & Department */}
                <div>
                    <label htmlFor="employeeId" className={labelStyle}>Employee ID</label>
                    <input
                        type="text"
                        id="employeeId"
                        name="employeeId"
                        value={formData.employeeId}
                        onChange={handleChange}
                        placeholder="e.g. EMP-102"
                        className={inputStyle}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="department" className={labelStyle}>Department</label>
                    <input
                        type="text"
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        placeholder="e.g. Operations / IT"
                        className={inputStyle}
                        required
                    />
                </div>

                {/* Row 3: Designation & Contact */}
                <div>
                    <label htmlFor="designation" className={labelStyle}>Designation</label>
                    <input
                        type="text"
                        id="designation"
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        placeholder="e.g. Project Manager"
                        className={inputStyle}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="contactNumber" className={labelStyle}>
                        Contact Number
                    </label>

                    <input
                        type="tel"
                        id="contactNumber"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        className={inputStyle}
                        maxLength={10}
                        pattern="[0-9]{10}"
                        required
                    />
                </div>

            </div>
        </div>
    );
}