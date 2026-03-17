"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useCallback, useEffect } from "react";
import {
  ShoppingCart,
  Store,
  Package,
  Tag,
  CreditCard,
  BarChart3,
  Users,
  Megaphone,
  ArrowRight,
  Globe,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Zap,
  TrendingUp,
  Sparkles,
  ShoppingBag,
} from "lucide-react";

// ── Brand tokens ──────────────────────────────────────────
const C = {
  primary: "#3F3369",
  light: "#5a4d8a",
  accent: "#32A790",
  shadow: "rgba(63,51,105,0.32)",
  gradient: "linear-gradient(135deg, #3F3369 0%, #5a4d8a 100%)",
  heroBg: "linear-gradient(135deg, #120d20 0%, #1f1540 55%, #120d20 100%)",
};

// ── Data ─────────────────────────────────────────────────
const stats = [
  { value: "1,000+", label: "Active Stores" },
  { value: "100K+", label: "Orders Processed" },
  { value: "50+", label: "Payment Methods" },
  { value: "99.8%", label: "Success Rate" },
];

const features = [
  {
    Icon: Store,
    title: "Smart Store Builder",
    desc: "Build a stunning storefront without writing a single line of code. Beautiful templates, drag-and-drop customization.",
  },
  {
    Icon: Package,
    title: "Product Management",
    desc: "Add products with variants, bulk imports, rich descriptions, and SEO metadata — all from one intuitive panel.",
  },
  {
    Icon: CreditCard,
    title: "Multi-Payment Gateway",
    desc: "Accept cards, digital wallets, bank transfers, and cash on delivery. 50+ payment methods supported out of the box.",
  },
  {
    Icon: BarChart3,
    title: "Sales Analytics",
    desc: "Track revenue, conversion rates, and customer behavior with real-time dashboards and exportable reports.",
  },
  {
    Icon: ShoppingCart,
    title: "Order Management",
    desc: "Process, track, and fulfill orders effortlessly. Automated notifications keep customers informed at every step.",
  },
  {
    Icon: Users,
    title: "Customer Management",
    desc: "Build detailed customer profiles, segment your audience, and deliver personalized shopping experiences.",
  },
  {
    Icon: Megaphone,
    title: "Built-In Marketing",
    desc: "Run discount codes, flash sales, loyalty programs, and email campaigns — all inside the platform.",
  },
  {
    Icon: Tag,
    title: "Inventory Control",
    desc: "Track stock in real time, set low-stock alerts, and manage multiple warehouses from a central inventory hub.",
  },
];

const steps = [
  {
    num: "01",
    title: "Build Your Store",
    desc: "Pick a template, personalize your brand colors, and configure your store settings in minutes.",
  },
  {
    num: "02",
    title: "Add Your Products",
    desc: "Upload products with images, descriptions, variants, and pricing. Bulk import supported.",
  },
  {
    num: "03",
    title: "Start Selling",
    desc: "Go live and accept any payment method. Your store is mobile-optimized and SEO-ready from day one.",
  },
  {
    num: "04",
    title: "Grow &amp; Scale",
    desc: "Use analytics insights to optimize conversion rates, run campaigns, and scale your revenue.",
  },
];

const advantages = [
  "No technical skills required",
  "Custom domain support",
  "Free SSL certificate",
  "SEO-ready storefront",
  "Mobile-first design",
  "24/7 expert support",
];

