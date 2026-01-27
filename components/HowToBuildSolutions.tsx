"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
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
  Sparkles,
} from "lucide-react";

interface Phase {
  id: string;
  number: number;
  title: string;
  shortTitle: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  shadowColor: string;
}

const phases: Phase[] = [
  {
    id: "discovery",
    number: 1,
    title: "Business Analysis & Discovery",
    shortTitle: "Discovery",
    description: "Deep dive into your business goals, challenges, and requirements to understand your unique needs.",
    icon: <Search className="w-6 h-6" />,
    gradient: "from-[#3F3369] to-[#5a4d8a]",
    shadowColor: "rgba(63,51,105,0.4)",
  },
  {
    id: "architecture",
    number: 2,
    title: "Solution Architecture & Planning",
    shortTitle: "Architecture",
    description: "Design scalable, efficient solutions with clear roadmaps and technical specifications.",
    icon: <Compass className="w-6 h-6" />,
    gradient: "from-[#5a4d8a] to-[#32A790]",
    shadowColor: "rgba(90,77,138,0.4)",
  },
  {
    id: "design",
    number: 3,
    title: "UI/UX Design",
    shortTitle: "Design",
    description: "Create intuitive, beautiful interfaces that delight users and drive engagement.",
    icon: <Palette className="w-6 h-6" />,
    gradient: "from-[#32A790] to-[#4bc4a8]",
    shadowColor: "rgba(50,167,144,0.4)",
  },
  {
    id: "development",
    number: 4,
    title: "Development",
    shortTitle: "Development",
    description: "Build robust, clean code using modern technologies and best practices.",
    icon: <Code2 className="w-6 h-6" />,
    gradient: "from-[#4bc4a8] to-[#32A790]",
    shadowColor: "rgba(75,196,168,0.4)",
  },
  {
    id: "testing",
    number: 5,
    title: "Testing & Quality Assurance",
    shortTitle: "Testing",
    description: "Rigorous testing to ensure reliability, performance, and security.",
    icon: <TestTube className="w-6 h-6" />,
    gradient: "from-[#32A790] to-[#3F3369]",
    shadowColor: "rgba(50,167,144,0.35)",
  },
  {
    id: "deployment",
    number: 6,
    title: "Deployment & Integration",
    shortTitle: "Deployment",
    description: "Seamless deployment and integration with your existing systems and workflows.",
    icon: <Rocket className="w-6 h-6" />,
    gradient: "from-[#3F3369] to-[#5a4d8a]",
    shadowColor: "rgba(63,51,105,0.4)",
  },
  {
    id: "support",
    number: 7,
    title: "Support & Continuous Improvement",
    shortTitle: "Support",
    description: "Ongoing support, monitoring, and improvements as your business evolves.",
    icon: <HeartHandshake className="w-6 h-6" />,
    gradient: "from-[#5a4d8a] to-[#3F3369]",
    shadowColor: "rgba(90,77,138,0.4)",
  },
];

