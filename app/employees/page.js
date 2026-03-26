import Link from 'next/link';
import { deepakTrips } from '../utils/historyData';

export default function HistoryList() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#C5BAC4] via-[#7E919F] to-[#57707A] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Travel History</h1>
          <p className="text-slate-800 font-medium mt-2">Deepak Bareth's official duty logs</p>
        </div>

        {/* The List */}
        <div className="space-y-4">
          {deepakTrips.map((trip) => (
            <Link href={`/employees/${trip.id}`} key={trip.id} className="block group">
              <div className="bg-white p-6 rounded-3xl border border-slate-200 hover:border-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-between">
                
                <div className="flex items-center gap-6">
                  {/* Date Badge */}
                  <div className="bg-blue-50 text-blue-600 px-2 h-16 rounded-2xl flex flex-col items-center justify-center shadow-inner">
                    <span className="text-2xl font-black leading-none">{trip.date.split(' ')[0]}</span>
                    <span className="text-xs font-bold uppercase tracking-widest">{trip.date.split(' ')[1]}</span>
                  </div>
                  
                  {/* Destination Info */}
                  <div>
                    <h2 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                      {trip.destination}
                    </h2>
                    <p className="text-slate-400 text-sm font-medium mt-1">{trip.purpose}</p>
                  </div>
                </div>

                {/* Arrow Icon */}
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </div>
                
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}