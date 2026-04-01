"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="group flex items-center gap-2 px-3 py-2 text-sm font-bold text-slate-600 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
    >
      <div className="p-0.5 bg-slate-100 group-hover:bg-slate-200 rounded-md transition-colors duration-300">
        <ArrowLeft className="w-4 h-4 text-slate-500 group-hover:text-slate-800 transition-colors duration-300" />
      </div>
      Back
    </button>
  );
}