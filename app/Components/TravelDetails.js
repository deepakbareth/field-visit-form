'use client';

export default function TravelDetails({ formData, handleChange }) {
    const labelStyle =
        "block text-sm font-semibold text-slate-700 mb-2 ml-1";

    const inputStyle =
        "w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all hover:border-slate-400";

    const toggleClass = (field, value) =>
        `flex-1 py-2  text-center rounded-md text-sm font-bold transition-all cursor-pointer border ${formData[field] === value
            ? "bg-blue-600 border-blue-600 text-white shadow-sm"
            : "bg-white border-slate-200 text-slate-500 hover:bg-slate-50"
        }`;

    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-8">

            {/* Header */}
            <div className="border-b border-slate-100 pb-4">
                <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    <span className="w-2 h-6 bg-blue-600 rounded-full"></span>
                    4. Travel & Stay Details
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Transport */}
                <div className="md:col-span-2">
                    <label className={labelStyle}>Mode of Transport</label>
                    <input
                        name="transport"
                        value={formData.transport}
                        onChange={handleChange}
                        placeholder="e.g. Company Vehicle, Train, Flight"
                        className={inputStyle}
                    />
                </div>

                {/* Accommodation */}
                <div>
                    <label className={labelStyle}>Accommodation Required?</label>
                    <div className="flex w-60 p-1 bg-slate-100 rounded-lg gap-1">
                        {["Yes", "No"].map((val) => (
                            <label key={val} className={toggleClass("accommodation", val)}>
                                <input
                                    type="radio"
                                    name="accommodation"
                                    value={val}
                                    onChange={handleChange}
                                    className="hidden"
                                />
                                {val}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Advance */}
                <div>
                    <label className={labelStyle}>Advance Required?</label>
                    <div className="flex p-1 w-60 bg-slate-100 rounded-lg gap-1">
                        {["Yes", "No"].map((val) => (
                            <label key={val} className={toggleClass("advance", val)}>
                                <input
                                    type="radio"
                                    name="advance"
                                    value={val}
                                    onChange={handleChange}
                                    className="hidden "
                                />
                                {val}
                            </label>
                        ))}
                    </div>
                </div>

            </div>

            {/* Advance Amount */}
            {formData.advance === "Yes" && (
                <div className="pt-6 border-t border-slate-50 animate-in fade-in slide-in-from-top-4 duration-300">
                    <label className={labelStyle}>Advance Amount</label>

                    <div className="relative max-w-xs">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <span className="text-slate-500 font-bold">₹</span>
                        </div>

                        <input
                            type="number"
                            name="amount"
                            value={formData.amount}
                            onChange={(e) => {
                                const value = Math.max(0, e.target.value);
                                handleChange({ target: { name: "amount", value } });
                            }}
                            placeholder="0.00"
                            className={`${inputStyle} pl-10`}
                        />
                    </div>

                    <p className="mt-2 text-xs text-slate-400 italic">
                        Please note: You will need to submit original bills later.
                    </p>
                </div>
            )}
        </div>
    );
}