import Link from 'next/link';

export default function TripCard({ trip }) {
  const [day, month] = trip.date.split(' ');

  return (
    <Link href={`/history/${trip.id}`} className="block group">
      <div className="bg-white p-4 md:p-6 rounded-2xl border border-slate-200 hover:border-black-800 hover:shadow-xl transition-all duration-300 flex flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-4 md:gap-6">
          {/* Date Badge */}
          <div className="bg-slate-100 px-4 group-hover:bg-red-50 text-slate-500 group-hover:text-red-500 min-w-[60px] h-16 rounded-xl flex flex-col items-center justify-center transition-colors shadow-sm flex-shrink-0 border border-slate-200">
            <span className="text-xl font-black leading-none">{day}</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">{month}</span>
          </div>

          {/* Details */}
          <div>
            <div className="flex items-center gap-2 mb-1">
               <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-500 tracking-tighter">
                {trip.dutyType}
               </span>
               <span className="text-[10px] font-bold text-slate-400">ID: {trip.id}</span>
            </div>
            <h2 className="text-base md:text-lg font-bold text-slate-800 group-hover:text-red-600 transition-colors line-clamp-1 uppercase tracking-tight">
              {trip.location}
            </h2>
            <p className="text-slate-500 text-xs font-medium">{trip.purpose}</p>
          </div>
        </div>

        {/* Action Icon */}
        <div className="flex self-center w-10 h-10 rounded-full bg-slate-50 items-center justify-center text-slate-300 group-hover:bg-black group-hover:text-white transition-all shadow-sm">
           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-6 4h3" />
           </svg>
        </div>
      </div>
    </Link>
  );
}