"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Globe,
  Smartphone,
  Bot,
  Megaphone,
  Share2,
  Mail,
  Palette,
  Search,
  Code2,
  ArrowRight,
  Sparkles,
  Layers,
  TrendingUp,
  Zap,
} from "lucide-react";

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  shadowColor: string;
  category: "development" | "marketing" | "creative";
}

const services: Service[] = [
  {
    id: "web-apps",
    icon: <Globe className="w-7 h-7" />,
    title: "Web Applications",
    description:
      "Custom web solutions that scale with your business. From elegant landing pages to complex enterprise platforms.",
    features: ["Progressive Web Apps", "E-commerce Platforms", "SaaS Solutions", "Admin Dashboards"],
    gradient: "from-[#3F3369] to-[#5a4d8a]",
    shadowColor: "rgba(63,51,105,0.3)",
    category: "development",
  },
  {
    id: "mobile-apps",
    icon: <Smartphone className="w-7 h-7" />,
    title: "Mobile Applications",
    description:
      "Native and cross-platform mobile experiences that your users will love. iOS, Android, or both.",
    features: ["React Native Apps", "Flutter Development", "Native iOS/Android", "App Store Optimization"],
    gradient: "from-[#32A790] to-[#4bc4a8]",
    shadowColor: "rgba(50,167,144,0.3)",
    category: "development",
  },
  {
    id: "ai-automation",
    icon: <Bot className="w-7 h-7" />,
    title: "AI Automations",
    description:
      "Intelligent automation solutions that streamline your operations and unlock new possibilities.",
    features: ["Chatbots & Virtual Assistants", "Process Automation", "Predictive Analytics", "Custom AI Models"],
    gradient: "from-[#3F3369] to-[#32A790]",
    shadowColor: "rgba(63,51,105,0.25)",
    category: "development",
  },
  {
    id: "custom-software",
    icon: <Code2 className="w-7 h-7" />,
    title: "Custom Software",
    description:
      "Bespoke software solutions tailored to your unique business requirements and workflows.",
    features: ["Enterprise Solutions", "API Development", "System Integration", "Legacy Modernization"],
    gradient: "from-[#5a4d8a] to-[#3F3369]",
    shadowColor: "rgba(90,77,138,0.3)",
    category: "development",
  },
  {
    id: "digital-marketing",
    icon: <Megaphone className="w-7 h-7" />,
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies that maximize ROI and drive measurable business growth.",
    features: ["PPC Campaigns", "Content Marketing", "Marketing Automation", "Analytics & Reporting"],
    gradient: "from-[#32A790] to-[#4bc4a8]",
    shadowColor: "rgba(50,167,144,0.3)",
    category: "marketing",
  },
  {
    id: "social-media",
    icon: <Share2 className="w-7 h-7" />,
    title: "Social Media Marketing",
    description:
      "Build meaningful connections with your audience through strategic social media presence.",
    features: ["Content Strategy", "Community Management", "Influencer Partnerships", "Social Ads"],
    gradient: "from-[#3F3369] to-[#5a4d8a]",
    shadowColor: "rgba(63,51,105,0.3)",
    category: "marketing",
  },
  {
    id: "email-marketing",
    icon: <Mail className="w-7 h-7" />,
    title: "Email Marketing",
    description:
      "Engage and convert your audience with personalized email campaigns that deliver results.",
    features: ["Campaign Automation", "List Segmentation", "A/B Testing", "Performance Analytics"],
    gradient: "from-[#4bc4a8] to-[#32A790]",
    shadowColor: "rgba(75,196,168,0.3)",
    category: "marketing",
  },
  {
    id: "seo",
    icon: <Search className="w-7 h-7" />,
    title: "SEO Optimization",
    description:
      "Boost your visibility and organic traffic with proven search engine optimization strategies.",
    features: ["Technical SEO", "Content Optimization", "Link Building", "Local SEO"],
    gradient: "from-[#3F3369] to-[#32A790]",
    shadowColor: "rgba(63,51,105,0.25)",
    category: "marketing",
  },
  {
    id: "branding",
    icon: <Palette className="w-7 h-7" />,
    title: "Branding & Design",
    description:
      "Create a memorable brand identity that resonates with your audience and stands out from the competition.",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity", "UI/UX Design"],
    gradient: "from-[#32A790] to-[#3F3369]",
    shadowColor: "rgba(50,167,144,0.25)",
    category: "creative",
  },
];

