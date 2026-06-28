import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { LifeBuoy } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Spent", val: "$8,420.00", color: "text-white" }, 
          { label: "Total Orders", val: "1,248", color: "text-white" }, 
          { label: "Pending Orders", val: "3", color: "text-warning" }, 
          { label: "Active Tickets", val: "0", color: "text-success" }
        ].map((stat, i) => (
          <div key={i} className="bg-surface border border-white/5 rounded-2xl p-5 shadow-lg shadow-black/20">
            <p className="text-sm text-text-muted mb-1 font-medium">{stat.label}</p>
            <p className={`text-2xl font-mono font-bold ${stat.color}`}>{stat.val}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* New Order Form Widget */}
        <div className="lg:col-span-2 bg-surface border border-white/5 rounded-2xl p-6 shadow-lg shadow-black/20">
          <h3 className="text-lg font-semibold text-white mb-6">Quick New Order</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-soft mb-2">Category</label>
              <select className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary appearance-none">
                <option>Instagram Followers</option>
                <option>TikTok Views</option>
                <option>YouTube Subscribers</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-soft mb-2">Service</label>
              <select className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary appearance-none">
                <option>ID 124 - IG Followers [High Quality] - $0.85/1000</option>
                <option>ID 125 - IG Followers [Real] - $1.20/1000</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-soft mb-2">Link</label>
              <input type="text" placeholder="https://instagram.com/username" className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-text-soft mb-2">Quantity</label>
                <input type="number" placeholder="Min: 100" className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-soft mb-2">Charge</label>
                <div className="w-full bg-surface-2/50 border border-border rounded-xl px-4 py-3 text-primary font-mono font-bold">
                  $0.00
                </div>
              </div>
            </div>
            <Button className="w-full mt-2" size="lg">Submit Order</Button>
          </form>
        </div>

        {/* Support Card */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-primary/20 to-secondary/10 border border-primary/20 rounded-2xl p-6 shadow-lg flex flex-col">
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
              <LifeBuoy size={20} className="text-secondary" /> Need help?
            </h3>
            <p className="text-sm text-text-soft mb-6">Our support team is available 24/7 to assist you with your orders and account.</p>
            <div className="mt-auto space-y-3">
              <Link href="/dashboard/tickets">
                <Button variant="secondary" className="w-full justify-center bg-surface border-white/10 hover:bg-surface-2 text-white">Open Ticket</Button>
              </Link>
            </div>
          </div>
          
          <div className="bg-surface border border-white/5 rounded-2xl p-6 shadow-lg">
            <h3 className="text-md font-semibold text-white mb-4">News & Updates</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-3">
                <p className="text-xs text-primary font-mono mb-1">Today</p>
                <p className="text-sm text-text-soft">New Instagram Real Followers services added. Prices dropped by 10%.</p>
              </div>
              <div className="border-l-2 border-text-muted pl-3">
                <p className="text-xs text-text-muted font-mono mb-1">Yesterday</p>
                <p className="text-sm text-text-soft">TikTok views are currently experiencing minor delays. ETA 2 hours.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="bg-surface border border-white/5 rounded-2xl overflow-hidden shadow-lg shadow-black/20">
        <div className="px-6 py-5 border-b border-white/5 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Recent Orders</h3>
          <Link href="/dashboard/orders" className="text-sm text-primary hover:text-white transition-colors font-medium">View All</Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-surface-2 text-xs text-text-muted uppercase font-medium border-b border-white/5">
              <tr>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Service</th>
                <th className="px-6 py-4">Link</th>
                <th className="px-6 py-4">Quantity</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { id: 9482, srv: "IG Followers HQ", link: "instagram.com/user", qty: 2500, status: "In Progress", color: "text-blue-400 bg-blue-400/10", cost: "$2.12" },
                { id: 9481, srv: "TikTok Views Viral", link: "tiktok.com/@user/v...", qty: 50000, status: "Completed", color: "text-success bg-success/10", cost: "$0.50" },
                { id: 9480, srv: "YT Subscribers", link: "youtube.com/c/user", qty: 100, status: "Pending", color: "text-warning bg-warning/10", cost: "$1.50" },
                { id: 9479, srv: "FB Post Likes", link: "facebook.com/p...", qty: 500, status: "Completed", color: "text-success bg-success/10", cost: "$0.25" },
              ].map((order, i) => (
                <tr key={i} className="hover:bg-surface-2/50 transition-colors">
                  <td className="px-6 py-4 font-mono text-text-muted">{order.id}</td>
                  <td className="px-6 py-4 text-white font-medium whitespace-nowrap">{order.srv}</td>
                  <td className="px-6 py-4 text-primary truncate max-w-[150px]">{order.link}</td>
                  <td className="px-6 py-4 text-text-soft">{order.qty}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide ${order.color}`}>{order.status}</span>
                  </td>
                  <td className="px-6 py-4 text-right font-mono font-medium text-white">{order.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
