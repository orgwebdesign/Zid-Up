"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, ShoppingCart, ListOrdered, Wallet, CreditCard, 
  LifeBuoy, Bell, User, Settings, LogOut, Menu, X, Users
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "New Order", href: "/dashboard/new-order", icon: ShoppingCart },
  { name: "Orders", href: "/dashboard/orders", icon: ListOrdered },
  { name: "Services", href: "/dashboard/services", icon: CreditCard },
  { name: "Add Funds", href: "/dashboard/add-funds", icon: Wallet },
  { name: "Tickets", href: "/dashboard/tickets", icon: LifeBuoy },
  { name: "Affiliates", href: "/dashboard/affiliates", icon: Users },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const SidebarContent = () => (
    <>
      <Link href="/" className="flex items-center gap-2 px-2 py-4 mb-4">
        <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center font-bold text-white text-sm">Z</div>
        <span className="font-heading font-bold text-lg text-white">ZID UP</span>
      </Link>
      
      <nav className="flex flex-col gap-1 flex-1">
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link 
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-medium",
                isActive 
                  ? "bg-primary/10 text-primary" 
                  : "text-text-soft hover:text-white hover:bg-white/5"
              )}
            >
              <link.icon size={18} /> {link.name}
            </Link>
          );
        })}
      </nav>
      
      <div className="mt-8 space-y-4">
        <Card className="p-4 bg-gradient-to-br from-primary/10 to-transparent border-primary/20" glassmorphism={false}>
          <p className="text-xs text-text-soft mb-1">Current Balance</p>
          <p className="text-xl font-mono font-bold text-white mb-3">$1,245.50</p>
          <Link href="/dashboard/add-funds">
            <Button size="sm" className="w-full h-8 text-xs">Top Up</Button>
          </Link>
        </Card>

        <Link href="/login" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-soft hover:text-danger hover:bg-danger/10 transition-colors font-medium">
          <LogOut size={18} /> Logout
        </Link>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-[#0a0c14] flex">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 border-r border-white/5 flex-col p-4 bg-surface/30 sticky top-0 h-screen overflow-y-auto">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar Overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <aside className="relative w-64 h-full bg-surface border-r border-white/5 flex flex-col p-4 shadow-2xl z-50">
            <button className="absolute top-4 right-4 text-text-soft" onClick={() => setMobileOpen(false)}>
              <X size={20} />
            </button>
            <SidebarContent />
          </aside>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-16 border-b border-white/5 flex items-center justify-between px-4 md:px-8 bg-surface/30 sticky top-0 z-30 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <button className="md:hidden text-text-soft hover:text-white" onClick={() => setMobileOpen(true)}>
              <Menu size={24} />
            </button>
            <h2 className="text-lg font-semibold text-white hidden sm:block">
              {sidebarLinks.find(l => l.href === pathname)?.name || "Dashboard"}
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
            <Link href="/dashboard/add-funds" className="hidden sm:flex text-sm font-medium bg-primary/20 text-primary px-3 py-1.5 rounded-full hover:bg-primary/30 transition-colors">
              + Add Funds
            </Link>
            <button className="text-text-muted hover:text-white relative">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full" />
            </button>
            <Link href="/dashboard/settings" className="w-8 h-8 bg-surface-2 rounded-full border border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:border-white/20 transition-colors">
              <User size={16} />
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-8 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
