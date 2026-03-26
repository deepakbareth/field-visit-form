import React, { useState } from 'react';

export default function ClearButton({ onClear }) {
  const [showConfirm, setShowConfirm] = useState(false);

  const confirmClear = () => {
    onClear(); // Call the reset function from parent
    setShowConfirm(false); // Close modal
  };

  return (
    <>
      {/* 1. The Main Button - Added w-full for mobile */}
      <button
        type="button"
        onClick={() => setShowConfirm(true)}
         className="px-5 py-2.5 rounded-xl text-slate-700 font-bold  text-sm transition-allflex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-bold  bg-slate-200  rounded-xl transition-all cursor-pointer hover:bg-slate-300 border border-slate-300 w-full sm:w-auto"
      >
        Clear Form
      </button>

      {/* 2. The Popup Modal */}
      {showConfirm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          {/* Adjusted padding (p-6 on mobile, p-8 on sm+) and max-width */}
          <div className="bg-white w-full max-w-[340px] sm:max-w-sm rounded-[32px] p-6 sm:p-8 shadow-2xl transform transition-all scale-100 animate-in zoom-in-95 duration-200">
            
            {/* Red Trash Icon */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 text-center mb-2 tracking-tight">Clear all fields?</h3>
            <p className="text-sm sm:text-base text-slate-500 text-center mb-6 sm:mb-8 font-medium">This will remove all your typed data. This action cannot be undone.</p>
            
            <div className="flex flex-row gap-3">
              <button 
                type="button"
                onClick={() => setShowConfirm(false)}
                className="flex-1 py-3.5 sm:py-4 rounded-2xl font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors text-sm sm:text-base"
              >
                Cancel
              </button>
              <button 
                type="button"
                onClick={confirmClear}
                className="flex-1 py-3.5 sm:py-4 rounded-2xl font-bold text-white bg-red-600 hover:bg-red-700 shadow-lg shadow-red-200 transition-all active:scale-95 text-sm sm:text-base"
              >
                Yes, Clear
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}