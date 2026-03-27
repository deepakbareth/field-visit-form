'use client';
import React from 'react';
import Image from 'next/image';
import NMF_logo from './../../public/NMF_logo.png';

const Header = () => {
  return (
    <header className="w-full max-w-7xl mx-auto px-2 py-1 font-sans mb-10">
      
      <div className="flex flex-col md:flex-row items-center text-center gap-2">

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
          
          <div className="flex flex-wrap justify-center items-center text-sm sm:text-base text-[#1c4974] mt-1 gap-x-1">
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

      {/* Divider */}
      <div className="w-full h-[2px] bg-[#3b719f] mt-3"></div>

    </header>
  );
};

export default Header;