"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Users,
  Building2,
  Globe,
  ArrowRight,
  Sparkles,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Award,
  Heart,
  Briefcase,
  ShoppingBag,
  Utensils,
  Factory,
  Truck,
  Laptop,
  Stethoscope,
  GraduationCap,
  CheckCircle2,
  Rocket,
  Zap,
  ExternalLink,
} from "lucide-react";

// Color system matching the website
const colors = {
  primary: {
    bg: "linear-gradient(135deg, #3F3369 0%, #5a4d8a 100%)",
    bgLight: "rgba(63,51,105,0.08)",
    text: "#3F3369",
    shadow: "rgba(63,51,105,0.3)",
  },
  secondary: {
    bg: "linear-gradient(135deg, #32A790 0%, #4bc4a8 100%)",
    bgLight: "rgba(50,167,144,0.08)",
    text: "#32A790",
    shadow: "rgba(50,167,144,0.3)",
  },
};

// Client data with industries
interface Client {
  id: number;
  name: string;
  logo: string;
  industry: string;
  description: string;
  website?: string;
  color: "primary" | "secondary";
}

const clients: Client[] = [
  {
    id: 1,
    name: "TechVentures Inc",
    logo: "TV",
    industry: "Technology",
    description: "Leading enterprise software solutions provider",
    color: "primary",
  },
  {
    id: 2,
    name: "GreenLeaf Organics",
    logo: "GL",
    industry: "E-Commerce",
    description: "Premium organic products marketplace",
    color: "secondary",
  },
  {
    id: 3,
    name: "Swift Logistics",
    logo: "SL",
    industry: "Logistics",
    description: "Multi-branch logistics and delivery services",
    color: "primary",
  },
  {
    id: 4,
    name: "Bloom Beauty",
    logo: "BB",
    industry: "Retail",
    description: "Luxury beauty and cosmetics brand",
    color: "secondary",
  },
  {
    id: 5,
    name: "FinanceFlow",
    logo: "FF",
    industry: "FinTech",
    description: "Next-gen financial technology platform",
    color: "primary",
  },
  {
    id: 6,
    name: "Seoul Kitchen",
    logo: "SK",
    industry: "Hospitality",
    description: "Premium restaurant chain",
    color: "secondary",
  },
  {
    id: 7,
    name: "MedCare Plus",
    logo: "MC",
    industry: "Healthcare",
    description: "Digital healthcare solutions",
    color: "primary",
  },
  {
    id: 8,
    name: "EduSmart",
    logo: "ES",
    industry: "Education",
    description: "E-learning platform provider",
    color: "secondary",
  },
  {
    id: 9,
    name: "Urban Homes",
    logo: "UH",
    industry: "Real Estate",
    description: "Modern property development",
    color: "primary",
  },
  {
    id: 10,
    name: "AutoDrive",
    logo: "AD",
    industry: "Automotive",
    description: "Smart automotive solutions",
    color: "secondary",
  },
  {
    id: 11,
    name: "FreshMart",
    logo: "FM",
    industry: "Retail",
    description: "Grocery delivery platform",
    color: "primary",
  },
  {
    id: 12,
    name: "CloudSync",
    logo: "CS",
    industry: "Technology",
    description: "Cloud infrastructure services",
    color: "secondary",
  },
];

// Industry data
interface Industry {
  name: string;
  icon: React.ReactNode;
  clientCount: number;
  color: "primary" | "secondary";
}

const industries: Industry[] = [
  { name: "Technology", icon: <Laptop className="w-5 h-5" />, clientCount: 12, color: "primary" },
  { name: "E-Commerce", icon: <ShoppingBag className="w-5 h-5" />, clientCount: 10, color: "secondary" },
  { name: "Healthcare", icon: <Stethoscope className="w-5 h-5" />, clientCount: 8, color: "primary" },
  { name: "Hospitality", icon: <Utensils className="w-5 h-5" />, clientCount: 7, color: "secondary" },
  { name: "Logistics", icon: <Truck className="w-5 h-5" />, clientCount: 6, color: "primary" },
  { name: "Education", icon: <GraduationCap className="w-5 h-5" />, clientCount: 5, color: "secondary" },
  { name: "Manufacturing", icon: <Factory className="w-5 h-5" />, clientCount: 4, color: "primary" },
  { name: "Finance", icon: <Briefcase className="w-5 h-5" />, clientCount: 4, color: "secondary" },
];

