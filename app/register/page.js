'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Register() {
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        name: '', email: '', password: '', empId: '', dept: '', desig: '', phone: ''
    });
    const router = useRouter();

    // 🔥 Robust ID Generation Logic
    const generateID = (nameValue) => {
        const cleanName = nameValue.trim().replace(/\s/g, '');
        if (cleanName.length >= 2) {
            const length = cleanName.length;
            const firstChar = cleanName[0].toUpperCase();
            const secondChar = cleanName[1].toUpperCase();
            return `EMP${length}${firstChar}${secondChar}`;
        }
        return '';
    };

    // Sync ID whenever name changes (Standard)
    useEffect(() => {
        setFormData(prev => ({ ...prev, empId: generateID(prev.name) }));
    }, [formData.name]);

    // Handle Input Changes & Force Sync for Autofill
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleRegister = (e) => {
        e.preventDefault();
        setError
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        if (users.some(u => u.email === formData.email)) {
            setError('Email already registered. Please use a different email or login.');
            return;
        }
        users.push(formData);
        localStorage.setItem('users', JSON.stringify(users));
        alert(`Registration Successful! ID: ${formData.empId}`);
        router.push('/');
    };

    const labelStyle = "block text-xs font-bold uppercase text-slate-500 mb-1 ml-1";
    const inputStyle = "w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-800 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 outline-none transition-all";

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#C5BAC4] via-[#7E919F] to-[#57707A] py-12 px-4">
            <div className="max-w-xl w-full">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-black text-slate-900 tracking-tight">Create Account</h2>
                    <p className="text-slate-900 mt-2 font-medium">System will auto-generate your Employee ID</p>
                </div>

                <form onSubmit={handleRegister} className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 space-y-5">

                    {error && (
                        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg animate-in fade-in slide-in-from-top-2 duration-300">
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                <p className="text-sm text-red-700 font-semibold">{error}</p>
                            </div>
                        </div>
                    )}


                    {/* Full Name - triggers ID generation */}
                    <div>
                        <label className={labelStyle}>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            required
                            autoComplete="name"
                            className={inputStyle}
                            value={formData.name}
                            onChange={handleInputChange}
                            onBlur={handleInputChange} // 👈 Critical for catching Autofill
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* System ID Field */}
                        <div className="relative">
                            <label className={labelStyle}>Generated Employee ID</label>
                            <input
                                type="text"
                                value={formData.empId}
                                readOnly
                                placeholder="EMP..."
                                className="w-full px-4 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-blue-600 font-mono font-bold cursor-not-allowed"
                            />
                            {/* Manual Refresh Icon (Just in case autofill is stubborn) */}
                            <div className="absolute right-3 top-8 text-slate-300">
                                <svg className={`w-5 h-5 ${formData.empId ? 'text-emerald-500' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>

                        <div>
                            <label className={labelStyle}>Department</label>
                            <input name="dept" type="text" placeholder="e.g. IT" required className={inputStyle} onChange={handleInputChange} />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className={labelStyle}>Designation</label>
                            <input name="desig" type="text" placeholder="Manager" required className={inputStyle} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label className={labelStyle}>Phone Number</label>
                            <input name="phone" type="tel" placeholder="Number" required className={inputStyle} onChange={handleInputChange} />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className={labelStyle}>Email Address</label>
                            <input name="email" type="email" placeholder="name@company.com" required className={inputStyle} onChange={handleInputChange} onBlur={handleInputChange} />
                        </div>
                        <div>
                            <label className={labelStyle}>Password</label>
                            <input name="password" type="password" placeholder="••••••••" required className={inputStyle} onChange={handleInputChange} />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={!formData.empId}
                        className={`w-full py-4 rounded-2xl font-bold shadow-lg transition-all mt-4 text-white
              ${formData.empId ? 'bg-blue-600 hover:bg-blue-700 active:scale-95' : 'bg-slate-300 cursor-not-allowed'}`}
                    >
                        {formData.empId ? 'Complete Registration' : 'Please Enter Full Name'}
                    </button>

                    <p className="text-center text-sm text-slate-500">
                        Already registered? <Link href="/login" className="text-blue-600 font-bold hover:underline">Sign In</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}