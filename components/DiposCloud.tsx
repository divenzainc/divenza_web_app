"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useCallback, useEffect } from "react";
import {
  CreditCard,
  Zap,
  Users,
  Package,
  BarChart3,
  Wifi,
  Tag,
  Shield,
  ArrowRight,
  Globe,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Clock,
  Printer,
  DollarSign,
} from "lucide-react";

// ── Brand tokens ──────────────────────────────────────────
const C = {
  primary: "#3F3369",
  teal: "#32A790",
  light: "#4bc4a8",
  shadow: "rgba(63,51,105,0.3)",
  gradient: "linear-gradient(135deg, #3F3369 0%, #32A790 100%)",
  heroBg: "linear-gradient(135deg, #0d0e1f 0%, #1a1535 40%, #0a2420 100%)",
};

// ── Data ─────────────────────────────────────────────────
const stats = [
  { value: "800+", label: "Active Counters" },
  { value: "5M+", label: "Transactions Processed" },
  { value: "0.3s", label: "Avg. Checkout Time" },
  { value: "99.95%", label: "Uptime" },
];

const features = [
  {
    Icon: Zap,
    title: "Lightning-Fast Checkout",
    desc: "Process transactions in under a second. Designed for high-volume retail where every second of queue time costs you.",
  },
  {
    Icon: Wifi,
    title: "Offline Mode",
    desc: "Never stop selling — even when the internet goes down. DI POS Cloud works offline and syncs automatically when reconnected.",
  },
  {
    Icon: Users,
    title: "Staff Management",
    desc: "Assign cashier roles, track performance, manage shifts, and monitor who's handling each transaction.",
  },
  {
    Icon: Package,
    title: "Inventory Tracking",
    desc: "Stock levels update in real time with every sale. Set reorder alerts and never run out of your bestsellers.",
  },
  {
    Icon: BarChart3,
    title: "Sales Reporting",
    desc: "Detailed end-of-day, weekly, and monthly reports. Filter by product, cashier, payment method, or time period.",
  },
  {
    Icon: CreditCard,
    title: "Multi-Payment Support",
    desc: "Accept cash, cards, digital wallets, and QR payments. Multiple payment types in a single transaction.",
  },
  {
    Icon: Tag,
    title: "Customer Loyalty",
    desc: "Run loyalty programs, issue reward points, and give discounts to returning customers — automatically.",
  },
  {
    Icon: Printer,
    title: "Receipt & Printing",
    desc: "Print thermal receipts, email digital copies, or send via WhatsApp. Compatible with all major receipt printers.",
  },
];

const steps = [
  {
    num: "01",
    title: "Configure Your Counter",
    desc: "Set up your POS terminal in minutes. Add your products, set tax rules, and customize your receipt layout.",
  },
  {
    num: "02",
    title: "Add Products & Staff",
    desc: "Import your inventory with barcodes or create products manually. Onboard your cashiers in seconds.",
  },
  {
    num: "03",
    title: "Start Transacting",
    desc: "Accept any payment method instantly. The interface is so intuitive, cashiers need zero training.",
  },
  {
    num: "04",
    title: "Track & Optimize",
    desc: "Review daily reports, monitor sales trends, and make data-driven decisions to grow your business.",
  },
];

const advantages = [
  "Works on any device or OS",
  "Barcode scanner support",
  "Multi-currency support",
  "Works offline",
  "End-of-day reports",
  "Free onboarding support",
];

const screenshots = [
  "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=1200&h=700&fit=crop",
  "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&h=700&fit=crop",
  "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=700&fit=crop",
];