const categories = [
  {
    id: "all",
    label: "All Services",
    icon: <Layers className="w-4 h-4" />,
  },
  {
    id: "development",
    label: "Development",
    icon: <Code2 className="w-4 h-4" />,
  },
  {
    id: "marketing",
    label: "Marketing",
    icon: <TrendingUp className="w-4 h-4" />,
  },
  {
    id: "creative",
    label: "Creative",
    icon: <Palette className="w-4 h-4" />,
  },
];

const WhatWeDoSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white to-[#fafafa]">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-40 -left-20 w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(63,51,105,0.06) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 -right-20 w-[500px] h-[500px] rounded-full"
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
        />

        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-[15%] right-[8%]"
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Zap className="w-8 h-8 text-[#32A790] opacity-10" />
        </motion.div>
        <motion.div
          className="absolute bottom-[25%] left-[5%]"
          animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <Sparkles className="w-10 h-10 text-[#3F3369] opacity-10" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
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
            <Layers className="w-4 h-4" style={{ color: "#3F3369" }} />
            <span className="text-sm font-medium" style={{ color: "#3F3369" }}>
              Our Services
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-secondary">What We </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(130deg, #3F3369 0%, #32A790 100%)",
              }}
            >
              Do Best
            </span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            From cutting-edge development to result-driven marketing, we offer
            comprehensive solutions that transform your digital presence and
            accelerate growth.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? "text-white"
                  : "text-gray-600 bg-white hover:bg-gray-50"
              }`}
              style={{
                background:
                  activeCategory === category.id
                    ? "linear-gradient(135deg, #3F3369 0%, #5a4d8a 100%)"
                    : undefined,
                boxShadow:
                  activeCategory === category.id
                    ? "0 8px 25px -8px rgba(63,51,105,0.4)"
                    : "0 2px 10px -3px rgba(0,0,0,0.08)",
              }}
            >
              {category.icon}
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className="group relative"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="h-full relative rounded-3xl overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(145deg, #ffffff 0%, #fafafa 100%)",
                    boxShadow: `0 10px 40px -15px ${service.shadowColor}`,
                  }}
                >
                  {/* Card Border Gradient */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      padding: "2px",
                      background: `linear-gradient(135deg, ${service.gradient.includes("3F3369") ? "#3F3369" : "#32A790"} 0%, ${service.gradient.includes("32A790") ? "#32A790" : "#5a4d8a"} 100%)`,
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                  />

                  {/* Card Content */}
                  <div className="relative p-6 md:p-8">
                    {/* Icon */}
                    <motion.div
                      animate={{
                        scale: hoveredService === service.id ? 1.1 : 1,
                        rotate: hoveredService === service.id ? 5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-5 bg-gradient-to-br ${service.gradient}`}
                      style={{
                        boxShadow: `0 10px 30px -10px ${service.shadowColor}`,
                      }}
                    >
                      {service.icon}
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-secondary mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, fIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + fIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-2 text-sm text-gray-500"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}
                          />
                          {feature}
                        </motion.div>
                      ))}
                    </div>

                    {/* Learn More Link */}
                    <motion.div
                      className="flex items-center gap-2 font-medium text-sm cursor-pointer"
                      style={{
                        color: service.gradient.includes("32A790")
                          ? "#32A790"
                          : "#3F3369",
                      }}
                      whileHover={{ x: 5 }}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>

                  {/* Decorative Corner Gradient */}
                  <div
                    className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle, ${service.gradient.includes("32A790") ? "rgba(50,167,144,0.1)" : "rgba(63,51,105,0.1)"} 0%, transparent 70%)`,
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 md:mt-20"
        >
          <div
            className="inline-block rounded-3xl p-8 md:p-10 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(63,51,105,0.03) 0%, rgba(50,167,144,0.03) 100%)",
              border: "1px solid rgba(63,51,105,0.1)",
            }}
          >
            {/* Decorative blurs */}
            <div
              className="absolute -top-10 -left-10 w-32 h-32 rounded-full opacity-50"
              style={{
                background:
                  "radial-gradient(circle, rgba(63,51,105,0.1) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-50"
              style={{
                background:
                  "radial-gradient(circle, rgba(50,167,144,0.1) 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="text-secondary">Not Sure Where to </span>
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(130deg, #3F3369 0%, #32A790 100%)",
                  }}
                >
                  Start?
                </span>
              </h3>
              <p className="text-gray-600 max-w-xl mx-auto mb-6">
                Let&apos;s have a conversation. We&apos;ll analyze your needs
                and recommend the perfect combination of services to achieve
                your goals.
              </p>
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-2xl transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, #3F3369 0%, #5a4d8a 100%)",
                  boxShadow: "0 10px 40px -10px rgba(63,51,105,0.5)",
                }}
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
