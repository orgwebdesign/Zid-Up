"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { 
  Save, AlertCircle, TrendingUp, RefreshCw, 
  Camera, Music2, Video, Users, LogOut, Search, Activity,
  Trash2, Undo2, Percent
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type ServicePricing = {
  costPrice: number;
  sellingPrice: number;
  name: string;
  speed: string;
  guarantee?: string;
  baseQuantity?: number;
};

type PlatformPricing = {
  [serviceName: string]: ServicePricing;
};

type PricingData = {
  [platform: string]: PlatformPricing;
};

const PLATFORM_ICONS: Record<string, any> = {
  instagram: Camera,
  tiktok: Music2,
  youtube: Video,
  facebook: Users
};

const PLATFORM_COLORS: Record<string, string> = {
  instagram: "from-pink-500 to-purple-500 text-pink-500",
  tiktok: "from-cyan-400 to-blue-500 text-cyan-400",
  youtube: "from-red-500 to-red-600 text-red-500",
  facebook: "from-blue-500 to-blue-700 text-blue-500"
};

export default function AdminDashboard() {
  const [pricingData, setPricingData] = useState<PricingData | null>(null);
  const [originalData, setOriginalData] = useState<PricingData | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [activeTab, setActiveTab] = useState<string>("instagram");
  const [searchQuery, setSearchQuery] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [bulkPercent, setBulkPercent] = useState("");
  const [confirmAction, setConfirmAction] = useState<() => void>(() => {});
  const [confirmText, setConfirmText] = useState("");
  const hasChanges = useRef(false);

  useEffect(() => {
    fetchPricing();
  }, []);

  useEffect(() => {
    if (pricingData && originalData) {
      hasChanges.current = JSON.stringify(pricingData) !== JSON.stringify(originalData);
    }
  }, [pricingData, originalData]);

  const fetchPricing = async () => {
    try {
      const res = await fetch("/api/pricing");
      if (res.ok) {
        const data = await res.json();
        setPricingData(JSON.parse(JSON.stringify(data)));
        setOriginalData(JSON.parse(JSON.stringify(data)));
        if (data && Object.keys(data).length > 0) {
          setActiveTab(Object.keys(data)[0]);
        }
      }
    } catch (error) {
      console.error("Failed to fetch pricing:", error);
      setMessage({ text: "Failed to load pricing data. Is the server running?", type: "error" });
    }
  };

  const clampPositive = (val: number) => Math.max(0, val);

  const handlePriceChange = (platform: string, service: string, field: "costPrice" | "sellingPrice" | "baseQuantity", value: string) => {
    if (!pricingData) return;
    const numValue = value === "" ? 0 : parseFloat(value);
    if (isNaN(numValue)) return;
    const clamped = field === "baseQuantity" ? Math.max(1, Math.round(numValue)) : clampPositive(numValue);
    
    setPricingData({
      ...pricingData,
      [platform]: {
        ...pricingData[platform],
        [service]: {
          ...pricingData[platform][service],
          [field]: clamped
        }
      }
    });
  };

  const handleDeleteService = (platform: string, serviceKey: string) => {
    if (!pricingData) return;
    const { [serviceKey]: _, ...rest } = pricingData[platform];
    setPricingData({
      ...pricingData,
      [platform]: rest
    });
  };

  const handleBulkUpdate = (field: "costPrice" | "sellingPrice", percent: number) => {
    if (!pricingData || !activeTab) return;
    const updated = { ...pricingData };
    const platform = updated[activeTab];
    if (!platform) return;
    
    const newPlatform: PlatformPricing = {};
    for (const [key, service] of Object.entries(platform)) {
      newPlatform[key] = {
        ...service,
        [field]: clampPositive(service[field] * (1 + percent / 100))
      };
    }
    updated[activeTab] = newPlatform;
    setPricingData(updated);
    setBulkPercent("");
  };

  const confirmAndSave = () => {
    setConfirmText("Are you sure you want to publish these changes? This will overwrite the live pricing data.");
    setConfirmAction(() => async () => {
      await savePricing();
    });
    setShowConfirm(true);
  };

  const confirmAndDelete = (platform: string, key: string) => {
    setConfirmText(`Delete "${pricingData?.[platform]?.[key]?.name}"? This cannot be undone.`);
    setConfirmAction(() => () => {
      handleDeleteService(platform, key);
    });
    setShowConfirm(true);
  };

  const confirmBulkUpdate = (field: "costPrice" | "sellingPrice") => {
    const pct = parseFloat(bulkPercent);
    if (isNaN(pct) || pct === 0) return;
    const label = field === "costPrice" ? "Cost" : "Selling";
    setConfirmText(`Apply ${pct > 0 ? "+" : ""}${pct}% to all ${label} prices for ${activeTab}?`);
    setConfirmAction(() => () => {
      handleBulkUpdate(field, pct);
    });
    setShowConfirm(true);
  };

  const savePricing = async () => {
    if (!pricingData) return;
    setIsSaving(true);
    setMessage({ text: "", type: "" });

    try {
      const res = await fetch("/api/pricing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pricingData),
      });

      if (res.ok) {
        setOriginalData(JSON.parse(JSON.stringify(pricingData)));
        hasChanges.current = false;
        setMessage({ text: "Pricing successfully synchronized with live site! 🚀", type: "success" });
        setTimeout(() => setMessage({ text: "", type: "" }), 4000);
      } else {
        setMessage({ text: "Failed to save pricing.", type: "error" });
      }
    } catch (error) {
      setMessage({ text: "An error occurred while saving.", type: "error" });
    } finally {
      setIsSaving(false);
    }
  };

  const discardChanges = () => {
    if (originalData) {
      setPricingData(JSON.parse(JSON.stringify(originalData)));
      hasChanges.current = false;
      setMessage({ text: "Changes discarded. Reset to last published version.", type: "success" });
      setTimeout(() => setMessage({ text: "", type: "" }), 3000);
    }
  };

  if (!pricingData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#05050A]">
        <div className="flex flex-col items-center gap-4">
          <RefreshCw size={40} className="animate-spin text-primary" />
          <p className="text-text-muted font-medium animate-pulse">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  // Filter services by search
  const currentServices = Object.entries(pricingData[activeTab] || {}).filter(([key, service]) => 
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#05050A] text-white selection:bg-primary/30 relative overflow-x-hidden font-sans">
      {/* Dynamic Background Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Admin Header */}
      <header className="sticky top-0 z-50 bg-[#05050A]/80 backdrop-blur-2xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
        <div className="container-custom mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-4 group">
              <Image 
                src="/image/logo boostvib.svg" 
                width={160}
                height={40}
                alt="BoostVib Growt Logo" 
                priority
                className="h-10 w-auto object-contain group-hover:opacity-80 transition-opacity"
              />
              <div className="h-6 w-px bg-white/20"></div>
              <p className="text-xs text-primary font-bold tracking-widest uppercase mt-0.5">Admin Panel</p>
            </Link>
          </div>
          
          <div className="flex items-center gap-3">
            {hasChanges.current && (
              <Button
                onClick={discardChanges}
                variant="ghost"
                size="sm"
                className="text-text-muted hover:text-red-400"
              >
                <Undo2 size={16} className="mr-1.5" /> Discard
              </Button>
            )}
            <Link href="/" target="_blank" className="text-sm font-medium text-text-muted hover:text-white transition-colors flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/5">
              Live Site <LogOut size={14} className="rotate-[-45deg]" />
            </Link>
            <Button 
              onClick={confirmAndSave}
              disabled={isSaving || !hasChanges.current}
              className="bg-white text-black hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.2)] px-6 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 disabled:opacity-40 disabled:hover:scale-100"
            >
              {isSaving ? <RefreshCw className="animate-spin mr-2" size={18} /> : <Save className="mr-2" size={18} />}
              {isSaving ? "Publishing..." : "Publish Changes"}
            </Button>
          </div>
        </div>
      </header>

      <main className="container-custom mx-auto px-4 py-12 relative z-10 max-w-7xl">
        
        {message.text && (
          <div className={cn(
            "p-5 rounded-2xl mb-8 flex items-center gap-4 border shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-top-4",
            message.type === "success" 
              ? "bg-success/10 border-success/30 text-success-light" 
              : "bg-red-500/10 border-red-500/30 text-red-200"
          )}>
            <div className={cn("p-2 rounded-full", message.type === "success" ? "bg-success/20" : "bg-red-500/20")}>
              <AlertCircle size={24} className={message.type === "success" ? "text-success" : "text-red-400"} />
            </div>
            <p className="font-semibold text-lg">{message.text}</p>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left Sidebar */}
          <div className="w-full lg:w-72 shrink-0 space-y-6">
            
            {/* Navigation Cards */}
            <div className="flex flex-col gap-3">
              {Object.keys(pricingData).map((platform) => {
                const Icon = PLATFORM_ICONS[platform] || Activity;
                const isActive = activeTab === platform;
                
                return (
                  <button
                    key={platform}
                    onClick={() => setActiveTab(platform)}
                    className={cn(
                      "flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 relative overflow-hidden group text-left",
                      isActive 
                        ? "bg-surface border-white/10 shadow-xl" 
                        : "hover:bg-white/5 border-transparent opacity-70 hover:opacity-100"
                    )}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-purple-500 rounded-r-full shadow-[0_0_10px_rgba(124,58,237,0.5)]" />
                    )}
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                      isActive ? `bg-gradient-to-br ${PLATFORM_COLORS[platform]} bg-opacity-20` : "bg-white/5 text-text-muted group-hover:bg-white/10 group-hover:text-white"
                    )}>
                      <Icon size={20} className={isActive ? "text-white" : ""} />
                    </div>
                    <div>
                      <h3 className={cn("font-bold capitalize text-base", isActive ? "text-white" : "text-text-soft")}>{platform}</h3>
                      <p className="text-xs text-text-muted mt-0.5">{Object.keys(pricingData[platform]).length} Services</p>
                    </div>
                  </button>
                );
              })}
            </div>
            
            {/* Info Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-surface to-surface/50 border border-white/5 relative overflow-hidden group">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/20 blur-2xl rounded-full group-hover:bg-primary/30 transition-colors" />
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-4">
                <TrendingUp size={20} />
              </div>
              <h3 className="font-bold text-white mb-2 text-lg">Profit Margin</h3>
              <p className="text-sm text-text-soft leading-relaxed">
                We automatically calculate your margin. Aim for at least <span className="text-success font-bold">50% margin</span> on smaller services for optimal growth.
              </p>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 w-full space-y-6">
            
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 bg-surface/30 border border-white/5 rounded-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3 px-3 py-1">
                <div className={cn(`w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br ${PLATFORM_COLORS[activeTab]} shadow-lg`)}>
                  {(() => {
                    const Icon = PLATFORM_ICONS[activeTab] || Activity;
                    return <Icon size={16} className="text-white" />;
                  })()}
                </div>
                <h2 className="text-xl font-bold capitalize text-white tracking-wide">{activeTab} Pricing</h2>
              </div>
              
              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                <div className="flex items-center gap-1 bg-black/30 rounded-xl px-3 py-1.5 border border-white/5">
                  <Percent size={14} className="text-text-muted" />
                  <input
                    type="number"
                    value={bulkPercent}
                    onChange={(e) => setBulkPercent(e.target.value)}
                    placeholder="%"
                    className="w-14 bg-transparent text-sm text-white placeholder-text-muted outline-none border-none [appearance:textfield]"
                  />
                </div>
                <button
                  onClick={() => confirmBulkUpdate("costPrice")}
                  className="text-xs px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-text-soft hover:text-white transition-colors font-medium"
                >
                  Cost
                </button>
                <button
                  onClick={() => confirmBulkUpdate("sellingPrice")}
                  className="text-xs px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-text-soft hover:text-white transition-colors font-medium"
                >
                  Sell
                </button>
                <div className="w-px h-6 bg-white/10 mx-1" />
                <div className="relative w-full sm:w-52">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" size={16} />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl py-2 pl-9 pr-3 text-sm text-white placeholder:text-text-muted focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Pricing Table Card */}
            <div className="bg-surface/40 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr className="border-b border-white/5 bg-black/20">
                      <th className="px-6 py-5 font-semibold text-text-muted text-sm min-w-[200px]">Service Details</th>
                      <th className="px-6 py-5 font-semibold text-text-muted text-sm min-w-[130px]">Base Qty</th>
                      <th className="px-6 py-5 font-semibold text-text-muted text-sm min-w-[150px]">Peakerr Cost <span className="font-normal text-xs opacity-70">(Your Buy)</span></th>
                      <th className="px-6 py-5 font-semibold text-text-muted text-sm min-w-[150px]">BoostVib Growt Price <span className="font-normal text-xs opacity-70">(Your Sell)</span></th>
                      <th className="px-6 py-5 font-semibold text-text-muted text-sm min-w-[140px]">Guarantee</th>
                      <th className="px-6 py-5 font-semibold text-text-muted text-sm text-right min-w-[160px]">Net Profit & Margin</th>
                      <th className="px-2 py-5 w-10"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {currentServices.length > 0 ? currentServices.map(([serviceKey, service]) => {
                      const baseQty = service.baseQuantity || 1000;
                      const costPer1000 = service.costPrice;
                      const sellPer1000 = service.sellingPrice;
                      
                      const actualCost = (costPer1000 / 1000) * baseQty;
                      const actualSell = (sellPer1000 / 1000) * baseQty;
                      
                      const profit = actualSell - actualCost;
                      const margin = actualSell > 0 ? ((profit / actualSell) * 100).toFixed(0) : 0;
                      const isProfitable = profit > 0;

                      return (
                        <tr key={serviceKey} className="hover:bg-white/[0.02] transition-colors group">
                          <td className="px-6 py-5">
                            <p className="font-bold text-white mb-1 group-hover:text-primary transition-colors">{service.name}</p>
                            <div className="flex items-center gap-2">
                              <Badge variant="glass" className="text-[10px] uppercase tracking-wider text-text-muted border-white/10">
                                {service.speed}
                              </Badge>
                            </div>
                          </td>
                          <td className="px-4 py-5">
                            <input 
                              type="number" 
                              value={service.baseQuantity || 1000}
                              onChange={(e) => handlePriceChange(activeTab, serviceKey, "baseQuantity" as any, e.target.value)}
                              className="w-full min-w-[90px] bg-black/30 border border-white/5 rounded-xl py-3 px-4 text-white font-medium focus:border-text-muted focus:ring-1 focus:ring-white/20 outline-none transition-all group-hover/input:bg-black/50"
                              min="1"
                            />
                          </td>
                          <td className="px-4 py-5">
                            <div className="relative group/input flex items-center">
                              <span className="absolute left-3 font-semibold text-text-muted text-xs pointer-events-none">MAD</span>
                              <input 
                                type="number" 
                                value={service.costPrice === 0 ? "" : service.costPrice}
                                onChange={(e) => handlePriceChange(activeTab, serviceKey, "costPrice", e.target.value)}
                                className="w-full min-w-[100px] bg-black/30 border border-white/5 rounded-xl py-3 pl-12 pr-2 text-white font-medium focus:border-text-muted focus:ring-1 focus:ring-white/20 outline-none transition-all group-hover/input:bg-black/50"
                                min="0"
                                step="0.01"
                              />
                            </div>
                          </td>
                          <td className="px-4 py-5">
                            <div className="relative group/input flex items-center">
                              <span className="absolute left-3 font-semibold text-primary text-xs pointer-events-none">MAD</span>
                              <input 
                                type="number" 
                                value={service.sellingPrice === 0 ? "" : service.sellingPrice}
                                onChange={(e) => handlePriceChange(activeTab, serviceKey, "sellingPrice", e.target.value)}
                                className="w-full min-w-[100px] bg-primary/5 border border-primary/20 rounded-xl py-3 pl-12 pr-2 text-white font-bold focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all shadow-[inset_0_0_20px_rgba(124,58,237,0.05)] group-hover/input:bg-primary/10"
                                min="0"
                                step="0.01"
                              />
                            </div>
                          </td>
                          <td className="px-6 py-5">
                            <input 
                              type="text" 
                              value={service.guarantee || ""}
                              onChange={(e) => {
                                if (!pricingData) return;
                                setPricingData({
                                  ...pricingData,
                                  [activeTab]: {
                                    ...pricingData[activeTab],
                                    [serviceKey]: {
                                      ...pricingData[activeTab][serviceKey],
                                      guarantee: e.target.value
                                    }
                                  }
                                });
                              }}
                              placeholder="e.g. 30 Days"
                              className="w-full bg-black/30 border border-white/5 rounded-xl py-3 px-4 text-white text-sm focus:border-text-muted focus:ring-1 focus:ring-white/20 outline-none transition-all group-hover/input:bg-black/50"
                            />
                          </td>
                          <td className="px-6 py-5 text-right">
                            <div className="flex flex-col items-end gap-1">
                              <p className={cn(
                                "font-black text-lg font-mono tracking-tight", 
                                isProfitable ? "text-success" : "text-red-400"
                              )}>
                                {profit > 0 ? "+" : ""}{profit.toFixed(2)}
                                <span className="text-xs font-sans font-medium text-text-muted ml-1">MAD</span>
                              </p>
                              <Badge className={cn(
                                "text-[11px] font-bold tracking-wide border", 
                                isProfitable 
                                  ? "bg-success/10 text-success border-success/20" 
                                  : "bg-red-500/10 text-red-400 border-red-500/20"
                              )}>
                                {margin}% MARGIN
                              </Badge>
                            </div>
                          </td>
                          <td className="px-2 py-5">
                            <button
                              onClick={() => confirmAndDelete(activeTab, serviceKey)}
                              className="p-1.5 rounded-lg text-text-muted hover:text-red-400 hover:bg-red-500/10 transition-colors opacity-0 group-hover:opacity-100"
                              title="Delete service"
                            >
                              <Trash2 size={16} />
                            </button>
                          </td>
                        </tr>
                      );
                    }) : (
                      <tr>
                        <td colSpan={7} className="px-6 py-12 text-center text-text-muted">
                          No services match your search query.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            
          </div>
        </div>
      </main>
      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setShowConfirm(false)} />
          <div className="relative bg-surface border border-white/10 rounded-3xl p-8 max-w-md w-full shadow-2xl">
            <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center text-red-400 mx-auto mb-4">
              <AlertCircle size={28} />
            </div>
            <h3 className="text-xl font-bold text-white text-center mb-3">Confirm Action</h3>
            <p className="text-text-soft text-center mb-8 leading-relaxed">{confirmText}</p>
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => setShowConfirm(false)}
              >
                Cancel
              </Button>
              <Button
                className="flex-1 bg-red-500 hover:bg-red-600 text-white border-none"
                onClick={() => {
                  setShowConfirm(false);
                  confirmAction();
                }}
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
