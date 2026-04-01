import Link from "next/link";


export function ViewHistory(){
    return(
        <>
           <Link 
              href="/history" 
              className="flex items-center gap-3 p-2 pr-4 text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-full transition-all shadow-sm hover:shadow cursor-pointer"
    >
              <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>History</span>
              
            </Link>
        </>
    )
}