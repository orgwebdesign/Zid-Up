import { FadeUpSection } from "@/components/animations/FadeUpSection";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { LayoutDashboard, ShoppingCart, ListOrdered, Wallet, CreditCard, LifeBuoy, Bell, User } from "lucide-react";

export function DashboardMockup() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-[#0a0c14]">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-full bg-gradient-to-b from-primary/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <FadeUpSection className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-h2 font-heading font-bold text-white mb-4">
            You have full control
          </h2>
          <p className="text-text-soft text-lg">
            Everything is accessible from a clean, lightning-fast dashboard built specifically for power users and resellers.
          </p>
        </FadeUpSection>

        <FadeUpSection>
          {/* Browser Frame */}
          <div className="rounded-[2rem] border border-white/10 bg-[#06070B] overflow-hidden shadow-2xl shadow-primary/10">
            
            {/* Topbar of Browser */}
            <div className="flex items-center gap-2 px-6 py-4 bg-[#0a0c14] border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 text-center">
                <div className="inline-block bg-white/5 border border-white/5 rounded-md px-4 py-1 text-xs text-text-muted font-mono">
                  app.zidup.com/dashboard
                </div>
              </div>
            </div>

            {/* Dashboard Layout Layout */}
            <div className="flex h-[600px] bg-[#06070B]">
              
              {/* Sidebar */}
              <div className="hidden md:flex w-64 border-r border-white/5 flex-col p-4 bg-[#0a0c14]/50">
                <div className="flex items-center gap-2 px-2 py-4 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center font-bold text-white text-sm">Z</div>
                  <span className="font-heading font-bold text-lg text-white">ZID UP</span>
                </div>
                
                <nav className="flex flex-col gap-1">
                  <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary font-medium">
                    <LayoutDashboard size={18} /> Dashboard
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-soft hover:text-white hover:bg-white/5 transition-colors cursor-pointer">
                    <ShoppingCart size={18} /> New Order
                  </div>
                  <div className="flex items-center justify-between px-3 py-2.5 rounded-lg text-text-soft hover:text-white hover:bg-white/5 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3"><ListOrdered size={18} /> Orders</div>
                    <span className="bg-primary/20 text-primary text-[10px] px-1.5 py-0.5 rounded">3</span>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-soft hover:text-white hover:bg-white/5 transition-colors cursor-pointer">
                    <CreditCard size={18} /> Services
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-soft hover:text-white hover:bg-white/5 transition-colors cursor-pointer">
                    <Wallet size={18} /> Add Funds
                  </div>
                </nav>
                
                <div className="mt-auto">
                  <Card className="p-4 bg-gradient-to-br from-primary/10 to-transparent border-primary/20" glassmorphism={false}>
                    <p className="text-xs text-text-soft mb-1">Current Balance</p>
                    <p className="text-xl font-mono font-bold text-white mb-3">$1,245.50</p>
                    <Button size="sm" className="w-full h-8 text-xs">Top Up</Button>
                  </Card>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Header */}
                <header className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-[#0a0c14]/30">
                  <h3 className="text-lg font-semibold text-white">Overview</h3>
                  <div className="flex items-center gap-4">
                    <button className="text-text-muted hover:text-white relative">
                      <Bell size={20} />
                      <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full" />
                    </button>
                    <div className="w-8 h-8 bg-surface-2 rounded-full border border-white/10 flex items-center justify-center text-text-muted">
                      <User size={16} />
                    </div>
                  </div>
                </header>

                {/* Content */}
                <div className="flex-1 p-6 overflow-y-auto">
                  {/* Stats Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {[{label:"Total Spent", val:"$8,420.00"}, {label:"Orders", val:"1,248"}, {label:"Pending", val:"3"}, {label:"Tickets", val:"0"}].map((stat, i) => (
                      <div key={i} className="bg-surface border border-white/5 rounded-xl p-4">
                        <p className="text-xs text-text-muted mb-1">{stat.label}</p>
                        <p className="text-xl font-mono font-semibold text-white">{stat.val}</p>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* New Order Form Mock */}
                    <div className="lg:col-span-2 bg-surface border border-white/5 rounded-xl p-6">
                      <h4 className="text-white font-medium mb-4">Quick Order</h4>
                      <div className="space-y-4">
                        <div className="h-10 bg-surface-2 border border-white/5 rounded-lg flex items-center px-4 text-sm text-text-muted">
                          Category: Instagram Followers
                        </div>
                        <div className="h-10 bg-surface-2 border border-white/5 rounded-lg flex items-center px-4 text-sm text-text-muted">
                          Service: ID 124 - IG Followers [High Quality] - $0.85/K
                        </div>
                        <div className="h-10 bg-surface-2 border border-white/5 rounded-lg flex items-center px-4 text-sm text-text-muted">
                          Link: https://instagram.com/...
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="h-10 bg-surface-2 border border-white/5 rounded-lg flex items-center px-4 text-sm text-text-muted">
                            Quantity: 5000
                          </div>
                          <div className="h-10 bg-white/5 border border-white/5 rounded-lg flex items-center justify-between px-4 text-sm text-white">
                            <span>Charge:</span>
                            <span className="font-mono text-primary font-bold">$4.25</span>
                          </div>
                        </div>
                        <Button className="w-full mt-2">Submit Order</Button>
                      </div>
                    </div>

                    {/* Support Card Mock */}
                    <div className="bg-surface border border-white/5 rounded-xl p-6 flex flex-col">
                      <h4 className="text-white font-medium mb-4 flex items-center gap-2">
                        <LifeBuoy size={18} className="text-secondary" /> Need help?
                      </h4>
                      <p className="text-sm text-text-soft mb-6">Our support team is available 24/7 to assist you with your orders and account.</p>
                      <div className="mt-auto space-y-3">
                        <Button variant="secondary" className="w-full text-sm h-10">Open Ticket</Button>
                        <Button variant="outline" className="w-full text-sm h-10 border-white/5">Read FAQ</Button>
                      </div>
                    </div>
                  </div>

                  {/* Recent Orders Table */}
                  <div className="mt-6 bg-surface border border-white/5 rounded-xl overflow-hidden">
                    <div className="px-6 py-4 border-b border-white/5">
                      <h4 className="text-white font-medium">Recent Orders</h4>
                    </div>
                    <div className="p-0">
                      <div className="grid grid-cols-6 gap-4 px-6 py-3 border-b border-white/5 bg-surface-2 text-xs font-medium text-text-muted uppercase tracking-wider">
                        <div className="col-span-1">ID</div>
                        <div className="col-span-2">Service</div>
                        <div className="col-span-1">Qty</div>
                        <div className="col-span-1">Status</div>
                        <div className="col-span-1 text-right">Cost</div>
                      </div>
                      {[
                        { id: 9482, srv: "IG Followers HQ", qty: 2500, status: "In Progress", color: "text-blue-400 bg-blue-400/10", cost: "$2.12" },
                        { id: 9481, srv: "TikTok Views Viral", qty: 50000, status: "Completed", color: "text-success bg-success/10", cost: "$0.50" },
                        { id: 9480, srv: "YT Subscribers", qty: 100, status: "Pending", color: "text-warning bg-warning/10", cost: "$1.50" },
                      ].map((order, i) => (
                        <div key={i} className="grid grid-cols-6 gap-4 px-6 py-4 border-b border-white/5 last:border-0 text-sm text-text-soft items-center">
                          <div className="col-span-1 font-mono">{order.id}</div>
                          <div className="col-span-2 text-white truncate">{order.srv}</div>
                          <div className="col-span-1">{order.qty}</div>
                          <div className="col-span-1">
                            <span className={`px-2 py-1 rounded-full text-[10px] font-semibold ${order.color}`}>{order.status}</span>
                          </div>
                          <div className="col-span-1 text-right font-mono">{order.cost}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </FadeUpSection>
      </div>
    </section>
  );
}