// Success stories / Case studies
interface SuccessStory {
  id: number;
  client: string;
  logo: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial: string;
  author: string;
  role: string;
  color: "primary" | "secondary";
}

const successStories: SuccessStory[] = [
  {
    id: 1,
    client: "TechVentures Inc",
    logo: "TV",
    industry: "Technology",
    challenge: "Needed a complete digital transformation to modernize legacy systems and improve operational efficiency.",
    solution: "Developed a custom enterprise platform with real-time analytics, automated workflows, and seamless integrations.",
    results: [
      "300% increase in operational efficiency",
      "60% reduction in manual processes",
      "Real-time data insights across all departments",
    ],
    testimonial: "Divenza transformed our entire digital infrastructure. Their team didn't just deliver a product—they understood our vision and made it reality.",
    author: "Sarah Mitchell",
    role: "CEO",
    color: "primary",
  },
  {
    id: 2,
    client: "GreenLeaf Organics",
    logo: "GL",
    industry: "E-Commerce",
    challenge: "Required a scalable e-commerce platform to handle rapid growth and expand to new markets.",
    solution: "Built a high-performance e-commerce solution with advanced inventory management and multi-channel integration.",
    results: [
      "2x revenue growth in 3 months",
      "40% increase in customer retention",
      "Seamless expansion to 3 new markets",
    ],
    testimonial: "Working with Divenza felt like having an extension of our own team. They built our e-commerce platform from scratch, and the results speak for themselves.",
    author: "Michael Chen",
    role: "Founder",
    color: "secondary",
  },
  {
    id: 3,
    client: "Swift Logistics",
    logo: "SL",
    industry: "Logistics",
    challenge: "Managing multiple branches with disconnected systems causing delays and inefficiencies.",
    solution: "Implemented DiTech - our comprehensive business management solution with real-time tracking and centralized operations.",
    results: [
      "50% reduction in operational costs",
      "Real-time visibility across all branches",
      "35% faster delivery times",
    ],
    testimonial: "The DiTech solution revolutionized how we manage our multi-branch operations. Real-time tracking, seamless integration, and incredible support.",
    author: "Amanda Rodriguez",
    role: "Operations Director",
    color: "primary",
  },
  {
    id: 4,
    client: "Seoul Kitchen",
    logo: "SK",
    industry: "Hospitality",
    challenge: "Inefficient order management and inventory tracking across restaurant locations.",
    solution: "Deployed DiPOS - our smart point-of-sale system with integrated inventory management and analytics.",
    results: [
      "40% faster order processing",
      "25% reduction in food waste",
      "Unified operations across all locations",
    ],
    testimonial: "DiPOS changed the game for our restaurant chain. From order management to inventory tracking, everything is now streamlined.",
    author: "David Park",
    role: "Restaurant Owner",
    color: "secondary",
  },
];

