"use client";

import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function NewOrderPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-white font-heading">New Order</h1>

      <Card className="p-6 md:p-8">
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-text-soft mb-2">Category</label>
            <select className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary appearance-none">
              <option>Instagram Followers</option>
              <option>TikTok Views</option>
              <option>YouTube Subscribers</option>
              <option>Facebook Page Likes</option>
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
              <div className="w-full bg-surface-2/50 border border-border rounded-xl px-4 py-3 text-primary font-mono font-bold">$0.00</div>
            </div>
          </div>
          <Button className="w-full" size="lg">Submit Order</Button>
        </form>
      </Card>
    </div>
  );
}
