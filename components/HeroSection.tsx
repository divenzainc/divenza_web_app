"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play } from "lucide-react";

const HeroSection = () => {
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

      {/* Animated Beam Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Beam 1 */}
        <motion.div
          className="absolute top-[20%] left-0 w-full h-[1px]"
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
          className="absolute top-[60%] left-0 w-full h-[1px]"
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
          className="absolute top-0 left-[30%] w-[1px] h-full"
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

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: i % 2 === 0 ? "#3F3369" : "#32A790",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
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
                AI-Powered Solutions
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
            >
              <span className="text-[#171717]">Transform Your</span>
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #3F3369 0%, #5a4d8a 40%, #32A790 100%)",
                }}
              >
                Digital Future
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Harness the power of artificial intelligence to revolutionize your business operations,
              enhance customer experiences, and drive unprecedented growth.
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
                  Get Started
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
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-16 flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-12"
            >
              {[
                { value: "500+", label: "Clients Worldwide" },
                { value: "99%", label: "Satisfaction Rate" },
                { value: "24/7", label: "Expert Support" },
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
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - AI Visualization */}
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
              {/* Rotating Ring 1 */}
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
              />

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
              />

              {/* Main Card */}
              <div
                className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-3xl p-[2px] overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(63,51,105,0.5) 0%, rgba(50,167,144,0.5) 100%)",
                }}
              >
                <div
                  className="w-full h-full rounded-[22px] flex items-center justify-center overflow-hidden"
                  style={{
                    background: "linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)",
                  }}
                >
                  {/* AI Neural Network Visualization */}
                  <svg
                    viewBox="0 0 300 300"
                    className="w-full h-full p-8"
                  >
                    <defs>
                      <linearGradient id="nodeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3F3369" />
                        <stop offset="100%" stopColor="#5a4d8a" />
                      </linearGradient>
                      <linearGradient id="nodeGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#32A790" />
                        <stop offset="100%" stopColor="#4bc4a8" />
                      </linearGradient>
                      <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Connection Lines */}
                    {[
                      { x1: 150, y1: 150, x2: 70, y2: 70 },
                      { x1: 150, y1: 150, x2: 230, y2: 70 },
                      { x1: 150, y1: 150, x2: 70, y2: 230 },
                      { x1: 150, y1: 150, x2: 230, y2: 230 },
                      { x1: 150, y1: 150, x2: 50, y2: 150 },
                      { x1: 150, y1: 150, x2: 250, y2: 150 },
                      { x1: 150, y1: 150, x2: 150, y2: 50 },
                      { x1: 150, y1: 150, x2: 150, y2: 250 },
                    ].map((line, i) => (
                      <motion.line
                        key={i}
                        x1={line.x1}
                        y1={line.y1}
                        x2={line.x2}
                        y2={line.y2}
                        stroke={i % 2 === 0 ? "#3F3369" : "#32A790"}
                        strokeWidth="1.5"
                        strokeOpacity="0.3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: [0, 1, 1, 0] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.2,
                          ease: "easeInOut",
                        }}
                      />
                    ))}

                    {/* Center Node */}
                    <motion.circle
                      cx="150"
                      cy="150"
                      r="35"
                      fill="url(#nodeGrad1)"
                      filter="url(#softGlow)"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />

                    {/* Center Inner Ring */}
                    <motion.circle
                      cx="150"
                      cy="150"
                      r="25"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeOpacity="0.6"
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                    />

                    {/* AI Text */}
                    <text
                      x="150"
                      y="156"
                      textAnchor="middle"
                      fill="white"
                      fontSize="18"
                      fontWeight="bold"
                      fontFamily="system-ui, sans-serif"
                    >
                      AI
                    </text>

                    {/* Outer Nodes */}
                    {[
                      { cx: 70, cy: 70 },
                      { cx: 230, cy: 70 },
                      { cx: 70, cy: 230 },
                      { cx: 230, cy: 230 },
                      { cx: 50, cy: 150 },
                      { cx: 250, cy: 150 },
                      { cx: 150, cy: 50 },
                      { cx: 150, cy: 250 },
                    ].map((node, i) => (
                      <motion.circle
                        key={i}
                        cx={node.cx}
                        cy={node.cy}
                        r="12"
                        fill={i % 2 === 0 ? "url(#nodeGrad2)" : "url(#nodeGrad1)"}
                        filter="url(#softGlow)"
                        animate={{
                          scale: [0.8, 1, 0.8],
                          opacity: [0.6, 1, 0.6],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.15,
                        }}
                      />
                    ))}

                    {/* Data Pulses */}
                    {[0, 1, 2, 3].map((i) => (
                      <motion.circle
                        key={`pulse-${i}`}
                        r="4"
                        fill="white"
                        initial={{ cx: 150, cy: 150, opacity: 0 }}
                        animate={{
                          cx: [150, 70 + (i * 50), 150],
                          cy: [150, 70 + (i * 50), 150],
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

              {/* Floating Badge - Top Left */}
              <motion.div
                className="absolute -left-4 md:-left-8 top-8 bg-white rounded-2xl px-4 py-3"
                style={{
                  boxShadow: "0 10px 40px -10px rgba(0,0,0,0.15)",
                }}
                animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #3F3369 0%, #5a4d8a 100%)",
                    }}
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">Rating</div>
                    <div className="text-base font-bold text-gray-900">4.9/5</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge - Bottom Right */}
              <motion.div
                className="absolute -right-4 md:-right-8 bottom-8 bg-white rounded-2xl px-4 py-3"
                style={{
                  boxShadow: "0 10px 40px -10px rgba(0,0,0,0.15)",
                }}
                animate={{ y: [0, 8, 0], x: [0, -4, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #32A790 0%, #4bc4a8 100%)",
                    }}
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">Speed</div>
                    <div className="text-base font-bold text-gray-900">10x Faster</div>
                  </div>
                </div>
              </motion.div>

              {/* Small Floating Dots */}
              {[
                { top: "10%", left: "20%", delay: 0 },
                { top: "80%", left: "10%", delay: 1 },
                { top: "15%", right: "15%", delay: 0.5 },
                { top: "75%", right: "20%", delay: 1.5 },
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

export default HeroSection;