// Desktop Circular Layout with SVG Arrows
const DesktopCircularView = ({ activePhase, setActivePhase }: { activePhase: number | null; setActivePhase: (phase: number | null) => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ centerX: 0, centerY: 0, radius: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      // Fixed radius for consistent circle
      const radius = Math.min(rect.width, rect.height) / 2 - 120;

      setDimensions({ centerX, centerY, radius });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Calculate position for each phase - evenly distributed
  const getPosition = (index: number) => {
    // Start from top (-90 degrees) and go clockwise
    const anglePerStep = 360 / phases.length;
    const angle = (index * anglePerStep - 90) * (Math.PI / 180);
    return {
      x: dimensions.centerX + dimensions.radius * Math.cos(angle),
      y: dimensions.centerY + dimensions.radius * Math.sin(angle),
      angle: index * anglePerStep - 90,
    };
  };

  // Create arc path between two points following the circle
  const createArcPath = (index: number) => {
    const startPos = getPosition(index);
    const endIndex = (index + 1) % phases.length;
    const endPos = getPosition(endIndex);

    // Calculate the arc - we want to follow the circle's curvature
    const cardSize = 55; // Half of card size for offset

    // Start point - offset from card edge
    const startAngle = (index * (360 / phases.length) - 90) * (Math.PI / 180);
    const endAngle = (endIndex * (360 / phases.length) - 90) * (Math.PI / 180);

    // Offset points to start/end at card edges
    const startX = dimensions.centerX + (dimensions.radius + cardSize) * Math.cos(startAngle + 0.15);
    const startY = dimensions.centerY + (dimensions.radius + cardSize) * Math.sin(startAngle + 0.15);
    const endX = dimensions.centerX + (dimensions.radius + cardSize) * Math.cos(endAngle - 0.15);
    const endY = dimensions.centerY + (dimensions.radius + cardSize) * Math.sin(endAngle - 0.15);

    // Control point for quadratic curve - push outward from circle
    const midAngle = (startAngle + endAngle) / 2;
    // Handle wrap around for last segment
    const adjustedMidAngle = index === phases.length - 1
      ? (startAngle + endAngle + 2 * Math.PI) / 2
      : midAngle;

    const curveRadius = dimensions.radius + cardSize + 50; // Push curve outward
    const controlX = dimensions.centerX + curveRadius * Math.cos(adjustedMidAngle);
    const controlY = dimensions.centerY + curveRadius * Math.sin(adjustedMidAngle);

    return `M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`;
  };

  // Determine tooltip position based on phase location
  const getTooltipPosition = (index: number): "bottom" | "top" | "left" | "right" => {
    const pos = getPosition(index);
    const angle = pos.angle;

    // Top area
    if (angle >= -135 && angle <= -45) return "bottom";
    // Right area
    if (angle > -45 && angle <= 45) return "left";
    // Bottom area
    if (angle > 45 && angle <= 135) return "top";
    // Left area
    return "right";
  };

  const positions = phases.map((_, i) => getPosition(i));

  return (
    <div ref={containerRef} className="relative w-full h-[700px] hidden lg:flex items-center justify-center">
      {/* SVG for arrows */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: "visible" }}>
        <defs>
          {/* Arrow marker - Primary color */}
          <marker
            id="arrowhead-primary"
            markerWidth="12"
            markerHeight="12"
            refX="10"
            refY="6"
            orient="auto"
            markerUnits="userSpaceOnUse"
          >
            <path
              d="M2,2 L10,6 L2,10 L4,6 Z"
              fill="#3F3369"
            />
          </marker>
          {/* Arrow marker - Secondary color */}
          <marker
            id="arrowhead-secondary"
            markerWidth="12"
            markerHeight="12"
            refX="10"
            refY="6"
            orient="auto"
            markerUnits="userSpaceOnUse"
          >
            <path
              d="M2,2 L10,6 L2,10 L4,6 Z"
              fill="#32A790"
            />
          </marker>
          {/* Glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Arrow paths between phases */}
        {dimensions.radius > 0 && phases.map((_, index) => {
          const pathD = createArcPath(index);
          const isPrimary = index < 3 || index === 6;

          return (
            <g key={`arrow-${index}`}>
              {/* Arrow path with arrowhead */}
              <motion.path
                d={pathD}
                fill="none"
                stroke={isPrimary ? "#3F3369" : "#32A790"}
                strokeWidth="2.5"
                strokeLinecap="round"
                markerEnd={isPrimary ? "url(#arrowhead-primary)" : "url(#arrowhead-secondary)"}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.7 }}
                transition={{ duration: 1, delay: index * 0.15 }}
              />
              {/* Animated particle along the path */}
              <motion.circle
                r="4"
                fill={isPrimary ? "#32A790" : "#3F3369"}
                filter="url(#glow)"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  offsetDistance: ["0%", "100%"],
                }}
                transition={{
                  duration: 2.5,
                  delay: index * 0.35,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  offsetPath: `path('${pathD}')`,
                }}
              />
            </g>
          );
        })}
      </svg>

      {/* Phase nodes */}
      {dimensions.radius > 0 && phases.map((phase, index) => {
        const pos = positions[index];
        const tooltipPos = getTooltipPosition(index);

        // Tooltip positioning classes
        const tooltipClasses: Record<string, string> = {
          bottom: "top-full left-1/2 -translate-x-1/2 mt-4",
          top: "bottom-full left-1/2 -translate-x-1/2 mb-4",
          left: "right-full top-1/2 -translate-y-1/2 mr-4",
          right: "left-full top-1/2 -translate-y-1/2 ml-4",
        };

        // Arrow positioning for tooltip
        const arrowClasses: Record<string, string> = {
          bottom: "absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45",
          top: "absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45",
          left: "absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rotate-45",
          right: "absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rotate-45",
        };

        const arrowBorders: Record<string, React.CSSProperties> = {
          bottom: { borderTop: "1px solid rgba(63,51,105,0.1)", borderLeft: "1px solid rgba(63,51,105,0.1)" },
          top: { borderBottom: "1px solid rgba(63,51,105,0.1)", borderRight: "1px solid rgba(63,51,105,0.1)" },
          left: { borderTop: "1px solid rgba(63,51,105,0.1)", borderRight: "1px solid rgba(63,51,105,0.1)" },
          right: { borderBottom: "1px solid rgba(63,51,105,0.1)", borderLeft: "1px solid rgba(63,51,105,0.1)" },
        };

        return (
          <motion.div
            key={phase.id}
            className="absolute z-20"
            style={{
              left: pos.x,
              top: pos.y,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
            onMouseEnter={() => setActivePhase(index)}
            onMouseLeave={() => setActivePhase(null)}
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="relative cursor-pointer"
            >
              {/* Phase card */}
              <div
                className={`w-[100px] h-[100px] rounded-2xl flex flex-col items-center justify-center transition-all duration-300 ${
                  activePhase === index ? "shadow-2xl" : "shadow-lg"
                }`}
                style={{
                  background: activePhase === index
                    ? `linear-gradient(135deg, ${phase.gradient.includes("3F3369") ? "#3F3369" : "#32A790"} 0%, ${phase.gradient.includes("32A790") ? "#32A790" : "#5a4d8a"} 100%)`
                    : "linear-gradient(145deg, #ffffff 0%, #fafafa 100%)",
                  boxShadow: activePhase === index
                    ? `0 20px 40px -10px ${phase.shadowColor}`
                    : `0 8px 25px -8px ${phase.shadowColor}`,
                  border: activePhase === index ? "none" : "1px solid rgba(63,51,105,0.1)",
                }}
              >
                {/* Number badge */}
                <div
                  className={`absolute -top-3 -right-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                    activePhase === index ? "bg-white text-[#3F3369]" : "text-white"
                  }`}
                  style={{
                    background: activePhase === index
                      ? "#ffffff"
                      : `linear-gradient(135deg, #3F3369 0%, #32A790 100%)`,
                    boxShadow: "0 4px 12px -3px rgba(63,51,105,0.4)",
                  }}
                >
                  {phase.number}
                </div>

                {/* Icon */}
                <div className={activePhase === index ? "text-white" : "text-[#3F3369]"}>
                  {phase.icon}
                </div>

                {/* Short title */}
                <span
                  className={`text-xs font-semibold mt-2 text-center px-2 leading-tight ${
                    activePhase === index ? "text-white" : "text-gray-700"
                  }`}
                >
                  {phase.shortTitle}
                </span>
              </div>

              {/* Tooltip on hover */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: activePhase === index ? 1 : 0,
                  scale: activePhase === index ? 1 : 0.9,
                }}
                transition={{ duration: 0.2 }}
                className={`absolute ${tooltipClasses[tooltipPos]} w-64 p-4 rounded-xl z-30 pointer-events-none`}
                style={{
                  background: "linear-gradient(145deg, #ffffff 0%, #fafafa 100%)",
                  boxShadow: "0 15px 40px -10px rgba(63,51,105,0.25)",
                  border: "1px solid rgba(63,51,105,0.1)",
                }}
              >
                <h4 className="font-bold text-[#3F3369] text-sm mb-2">{phase.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{phase.description}</p>

                {/* Arrow pointing to card */}
                <div
                  className={arrowClasses[tooltipPos]}
                  style={{
                    background: "#ffffff",
                    ...arrowBorders[tooltipPos],
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

// Mobile Timeline View
const MobileTimelineView = ({ activePhase, setActivePhase }: { activePhase: number | null; setActivePhase: (phase: number | null) => void }) => {
  return (
    <div className="lg:hidden relative">
      {/* Vertical line with animated gradient */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3F3369] via-[#32A790] to-[#3F3369]">
        {/* Animated particles along the line */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
            style={{
              background: "linear-gradient(135deg, #32A790 0%, #4bc4a8 100%)",
              boxShadow: "0 0 10px 2px rgba(50,167,144,0.5)",
            }}
            animate={{
              top: ["0%", "100%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 4,
              delay: i * 1.3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Timeline items */}
      <div className="space-y-6">
        {phases.map((phase, index) => (
          <motion.div
            key={phase.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-20"
            onClick={() => setActivePhase(activePhase === index ? null : index)}
          >
            {/* Node on the timeline */}
            <motion.div
              className="absolute left-4 top-0 -translate-x-1/2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white cursor-pointer"
                style={{
                  background: `linear-gradient(135deg, ${phase.gradient.includes("3F3369") ? "#3F3369" : "#32A790"} 0%, ${phase.gradient.includes("32A790") ? "#32A790" : "#5a4d8a"} 100%)`,
                  boxShadow: `0 6px 20px -5px ${phase.shadowColor}`,
                }}
              >
                <span className="text-sm font-bold">{phase.number}</span>
              </div>

              {/* Pulse animation for active */}
              {activePhase === index && (
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: `linear-gradient(135deg, ${phase.gradient.includes("3F3369") ? "#3F3369" : "#32A790"} 0%, ${phase.gradient.includes("32A790") ? "#32A790" : "#5a4d8a"} 100%)`,
                  }}
                  animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
            </motion.div>

            {/* Content card */}
            <motion.div
              className="rounded-2xl p-5 cursor-pointer transition-all duration-300"
              style={{
                background: activePhase === index
                  ? "linear-gradient(145deg, #ffffff 0%, #f8f8f8 100%)"
                  : "linear-gradient(145deg, #ffffff 0%, #fafafa 100%)",
                boxShadow: activePhase === index
                  ? `0 15px 35px -10px ${phase.shadowColor}`
                  : "0 4px 15px -5px rgba(0,0,0,0.08)",
                border: activePhase === index
                  ? `2px solid ${phase.gradient.includes("32A790") ? "rgba(50,167,144,0.3)" : "rgba(63,51,105,0.2)"}`
                  : "1px solid rgba(63,51,105,0.08)",
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${phase.gradient} text-white`}
                  style={{
                    boxShadow: `0 6px 15px -5px ${phase.shadowColor}`,
                  }}
                >
                  {phase.icon}
                </div>
                <h4 className="font-bold text-[#3F3369] text-base flex-1">{phase.shortTitle}</h4>
                <motion.div
                  animate={{ rotate: activePhase === index ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </motion.div>
              </div>

              <motion.div
                initial={false}
                animate={{
                  height: activePhase === index ? "auto" : 0,
                  opacity: activePhase === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-sm text-gray-600 leading-relaxed mt-3 border-t border-gray-100 pt-3">
                  {phase.description}
                </p>
                <p className="text-xs text-[#3F3369] font-medium mt-2">{phase.title}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Loop back indicator at bottom - subtle */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-2 mt-8 pt-4"
      >
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <RefreshCw className="w-4 h-4 text-[#32A790]" />
        </motion.div>
        <span className="text-xs text-gray-500">The cycle continues...</span>
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
      <div className="absolute inset-0 pointer-events-none">
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

        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-[10%] right-[10%]"
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles className="w-8 h-8 text-[#32A790] opacity-10" />
        </motion.div>
        <motion.div
          className="absolute bottom-[20%] left-[5%]"
          animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <RefreshCw className="w-10 h-10 text-[#3F3369] opacity-10" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
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

        {/* Desktop Circular View */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <DesktopCircularView activePhase={activePhase} setActivePhase={setActivePhase} />
        </motion.div>

        {/* Mobile Timeline View */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <MobileTimelineView activePhase={activePhase} setActivePhase={setActivePhase} />
        </motion.div>

        {/* Bottom CTA - Simple */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12 lg:mt-8"
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
