"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Quote,
  Star,
  Users,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Building2,
  Sparkles,
} from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  industry: string;
  image: string;
  rating: number;
  feedback: string;
  highlight: string;
  color: "primary" | "secondary";
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CEO",
    company: "TechVentures Inc",
    industry: "Technology",
    image: "/testimonials/avatar1.jpg",
    rating: 5,
    feedback:
      "Divenza transformed our entire digital infrastructure. Their team didn't just deliver a product—they understood our vision and made it reality. The attention to detail and commitment to excellence exceeded all expectations.",
    highlight: "300% increase in operational efficiency",
    color: "primary",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder",
    company: "GreenLeaf Organics",
    industry: "E-Commerce",
    image: "/testimonials/avatar2.jpg",
    rating: 5,
    feedback:
      "Working with Divenza felt like having an extension of our own team. They built our e-commerce platform from scratch, and the results speak for themselves. Sales doubled within the first quarter of launch.",
    highlight: "2x revenue growth in 3 months",
    color: "secondary",
  },
  {
    id: 3,
    name: "Amanda Rodriguez",
    role: "Operations Director",
    company: "Swift Logistics",
    industry: "Logistics",
    image: "/testimonials/avatar3.jpg",
    rating: 5,
    feedback:
      "The DiTech solution revolutionized how we manage our multi-branch operations. Real-time tracking, seamless integration, and incredible support. Divenza delivers what they promise—and then some.",
    highlight: "50% reduction in operational costs",
    color: "primary",
  },
  {
    id: 4,
    name: "James Thompson",
    role: "Marketing Head",
    company: "Bloom Beauty",
    industry: "Retail",
    image: "/testimonials/avatar4.jpg",
    rating: 5,
    feedback:
      "Their digital marketing strategies are nothing short of brilliant. Our brand visibility skyrocketed, and customer engagement reached levels we never thought possible. True partners in growth.",
    highlight: "500% increase in brand engagement",
    color: "secondary",
  },
  {
    id: 5,
    name: "Elena Kowalski",
    role: "CTO",
    company: "FinanceFlow",
    industry: "FinTech",
    image: "/testimonials/avatar5.jpg",
    rating: 5,
    feedback:
      "Security and scalability were our top priorities. Divenza delivered a robust solution that handles millions of transactions seamlessly. Their expertise in custom software development is unmatched.",
    highlight: "99.99% system uptime achieved",
    color: "primary",
  },
  {
    id: 6,
    name: "David Park",
    role: "Restaurant Owner",
    company: "Seoul Kitchen",
    industry: "Hospitality",
    image: "/testimonials/avatar6.jpg",
    rating: 5,
    feedback:
      "DiPOS changed the game for our restaurant chain. From order management to inventory tracking, everything is now streamlined. The team's support during implementation was exceptional.",
    highlight: "40% faster order processing",
    color: "secondary",
  },
];

const colors = {
  primary: {
    bg: "linear-gradient(135deg, #3F3369 0%, #5a4d8a 100%)",
    bgLight: "rgba(63,51,105,0.08)",
    text: "#3F3369",
    shadow: "rgba(63,51,105,0.25)",
    accent: "#5a4d8a",
  },
  secondary: {
    bg: "linear-gradient(135deg, #32A790 0%, #4bc4a8 100%)",
    bgLight: "rgba(50,167,144,0.08)",
    text: "#32A790",
    shadow: "rgba(50,167,144,0.25)",
    accent: "#4bc4a8",
  },
};

