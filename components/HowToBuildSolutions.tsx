"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Search,
  Compass,
  Palette,
  Code2,
  TestTube,
  Rocket,
  HeartHandshake,
  RefreshCw,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  RotateCcw,
} from "lucide-react";

interface Phase {
  id: string;
  number: number;
  title: string;
  shortTitle: string;
  description: string;
  icon: React.ReactNode;
  color: "primary" | "secondary";
}

const phases: Phase[] = [
  {
    id: "discovery",
    number: 1,
    title: "Business Analysis & Discovery",
    shortTitle: "Discovery",
    description: "Deep dive into your business goals, challenges, and requirements to understand your unique needs.",
    icon: <Search className="w-6 h-6" />,
    color: "primary",
  },
  {
    id: "architecture",
    number: 2,
    title: "Solution Architecture & Planning",
    shortTitle: "Architecture",
    description: "Design scalable, efficient solutions with clear roadmaps and technical specifications.",
    icon: <Compass className="w-6 h-6" />,
    color: "secondary",
  },
  {
    id: "design",
    number: 3,
    title: "UI/UX Design",
    shortTitle: "Design",
    description: "Create intuitive, beautiful interfaces that delight users and drive engagement.",
    icon: <Palette className="w-6 h-6" />,
    color: "primary",
  },
  {
    id: "development",
    number: 4,
    title: "Development",
    shortTitle: "Development",
    description: "Build robust, clean code using modern technologies and best practices.",
    icon: <Code2 className="w-6 h-6" />,
    color: "secondary",
  },
  {
    id: "testing",
    number: 5,
    title: "Testing & Quality Assurance",
    shortTitle: "Testing",
    description: "Rigorous testing to ensure reliability, performance, and security.",
    icon: <TestTube className="w-6 h-6" />,
    color: "primary",
  },
  {
    id: "deployment",
    number: 6,
    title: "Deployment & Integration",
    shortTitle: "Deployment",
    description: "Seamless deployment and integration with your existing systems and workflows.",
    icon: <Rocket className="w-6 h-6" />,
    color: "secondary",
  },
  {
    id: "support",
    number: 7,
    title: "Support & Continuous Improvement",
    shortTitle: "Support",
    description: "Ongoing support, monitoring, and improvements as your business evolves.",
    icon: <HeartHandshake className="w-6 h-6" />,
    color: "primary",
  },
];

const colors = {
  primary: {
    bg: "linear-gradient(135deg, #3F3369 0%, #5a4d8a 100%)",
    bgLight: "rgba(63,51,105,0.1)",
    text: "#3F3369",
    shadow: "rgba(63,51,105,0.3)",
  },
  secondary: {
    bg: "linear-gradient(135deg, #32A790 0%, #4bc4a8 100%)",
    bgLight: "rgba(50,167,144,0.1)",
    text: "#32A790",
    shadow: "rgba(50,167,144,0.3)",
  },
};

