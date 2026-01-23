"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowRight, Sparkles, Play, TrendingUp, Zap, Settings, CheckCircle2, BarChart3 } from "lucide-react";
import { useEffect, useState } from "react";

// Animated Counter Component
const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(count, target, {
      duration: 2,
      ease: "easeOut",
    });

    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, rounded, target]);

  return <span>{displayValue}{suffix}</span>;
};

const HeroSectionAutomated = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#fafafa]">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        {/* Primary gradient blob - top right */}
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(63,51,105,0.15) 0%, rgba(63,51,105,0.05) 40%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Secondary gradient blob - bottom left */}
        <motion.div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(50,167,144,0.12) 0%, rgba(50,167,144,0.04) 40%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.15, 1],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Center glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(ellipse, rgba(255,255,255,1) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Automation Flow Lines - Background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.4 }}>
        <defs>
          <linearGradient id="flowGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#3F3369" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="flowGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#32A790" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* Curved automation flow path 1 */}
        <motion.path
          d="M-100,200 Q200,100 400,200 T800,150 T1200,250 T1600,200"
          fill="none"
          stroke="url(#flowGrad1)"
          strokeWidth="1"
          strokeDasharray="8 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />

        {/* Curved automation flow path 2 */}
        <motion.path
          d="M-100,500 Q300,400 500,500 T900,450 T1300,550 T1700,500"
          fill="none"
          stroke="url(#flowGrad2)"
          strokeWidth="1"
          strokeDasharray="8 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Moving data packets along paths */}
        <motion.circle
          r="4"
          fill="#3F3369"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            offsetDistance: ["0%", "100%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ offsetPath: "path('M-100,200 Q200,100 400,200 T800,150 T1200,250 T1600,200')" }}
        />

        <motion.circle
          r="4"
          fill="#32A790"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            offsetDistance: ["0%", "100%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
          }}
          style={{ offsetPath: "path('M-100,500 Q300,400 500,500 T900,450 T1300,550 T1700,500')" }}
        />
      </svg>

      {/* Animated Beam Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Beam 1 */}
        <motion.div
          className="absolute top-[20%] left-0 w-full h-px"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(63,51,105,0.3) 50%, transparent 100%)",
          }}
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "100%", opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 3,
          }}
        />

        {/* Beam 2 */}
        <motion.div
          className="absolute top-[60%] left-0 w-full h-px"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(50,167,144,0.3) 50%, transparent 100%)",
          }}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "-100%", opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
            repeatDelay: 2,
          }}
        />

        {/* Vertical Beam */}
        <motion.div
          className="absolute top-0 left-[30%] w-px h-full"
          style={{
            background: "linear-gradient(180deg, transparent 0%, rgba(63,51,105,0.2) 50%, transparent 100%)",
          }}
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: "100%", opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
            repeatDelay: 4,
          }}
        />
      </div>

      {/* Floating Automation Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Gear 1 */}
        <motion.div
          className="absolute top-[15%] left-[10%]"
          animate={{
            y: [0, -20, 0],
            rotate: 360,
          }}
          transition={{
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 8, repeat: Infinity, ease: "linear" },
          }}
        >
          <Settings className="w-8 h-8 text-[#3F3369] opacity-20" />
        </motion.div>

        {/* Floating Gear 2 */}
        <motion.div
          className="absolute top-[70%] left-[5%]"
          animate={{
            y: [0, 15, 0],
            rotate: -360,
          }}
          transition={{
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 10, repeat: Infinity, ease: "linear" },
          }}
        >
          <Settings className="w-6 h-6 text-[#32A790] opacity-20" />
        </motion.div>

        {/* Floating Chart Icon */}
        <motion.div
          className="absolute top-[25%] right-[8%]"
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <BarChart3 className="w-10 h-10 text-[#3F3369] opacity-15" />
        </motion.div>

        {/* Floating Checkmark */}
        <motion.div
          className="absolute top-[60%] right-[12%]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1.2, 1],
            opacity: [0, 0.3, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
          }}
        >
          <CheckCircle2 className="w-8 h-8 text-[#32A790]" />
        </motion.div>

        {/* Floating Zap */}
        <motion.div
          className="absolute top-[40%] left-[15%]"
          animate={{
            y: [0, -10, 0],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Zap className="w-6 h-6 text-[#32A790]" />
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: i % 2 === 0 ? "#3F3369" : "#32A790",
              left: `${10 + (i * 6)}%`,
              top: `${20 + (i % 5) * 15}%`,
            }}
            animate={{
              y: [0, -80, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 lg:pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-180px)]">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{
                background: "linear-gradient(135deg, rgba(63,51,105,0.1) 0%, rgba(50,167,144,0.1) 100%)",
                border: "1px solid rgba(63,51,105,0.2)",
              }}
            >
              <Sparkles className="w-4 h-4" style={{ color: "#3F3369" }} />
              <span className="text-sm font-medium" style={{ color: "#3F3369" }}>
                AI-Powered Automation
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
            >
              <span className="text-secondary">Automate &amp; Scale</span>
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(130deg, #3F3369 0%, #5a4d8a 30%, #32A790 100%)",
                }}
              >
                Your Business
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Transform manual workflows into intelligent automation. Drive exponential growth
              with AI-powered solutions that work 24/7 to accelerate your success.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              {/* Primary Button */}
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #3F3369 0%, #5a4d8a 100%)",
                  boxShadow: "0 10px 40px -10px rgba(63,51,105,0.5)",
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Automating
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(135deg, #5a4d8a 0%, #3F3369 100%)",
                  }}
                />
              </motion.button>

              {/* Secondary Button */}
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 bg-white font-semibold rounded-2xl flex items-center justify-center gap-3 transition-all duration-300"
                style={{
                  border: "2px solid #e5e7eb",
                  color: "#171717",
                  boxShadow: "0 4px 20px -5px rgba(0,0,0,0.1)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: "linear-gradient(135deg, #32A790 0%, #4bc4a8 100%)",
                  }}
                >
                  <Play className="w-4 h-4 text-white ml-0.5" fill="white" />
                </div>
                See It In Action
              </motion.button>
            </motion.div>

            {/* Stats with Animated Counters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-16 flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-12"
            >
              {[
                { value: 500, suffix: "+", label: "Businesses Automated" },
                { value: 85, suffix: "%", label: "Time Saved" },
                { value: 10, suffix: "x", label: "Growth Achieved" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div
                    className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent"
                    style={{
                      backgroundImage: "linear-gradient(135deg, #3F3369 0%, #32A790 100%)",
                    }}
                  >
                    {isVisible && <AnimatedCounter target={stat.value} suffix={stat.suffix} />}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced AI Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="relative flex justify-center items-center"
          >
            {/* Glow Background */}
            <motion.div
              className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(63,51,105,0.2) 0%, rgba(50,167,144,0.1) 40%, transparent 70%)",
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Main Visualization Container */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Rotating Ring 1 with Gears */}
              <motion.div
                className="absolute inset-0 m-auto w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full"
                style={{
                  border: "1px dashed rgba(63,51,105,0.3)",
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {/* Orbiting Automation Icons */}
                <motion.div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="w-6 h-6 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <Settings className="w-3 h-3 text-[#3F3369]" />
                  </div>
                </motion.div>
                <motion.div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
                  <div className="w-6 h-6 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <Zap className="w-3 h-3 text-[#32A790]" />
                  </div>
                </motion.div>
              </motion.div>

              {/* Rotating Ring 2 */}
              <motion.div
                className="absolute inset-0 m-auto w-[380px] h-[380px] md:w-[480px] md:h-[480px] rounded-full"
                style={{
                  border: "1px solid rgba(50,167,144,0.2)",
                }}
                animate={{ rotate: -360 }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {/* Orbiting Growth Icons */}
                <motion.div className="absolute top-1/2 -left-3 -translate-y-1/2">
                  <div className="w-6 h-6 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <TrendingUp className="w-3 h-3 text-[#32A790]" />
                  </div>
                </motion.div>
                <motion.div className="absolute top-1/2 -right-3 -translate-y-1/2">
                  <div className="w-6 h-6 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <BarChart3 className="w-3 h-3 text-[#3F3369]" />
                  </div>
                </motion.div>
              </motion.div>

              {/* Main Card */}
              <div
                className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-3xl p-[2px] overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(63,51,105,0.5) 0%, rgba(50,167,144,0.5) 100%)",
                }}
              >
                <div
                  className="w-full h-full rounded-[22px] flex items-center justify-center overflow-hidden relative"
                  style={{
                    background: "linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)",
                  }}
                >
                  {/* Automation & Growth SVG */}
                  <svg viewBox="0 0 300 300" className="w-full h-full p-6">
                    <defs>
                      <linearGradient id="nodeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3F3369" />
                        <stop offset="100%" stopColor="#5a4d8a" />
                      </linearGradient>
                      <linearGradient id="nodeGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#32A790" />
                        <stop offset="100%" stopColor="#4bc4a8" />
                      </linearGradient>
                      <linearGradient id="chartGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#32A790" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#32A790" stopOpacity="0.8" />
                      </linearGradient>
                      <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Animated Growth Chart Background */}
                    <motion.path
                      d="M40,250 L40,200 Q80,180 100,150 T160,120 T220,80 T260,50"
                      fill="none"
                      stroke="url(#nodeGrad2)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                    />

                    {/* Chart Fill Area */}
                    <motion.path
                      d="M40,250 L40,200 Q80,180 100,150 T160,120 T220,80 T260,50 L260,250 Z"
                      fill="url(#chartGrad)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.3 }}
                      transition={{ duration: 1, delay: 1.5 }}
                    />

                    {/* Growth Arrow */}
                    <motion.g
                      initial={{ opacity: 0, x: -20, y: 20 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      transition={{ duration: 0.5, delay: 2 }}
                    >
                      <motion.path
                        d="M240,70 L260,50 L250,50 M260,50 L260,60"
                        fill="none"
                        stroke="#32A790"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    </motion.g>

                    {/* Data Points on Chart */}
                    {[
                      { cx: 40, cy: 200 },
                      { cx: 100, cy: 150 },
                      { cx: 160, cy: 120 },
                      { cx: 220, cy: 80 },
                      { cx: 260, cy: 50 },
                    ].map((point, i) => (
                      <motion.circle
                        key={i}
                        cx={point.cx}
                        cy={point.cy}
                        r="6"
                        fill="white"
                        stroke="#32A790"
                        strokeWidth="2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.8 + i * 0.2, type: "spring" }}
                      />
                    ))}

                    {/* Central Automation Hub */}
                    <motion.circle
                      cx="150"
                      cy="180"
                      r="40"
                      fill="url(#nodeGrad1)"
                      filter="url(#softGlow)"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />

                    {/* Gear Icon in Center */}
                    <motion.g
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      style={{ transformOrigin: "150px 180px" }}
                    >
                      <path
                        d="M150,155 L153,158 L158,155 L158,148 L153,145 L150,148 Z M150,205 L147,202 L142,205 L142,212 L147,215 L150,212 Z M175,180 L172,177 L175,172 L182,172 L185,177 L182,180 Z M125,180 L128,183 L125,188 L118,188 L115,183 L118,180 Z"
                        fill="white"
                        opacity="0.9"
                      />
                      <circle cx="150" cy="180" r="15" fill="none" stroke="white" strokeWidth="3" opacity="0.9" />
                      <circle cx="150" cy="180" r="8" fill="white" opacity="0.9" />
                    </motion.g>

                    {/* Connection Lines from Hub to Chart */}
                    {[
                      { x2: 100, y2: 150 },
                      { x2: 160, y2: 120 },
                      { x2: 220, y2: 80 },
                    ].map((line, i) => (
                      <motion.line
                        key={i}
                        x1="150"
                        y1="180"
                        x2={line.x2}
                        y2={line.y2}
                        stroke="#3F3369"
                        strokeWidth="1"
                        strokeDasharray="4 2"
                        strokeOpacity="0.3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: [0, 1, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}

                    {/* Data Pulses from Hub */}
                    {[0, 1, 2].map((i) => (
                      <motion.circle
                        key={`pulse-${i}`}
                        r="4"
                        fill="#32A790"
                        initial={{ cx: 150, cy: 180, opacity: 0 }}
                        animate={{
                          cx: [150, 100 + i * 60, 150],
                          cy: [180, 150 - i * 35, 180],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.5,
                          ease: "easeInOut",
                        }}
                      />
                    ))}

                    {/* Percentage Labels */}
                    <motion.text
                      x="260"
                      y="40"
                      fill="#32A790"
                      fontSize="14"
                      fontWeight="bold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.5 }}
                    >
                      +85%
                    </motion.text>
                  </svg>

                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.8) 50%, transparent 60%)",
                    }}
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </div>

              {/* Floating Badge - Growth Chart */}
              <motion.div
                className="absolute -left-4 md:-left-12 top-4 bg-white rounded-2xl px-4 py-3"
                style={{
                  boxShadow: "0 10px 40px -10px rgba(0,0,0,0.15)",
                }}
                animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center relative overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, #32A790 0%, #4bc4a8 100%)",
                    }}
                  >
                    {/* Mini animated chart */}
                    <svg viewBox="0 0 40 40" className="w-8 h-8">
                      <motion.path
                        d="M5,30 L12,25 L20,20 L28,12 L35,8"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                      />
                      <motion.circle
                        cx="35"
                        cy="8"
                        r="3"
                        fill="white"
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.2, 1] }}
                        transition={{ duration: 0.5, delay: 1.5, repeat: Infinity, repeatDelay: 1.5 }}
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">Growth</div>
                    <div className="text-base font-bold text-gray-900 flex items-center gap-1">
                      <TrendingUp className="w-4 h-4 text-[#32A790]" />
                      312%
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge - Automation Status */}
              <motion.div
                className="absolute -right-4 md:-right-12 bottom-4 bg-white rounded-2xl px-4 py-3"
                style={{
                  boxShadow: "0 10px 40px -10px rgba(0,0,0,0.15)",
                }}
                animate={{ y: [0, 8, 0], x: [0, -4, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #3F3369 0%, #5a4d8a 100%)",
                    }}
                  >
                    {/* Animated gear */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      <Settings className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">Workflows</div>
                    <div className="text-base font-bold text-gray-900 flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4 text-[#32A790]" />
                      Active
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* New Badge - Tasks Completed */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 -bottom-8 bg-white rounded-2xl px-4 py-2"
                style={{
                  boxShadow: "0 10px 40px -10px rgba(0,0,0,0.15)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: [0, 5, 0] }}
                transition={{
                  opacity: { delay: 1 },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 },
                }}
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-8 h-8 rounded-lg flex items-center justify-center bg-green-100"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </motion.div>
                  <div className="text-sm font-semibold text-gray-700">
                    <span className="text-[#32A790]">1,247</span> tasks automated today
                  </div>
                </div>
              </motion.div>

              {/* Small Floating Dots */}
              {[
                { top: "5%", left: "25%", delay: 0 },
                { top: "85%", left: "15%", delay: 1 },
                { top: "10%", right: "20%", delay: 0.5 },
                { top: "80%", right: "25%", delay: 1.5 },
              ].map((pos, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    ...pos,
                    background: i % 2 === 0 ? "#3F3369" : "#32A790",
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: pos.delay,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(250,250,250,1) 0%, transparent 100%)",
        }}
      />
    </section>
  );
};

export default HeroSectionAutomated;
