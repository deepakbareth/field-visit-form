'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { deepakTrips } from '../utils/historyData';
import TripCard from '../Components/History/TripCard';
import FilterPills from '../Components/History/FilterDropdown';

export default function HistoryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  // Smart Filtering Logic for the new Pills
  const filteredTrips = useMemo(() => {
    return deepakTrips.filter((trip) => {
      // 1. Search Bar Match (Location, ID, or Purpose)
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch = searchTerm === '' || 
        trip.location.toLowerCase().includes(searchLower) ||
        trip.id.toLowerCase().includes(searchLower) ||
        (trip.purpose && trip.purpose.toLowerCase().includes(searchLower));

      // 2. Pill Filter Logic
      let matchesFilter = true;
      
      // Helper to check if a signature is missing or marked "Pending"
      const isPending = !trip.reportingManagerSign || !trip.departmentHeadSign || !trip.hrSign || 
                        trip.reportingManagerSign === 'Pending' || trip.hrSign === 'Pending';

      switch (activeFilter) {
        case 'Pending':
          matchesFilter = isPending;
          break;
        case 'Approved':
          matchesFilter = !isPending;
          break;
        case 'NCR':
          matchesFilter = trip.dutyType === 'NCR';
          break;
        case 'Outstation':
          matchesFilter = trip.dutyType === 'Outstation';
          break;
        case 'Advance':
          // Assuming amount is stored as a number or a string that can be parsed
          matchesFilter = parseFloat(trip.amount) > 0; 
          break;
        case 'All':
        default:
          matchesFilter = true;
      }

      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, activeFilter]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-8 px-4 md:py-12">
      <div className="max-w-4xl mx-auto">

        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div className="text-center sm:text-left">
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter uppercase">TRAVEL RECORDS</h1>
            <p className="text-slate-500 font-bold text-[10px] sm:text-sm mt-1 uppercase tracking-widest">Official Duty Logs • Khetan Media</p>
          </div>

          <Link href="/" className="bg-slate-900 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-red-600 transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95 text-xs tracking-widest uppercase shrink-0">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
            </svg>
            NEW ENTRY
          </Link>
        </div>

        {/* --- Unified Search & Filter Section --- */}
        <div className="mb-8">
          
          {/* Main Search Input - Now Full Width! */}
          <div className="relative group mb-4">
            <div className="absolute -inset-1 bg-gradient-to-r from-slate-200 to-slate-100 rounded-2xl blur opacity-25 group-focus-within:opacity-100 transition duration-500"></div>
            <div className="relative bg-white rounded-2xl shadow-sm border border-slate-200 flex">
              <svg className="w-5 h-5 absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search by city, ID, or purpose..."
                className="w-full pl-14 pr-4 py-4 rounded-2xl bg-transparent border-none focus:ring-4 focus:ring-red-500/5 font-bold text-slate-700 placeholder:text-slate-400 outline-none text-sm transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              
              {/* Quick clear button for search */}
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-red-500 transition-colors p-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              )}
            </div>
          </div>

          {/* New Horizontal Quick Filters */}
          <FilterPills activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
          
          
        </div>

        {/* Stats Summary & Divider */}
        <div className="flex items-center justify-between mb-4 px-2 border-b border-slate-200/60 pb-3">
           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
             {filteredTrips.length} {filteredTrips.length === 1 ? 'Record' : 'Records'} Found
           </p>
        </div>

        {/* List Section */}
        <div className="space-y-3">
          {filteredTrips.length > 0 ? (
            filteredTrips.map((trip) => (
              <TripCard key={trip.id} trip={trip} />
            ))
          ) : (
            /* Empty State */
            <div className="text-center py-24 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm mt-6">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <p className="text-slate-400 font-black text-xs uppercase tracking-widest mb-4">
                  No matching records found
                </p>
                {(searchTerm !== '' || activeFilter !== 'All') && (
                  <button 
                    onClick={() => { setSearchTerm(''); setActiveFilter('All'); }}
                    className="text-[10px] font-bold text-red-500 hover:text-white border border-red-200 px-6 py-2.5 rounded-xl hover:bg-red-500 transition-all uppercase tracking-widest active:scale-95 shadow-sm"
                  >
                    Reset Search & Filters
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}