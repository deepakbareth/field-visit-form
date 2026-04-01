import { LogOut } from 'lucide-react';

export function LogoutButton({ handleLogout }) {
  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-bold text-red-600 bg-red-50 hover:bg-red-100 rounded-xl transition-all border border-red-100 shadow-sm"
    >
      <LogOut className="w-4 h-4" />
      Logout
    </button>
  );
}