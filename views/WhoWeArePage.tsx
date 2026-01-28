"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Users,
  Target,
  Heart,
  Rocket,
  Lightbulb,
  Shield,
  Zap,
  Globe,
  Award,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Eye,
  Compass,
  Code2,
  Handshake,
  Star,
  Clock,
  MessageCircle,
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

// Hero Section Component
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
              About Divenza
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
          >
            <span className="text-secondary">We Build </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(130deg, #3F3369 0%, #32A790 100%)",
              }}
            >
              Partnerships,
            </span>
            <br />
            <span className="text-secondary">Not Just </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(130deg, #32A790 0%, #3F3369 100%)",
              }}
            >
              Products
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10"
          >
            At Divenza, we're more than a tech company. We're your dedicated
            partners in growth, crafting innovative solutions that transform
            ideas into reality and drive businesses forward.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16"
          >
            {[
              { value: "3+", label: "Years of Excellence" },
              { value: "50+", label: "Happy Clients" },
              { value: "100+", label: "Projects Delivered" },
              { value: "24/7", label: "Support Available" },
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

// Our Story Section
const OurStorySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const milestones = [
    {
      year: "2022",
      title: "The Beginning",
      description:
        "Divenza was born with a simple mission: to help businesses thrive through technology.",
      icon: <Lightbulb className="w-5 h-5" />,
    },
    {
      year: "2023",
      title: "Product Launch",
      description:
        "Launched DiSeller, DiTech, and DiPOS - our flagship products serving real business needs.",
      icon: <Rocket className="w-5 h-5" />,
    },
    {
      year: "2024",
      title: "Growing Impact",
      description:
        "Expanded our services to include AI automation, helping businesses scale efficiently.",
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      year: "2025",
      title: "Future Forward",
      description:
        "Continuing to innovate and empower businesses with cutting-edge solutions.",
      icon: <Globe className="w-5 h-5" />,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden bg-white"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 -right-20 w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(63,51,105,0.05) 0%, transparent 70%)",
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
          className="text-center mb-16"
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
            <Clock className="w-4 h-4" style={{ color: "#3F3369" }} />
            <span className="text-sm font-medium" style={{ color: "#3F3369" }}>
              Our Journey
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-secondary">The Story </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(130deg, #3F3369 0%, #32A790 100%)",
              }}
            >
              Behind Divenza
            </span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            From a passionate idea to a trusted technology partner, our journey
            has been driven by one goal: helping businesses succeed.
          </p>
        </motion.div>

        {/* Story Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Story Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="relative rounded-3xl p-8 md:p-10 overflow-hidden"
              style={{
                background:
                  "linear-gradient(145deg, rgba(63,51,105,0.04) 0%, rgba(50,167,144,0.04) 100%)",
                boxShadow: "0 10px 40px -15px rgba(63,51,105,0.15)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 opacity-50"
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(50,167,144,0.15) 0%, transparent 70%)",
                }}
              />

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
                  Where It All{" "}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(130deg, #3F3369 0%, #32A790 100%)",
                    }}
                  >
                    Began
                  </span>
                </h3>

                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Divenza started with a simple observation: many businesses
                    struggle to find technology partners who truly understand
                    their needs. We saw cookie-cutter solutions being forced
                    onto unique business challenges.
                  </p>
                  <p>
                    We decided to change that. Our founders, with backgrounds in
                    software development and business consulting, came together
                    to create a company that listens first and builds second.
                  </p>
                  <p>
                    Today, we're proud to serve businesses across multiple
                    industries, from startups finding their footing to
                    established enterprises scaling their operations. Every
                    project we take on is a partnership—your success is our
                    success.
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="mt-8 p-4 rounded-xl"
                  style={{ background: "rgba(50,167,144,0.1)" }}
                >
                  <p className="text-[#32A790] font-medium italic">
                    "We don't just build software. We build relationships that
                    last, solutions that scale, and futures that shine."
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3F3369] via-[#32A790] to-[#3F3369] hidden md:block" />

            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="relative flex gap-4 md:gap-6"
                >
                  {/* Timeline Dot */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 text-white"
                    style={{
                      background:
                        index % 2 === 0
                          ? "linear-gradient(135deg, #3F3369 0%, #5a4d8a 100%)"
                          : "linear-gradient(135deg, #32A790 0%, #4bc4a8 100%)",
                      boxShadow:
                        index % 2 === 0
                          ? "0 8px 25px -8px rgba(63,51,105,0.4)"
                          : "0 8px 25px -8px rgba(50,167,144,0.4)",
                    }}
                  >
                    {milestone.icon}
                  </div>

                  {/* Content */}
                  <div
                    className="flex-1 p-5 rounded-2xl transition-all duration-300"
                    style={{
                      background:
                        "linear-gradient(145deg, #ffffff 0%, #fafafa 100%)",
                      boxShadow: "0 4px 20px -8px rgba(0,0,0,0.1)",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="text-sm font-bold px-3 py-1 rounded-full"
                        style={{
                          background:
                            index % 2 === 0 ? colors.primary.bgLight : colors.secondary.bgLight,
                          color: index % 2 === 0 ? colors.primary.text : colors.secondary.text,
                        }}
                      >
                        {milestone.year}
                      </span>
                      <h4 className="font-bold text-secondary">
                        {milestone.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Mission & Vision Section
const MissionVisionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-[#fafafa] to-white"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full"
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
          className="text-center mb-16"
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
            <Compass className="w-4 h-4" style={{ color: "#3F3369" }} />
            <span className="text-sm font-medium" style={{ color: "#3F3369" }}>
              Our Purpose
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-secondary">Driven by </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(130deg, #3F3369 0%, #32A790 100%)",
              }}
            >
              Purpose & Passion
            </span>
          </h2>
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8 }}
            className="group"
          >
            <div
              className="relative h-full rounded-3xl p-8 md:p-10 overflow-hidden transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #3F3369 0%, #5a4d8a 100%)",
                boxShadow: "0 20px 50px -15px rgba(63,51,105,0.5)",
              }}
            >
              {/* Decorative */}
              <div
                className="absolute top-0 right-0 w-40 h-40 opacity-20"
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(50,167,144,0.5) 0%, transparent 70%)",
                }}
              />
              <div
                className="absolute bottom-0 left-0 w-32 h-32 opacity-15"
                style={{
                  background:
                    "radial-gradient(circle at bottom left, rgba(255,255,255,0.4) 0%, transparent 70%)",
                }}
              />

              <div className="relative z-10">
                <div
                  className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.2)" }}
                >
                  <Target className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Our Mission
                </h3>

                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  To provide better, suitable solutions that help businesses
                  grow—and to never stop until our clients are completely
                  satisfied.
                </p>

                <div className="space-y-3">
                  {[
                    "Deliver exceptional quality in every project",
                    "Build lasting partnerships, not just products",
                    "Continuously innovate for our clients' success",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#4bc4a8] shrink-0" />
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -8 }}
            className="group"
          >
            <div
              className="relative h-full rounded-3xl p-8 md:p-10 overflow-hidden transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #32A790 0%, #4bc4a8 100%)",
                boxShadow: "0 20px 50px -15px rgba(50,167,144,0.5)",
              }}
            >
              {/* Decorative */}
              <div
                className="absolute top-0 right-0 w-40 h-40 opacity-20"
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(63,51,105,0.5) 0%, transparent 70%)",
                }}
              />
              <div
                className="absolute bottom-0 left-0 w-32 h-32 opacity-15"
                style={{
                  background:
                    "radial-gradient(circle at bottom left, rgba(255,255,255,0.4) 0%, transparent 70%)",
                }}
              />

              <div className="relative z-10">
                <div
                  className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.2)" }}
                >
                  <Eye className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Our Vision
                </h3>

                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  To be the most trusted technology partner for businesses
                  worldwide, known for our innovative solutions and unwavering
                  commitment to client success.
                </p>

                <div className="space-y-3">
                  {[
                    "Empower businesses with smart technology",
                    "Set industry standards for client service",
                    "Create positive impact in every community we serve",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Core Values Section
const CoreValuesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Client-First Mindset",
      description:
        "Your success is our priority. We listen, understand, and deliver solutions that truly fit your needs.",
      gradient: "from-[#3F3369] to-[#5a4d8a]",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence in Delivery",
      description:
        "We don't settle for good enough. Every line of code, every design, every solution meets the highest standards.",
      gradient: "from-[#32A790] to-[#4bc4a8]",
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "Integrity & Trust",
      description:
        "Transparent communication, honest pricing, and reliable delivery. We build trust through every interaction.",
      gradient: "from-[#3F3369] to-[#32A790]",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation Forward",
      description:
        "We stay ahead of technology trends to bring you solutions that are not just current but future-ready.",
      gradient: "from-[#5a4d8a] to-[#3F3369]",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative Spirit",
      description:
        "We work with you, not just for you. Your input shapes our solutions, making them truly yours.",
      gradient: "from-[#4bc4a8] to-[#32A790]",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Long-term Partnership",
      description:
        "We're not vendors looking for quick wins. We're partners invested in your growth for years to come.",
      gradient: "from-[#3F3369] to-[#5a4d8a]",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden bg-white"
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
          className="text-center mb-16"
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
              What We Stand For
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-secondary">Our </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(130deg, #3F3369 0%, #32A790 100%)",
              }}
            >
              Core Values
            </span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            These values guide every decision we make and every solution we
            build. They're the foundation of who we are.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div
                className="h-full p-6 md:p-8 rounded-2xl transition-all duration-300 relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(145deg, #ffffff 0%, #fafafa 100%)",
                  boxShadow: "0 8px 30px -8px rgba(0,0,0,0.1)",
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      index % 2 === 0
                        ? "radial-gradient(circle at top right, rgba(63,51,105,0.1) 0%, transparent 70%)"
                        : "radial-gradient(circle at top right, rgba(50,167,144,0.1) 0%, transparent 70%)",
                  }}
                />

                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 rounded-xl mb-5 flex items-center justify-center text-white bg-gradient-to-br ${value.gradient}`}
                    style={{
                      boxShadow:
                        index % 2 === 0
                          ? "0 8px 25px -8px rgba(63,51,105,0.4)"
                          : "0 8px 25px -8px rgba(50,167,144,0.4)",
                    }}
                  >
                    {value.icon}
                  </div>

                  <h3 className="text-xl font-bold text-secondary mb-3">
                    {value.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Why Choose Us Section
const WhyChooseUsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const reasons = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "We Listen First",
      description: "Understanding your unique challenges before proposing solutions",
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "Custom Solutions",
      description: "No cookie-cutter templates—everything is tailored to you",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "On-Time Delivery",
      description: "Your timeline respected, your deadlines met consistently",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Transparent Pricing",
      description: "No hidden fees, no surprises—clear communication always",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "24/7 Support",
      description: "Problems don't wait for business hours, neither do we",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Growth Partners",
      description: "We celebrate your milestones as our own achievements",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-[#fafafa] to-white"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 -right-20 w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(50,167,144,0.06) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
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
                The Divenza Difference
              </span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-secondary">Why Businesses </span>
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(130deg, #3F3369 0%, #32A790 100%)",
                }}
              >
                Choose Us
              </span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              In a sea of technology companies, what makes us different? It's not
              just what we do—it's how we do it. Our clients stay with us because
              we treat their business like our own.
            </p>

            {/* CTA */}
            <motion.a
              href="/contact-us"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-2xl transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #3F3369 0%, #5a4d8a 100%)",
                boxShadow: "0 10px 40px -10px rgba(63,51,105,0.5)",
              }}
            >
              Start a Conversation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Right - Reasons Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.8) 0%, rgba(250,250,250,0.5) 100%)",
                  boxShadow: "0 2px 10px -3px rgba(0,0,0,0.08)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-white"
                  style={{
                    background:
                      index % 2 === 0
                        ? "linear-gradient(135deg, #3F3369 0%, #5a4d8a 100%)"
                        : "linear-gradient(135deg, #32A790 0%, #4bc4a8 100%)",
                  }}
                >
                  {reason.icon}
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-sm mb-1">
                    {reason.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
          background: "linear-gradient(135deg, #3F3369 0%, #5a4d8a 50%, #32A790 100%)",
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
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
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Star className="w-6 h-6 text-white" />
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
              Let's Build Together
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform{" "}
            <span className="text-[#4bc4a8]">Your Business?</span>
          </h2>

          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Join the growing family of businesses that have partnered with
            Divenza. Let's discuss how we can help you achieve your goals.
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
              Get in Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="/"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-2xl transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "2px solid rgba(255,255,255,0.3)",
                color: "white",
              }}
            >
              Explore Our Services
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Main Page Component
const WhoWeArePage = () => {
  return (
    <div className="">
      <HeroSection />
      <OurStorySection />
      <MissionVisionSection />
      <CoreValuesSection />
      <WhyChooseUsSection />
      <CTASection />
    </div>
  );
};

export default WhoWeArePage;