// ── Screenshot Carousel ───────────────────────────────────
const Carousel = () => {
  const [cur, setCur] = useState(0);
  const [dir, setDir] = useState(0);
  const [hovered, setHovered] = useState(false);

  const next = useCallback(() => {
    setDir(1);
    setCur((p) => (p + 1) % screenshots.length);
  }, []);

  const prev = useCallback(() => {
    setDir(-1);
    setCur((p) => (p - 1 + screenshots.length) % screenshots.length);
  }, []);

  useEffect(() => {
    if (hovered) return;
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, [hovered, next]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 380 : -380, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d < 0 ? 380 : -380, opacity: 0 }),
  };

  return (
    <div
      className="relative w-full aspect-video rounded-2xl overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence initial={false} custom={dir} mode="popLayout">
        <motion.div
          key={cur}
          custom={dir}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 280, damping: 28 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0"
        >
          <Image
            src={screenshots[cur]}
            alt={`DI POS Cloud terminal ${cur + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 55vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, transparent 55%, rgba(63,51,105,0.2) 100%)`,
            }}
          />
        </motion.div>
      </AnimatePresence>

      {[
        { fn: prev, side: "left-3", Icon: ChevronLeft, label: "Previous" },
        { fn: next, side: "right-3", Icon: ChevronRight, label: "Next" },
      ].map(({ fn, side, Icon, label }) => (
        <motion.button
          key={label}
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.18 }}
          onClick={fn}
          aria-label={label}
          className={`absolute ${side} top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm`}
          style={{
            background: "rgba(255,255,255,0.92)",
            boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
            minWidth: 44,
            minHeight: 44,
          }}
        >
          <Icon className="w-5 h-5" style={{ color: C.primary }} />
        </motion.button>
      ))}

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {screenshots.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDir(i > cur ? 1 : -1);
              setCur(i);
            }}
            aria-label={`Go to slide ${i + 1}`}
            style={{ minWidth: 44, minHeight: 44, display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <motion.div
              animate={{ width: i === cur ? 22 : 8, opacity: i === cur ? 1 : 0.5 }}
              transition={{ duration: 0.28 }}
              className="h-2 rounded-full"
              style={{
                background: i === cur ? C.teal : "rgba(255,255,255,0.8)",
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

// ── Main Component ────────────────────────────────────────
const DiposCloud = () => {
  return (
    <div className="overflow-hidden">
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" style={{ background: C.heroBg }} />

        {/* Blobs */}
        <motion.div
          className="absolute top-16 -right-8 w-[560px] h-[560px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(63,51,105,0.25) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(50,167,144,0.18) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.14, 1], opacity: [0.4, 0.75, 0.4] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
          }}
        />

        {/* Floating icons */}
        <motion.div
          className="absolute top-32 left-[8%] opacity-10 pointer-events-none"
          animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <CreditCard className="w-12 h-12 text-[#4bc4a8]" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 right-[6%] opacity-10 pointer-events-none"
          animate={{ y: [0, 12, 0], rotate: [0, -6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          <Sparkles className="w-10 h-10 text-[#5a4d8a]" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              background: "rgba(50,167,144,0.15)",
              border: "1px solid rgba(50,167,144,0.38)",
            }}
          >
            <Zap className="w-4 h-4" style={{ color: C.light }} />
            <span className="text-sm font-semibold" style={{ color: C.light }}>
              Point of Sale Management
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            The POS That Keeps{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${C.light} 0%, #a0f0da 60%, #c8bef5 100%)`,
              }}
            >
              Your Line Moving
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="text-lg sm:text-xl md:text-2xl text-white/65 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            DI POS Cloud is a lightning-fast, cloud-based point of sale system built for retail
            excellence. Accept any payment, manage your team, and grow — all from one screen.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-2xl transition-all"
                style={{ background: C.gradient, boxShadow: `0 12px 40px -10px ${C.shadow}` }}
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <a
                href="https://diposcloud.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-2xl transition-all"
                style={{
                  color: C.light,
                  background: "rgba(50,167,144,0.1)",
                  border: "1px solid rgba(50,167,144,0.35)",
                }}
              >
                Visit Website
                <Globe className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-2 mt-12"
          >
            {["Lightning Checkout", "Offline Mode", "Staff Control", "Loyalty Program", "Sales Reports"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-medium rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    color: "rgba(255,255,255,0.65)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {tag}
                </span>
              )
            )}
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/25 flex items-start justify-center pt-2">
            <div className="w-1.5 h-2.5 rounded-full bg-white/40" />
          </div>
        </motion.div>
      </section>

      {/* ─── STATS BAR ────────────────────────────────────── */}
      <section className="py-12" style={{ background: C.gradient }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-3xl sm:text-4xl font-bold text-white">{s.value}</p>
                <p className="text-white/80 text-sm mt-1 font-medium">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 bg-white overflow-hidden">
        <div
          className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(50,167,144,0.04) 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(63,51,105,0.03) 0%, transparent 70%)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: "linear-gradient(135deg, rgba(63,51,105,0.07) 0%, rgba(50,167,144,0.07) 100%)",
                border: "1px solid rgba(63,51,105,0.18)",
              }}
            >
              <Zap className="w-4 h-4" style={{ color: C.teal }} />
              <span className="text-sm font-semibold" style={{ color: C.primary }}>
                Everything You Need
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span style={{ color: C.primary }}>Checkout Fast, </span>
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(130deg, #3F3369 0%, #32A790 100%)" }}
              >
                Run Smart
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Everything a modern POS needs — speed, reliability, reporting, and loyalty — packed
              into one beautiful, easy-to-use system.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group p-6 rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:shadow-xl cursor-default"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background:
                      i % 2 === 0
                        ? "rgba(63,51,105,0.09)"
                        : "rgba(50,167,144,0.09)",
                  }}
                >
                  <Icon
                    className="w-6 h-6"
                    style={{ color: i % 2 === 0 ? C.primary : C.teal }}
                  />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────────── */}
      <section
        className="py-20 md:py-28 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #f4f2fa 0%, #f0faf8 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: "linear-gradient(135deg, rgba(63,51,105,0.07) 0%, rgba(50,167,144,0.07) 100%)",
                border: "1px solid rgba(50,167,144,0.22)",
              }}
            >
              <TrendingUp className="w-4 h-4" style={{ color: C.teal }} />
              <span className="text-sm font-semibold" style={{ color: C.primary }}>
                How It Works
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Live in Minutes,{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: C.gradient }}
              >
                Not Days
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              DI POS Cloud is so intuitive your team can start transacting on day one. No IT
              setup. No long training sessions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(({ num, title, desc }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-8 left-[62%] w-[76%] h-px pointer-events-none"
                    style={{
                      background: `linear-gradient(90deg, rgba(63,51,105,0.4) 0%, rgba(50,167,144,0.1) 100%)`,
                    }}
                  />
                )}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 text-xl font-bold text-white"
                  style={{ background: C.gradient, boxShadow: `0 8px 28px -8px ${C.shadow}` }}
                >
                  {num}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VISUAL SHOWCASE ──────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65 }}
              viewport={{ once: true }}
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{
                  background: "linear-gradient(135deg, rgba(63,51,105,0.07) 0%, rgba(50,167,144,0.07) 100%)",
                  border: "1px solid rgba(63,51,105,0.18)",
                }}
              >
                <CreditCard className="w-4 h-4" style={{ color: C.teal }} />
                <span className="text-sm font-semibold" style={{ color: C.primary }}>
                  See It In Action
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-5">
                Built for the Counter,{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: C.gradient }}
                >
                  Loved by Teams
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                From the small boutique to the busy supermarket — DI POS Cloud handles every
                transaction with speed, accuracy, and a clean interface your team will love.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {advantages.map((adv, i) => (
                  <motion.div
                    key={adv}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2.5 text-sm text-gray-600"
                  >
                    <CheckCircle2
                      className="w-4 h-4 shrink-0"
                      style={{ color: i % 2 === 0 ? C.teal : C.primary }}
                    />
                    {adv}
                  </motion.div>
                ))}
              </div>

              {/* Speed highlight card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-8 flex items-center gap-4 p-4 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, rgba(50,167,144,0.07) 0%, rgba(63,51,105,0.07) 100%)",
                  border: "1px solid rgba(50,167,144,0.2)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: C.gradient, boxShadow: `0 6px 20px -6px ${C.shadow}` }}
                >
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <p className="text-sm text-gray-700 font-medium leading-snug">
                  Average checkout time of{" "}
                  <span className="text-[#32A790] font-bold">0.3 seconds</span> — the fastest POS
                  checkout in its class.
                </p>
              </motion.div>
            </motion.div>

            {/* Right — carousel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65 }}
              viewport={{ once: true }}
            >
              <div
                className="rounded-3xl p-3 sm:p-4"
                style={{
                  background: `linear-gradient(135deg, rgba(63,51,105,0.08) 0%, rgba(50,167,144,0.08) 100%)`,
                  border: `1px solid rgba(63,51,105,0.18)`,
                }}
              >
                <Carousel />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section
        className="py-20 md:py-28 relative overflow-hidden"
        style={{ background: C.heroBg }}
      >
        <motion.div
          className="absolute top-10 right-12 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(63,51,105,0.28) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-60 h-60 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(50,167,144,0.2) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 9, repeat: Infinity, delay: 1.2 }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Speed Up{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${C.light} 0%, #a0f0da 50%, #c8bef5 100%)`,
                }}
              >
                Every Checkout?
              </span>
            </h2>
            <p className="text-white/65 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Join hundreds of retailers already serving their customers faster with DI POS Cloud.
              Start free — zero risk, instant results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-2xl transition-all"
                  style={{ background: C.gradient, boxShadow: `0 12px 40px -10px ${C.shadow}` }}
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <a
                  href="https://diposcloud.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-2xl transition-all"
                  style={{
                    color: C.light,
                    background: "rgba(50,167,144,0.1)",
                    border: "1px solid rgba(50,167,144,0.35)",
                  }}
                >
                  Explore Features
                  <Globe className="w-5 h-5" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DiposCloud;
