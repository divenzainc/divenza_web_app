"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Lightbulb,
  Target,
  Users,
  Rocket,
  Heart,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Zap,
  TrendingUp,
} from "lucide-react";

const rotatingHeadlines = [
  { prefix: "Where Ideas Become", highlight: "Reliable Systems" },
  { prefix: "From Vision to", highlight: "Scalable Technology" },
  { prefix: "Turning Complexity", highlight: "Into Clarity" },
  { prefix: "Building What Your", highlight: "Business Needs" },
];

interface ValueCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

const coreValues: ValueCard[] = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Solution-First Mindset",
    description:
      "We don't just build software. We architect solutions that fit your unique business DNA.",
    gradient: "from-[#3F3369] to-[#5a4d8a]",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Your Success = Our Mission",
    description:
      "Client satisfaction isn't a metric for us—it's the heartbeat of everything we create.",
    gradient: "from-[#32A790] to-[#4bc4a8]",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Growth Partners",
    description:
      "We're not vendors. We're invested partners who celebrate your milestones as our own.",
    gradient: "from-[#3F3369] to-[#32A790]",
  },
];

const differentiators = [
  "We listen before we build",
  "Custom solutions, not cookie-cutter templates",
  "Your budget, your timeline, respected",
  "24/7 support because problems don't wait",
  "Transparent communication, always",
  "Long-term relationships over quick wins",
];

const WhoWeAreSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingHeadlines.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-2 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large gradient blob - left */}
        {/* <motion.div
          className="absolute -top-20 -left-40 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(63,51,105,0.06) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        /> */}

        {/* Large gradient blob - right */}
        {/* <motion.div
          className="absolute -bottom-20 -right-40 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(50,167,144,0.06) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        /> */}

        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-[20%] right-[10%]"
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles className="w-8 h-8 text-[#3F3369] opacity-10" />
        </motion.div>

        <motion.div
          className="absolute bottom-[35%] left-[5%]"
          animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <Lightbulb className="w-10 h-10 text-[#32A790] opacity-10" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background:
                "linear-gradient(135deg, rgba(63,51,105,0.1) 0%, rgba(50,167,144,0.1) 100%)",
              border: "1px solid rgba(63,51,105,0.2)",
            }}
          >
            <Users className="w-4 h-4" style={{ color: "#3F3369" }} />
            <span className="text-sm font-medium" style={{ color: "#3F3369" }}>
              Who We Are
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 min-h-[1.2em] sm:min-h-[1.2em]">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="inline-block"
              >
                <span className="text-secondary">{rotatingHeadlines[currentIndex].prefix} </span>
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(130deg, #3F3369 0%, #32A790 100%)",
                  }}
                >
                  {rotatingHeadlines[currentIndex].highlight}
                </span>
              </motion.span>
            </AnimatePresence>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We're <span className="font-semibold text-[#3F3369]">Divenza</span>
            —a smart IT company that believes in crafting solutions as unique as
            your business. While others sell products, we build partnerships.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Side - Story & Vision */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* The "Different" Visual Card */}
            <div
              className="relative rounded-3xl p-8 md:p-10 overflow-hidden"
              style={{
                background: "linear-gradient(145deg, rgba(63,51,105,0.04) 0%, rgba(50,167,144,0.04) 100%)",
                boxShadow: "0 10px 40px -15px rgba(63,51,105,0.15)",
              }}
            >
              {/* Decorative Corner Element */}
              <div
                className="absolute top-0 right-0 w-32 h-32 opacity-50"
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(50,167,144,0.15) 0%, transparent 70%)",
                }}
              />

              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  viewport={{ once: true }}
                  className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #3F3369 0%, #5a4d8a 100%)",
                    boxShadow: "0 10px 30px -10px rgba(63,51,105,0.4)",
                  }}
                >
                  <Zap className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
                  Smart Solutions for{" "}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(130deg, #3F3369 0%, #32A790 100%)",
                    }}
                  >
                    Real Growth
                  </span>
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  From web and mobile applications to AI automations, digital
                  marketing, and custom software—we don't just deliver services.
                  We understand your challenges, design tailored solutions, and
                  stay with you until you see real results.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  Our flagship products—
                  <span className="font-semibold text-[#3F3369]">DiSeller</span>
                  ,{" "}
                  <span className="font-semibold text-[#3F3369]">DiTech</span>,
                  and{" "}
                  <span className="font-semibold text-[#3F3369]">DiPOS</span>
                  —were born from real business needs, refined through real
                  feedback, and trusted by businesses that demand excellence.
                </p>

                {/* Quick Stats */}
                <div className="flex flex-wrap gap-4 md:gap-5 mt-6">
                  {[
                    { label: "Products", value: "3+", icon: <Rocket className="w-4 h-4" /> },
                    { label: "Services", value: "10+", icon: <Sparkles className="w-4 h-4" /> },
                    { label: "Focus", value: "100%", icon: <Target className="w-4 h-4" /> },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl"
                      style={{
                        background: "rgba(255,255,255,0.8)",
                        boxShadow: "0 2px 10px -3px rgba(0,0,0,0.08)",
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                        style={{
                          background: index % 2 === 0
                            ? "linear-gradient(135deg, #3F3369 0%, #5a4d8a 100%)"
                            : "linear-gradient(135deg, #32A790 0%, #4bc4a8 100%)",
                        }}
                      >
                        {stat.icon}
                      </div>
                      <div>
                        <div className="text-xl font-bold text-[#3F3369]">
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - What Makes Us Different */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-3">
              <h3 className="text-xl md:text-2xl font-bold text-secondary mb-6">
                What Makes Us{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(130deg, #32A790 0%, #4bc4a8 100%)",
                  }}
                >
                  Different?
                </span>
              </h3>

              {differentiators.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.08 }}
                  viewport={{ once: true }}
                  // whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(250,250,250,0.5) 100%)",
                    boxShadow: "0 2px 8px -2px rgba(0,0,0,0.06)",
                  }}
                >
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background:
                        index % 2 === 0
                          ? "linear-gradient(135deg, #3F3369 0%, #5a4d8a 100%)"
                          : "linear-gradient(135deg, #32A790 0%, #4bc4a8 100%)",
                    }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-8 p-6 md:p-8 rounded-2xl relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #3F3369 0%, #5a4d8a 100%)",
                boxShadow: "0 15px 40px -10px rgba(63,51,105,0.4)",
              }}
            >
              {/* Subtle glow effect */}
              <div
                className="absolute top-0 right-0 w-40 h-40 opacity-20"
                style={{
                  background: "radial-gradient(circle at top right, rgba(50,167,144,0.6) 0%, transparent 70%)",
                }}
              />
              <div
                className="absolute bottom-0 left-0 w-32 h-32 opacity-15"
                style={{
                  background: "radial-gradient(circle at bottom left, rgba(255,255,255,0.4) 0%, transparent 70%)",
                }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(50,167,144,0.3)" }}
                  >
                    <TrendingUp className="w-4 h-4 text-[#4bc4a8]" />
                  </div>
                  <span className="text-white/90 text-sm font-semibold uppercase tracking-wider">
                    Our Purpose
                  </span>
                </div>
                <p className="text-white text-lg md:text-xl font-medium leading-relaxed">
                  "To provide better, suitable solutions that help businesses
                  grow—and to never stop until you're completely satisfied."
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Core Values Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
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
          </h3>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div
                  className="h-full p-6 md:p-8 rounded-2xl transition-all duration-300"
                  style={{
                    background: "linear-gradient(145deg, #ffffff 0%, #fafafa 100%)",
                    boxShadow: "0 8px 30px -8px rgba(0,0,0,0.1)",
                  }}
                >
                  {/* Decorative corner glow */}
                  <div
                    className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: index === 1
                        ? "radial-gradient(circle at top right, rgba(50,167,144,0.1) 0%, transparent 70%)"
                        : "radial-gradient(circle at top right, rgba(63,51,105,0.1) 0%, transparent 70%)",
                    }}
                  />

                  <div className="relative z-10">
                    {/* Icon & Title */}
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br ${value.gradient} text-white`}
                        style={{
                          boxShadow:
                            index === 0
                              ? "0 8px 25px -8px rgba(63,51,105,0.4)"
                              : index === 1
                              ? "0 8px 25px -8px rgba(50,167,144,0.4)"
                              : "0 8px 25px -8px rgba(63,51,105,0.3)",
                        }}
                      >
                        {value.icon}
                      </div>
                      <h4 className="text-lg md:text-xl font-bold text-secondary whitespace-nowrap">
                        {value.title}
                      </h4>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-2xl transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #32A790 0%, #4bc4a8 100%)",
              boxShadow: "0 10px 40px -10px rgba(50,167,144,0.5)",
            }}
          >
            Let's Build Something Amazing
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <p className="text-gray-500 text-sm mt-4">
            Ready to experience the Divenza difference?
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
