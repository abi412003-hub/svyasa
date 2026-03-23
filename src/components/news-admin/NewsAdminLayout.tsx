import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { LayoutDashboard, Newspaper, Calendar, Upload, Download, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/news-admin" },
  { label: "News", icon: Newspaper, path: "/news-admin/news" },
  { label: "Events", icon: Calendar, path: "/news-admin/events" },
  { label: "Bulk Import", icon: Upload, path: "/news-admin/import" },
  { label: "Export", icon: Download, path: "/news-admin/export" },
];

export default function NewsAdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/news-admin") return location.pathname === "/news-admin";
    return location.pathname.startsWith(path);
  };

  const sidebar = (
    <div className="flex flex-col h-full bg-[#1e3a5f] text-white w-64">
      <div className="p-5 border-b border-white/10">
        <h1 className="text-lg font-bold tracking-wide">S-VYASA</h1>
        <p className="text-xs text-white/60">News & Events Admin</p>
      </div>
      <nav className="flex-1 py-4 space-y-1 px-3">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => setSidebarOpen(false)}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
              isActive(item.path)
                ? "bg-[#2d5a8e] text-white"
                : "text-white/70 hover:bg-white/10 hover:text-white"
            )}
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-white/10">
        <p className="text-[10px] text-white/40 text-center">S-VYASA University</p>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-[#f8fafc]">
      {/* Desktop sidebar */}
      <div className="hidden md:block shrink-0">{sidebar}</div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <div className="relative z-10 h-full w-64">{sidebar}</div>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-14 border-b bg-white flex items-center px-4 shrink-0 md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(true)}>
            <Menu className="w-5 h-5" />
          </Button>
          <span className="ml-2 font-semibold text-[#1e3a5f]">News & Events Admin</span>
        </header>
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
