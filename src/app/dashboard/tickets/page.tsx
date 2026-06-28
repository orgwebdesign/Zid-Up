import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { LifeBuoy, Plus, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function TicketsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white font-heading">Support Tickets</h1>
        <Button size="sm">
          <Plus size={16} className="mr-2" /> New Ticket
        </Button>
      </div>

      <Card className="p-12 text-center">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
          <MessageSquare size={32} />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">No open tickets</h3>
        <p className="text-text-muted mb-6">All your support tickets will appear here.</p>
        <Link href="/dashboard">
          <Button variant="secondary">Back to Dashboard</Button>
        </Link>
      </Card>
    </div>
  );
}