// Phase Card Component
const PhaseCard = ({
  phase,
  index,
  isActive,
  onHover
}: {
  phase: Phase;
  index: number;
  isActive: boolean;
  onHover: (index: number | null) => void;
}) => {
  const colorSet = colors[phase.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      className="relative group"
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400 }}
        className="relative cursor-pointer"
      >
        {/* Card */}
        <div
          className={`relative p-6 rounded-2xl transition-all duration-300 ${
            isActive ? "shadow-2xl" : "shadow-lg"
          }`}
          style={{
            background: isActive ? colorSet.bg : "linear-gradient(145deg, #ffffff 0%, #fafafa 100%)",
            boxShadow: isActive
              ? `0 25px 50px -12px ${colorSet.shadow}`
              : `0 10px 30px -10px ${colorSet.shadow}`,
            border: isActive ? "none" : "1px solid rgba(63,51,105,0.08)",
          }}
        >
          {/* Number badge */}
          <div
            className={`absolute -top-3 -left-3 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold shadow-lg ${
              isActive ? "bg-white" : "text-white"
            }`}
            style={{
              background: isActive ? "#ffffff" : colorSet.bg,
              color: isActive ? colorSet.text : "#ffffff",
              boxShadow: `0 8px 20px -5px ${colorSet.shadow}`,
            }}
          >
            {phase.number}
          </div>

          {/* Icon and Title Row */}
          <div className="flex items-center gap-4 mb-3 mt-2">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                isActive ? "bg-white/20" : ""
              }`}
              style={{
                background: isActive ? "rgba(255,255,255,0.2)" : colorSet.bgLight,
                color: isActive ? "#ffffff" : colorSet.text,
              }}
            >
              {phase.icon}
            </div>
            <h3
              className={`font-bold text-lg ${isActive ? "text-white" : ""}`}
              style={{ color: isActive ? "#ffffff" : colorSet.text }}
            >
              {phase.shortTitle}
            </h3>
          </div>

          {/* Description */}
          <p
            className={`text-sm leading-relaxed ${
              isActive ? "text-white/90" : "text-gray-600"
            }`}
          >
            {phase.description}
          </p>

          {/* Full title on hover */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: isActive ? 1 : 0, height: isActive ? "auto" : 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="text-xs text-white/70 mt-3 pt-3 border-t border-white/20">
              {phase.title}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Arrow connector for desktop
const ArrowConnector = ({ direction = "right", delay = 0 }: { direction?: "right" | "down" | "left"; delay?: number }) => {
  const Icon = direction === "down" ? ChevronDown : ChevronRight;
  const rotation = direction === "left" ? "rotate-180" : "";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      className={`flex items-center justify-center ${direction === "down" ? "py-4" : "px-2"}`}
    >
      <motion.div
        animate={{
          x: direction === "right" ? [0, 5, 0] : direction === "left" ? [0, -5, 0] : 0,
          y: direction === "down" ? [0, 5, 0] : 0
        }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className={rotation}
      >
        <Icon className="w-6 h-6 text-[#32A790]" />
      </motion.div>
    </motion.div>
  );
};

// Desktop Flow Layout
const DesktopFlowView = ({ activePhase, setActivePhase }: { activePhase: number | null; setActivePhase: (phase: number | null) => void }) => {
  const topRow = phases.slice(0, 4); // 1-4
  const bottomRow = phases.slice(4); // 5-7

  return (
    <div className="hidden lg:block">
      {/* Top Row: 1 -> 2 -> 3 -> 4 */}
      <div className="flex items-stretch justify-center gap-2 mb-6">
        {topRow.map((phase, index) => (
          <div key={phase.id} className="flex items-center">
            <div className="w-[260px]">
              <PhaseCard
                phase={phase}
                index={index}
                isActive={activePhase === index}
                onHover={setActivePhase}
              />
            </div>
            {index < topRow.length - 1 && <ArrowConnector direction="right" delay={index * 0.1} />}
          </div>
        ))}
      </div>

      {/* Connecting Arrow Down (right side) */}
      <div className="flex justify-end pr-[130px]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="w-0.5 h-8 bg-gradient-to-b from-[#32A790] to-[#3F3369]" />
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-[#3F3369]" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Row: 5 <- 6 <- 7 (displayed right to left) */}
      <div className="flex items-stretch justify-center gap-2 mt-6">
        {/* Empty space to align with top row */}
        <div className="w-[260px] flex items-center justify-center">
          {/* Loop back indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center gap-2 p-4"
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, rgba(63,51,105,0.1) 0%, rgba(50,167,144,0.1) 100%)",
                border: "2px dashed rgba(50,167,144,0.3)",
              }}
            >
              <RotateCcw className="w-7 h-7 text-[#3F3369]" />
            </motion.div>
            <span className="text-xs font-medium text-gray-500">Repeat</span>
          </motion.div>
        </div>

        <ArrowConnector direction="left" delay={0.6} />

        {bottomRow.map((phase, index) => {
          const actualIndex = index + 4;
          return (
            <div key={phase.id} className="flex items-center">
              <div className="w-[260px]">
                <PhaseCard
                  phase={phase}
                  index={actualIndex}
                  isActive={activePhase === actualIndex}
                  onHover={setActivePhase}
                />
              </div>
              {index < bottomRow.length - 1 && <ArrowConnector direction="left" delay={0.5 + index * 0.1} />}
            </div>
          );
        }).reverse()}
      </div>

      {/* Connecting Arrow Up (left side) - back to step 1 */}
      <div className="flex justify-start pl-[130px]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="flex flex-col items-center"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="rotate-180"
          >
            <ChevronDown className="w-6 h-6 text-[#32A790]" />
          </motion.div>
          <div className="w-0.5 h-8 bg-gradient-to-t from-[#32A790] to-[#3F3369]" />
        </motion.div>
      </div>
    </div>
  );
};

// Enhanced Mobile Timeline View
const MobileTimelineView = ({ activePhase, setActivePhase }: { activePhase: number | null; setActivePhase: (phase: number | null) => void }) => {
  return (
    <div className="lg:hidden">
      {/* Progress indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-1 mb-8"
      >
        {phases.map((phase, index) => (
          <motion.div
            key={phase.id}
            className="relative"
            whileHover={{ scale: 1.2 }}
            onClick={() => setActivePhase(activePhase === index ? null : index)}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold cursor-pointer transition-all duration-300 ${
                activePhase === index ? "scale-125" : ""
              }`}
              style={{
                background: activePhase === index
                  ? colors[phase.color].bg
                  : "rgba(63,51,105,0.1)",
                color: activePhase === index ? "#ffffff" : colors[phase.color].text,
                boxShadow: activePhase === index
                  ? `0 8px 20px -5px ${colors[phase.color].shadow}`
                  : "none",
              }}
            >
              {phase.number}
            </div>
            {index < phases.length - 1 && (
              <div
                className="absolute top-1/2 left-full w-1 h-0.5 -translate-y-1/2"
                style={{
                  background: `linear-gradient(90deg, ${colors[phase.color].text}, ${colors[phases[index + 1].color].text})`,
                  opacity: 0.3
                }}
              />
            )}
          </motion.div>
        ))}
        {/* Loop indicator */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="ml-2"
        >
          <RefreshCw className="w-4 h-4 text-[#32A790]" />
        </motion.div>
      </motion.div>

      {/* Cards */}
      <div className="space-y-4">
        {phases.map((phase, index) => {
          const colorSet = colors[phase.color];
          const isActive = activePhase === index;

          return (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <motion.div
                whileTap={{ scale: 0.98 }}
                onClick={() => setActivePhase(isActive ? null : index)}
                className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
                  isActive ? "shadow-xl" : "shadow-md"
                }`}
                style={{
                  background: isActive ? colorSet.bg : "linear-gradient(145deg, #ffffff 0%, #fafafa 100%)",
                  border: isActive ? "none" : "1px solid rgba(63,51,105,0.08)",
                }}
              >
                {/* Main content */}
                <div className="p-5">
                  <div className="flex items-center gap-4">
                    {/* Number & Icon */}
                    <div className="relative">
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                          isActive ? "bg-white/20" : ""
                        }`}
                        style={{
                          background: isActive ? "rgba(255,255,255,0.2)" : colorSet.bgLight,
                          color: isActive ? "#ffffff" : colorSet.text,
                        }}
                      >
                        {phase.icon}
                      </div>
                      <div
                        className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          isActive ? "bg-white" : "text-white"
                        }`}
                        style={{
                          background: isActive ? "#ffffff" : colorSet.bg,
                          color: isActive ? colorSet.text : "#ffffff",
                        }}
                      >
                        {phase.number}
                      </div>
                    </div>

                    {/* Title */}
                    <div className="flex-1">
                      <h3
                        className={`font-bold text-lg ${isActive ? "text-white" : ""}`}
                        style={{ color: isActive ? "#ffffff" : colorSet.text }}
                      >
                        {phase.shortTitle}
                      </h3>
                      <p className={`text-xs ${isActive ? "text-white/70" : "text-gray-500"}`}>
                        Step {phase.number} of 7
                      </p>
                    </div>

                    {/* Expand indicator */}
                    <motion.div
                      animate={{ rotate: isActive ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight
                        className={`w-5 h-5 ${isActive ? "text-white/70" : "text-gray-400"}`}
                      />
                    </motion.div>
                  </div>

                  {/* Expandable content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isActive ? "auto" : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 mt-4 border-t border-white/20">
                      <p className="text-sm text-white/90 leading-relaxed mb-3">
                        {phase.description}
                      </p>
                      <p className="text-xs text-white/60">
                        {phase.title}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Progress bar */}
                <div className="h-1" style={{ background: "rgba(0,0,0,0.1)" }}>
                  <motion.div
                    className="h-full"
                    style={{ background: isActive ? "rgba(255,255,255,0.5)" : colorSet.bg }}
                    initial={{ width: "0%" }}
                    whileInView={{ width: `${((index + 1) / phases.length) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>

              {/* Connector arrow */}
              {index < phases.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="flex justify-center py-2"
                >
                  <motion.div
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.1 }}
                  >
                    <ChevronDown className="w-5 h-5 text-[#32A790]" />
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Loop back indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center mt-8 pt-6 border-t border-gray-100"
      >
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 rounded-full flex items-center justify-center mb-3"
          style={{
            background: "linear-gradient(135deg, rgba(63,51,105,0.08) 0%, rgba(50,167,144,0.08) 100%)",
            border: "2px dashed rgba(50,167,144,0.3)",
          }}
        >
          <RotateCcw className="w-6 h-6 text-[#3F3369]" />
        </motion.div>
        <p className="text-sm font-medium text-[#3F3369]">Back to Discovery</p>
        <p className="text-xs text-gray-500 mt-1">The cycle continues as your business evolves</p>
      </motion.div>
    </div>
  );
};

