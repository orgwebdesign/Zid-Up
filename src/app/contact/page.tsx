import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { MessageSquare, Mail, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 relative overflow-hidden bg-background">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[600px] bg-secondary/10 blur-[150px] pointer-events-none rounded-full" />
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-h1 font-heading font-extrabold text-white mb-6">Contact Us</h1>
            <p className="text-text-soft text-lg max-w-2xl mx-auto">
              Our team is available 24/7. Reach out anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {[
              { icon: MessageSquare, title: "WhatsApp", desc: "Fastest response", detail: "+212 656-268002", action: "Chat Now", href: "https://wa.me/212656268002" },
              { icon: Mail, title: "Email", desc: "Get a reply within 24h", detail: "support@zidup.com", action: "Send Email", href: "mailto:support@zidup.com" },
              { icon: Clock, title: "Live Chat", desc: "Available on dashboard", detail: "24/7 Support", action: "Open Dashboard", href: "/dashboard" },
            ].map((item, i) => (
              <Card key={i} className="p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-5">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-text-muted mb-1">{item.desc}</p>
                <p className="text-sm text-text-soft font-medium mb-4">{item.detail}</p>
                <a href={item.href} target="_blank" rel="noreferrer">
                  <Button variant="secondary" size="sm">{item.action}</Button>
                </a>
              </Card>
            ))}
          </div>

          <Card className="max-w-2xl mx-auto p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white font-heading mb-6">Send us a message</h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-soft mb-2">Name</label>
                  <input type="text" className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-soft mb-2">Email</label>
                  <input type="email" className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary" placeholder="name@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-soft mb-2">Subject</label>
                <input type="text" className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary" placeholder="How can we help?" />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-soft mb-2">Message</label>
                <textarea rows={5} className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary resize-none" placeholder="Tell us more about your inquiry..." />
              </div>
              <Button className="w-full" size="lg">
                <Send size={18} className="mr-2" /> Send Message
              </Button>
            </form>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
