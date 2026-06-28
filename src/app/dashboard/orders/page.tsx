import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Package, ArrowLeft } from "lucide-react";

export default function OrdersPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white font-heading">All Orders</h1>
        <Link href="/dashboard/new-order">
          <Button size="sm">+ New Order</Button>
        </Link>
      </div>

      <Card className="overflow-hidden">
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
                { id: 9481, srv: "TikTok Views Viral", link: "tiktok.com/@user/v", qty: 50000, status: "Completed", color: "text-success bg-success/10", cost: "$0.50" },
              ].map((order, i) => (
                <tr key={i} className="hover:bg-surface-2/50 transition-colors">
                  <td className="px-6 py-4 font-mono text-text-muted">{order.id}</td>
                  <td className="px-6 py-4 text-white font-medium">{order.srv}</td>
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
      </Card>
    </div>
  );
}
