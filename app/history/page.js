import Link from 'next/link';
import { deepakTrips } from '../utils/historyData';

export default function HistoryList() {
  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 md:py-12 md:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
      {/* Header & Actions */}
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
  <div>
    <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Travel History</h1>
    <p className="text-slate-800 font-medium mt-2">Deepak Bareth's official duty logs</p>
  </div>
  
  <Link 
    href="/" 
    className="flex items-center justify-center gap-2 text-black bg-slate-200 hover:text-red-600 hover:bg-slate-200 px-6 py-3 rounded-2xl font-bold shadow-lg shadow-black-200 transition-all active:scale-95"
  >
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
    </svg>
    <span>Add New Trip</span>
  </Link>
</div>

        {/* The List */}
        <div className="space-y-4">
          {deepakTrips.map((trip) => (
            <Link href={`/history/${trip.id}`} key={trip.id} className="block group">
              {/* Added flex-col for mobile, sm:flex-row for desktop */}
              <div className="bg-white p-5 md:p-6 rounded-3xl border border-slate-200 hover:border-red-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

                <div className="flex items-center gap-4 md:gap-6">
                  {/* Date Badge - kept consistent size */}
                  <div className="bg-blue-50 text-blue-400 min-w-[64px] h-16 rounded-2xl flex flex-col items-center justify-center shadow-inner flex-shrink-0">
                    <span className="text-2xl font-black leading-none">{trip.date.split(' ')[0]}</span>
                    <span className="text-xs font-bold uppercase tracking-widest">{trip.date.split(' ')[1]}</span>
                  </div>

                  {/* Destination Info */}
                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-slate-800 group-hover:text-red-600 transition-colors line-clamp-1">
                      {trip.location}
                    </h2>
                    <p className="text-slate-400 text-sm font-medium mt-1">{trip.purpose}</p>
                  </div>
                </div>

                {/* Arrow Icon - hidden on very small screens or kept to the side */}
                <div className="hidden sm:flex self-center w-10 h-10 rounded-full bg-slate-50 items-center font-bold justify-center text-slate-400 group-hover:bg-slate-300 group-hover:text-red-500 transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>

              </div>
            </Link>
          ))}
        </div>
        

      </div>
    </div>
  );
}