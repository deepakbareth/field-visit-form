"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { deepakTrips } from '../utils/historyData';
import { 
  MapPin, CheckCircle, Clock, FileText, 
  ChevronRight, LogOut, PlusCircle, Edit3, X, Save, User, Briefcase, Phone, Hash
} from 'lucide-react';
import { BackButton } from '../Components/BackButton';
import { LogoutButton } from '../Components/LogoutButton';

export default function ProfilePage() {
  // --- 1. INITIAL DATA SETUP ---
  const latestRecord = deepakTrips[0] || {};
  
  // --- 2. STATE MANAGEMENT ---
  // We store the user data in state so it can be updated via the UI
  const [userData, setUserData] = useState({
    name: latestRecord.employeeName || "Deepak Bareth",
    employeeId: latestRecord.employeeId || "EMP12DE", // Usually read-only
    department: latestRecord.department || "Editorial",
    designation: latestRecord.designation || "Senior Field Reporter",
    contact: latestRecord.contactNumber || "+91 98765 43210",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(userData);

  // --- 3. DYNAMIC STATS ---
  const totalVisits = deepakTrips.length;
  const completedVisits = deepakTrips.filter(trip => trip.status.toLowerCase() === 'completed').length;
  const pendingVisits = totalVisits - completedVisits; 
  const outstationCount = deepakTrips.filter(trip => trip.dutyType.toLowerCase() === 'outstation').length;

  // --- 4. EVENT HANDLERS ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setUserData(formData); // In a real app, you would make an API call here
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      
      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div>
            <h1 className="text-[17px] md:text-xl font-black text-slate-900 ">Khetan Media Creation</h1>
          </div>
        <LogoutButton/>
        </div>
      </nav>


      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
      <BackButton/>
        
        {/* Profile Card & Actions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Profile Card (Takes up 2 columns) */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden relative">
            {/* Cover Banner */}
            <div className="h-32 bg-gradient-to-r from-slate-800 to-slate-900 w-full relative">
               <div className="absolute top-4 right-4">
                  <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-white/30">
                    Official Press
                  </span>
               </div>
            </div>
            
            <div className="px-6 sm:px-8 pb-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between -mt-12 sm:-mt-16 mb-4 relative z-9 gap-4">
                {/* Avatar */}
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-full p-1.5 shadow-md">
                  <div className="w-full h-full bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl sm:text-4xl font-bold">
                    {userData.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                
                {/* Edit Button */}
                <button 
                  onClick={() => setIsEditing(true)}
                  className="flex items-center bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-bold transition-colors border border-slate-200 shadow-sm"
                >
                  <Edit3 className="w-4 h-4 mr-2" />
                  Edit Profile
                </button>
              </div>

              {/* User Details */}
              <div className="text-center sm:text-left">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">{userData.name}</h2>
                <p className="text-blue-600 font-bold text-base mt-1">{userData.designation}</p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100 pt-6">
                <div className="flex items-center text-slate-600">
                  <Hash className="w-5 h-5 mr-3 text-slate-400" />
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Employee ID</p>
                    <p className="font-semibold text-slate-800">{userData.employeeId}</p>
                  </div>
                </div>
                <div className="flex items-center text-slate-600">
                  <Briefcase className="w-5 h-5 mr-3 text-slate-400" />
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Department</p>
                    <p className="font-semibold text-slate-800">{userData.department}</p>
                  </div>
                </div>
                <div className="flex items-center text-slate-600 sm:col-span-2">
                  <Phone className="w-5 h-5 mr-3 text-slate-400" />
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Contact Number</p>
                    <p className="font-semibold text-slate-800">{userData.contact}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions (Takes up 1 column) */}
          <div className="flex flex-col gap-4">
            <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-md flex-1 flex flex-col justify-center">
              <h3 className="font-bold text-lg mb-2">Need to travel?</h3>
              <p className="text-slate-400 text-sm mb-6">Submit a new official duty form for outstation or NCR visits.</p>
              <Link href="/" className="w-full flex items-center justify-center p-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all font-bold shadow-sm">
                <PlusCircle className="w-5 h-5 mr-2" />
                CREATE NEW FORM
              </Link>
            </div>
            <Link href="/history" className="w-full flex items-center justify-center p-4 bg-white border border-slate-200 text-slate-700 rounded-2xl hover:bg-slate-50 transition-all font-bold shadow-sm">
              <FileText className="w-5 h-5 mr-2" />
              VIEW ALL RECORDS
            </Link>
          </div>
        </div>

        {/* Dynamic Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Total Logs</p>
            <p className="text-3xl sm:text-4xl font-black text-slate-800">{totalVisits}</p>
          </div>
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <p className="text-xs font-bold text-green-500 uppercase tracking-wider mb-2">Completed</p>
            <p className="text-3xl sm:text-4xl font-black text-slate-800">{completedVisits}</p>
          </div>
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <p className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-2">Pending</p>
            <p className="text-3xl sm:text-4xl font-black text-slate-800">{pendingVisits}</p>
          </div>
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <p className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-2">Outstation</p>
            <p className="text-3xl sm:text-4xl font-black text-slate-800">{outstationCount}</p>
          </div>
        </div>


      </div>

      {/* --- EDIT PROFILE MODAL --- */}
      {isEditing && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h3 className="font-bold text-lg text-slate-900 flex items-center">
                <Edit3 className="w-5 h-5 mr-2 text-blue-600" /> Update Profile
              </h3>
              <button 
                onClick={() => setIsEditing(false)}
                className="p-2 bg-slate-200/50 hover:bg-slate-200 text-slate-500 rounded-full transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body (Scrollable if needed on small phones) */}
            <form onSubmit={handleSave} className="p-6 overflow-y-auto flex-1 space-y-4">
              
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all font-medium text-slate-800"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Employee ID</label>
                  <input 
                    type="text" 
                    name="employeeId"
                    value={formData.employeeId}
                    disabled
                    className="w-full px-4 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-slate-500 font-medium cursor-not-allowed"
                    title="Employee ID cannot be changed"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Contact Number</label>
                  <input 
                    type="text" 
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium text-slate-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Department</label>
                  <input 
                    type="text" 
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium text-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Designation</label>
                  <input 
                    type="text" 
                    name="designation"
                    value={formData.designation}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium text-slate-800"
                  />
                </div>
              </div>

            </form>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
              <button 
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-5 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-200 bg-slate-100 rounded-xl transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleSave}
                type="submit"
                className="px-5 py-2.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors flex items-center shadow-sm"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}




// if we have api  then we use this function on savebtn 


//const [isSaving, setIsSaving] = useState(false);


// const handleSave = async (e) => {
//   e.preventDefault(); // Stop page reload
  
//   setIsSaving(true); // Tell the UI we are talking to the server

//   try {
//     // 1. Send the data to your API route
//     const response = await fetch('/api/update-profile', {
//       method: 'POST', // or PUT/PATCH depending on your backend
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       // Turn our formData object into a text string the server can read
//       body: JSON.stringify(formData), 
//     });

//     // 2. Check if the server said "OK" (Status 200)
//     if (response.ok) {
//       setUserData(formData); // Update the main screen
//       setIsEditing(false);   // Close the modal
//     } else {
//       alert("Failed to save profile. Please try again.");
//     }

//   } catch (error) {
//     // 3. Catch internet issues or server crashes
//     console.error("API Error:", error);
//     alert("Something went wrong checking your internet connection.");
//   } finally {
//     setIsSaving(false); // Turn off the loading state no matter what happens
//   }
// };