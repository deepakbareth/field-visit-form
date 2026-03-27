'use client';

export default function FilterPills({ activeFilter, setActiveFilter }) {
  const filters = [
    { id: 'All', label: 'All Records' },
    { id: 'Pending', label: 'Pending Approval' },
    { id: 'Approved', label: 'Fully Approved' },
    { id: 'NCR', label: 'NCR Only' },
    { id: 'Outstation', label: 'Outstation' },
    { id: 'Advance', label: 'With Advance' }
  ];

  return (
    <div className="w-full overflow-x-auto pb-4 pt-1 custom-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 flex items-center gap-2 sm:gap-3">
      {filters.map((filter) => {
        const isActive = activeFilter === filter.id;
        
        return (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`flex-shrink-0 px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 active:scale-95
              ${isActive 
                ? 'bg-red-600 text-white shadow-lg shadow-red-500/30 border border-red-500' 
                : 'bg-white text-slate-500 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-800 hover:shadow-sm'
              }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}