// Testimonial Card Component
const TestimonialCard = ({
  testimonial,
  isStacked = false,
  stackIndex = 0,
}: {
  testimonial: Testimonial;
  isStacked?: boolean;
  stackIndex?: number;
}) => {
  const colorSet = colors[testimonial.color];

  return (
    <motion.div
      className={`relative ${isStacked ? "absolute inset-0" : "flex-shrink-0 w-[400px]"}`}
      style={
        isStacked
          ? {
              zIndex: 10 - stackIndex,
              transform: `translateY(${stackIndex * 8}px) scale(${1 - stackIndex * 0.05})`,
              opacity: stackIndex > 2 ? 0 : 1 - stackIndex * 0.15,
            }
          : {}
      }
    >
      <div
        className="h-full p-6 rounded-2xl relative overflow-hidden"
        style={{
          background: "linear-gradient(145deg, #ffffff 0%, #fafafa 100%)",
          boxShadow: `0 15px 40px -10px ${colorSet.shadow}`,
          border: "1px solid rgba(255,255,255,0.8)",
        }}
      >
        {/* Decorative Quote Icon */}
        <div
          className="absolute top-4 right-4 w-12 h-12 rounded-xl flex items-center justify-center opacity-10"
          style={{ background: colorSet.bg }}
        >
          <Quote className="w-6 h-6 text-white" />
        </div>

        {/* Gradient accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
          style={{ background: colorSet.bg }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Rating Stars */}
          <div className="flex items-center gap-1 mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          {/* Feedback */}
          <p className="text-gray-600 leading-relaxed mb-5 text-sm line-clamp-4">
            "{testimonial.feedback}"
          </p>

          {/* Highlight Badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
            style={{ background: colorSet.bgLight }}
          >
            <Sparkles className="w-3.5 h-3.5" style={{ color: colorSet.text }} />
            <span
              className="text-xs font-semibold"
              style={{ color: colorSet.text }}
            >
              {testimonial.highlight}
            </span>
          </div>

          {/* Author Info */}
          <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
            {/* Avatar */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
              style={{ background: colorSet.bg }}
            >
              {testimonial.name.charAt(0)}
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-gray-900 text-sm truncate">
                {testimonial.name}
              </h4>
              <p className="text-xs text-gray-500 truncate">
                {testimonial.role} at {testimonial.company}
              </p>
            </div>

            {/* Industry Badge */}
            <div
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium"
              style={{
                background: colorSet.bgLight,
                color: colorSet.text,
              }}
            >
              <Building2 className="w-3 h-3" />
              {testimonial.industry}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Desktop Marquee Component
const DesktopMarquee = () => {
  const [isPaused, setIsPaused] = useState(false);
  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="hidden lg:block relative overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />

      {/* Marquee container */}
      <div
        className="flex gap-6 py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex gap-6"
          animate={{
            x: isPaused ? 0 : [0, -2520],
          }}
          transition={{
            x: {
              duration: 40,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            },
          }}
          style={{ willChange: "transform" }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.id}-${index}`}
              testimonial={testimonial}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// Mobile Card Stack Component
const MobileCardStack = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextCard = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevCard = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Auto-advance cards
  useEffect(() => {
    const timer = setInterval(() => {
      nextCard();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <div className="lg:hidden">
      {/* Card Stack */}
      <div className="relative h-[320px] mb-6">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
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
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;
              if (swipe < -10000) {
                nextCard();
              } else if (swipe > 10000) {
                prevCard();
              }
            }}
            className="absolute inset-0"
          >
            <div className="h-full px-2">
              <div
                className="h-full p-6 rounded-2xl relative overflow-hidden"
                style={{
                  background: "linear-gradient(145deg, #ffffff 0%, #fafafa 100%)",
                  boxShadow: `0 15px 40px -10px ${colors[testimonials[currentIndex].color].shadow}`,
                  border: "1px solid rgba(255,255,255,0.8)",
                }}
              >
                {/* Decorative Quote Icon */}
                <div
                  className="absolute top-4 right-4 w-12 h-12 rounded-xl flex items-center justify-center opacity-10"
                  style={{ background: colors[testimonials[currentIndex].color].bg }}
                >
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Gradient accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ background: colors[testimonials[currentIndex].color].bg }}
                />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Feedback */}
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm flex-1">
                    "{testimonials[currentIndex].feedback}"
                  </p>

                  {/* Highlight Badge */}
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 self-start"
                    style={{ background: colors[testimonials[currentIndex].color].bgLight }}
                  >
                    <Sparkles
                      className="w-3.5 h-3.5"
                      style={{ color: colors[testimonials[currentIndex].color].text }}
                    />
                    <span
                      className="text-xs font-semibold"
                      style={{ color: colors[testimonials[currentIndex].color].text }}
                    >
                      {testimonials[currentIndex].highlight}
                    </span>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    {/* Avatar */}
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-bold"
                      style={{ background: colors[testimonials[currentIndex].color].bg }}
                    >
                      {testimonials[currentIndex].name.charAt(0)}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-900 text-sm">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={prevCard}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
          style={{
            background: "rgba(63,51,105,0.1)",
            color: "#3F3369",
          }}
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>

        {/* Dots Indicator */}
        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className="w-2 h-2 rounded-full transition-all duration-300"
              animate={{
                width: currentIndex === index ? 24 : 8,
                background:
                  currentIndex === index
                    ? colors[testimonials[index].color].bg
                    : "rgba(63,51,105,0.2)",
              }}
            />
          ))}
        </div>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={nextCard}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
          style={{
            background: "rgba(50,167,144,0.1)",
            color: "#32A790",
          }}
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Swipe hint */}
      <p className="text-center text-xs text-gray-400 mt-4">
        Swipe or tap to navigate
      </p>
    </div>
  );
};

const OurCommunity = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden bg-white"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 -left-20 w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(63,51,105,0.04) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(50,167,144,0.04) 0%, transparent 70%)",
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
            <Users className="w-4 h-4" style={{ color: "#3F3369" }} />
            <span className="text-sm font-medium" style={{ color: "#3F3369" }}>
              Success Stories with Divenza
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-secondary">Voices from </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(130deg, #3F3369 0%, #32A790 100%)",
              }}
            >
              Our Community
            </span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our partners and
            clients have to say about their journey with Divenza.
          </p>
        </motion.div>

        {/* Testimonials Display */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <DesktopMarquee />
          <MobileCardStack />
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16"
        >
          {[
            { value: "50+", label: "Happy Clients", color: "primary" },
            { value: "100+", label: "Projects Delivered", color: "secondary" },
            { value: "98%", label: "Satisfaction Rate", color: "primary" },
            { value: "24/7", label: "Support Available", color: "secondary" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="text-center p-4 md:p-6 rounded-2xl"
              style={{
                background:
                  colors[stat.color as "primary" | "secondary"].bgLight,
              }}
            >
              <div
                className="text-2xl md:text-3xl font-bold mb-1"
                style={{
                  color: colors[stat.color as "primary" | "secondary"].text,
                }}
              >
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 md:mt-16"
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
            Join Our Community
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <p className="text-gray-500 text-sm mt-4">
            Be part of our growing family of successful businesses
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurCommunity;
