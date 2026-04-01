'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, User, FileText } from 'lucide-react';
import NMF_logo from './../../public/NMF_logo.png';

const HomePageHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full max-w-7xl mx-auto px-2 py-4 font-sans mb-10 relative">
      
      {/* Wrapper to hold your original content on the left, and buttons on the right */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">

        {/* ========================================== */}
        {/* YOUR ORIGINAL LOGO & TEXT CODE (UNTOUCHED) */}
        {/* ========================================== */}
        <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-2">
          {/* 🔥 Bigger Logo */}
          <Image
            src={NMF_logo}
            alt="Company Logo"
            className="object-contain"
            width={300}   // 👈 size increase
            height={300}
            priority
          />

          {/* 🔥 Centered Text */}
          <div>
            <h1 className="text-xl sm:text-2xl md:text-[30px] font-bold text-[#143a60] tracking-wide">
              Khetan Media Creation Pvt. Ltd.
            </h1>
            
            <p className="text-sm sm:text-base text-[#1c4974] mt-1">
              D – 4, 1st Floor, Sector – 10, Noida, Uttar Pradesh – 201301
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start items-center text-sm sm:text-base text-[#1c4974] mt-1 gap-x-1">
              <span>Web-</span>
              <a 
                href="https://www.kmcliv.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-700 underline underline-offset-2 hover:text-blue-900"
              >
                www.kmcliv.com
              </a>
              <span>, Email-</span>
              <a 
                href="mailto:info@kmcliv.com"
                className="text-blue-700 underline underline-offset-2 hover:text-blue-900"
              >
                info@kmcliv.com
              </a>
            </div>
          </div>
        </div>
        {/* ========================================== */}

        {/* Desktop Buttons (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/profile" className="flex items-center px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-[#143a60] font-bold rounded-xl transition-colors">
            <User className="w-4 h-4 mr-2" />
            Profile
          </Link>
          <Link href="/history" className="flex items-center px-4 py-2.5 bg-[#143a60] hover:bg-[#1c4974] text-white font-bold rounded-xl transition-colors shadow-sm">
            <FileText className="w-4 h-4 mr-2" />
            History
          </Link>
        </div>

      </div>

      {/* Mobile Hamburger Menu Icon (Hidden on Desktop) */}
      <button 
        className="md:hidden absolute top-4 right-4 p-2 text-[#143a60] bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
        onClick={() => setIsMobileMenuOpen(true)}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Divider */}
      <div className="w-full h-[2px] bg-[#3b719f] mt-5"></div>

      {/* Mobile Sidebar Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end md:hidden">
          {/* Blurred Background Overlay */}
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          {/* Sidebar Menu */}
          <div className="relative w-64 h-full bg-white shadow-2xl flex flex-col transform transition-transform">
            <div className="p-5 flex justify-between items-center border-b border-slate-100">
              <span className="font-black text-[#143a60]">Menu</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 flex flex-col gap-3">
              <Link 
                href="/profile" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center px-4 py-3 bg-slate-50 hover:bg-slate-100 text-[#143a60] font-bold rounded-xl transition-colors"
              >
                <User className="w-5 h-5 mr-3 text-[#3b719f]" />
                My Profile
              </Link>
              <Link 
                href="/history" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center px-4 py-3 bg-slate-50 hover:bg-slate-100 text-[#143a60] font-bold rounded-xl transition-colors"
              >
                <FileText className="w-5 h-5 mr-3 text-[#3b719f]" />
                Travel Records
              </Link>
            </div>
          </div>
        </div>
      )}

    </header>
  );
};

export default HomePageHeader;