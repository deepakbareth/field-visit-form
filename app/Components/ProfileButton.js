import Link from "next/link";

export function ProfileButton() {
  return (
    <Link
      href="/profile"
      className="flex items-center gap-3 p-1 pr-4 text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-full transition-all shadow-sm hover:shadow cursor-pointer"
    >
      <div className="w-8 h-8 flex items-center justify-center bg-[#143a60] text-white rounded-full">
        {/* Generic User Icon instead of text */}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>
      Profile
    </Link>
  );
}