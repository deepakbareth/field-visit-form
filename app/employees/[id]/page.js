import Link from 'next/link';
import { deepakTrips } from '../../utils/historyData';

export default async function TripDetails({ params }) {
  const { id } = await params; 
  const trip = deepakTrips.find((t) => t.id === id);

  if (!trip) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
        <div className="text-center p-10 bg-white rounded-3xl shadow-sm border border-slate-200 w-full max-w-sm">
          <p className="text-xl font-bold text-slate-800">Trip not found</p>
          <p className="text-sm text-slate-500 mt-2 mb-6">This record may have been deleted.</p>
          <Link href="/employees" className="bg-blue-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-700 transition-all block w-full">
            Back to History
          </Link>
        </div>
      </div>
    );
  }

  // --- Mobile-Optimized Helper Components ---
  const SectionHeader = ({ title }) => (
    <div className="flex items-center gap-4 mb-4 sm:mb-6 mt-8 sm:mt-10">
      <h2 className="text-base sm:text-lg font-black text-slate-800 tracking-tight whitespace-nowrap">{title}</h2>
      <div className="flex-1 h-px bg-slate-200"></div>
    </div>
  );

  const InfoBox = ({ label, value }) => (
    <div className="break-words">
      <p className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">{label}</p>
      <p className="font-bold text-slate-900 text-sm sm:text-[15px] leading-snug">{value || '-'}</p>
    </div>
  );
  // -------------------------------------------

  return (
    <div className="min-h-screen  bg-gradient-to-br from-[#C5BAC4] via-[#7E919F] to-[#57707A] py-6 sm:py-12 px-3 sm:px-6 flex flex-col items-center">
      <div className="max-w-6xl w-full"> 
        
        {/* Mobile-friendly Back Button */}
        <Link href="/employees" className="inline-flex items-center gap-2 text-slate-800 font-bold hover:text-blue-600 transition-colors mb-4 sm:mb-6 py-2 pr-4">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Back to History
        </Link>

        {/* The Detail Card */}
        <div className="bg-white rounded-3xl sm:rounded-[2rem] shadow-2xl shadow-slate-200/50  overflow-hidden">
          
          {/* Top Header - Responsive layout */}
          <div className="bg-[#134E4A] p-6 sm:p-10 text-white relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
            
            <div className="flex flex-col md:flex-row md:justify-between md:items-start relative z-10 gap-5">
              <div className="order-2 md:order-1">
                <span className="text-1xl font-black leading-none">{trip.date.split(' ')[0]} {trip.date.split(' ')[1]}</span>
                <p className="text-blue-400 font-bold text-[10px] sm:text-xs tracking-widest uppercase mb-1.5 sm:mb-2">
                  Duty Record • {trip.dutyType}
                </p>
                <h1 className="text-3xl sm:text-4xl font-black mb-2 leading-tight">{trip.location}</h1>
                <p className="text-slate-400 font-medium text-xs sm:text-sm flex flex-wrap items-center gap-2 mt-3 sm:mt-0">
                  <span className="font-mono bg-white/10 px-2.5 py-1 rounded-md text-slate-300">{trip.id}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>Submitted by {trip.signature}</span>
                </p>
              </div>
              
              {/* Dynamic Status Badge - Moves to top right on mobile, stays right on desktop */}
              <div className={`order-1 md:order-2 self-start inline-flex px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider border shadow-sm
                ${trip.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 
                  trip.status === 'Upcoming' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 
                  'bg-amber-500/10 text-amber-400 border-amber-500/20'}`}>
                {trip.status}
              </div>
            </div>
          </div>

          {/* Details Body */}
          <div className="p-5 sm:p-10">
            
            <SectionHeader title="Trip Overview" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">
              <InfoBox label="Purpose of Visit" value={trip.purpose} />
              <InfoBox label="Client / Assignment" value={trip.client} />
            </div>

            <SectionHeader title="Schedule & Timings" />
            <div className="bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-100 grid grid-cols-2 lg:grid-cols-4 gap-5">
              <InfoBox label="Start Date" value={trip.startDate} />
              <InfoBox label="End Date" value={trip.endDate} />
              <div className="col-span-2 lg:col-span-1">
                <InfoBox label="Duty Hours" value={`${trip.startTime} - ${trip.endTime}`} />
              </div>
              <div className="col-span-2 lg:col-span-1">
                <InfoBox label="Total Duration" value={trip.totalDuration} />
              </div>
            </div>

            <SectionHeader title="Logistics & Finance" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
              <InfoBox label="Transport Mode" value={trip.transport} />
              <InfoBox label="Accommodation" value={trip.accommodation} />
              <div className="grid grid-cols-2 gap-4 sm:col-span-2 lg:col-span-2">
                <InfoBox label="Advance Req." value={trip.advance} />
                <InfoBox label="Amount" value={trip.amount !== '0' && trip.amount ? `₹${trip.amount}` : 'N/A'} />
              </div>
            </div>

            <SectionHeader title="Work Details" />
            <div className="space-y-6 sm:space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">
                <InfoBox label="Expected Deliverables" value={trip.deliverables} />
                <InfoBox label="Remarks / Notes" value={trip.remarks} />
              </div>
              
              {/* Belongings List */}
              <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-100">
                <p className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Company Belongings Carried</p>
                <div className="flex flex-wrap gap-2">
                  {trip.belongings.filter(item => item.trim() !== "").length > 0 ? (
                    trip.belongings.filter(item => item.trim() !== "").map((item, index) => (
                      <span key={index} className="bg-white border border-slate-200 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-700 shadow-sm">
                        {item}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs sm:text-sm font-medium text-slate-400 italic">No company items carried.</span>
                  )}
                </div>
              </div>
            </div>

            <SectionHeader title="Approval Workflow" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {/* Manager */}
              <div className={`border p-4 sm:p-5 rounded-2xl transition-colors ${trip.reportingManagerSign === 'Verified' || trip.reportingManagerSign === 'Approved' ? 'bg-emerald-50 border-emerald-200' : 'bg-slate-50 border-slate-200'}`}>
                <p className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 sm:mb-2">Reporting Manager</p>
                <p className={`text-base sm:text-lg font-black ${trip.reportingManagerSign === 'Verified' || trip.reportingManagerSign === 'Approved' ? 'text-emerald-700' : 'text-slate-700'}`}>
                  {trip.reportingManagerSign || 'Pending'}
                </p>
                <p className="text-[10px] sm:text-xs text-slate-500 font-medium mt-1">{trip.reportingManagerDate || 'Waiting for action'}</p>
              </div>
              
              {/* Dept Head */}
              <div className={`border p-4 sm:p-5 rounded-2xl transition-colors ${trip.departmentHeadSign === 'Approved' ? 'bg-emerald-50 border-emerald-200' : 'bg-slate-50 border-slate-200'}`}>
                <p className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 sm:mb-2">Department Head</p>
                <p className={`text-base sm:text-lg font-black ${trip.departmentHeadSign === 'Approved' ? 'text-emerald-700' : 'text-slate-700'}`}>
                  {trip.departmentHeadSign || 'Pending'}
                </p>
                <p className="text-[10px] sm:text-xs text-slate-500 font-medium mt-1">{trip.departmentHeadDate || 'Waiting for action'}</p>
              </div>
              
              {/* HR */}
              <div className={`border p-4 sm:p-5 rounded-2xl transition-colors ${trip.hrSign === 'Approved' ? 'bg-emerald-50 border-emerald-200' : 'bg-slate-50 border-slate-200'}`}>
                <p className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 sm:mb-2">HR Department</p>
                <p className={`text-base sm:text-lg font-black ${trip.hrSign === 'Approved' ? 'text-emerald-700' : 'text-slate-700'}`}>
                  {trip.hrSign || 'Pending'}
                </p>
                <p className="text-[10px] sm:text-xs text-slate-500 font-medium mt-1">{trip.hrDate || 'Waiting for action'}</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}