const HowToBuildSolutions = () => {
  const [activePhase, setActivePhase] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-[#fafafa] to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 -left-20 w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(63,51,105,0.06) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(50,167,144,0.06) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
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
              background: "linear-gradient(135deg, rgba(63,51,105,0.1) 0%, rgba(50,167,144,0.1) 100%)",
              border: "1px solid rgba(63,51,105,0.2)",
            }}
          >
            <RefreshCw className="w-4 h-4" style={{ color: "#3F3369" }} />
            <span className="text-sm font-medium" style={{ color: "#3F3369" }}>
              Our Process
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-secondary">How We Build </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(130deg, #3F3369 0%, #32A790 100%)",
              }}
            >
              Your Solutions
            </span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            A proven, iterative process that evolves with your business. From discovery to deployment and beyond
            —we're with you at every step of your journey.
          </p>
        </motion.div>

        {/* Desktop Flow View */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <DesktopFlowView activePhase={activePhase} setActivePhase={setActivePhase} />
        </motion.div>

        {/* Mobile Timeline View */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <MobileTimelineView activePhase={activePhase} setActivePhase={setActivePhase} />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-2xl transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #3F3369 0%, #5a4d8a 100%)",
              boxShadow: "0 10px 40px -10px rgba(63,51,105,0.5)",
            }}
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToBuildSolutions;