// Hero Section
const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { once: true });

  return (
    <section
      ref={heroRef}
      className="relative min-h-[70vh] md:min-h-[80vh] overflow-hidden bg-gradient-to-b from-[#fafafa] to-white flex items-center"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(63,51,105,0.1) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(50,167,144,0.08) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-[20%] right-[15%]"
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles className="w-8 h-8 text-[#3F3369] opacity-15" />
        </motion.div>
        <motion.div
          className="absolute bottom-[30%] left-[10%]"
          animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <Heart className="w-10 h-10 text-[#32A790] opacity-15" />
        </motion.div>
        <motion.div
          className="absolute top-[40%] left-[20%]"
          animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <Users className="w-6 h-6 text-[#3F3369] opacity-10" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              background:
                "linear-gradient(135deg, rgba(63,51,105,0.1) 0%, rgba(50,167,144,0.1) 100%)",
              border: "1px solid rgba(63,51,105,0.2)",
            }}
          >
            <Users className="w-4 h-4" style={{ color: "#3F3369" }} />
            <span className="text-sm font-medium" style={{ color: "#3F3369" }}>
              Our Trusted Partners
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
          >
            <span className="text-secondary">Brands That </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(130deg, #3F3369 0%, #32A790 100%)",
              }}
            >
              Trust Us
            </span>
            <br />
            <span className="text-secondary">To Deliver </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(130deg, #32A790 0%, #3F3369 100%)",
              }}
            >
              Excellence
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10"
          >
            From ambitious startups to established enterprises, we've helped
            businesses across industries transform their digital presence and
            achieve remarkable growth.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16"
          >
            {[
              { value: "50+", label: "Trusted Clients" },
              { value: "8+", label: "Industries Served" },
              { value: "100+", label: "Projects Delivered" },
              { value: "98%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div
                  className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #3F3369 0%, #32A790 100%)",
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-3 bg-[#3F3369] rounded-full"
            animate={{ opacity: [0.5, 1, 0.5], y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

// Client Logo Marquee Section
const ClientLogosSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate clients for seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section
      ref={sectionRef}
          className="relative py-20 md:py-28 overflow-hidden bg-white"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 -left-20 w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(63,51,105,0.04) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background:
                "linear-gradient(135deg, rgba(63,51,105,0.1) 0%, rgba(50,167,144,0.1) 100%)",
              border: "1px solid rgba(63,51,105,0.2)",
            }}
          >
            <Building2 className="w-4 h-4" style={{ color: "#3F3369" }} />
            <span className="text-sm font-medium" style={{ color: "#3F3369" }}>
              Our Clients
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-secondary">Trusted by </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(130deg, #3F3369 0%, #32A790 100%)",
              }}
            >
              Leading Brands
            </span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We're proud to partner with innovative companies that are shaping
            the future of their industries.
          </p>
        </motion.div>

        {/* Desktop Marquee */}
        <div className="hidden md:block relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />

          {/* First Row - Left to Right */}
          <div
            className="flex gap-6 py-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div
              className="flex gap-6"
              animate={{
                x: isPaused ? 0 : [0, -1800],
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                },
              }}
              style={{ willChange: "transform" }}
            >
              {duplicatedClients.map((client, index) => (
                <motion.div
                  key={`row1-${client.id}-${index}`}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="flex-shrink-0 w-[200px] p-5 rounded-2xl transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(145deg, #ffffff 0%, #fafafa 100%)",
                    boxShadow: `0 8px 30px -10px ${colors[client.color].shadow}`,
                    border: "1px solid rgba(255,255,255,0.8)",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                      style={{ background: colors[client.color].bg }}
                    >
                      {client.logo}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-secondary text-sm truncate">
                        {client.name}
                      </h4>
                      <p
                        className="text-xs truncate"
                        style={{ color: colors[client.color].text }}
                      >
                        {client.industry}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Second Row - Right to Left */}
          <div
            className="flex gap-6 py-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div
              className="flex gap-6"
              animate={{
                x: isPaused ? 0 : [-1800, 0],
              }}
              transition={{
                x: {
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                },
              }}
              style={{ willChange: "transform" }}
            >
              {[...duplicatedClients].reverse().map((client, index) => (
                <motion.div
                  key={`row2-${client.id}-${index}`}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="flex-shrink-0 w-[200px] p-5 rounded-2xl transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(145deg, #ffffff 0%, #fafafa 100%)",
                    boxShadow: `0 8px 30px -10px ${colors[client.color].shadow}`,
                    border: "1px solid rgba(255,255,255,0.8)",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                      style={{ background: colors[client.color].bg }}
                    >
                      {client.logo}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-secondary text-sm truncate">
                        {client.name}
                      </h4>
                      <p
                        className="text-xs truncate"
                        style={{ color: colors[client.color].text }}
                      >
                        {client.industry}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden grid grid-cols-2 gap-4">
          {clients.slice(0, 8).map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.05 }}
              className="p-4 rounded-xl"
              style={{
                background:
                  "linear-gradient(145deg, #ffffff 0%, #fafafa 100%)",
                boxShadow: `0 6px 20px -8px ${colors[client.color].shadow}`,
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg mb-2"
                  style={{ background: colors[client.color].bg }}
                >
                  {client.logo}
                </div>
                <h4 className="font-bold text-secondary text-xs">
                  {client.name}
                </h4>
                <p
                  className="text-[10px]"
                  style={{ color: colors[client.color].text }}
                >
                  {client.industry}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-gray-400 text-sm mt-8 md:hidden"
        >
          And many more trusted partners...
        </motion.p>
      </div>
    </section>
  );
};

// Industries Section
const IndustriesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-[#fafafa] to-white"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(50,167,144,0.06) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background:
                "linear-gradient(135deg, rgba(63,51,105,0.1) 0%, rgba(50,167,144,0.1) 100%)",
              border: "1px solid rgba(63,51,105,0.2)",
            }}
          >
            <Globe className="w-4 h-4" style={{ color: "#3F3369" }} />
            <span className="text-sm font-medium" style={{ color: "#3F3369" }}>
              Industry Expertise
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-secondary">Empowering </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(130deg, #3F3369 0%, #32A790 100%)",
              }}
            >
              Diverse Industries
            </span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Our solutions have transformed businesses across a wide range of
            sectors, bringing innovation and growth to every industry we serve.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div
                className="h-full p-5 md:p-6 rounded-2xl transition-all duration-300 text-center"
                style={{
                  background:
                    "linear-gradient(145deg, #ffffff 0%, #fafafa 100%)",
                  boxShadow: `0 8px 30px -10px ${colors[industry.color].shadow}`,
                }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110"
                  style={{ background: colors[industry.color].bg }}
                >
                  {industry.icon}
                </div>

                <h3 className="font-bold text-secondary text-sm md:text-base mb-1">
                  {industry.name}
                </h3>

                <p
                  className="text-xs md:text-sm font-medium"
                  style={{ color: colors[industry.color].text }}
                >
                  {industry.clientCount}+ Clients
                </p>
              </div>

              {/* Hover glow */}
              <div
                className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                style={{
                  background: `radial-gradient(circle at center, ${colors[industry.color].bgLight} 0%, transparent 70%)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Success Stories Section
const SuccessStoriesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextStory = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % successStories.length);
  };

  const prevStory = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? successStories.length - 1 : prev - 1
    );
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      nextStory();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const currentStory = successStories[currentIndex];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden bg-white"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-40 -left-20 w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(63,51,105,0.05) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 -right-20 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(50,167,144,0.05) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background:
                "linear-gradient(135deg, rgba(63,51,105,0.1) 0%, rgba(50,167,144,0.1) 100%)",
              border: "1px solid rgba(63,51,105,0.2)",
            }}
          >
            <Award className="w-4 h-4" style={{ color: "#3F3369" }} />
            <span className="text-sm font-medium" style={{ color: "#3F3369" }}>
              Success Stories
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-secondary">Real Results, </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(130deg, #3F3369 0%, #32A790 100%)",
              }}
            >
              Real Impact
            </span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses transform their operations and
            achieve exceptional growth through our solutions.
          </p>
        </motion.div>

        {/* Success Story Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          <div className="relative overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
              >
                <div
                  className="rounded-3xl overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(145deg, #ffffff 0%, #fafafa 100%)",
                    boxShadow: `0 20px 60px -20px ${colors[currentStory.color].shadow}`,
                  }}
                >
                  <div className="grid md:grid-cols-2">
                    {/* Left Side - Content */}
                    <div className="p-6 md:p-10 flex flex-col">
                      {/* Client Info */}
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-xl"
                          style={{ background: colors[currentStory.color].bg }}
                        >
                          {currentStory.logo}
                        </div>
                        <div>
                          <h3 className="font-bold text-secondary text-lg">
                            {currentStory.client}
                          </h3>
                          <p
                            className="text-sm"
                            style={{ color: colors[currentStory.color].text }}
                          >
                            {currentStory.industry}
                          </p>
                        </div>
                      </div>

                      {/* Challenge & Solution */}
                      <div className="space-y-4 flex-1">
                        <div>
                          <h4 className="font-semibold text-secondary text-sm mb-2 flex items-center gap-2">
                            <Zap className="w-4 h-4" style={{ color: colors[currentStory.color].text }} />
                            The Challenge
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {currentStory.challenge}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-secondary text-sm mb-2 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4" style={{ color: colors[currentStory.color].text }} />
                            Our Solution
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {currentStory.solution}
                          </p>
                        </div>
                      </div>

                      {/* Results */}
                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <h4 className="font-semibold text-secondary text-sm mb-3">
                          Key Results
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {currentStory.results.map((result, idx) => (
                            <span
                              key={idx}
                              className="text-xs px-3 py-1.5 rounded-full font-medium"
                              style={{
                                background: colors[currentStory.color].bgLight,
                                color: colors[currentStory.color].text,
                              }}
                            >
                              {result}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Testimonial */}
                    <div
                      className="p-6 md:p-10 flex flex-col justify-center relative"
                      style={{ background: colors[currentStory.color].bg }}
                    >
                      {/* Quote Icon */}
                      <div className="absolute top-6 right-6 opacity-20">
                        <Quote className="w-16 h-16 text-white" />
                      </div>

                      <div className="relative z-10">
                        {/* Rating */}
                        <div className="flex gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>

                        {/* Testimonial */}
                        <p className="text-white text-lg md:text-xl leading-relaxed mb-6 italic">
                          "{currentStory.testimonial}"
                        </p>

                        {/* Author */}
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                            {currentStory.author.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-bold text-white">
                              {currentStory.author}
                            </h4>
                            <p className="text-white/80 text-sm">
                              {currentStory.role}, {currentStory.client}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={prevStory}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-colors"
              style={{
                background: colors.primary.bgLight,
                color: colors.primary.text,
              }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {successStories.map((story, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className="rounded-full transition-all duration-300"
                  animate={{
                    width: currentIndex === index ? 32 : 10,
                    height: 10,
                    background:
                      currentIndex === index
                        ? colors[story.color].text
                        : "rgba(63,51,105,0.2)",
                  }}
                />
              ))}
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={nextStory}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-colors"
              style={{
                background: colors.secondary.bgLight,
                color: colors.secondary.text,
              }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Why They Choose Us Section
const WhyChooseUsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const reasons = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Client-Centric Approach",
      description: "Your success is our priority. We listen, understand, and deliver solutions tailored to your needs.",
      color: "primary" as const,
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Proven Track Record",
      description: "100+ successful projects with a 98% client satisfaction rate speaks to our commitment to excellence.",
      color: "secondary" as const,
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Results-Driven",
      description: "We measure our success by the growth we create for your business, not just the products we deliver.",
      color: "primary" as const,
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Long-Term Partnerships",
      description: "We're not just vendors—we're partners invested in your long-term success and growth.",
      color: "secondary" as const,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-[#fafafa] to-white"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background:
                "linear-gradient(135deg, rgba(63,51,105,0.1) 0%, rgba(50,167,144,0.1) 100%)",
              border: "1px solid rgba(63,51,105,0.2)",
            }}
          >
            <Star className="w-4 h-4" style={{ color: "#3F3369" }} />
            <span className="text-sm font-medium" style={{ color: "#3F3369" }}>
              Why Choose Us
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-secondary">What Makes Us </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(130deg, #3F3369 0%, #32A790 100%)",
              }}
            >
              Different
            </span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Our clients choose us because we deliver more than just services—we
            deliver transformation.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div
                className="h-full p-6 md:p-8 rounded-2xl transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(145deg, #ffffff 0%, #fafafa 100%)",
                  boxShadow: `0 10px 40px -15px ${colors[reason.color].shadow}`,
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl mb-5 flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110"
                  style={{ background: colors[reason.color].bg }}
                >
                  {reason.icon}
                </div>

                <h3 className="font-bold text-secondary text-lg mb-3">
                  {reason.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Background Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #3F3369 0%, #5a4d8a 50%, #32A790 100%)",
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Floating sparkles */}
        <motion.div
          className="absolute top-[20%] left-[10%]"
          animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles className="w-8 h-8 text-white" />
        </motion.div>
        <motion.div
          className="absolute bottom-[30%] right-[15%]"
          animate={{ y: [0, 10, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <Heart className="w-6 h-6 text-white" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            <Rocket className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">
              Join Our Community
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Become Our{" "}
            <span className="text-[#4bc4a8]">Next Success Story?</span>
          </h2>

          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Join the growing family of businesses that trust Divenza to deliver
            exceptional results. Let's build something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact-us"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#3F3369] font-semibold rounded-2xl transition-all duration-300"
              style={{
                boxShadow: "0 10px 40px -10px rgba(0,0,0,0.3)",
              }}
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="/about-us"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-2xl transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "2px solid rgba(255,255,255,0.3)",
                color: "white",
              }}
            >
              Learn About Us
            </motion.a>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-12 flex flex-wrap justify-center gap-6 md:gap-10"
          >
            {[
              { icon: <CheckCircle2 className="w-5 h-5" />, text: "Free Consultation" },
              { icon: <CheckCircle2 className="w-5 h-5" />, text: "24/7 Support" },
              { icon: <CheckCircle2 className="w-5 h-5" />, text: "No Hidden Fees" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-white/80">
                {item.icon}
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Main Page Component
const OurCommunityPage = () => {
  return (
    <div className="">
      <HeroSection />
      <ClientLogosSection />
      <IndustriesSection />
      <SuccessStoriesSection />
      <WhyChooseUsSection />
      <CTASection />
    </div>
  );
};

export default OurCommunityPage;