const screenshots = [
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=700&fit=crop",
  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=700&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=700&fit=crop",
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
            alt={`Diseller store ${cur + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 55vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, transparent 55%, ${C.primary}25 100%)`,
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
                background: i === cur ? C.primary : "rgba(255,255,255,0.8)",
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
const Diseller = () => {
  return (
    <div className="overflow-hidden">
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" style={{ background: C.heroBg }} />

        {/* Blobs */}
        <motion.div
          className="absolute top-16 -right-8 w-[580px] h-[580px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(63,51,105,0.28) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(90,77,138,0.22) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.14, 1], opacity: [0.4, 0.75, 0.4] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
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
          <ShoppingBag className="w-12 h-12 text-[#5a4d8a]" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 right-[6%] opacity-10 pointer-events-none"
          animate={{ y: [0, 12, 0], rotate: [0, -6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          <Sparkles className="w-10 h-10 text-[#3F3369]" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              background: "rgba(63,51,105,0.25)",
              border: "1px solid rgba(90,77,138,0.5)",
            }}
          >
            <ShoppingCart className="w-4 h-4" style={{ color: "#a895e0" }} />
            <span className="text-sm font-semibold" style={{ color: "#a895e0" }}>
              Complete E-Commerce Solution
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Your Complete{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #a895e0 0%, #c8bef5 100%)",
              }}
            >
              E-Commerce Empire
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="text-lg sm:text-xl md:text-2xl text-white/65 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Diseller is the all-in-one e-commerce platform that lets you launch, manage, and grow
            your online store with unmatched speed and simplicity.
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
                Start Selling Free
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <a
                href="https://diseller.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-2xl transition-all"
                style={{
                  color: "#a895e0",
                  background: "rgba(63,51,105,0.2)",
                  border: "1px solid rgba(90,77,138,0.45)",
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
            {["Store Builder", "Multi-Payment", "Inventory", "Analytics", "Marketing Tools"].map(
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
          className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(63,51,105,0.04) 0%, transparent 70%)" }}
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
                background: "rgba(63,51,105,0.07)",
                border: "1px solid rgba(63,51,105,0.18)",
              }}
            >
              <Zap className="w-4 h-4" style={{ color: C.primary }} />
              <span className="text-sm font-semibold" style={{ color: C.primary }}>
                Everything You Need
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span style={{ color: C.primary }}>Sell Smarter, </span>
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(130deg, #3F3369 0%, #32A790 100%)" }}
              >
                Grow Faster
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Every tool you need to build, run, and scale a successful online store — without the
              complexity of traditional platforms.
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
                  style={{ background: "rgba(63,51,105,0.09)" }}
                >
                  <Icon className="w-6 h-6" style={{ color: C.primary }} />
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
        style={{ background: "linear-gradient(135deg, #f4f2fa 0%, #faf9ff 100%)" }}
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
                background: "rgba(63,51,105,0.07)",
                border: "1px solid rgba(63,51,105,0.18)",
              }}
            >
              <TrendingUp className="w-4 h-4" style={{ color: C.primary }} />
              <span className="text-sm font-semibold" style={{ color: C.primary }}>
                How It Works
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Your Store Goes Live in{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: C.gradient }}
              >
                4 Steps
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From zero to selling — faster than you think. No developers. No technical headaches.
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
                      background: `linear-gradient(90deg, ${C.primary}50 0%, ${C.primary}10 100%)`,
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
            {/* Right — carousel first on desktop for visual interest */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div
                className="rounded-3xl p-3 sm:p-4"
                style={{
                  background: `linear-gradient(135deg, ${C.primary}10 0%, ${C.light}0d 100%)`,
                  border: `1px solid ${C.primary}1a`,
                }}
              >
                <Carousel />
              </div>
            </motion.div>

            {/* Left — copy */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{
                  background: "rgba(63,51,105,0.07)",
                  border: "1px solid rgba(63,51,105,0.18)",
                }}
              >
                <ShoppingCart className="w-4 h-4" style={{ color: C.primary }} />
                <span className="text-sm font-semibold" style={{ color: C.primary }}>
                  See It In Action
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-5">
                A Platform Designed{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: C.gradient }}
                >
                  for Sellers
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                From your first product to your thousandth order — Diseller scales with you every
                step of the way, with the tools and support you need to succeed.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {advantages.map((adv, i) => (
                  <motion.div
                    key={adv}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2.5 text-sm text-gray-600"
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: C.primary }} />
                    {adv}
                  </motion.div>
                ))}
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
          style={{ background: "radial-gradient(circle, rgba(63,51,105,0.3) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-60 h-60 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(90,77,138,0.22) 0%, transparent 70%)" }}
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
              Ready to Launch{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #a895e0 0%, #c8bef5 100%)" }}
              >
                Your Store?
              </span>
            </h2>
            <p className="text-white/65 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Join thousands of sellers already growing their business with Diseller. Start for
              free — no credit card required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-2xl transition-all"
                  style={{ background: C.gradient, boxShadow: `0 12px 40px -10px ${C.shadow}` }}
                >
                  Start Selling Today
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <a
                  href="https://diseller.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-2xl transition-all"
                  style={{
                    color: "#a895e0",
                    background: "rgba(63,51,105,0.2)",
                    border: "1px solid rgba(90,77,138,0.45)",
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

export default Diseller;
