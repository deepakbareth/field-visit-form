'use client';

import Link from 'next/link';
import { deepakTrips } from '../../utils/historyData';
import Header from '@/app/Components/Header';
import { use } from 'react';

export default function TripDetails({ params }) {
  const { id } = use(params);
  const trip = deepakTrips.find((t) => t.id === id);

  if (!trip) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100 font-bold text-slate-400">
        RECORD NOT FOUND
      </div>
    );
  }

  // --- Formal Helper Components ---
  const SectionHeader = ({ title }) => (
    <div className="flex items-center gap-3 mb-3 mt-8">
      <h2 className="text-sm font-black text-slate-900 uppercase tracking-widest bg-slate-100 px-3 py-1 border border-slate-300">
        {title}
      </h2>
      <div className="flex-1 h-[2px] bg-slate-800"></div>
    </div>
  );

  const InfoRow = ({ label, value }) => (
    <div className="grid grid-cols-3 border-b border-slate-200 py-2.5">
      <span className="text-[13px] font-black text-slate-500 uppercase tracking-tight">
        {label}
      </span>
      <span className="col-span-2  text-slate-900 text-[14px] border-l border-slate-200 pl-4 ">
        {value || '---'}
      </span>
    </div>
  );

  return (
    <div className="min-h-screen bg-white p-0 py-4 md:p-4  flex flex-col items-center print:p-0 print:bg-white transition-all">

      {/* Return Action */}
      <div className="max-w-6xl w-full mb-6 pl-4 md:pl-0 print:hidden">
        <Link href="/history" className="group inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200 text-slate-600 font-bold hover:text-red-600 transition-all">
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          BACK TO HISTORY
        </Link>
      </div>

      {/* Main Document Body */}
      <div
        className="max-w-6xl w-full bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden print:shadow-none"
        style={{ minHeight: '1123px' }}
      >
        {/* Subtle Watermark */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05] z-0"
          style={{
            backgroundImage: "url('/NMF_logo.png')",
            backgroundSize: '500px',
            backgroundPosition: 'center 55%',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Double Border Frame */}
        <div className="m-4 sm:m-8 border-[3px] border-slate-900 p-1 relative z-10 h-full">
          <div className="border border-slate-900 p-6 sm:p-10 min-h-[1050px]">

            <Header />

            <div className="text-center mt-8 mb-12">
              <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tighter border-y-2 border-slate-900 py-3 inline-block px-8">
                Official Duty Permission Form
              </h1>
              <p className="text-[14px] text-slate-500 font-bold mt-2 tracking-[0.3em] uppercase">Document ID: {trip.id}</p>
            </div>

            <div className="space-y-2">
              <SectionHeader title="Employee Particulars" />
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12">
                {/* Corrected: Using employeeName instead of signature */}
                <InfoRow label="Name of Employee" value={trip.employeeName || trip.signature} />

                {/* Corrected: Employee Code/ID */}
                <InfoRow label="Employee Code" value={trip.employeeId || trip.id} />

                {/* Corrected: Designation (e.g. Developer) vs Duty Type (e.g. NCR) */}
                <InfoRow label="Designation" value={trip.designation} />

                {/* Corrected: Showing Phone Number instead of Location */}
                <InfoRow label="Contact Number" value={trip.contactNumber || trip.phone} />
              </div>

              <SectionHeader title="Assignment Details" />
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12">
                <InfoRow label="Nature of Duty" value={trip.dutyType} /> {/* e.g., NCR / Outstation */}
                <InfoRow label="Location / City" value={trip.location} />
                <InfoRow label="Purpose of Visit" value={trip.purpose} />
                <InfoRow label="Client / Project" value={trip.client} />
              </div>


              <SectionHeader title="Logistics & Timeline" />
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12">
                <InfoRow label="Departure" value={`${trip.startDate} | ${trip.startTime}`} />
                <InfoRow label="Return" value={`${trip.endDate} | ${trip.endTime}`} />
                <InfoRow label="Net Duration" value={trip.totalDuration} />
                <InfoRow label="Mode of Travel" value={trip.transport} />
              </div>

              <SectionHeader title="Finance & Assets" />
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12">
                <InfoRow label="Cash Advance" value={trip.advance} />
                <InfoRow label="Amount (INR)" value={trip.amount > 0 ? `₹ ${trip.amount}/-` : 'NIL'} />
                <div className="md:col-span-2">
                  <InfoRow label="Items Carried" value={trip.belongings.filter(i => i).join(', ') || 'NIL'} />
                </div>
              </div>

              <SectionHeader title="Work Summary" />
              <InfoRow label="Deliverables" value={trip.deliverables} />
              <InfoRow label="Admin Remarks" value={trip.remarks} />

              {/* Approval Grid */}
              <div className="mt-20">
                <div className="grid grid-cols-3 border-2 border-slate-900 overflow-hidden">
                  <div className="border-r border-slate-900">
                    <div className="bg-slate-900 text-white text-[9px] font-black py-1 px-2 uppercase text-center">Reporting Manager</div>
                    <div className="h-28 flex flex-col items-center justify-center p-2 text-center">
                      <span className="text-emerald-700 font-black text-sm uppercase tracking-tighter mb-1">{trip.reportingManagerSign || 'Awaiting'}</span>
                      <span className="text-[8px] text-slate-400 font-mono">{trip.reportingManagerDate}</span>
                    </div>
                  </div>
                  <div className="border-r border-slate-900">
                    <div className="bg-slate-900 text-white text-[9px] font-black py-1 px-2 uppercase text-center">Dept. Head Approval</div>
                    <div className="h-28 flex flex-col items-center justify-center p-2 text-center">
                      <span className="text-emerald-700 font-black text-sm uppercase tracking-tighter mb-1">{trip.departmentHeadSign || 'Awaiting'}</span>
                      <span className="text-[8px] text-slate-400 font-mono">{trip.departmentHeadDate}</span>
                    </div>
                  </div>
                  <div>
                    <div className="bg-slate-900 text-white text-[9px] font-black py-1 px-2 uppercase text-center">HR Verification</div>
                    <div className="h-28 flex flex-col items-center justify-center p-2 text-center">
                      <span className="text-emerald-700 font-black text-sm uppercase tracking-tighter mb-1">{trip.hrSign || 'Awaiting'}</span>
                      <span className="text-[8px] text-slate-400 font-mono">{trip.hrDate}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Document Footer */}
            <div className="mt-12 flex justify-between items-end">
              <div className="text-[8px] text-slate-400 uppercase leading-relaxed max-w-[200px]">
                Authentication: Electronic Verified Record<br />

              </div>
              <div className="border-2 border-slate-300 p-2 text-[10px] font-black text-slate-300 rotate-[-15deg] uppercase tracking-[0.2em]">
                Verified Digital Copy
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex gap-4 mt-10 print:hidden">
        <button
          onClick={() => window.print()}
          className="bg-slate-600 text-white px-12 py-4 rounded-xl font-black hover:bg-slate-700 transition-all shadow-2xl flex items-center gap-3 active:scale-95 uppercase text-sm tracking-widest"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Print / Export PDF
        </button>
      </div>
    </div>
  );
}