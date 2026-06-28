import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeUpSection } from "@/components/animations/FadeUpSection";

export const metadata: Metadata = {
  title: "API Documentation — ZID UP",
  description: "Integrate ZID UP services directly into your platform. REST API for automated ordering, webhook notifications, and SDK examples.",
};
import { Card } from "@/components/ui/Card";
import { Code, Key, Zap, Server } from "lucide-react";

export default function ApiDocsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col pt-32 pb-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[600px] bg-primary/10 blur-[150px] pointer-events-none rounded-full" />
        <section className="py-12 md:py-20 bg-background relative z-10">
          <div className="container-custom">
            <FadeUpSection className="text-center mb-16">
              <h1 className="text-h1 font-heading font-extrabold text-white mb-6">API Documentation</h1>
              <p className="text-text-soft text-lg max-w-2xl mx-auto">
                Integrate ZID UP services directly into your platform.
              </p>
            </FadeUpSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { icon: Key, title: "API Key", desc: "Generate and manage your API keys for authentication." },
                { icon: Zap, title: "Instant Orders", desc: "Place orders programmatically with a single POST request." },
                { icon: Server, title: "Webhook Notifications", desc: "Receive real-time updates when orders change status." },
                { icon: Code, title: "SDK & Examples", desc: "Ready-to-use code snippets in Python, PHP, Node.js." },
              ].map((item, i) => (
                <Card key={i} className="p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-text-muted">{item.desc}</p>
                </Card>
              ))}
            </div>

            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-white font-heading mb-4">Quick Start</h2>
              <pre className="bg-surface-2 border border-white/5 rounded-xl p-6 overflow-x-auto text-sm text-text-soft font-mono">
                <code>{`POST /api/v1/order
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "service_id": 124,
  "link": "https://instagram.com/username",
  "quantity": 1000
}`}</code>
              </pre>
              <p className="text-text-muted text-sm mt-4">
                API access is available for verified resellers. Contact support to request your API key.
              </p>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
