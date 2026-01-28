"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
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
  CheckCircle2,
  Users,
  MessageCircle,
  Lightbulb,
  Target,
  Rocket,
  Settings,
  Shield,
  Clock,
  Award,
  ChevronDown,
  ExternalLink,
  Play,
  Star,
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

// Extended services data with full details
interface ServiceDetail {
  id: string;
  icon: React.ReactNode;
  title: string;
  tagline: string;
  description: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  technologies?: string[];
  gradient: string;
  shadowColor: string;
  category: "development" | "marketing" | "creative";
}

const servicesData: ServiceDetail[] = [
  {
    id: "web-apps",
    icon: <Globe className="w-7 h-7" />,
    title: "Web Applications",
    tagline: "Build for the Modern Web",
    description:
      "Custom web solutions that scale with your business. From elegant landing pages to complex enterprise platforms.",
    fullDescription:
      "We craft powerful web applications that combine stunning design with robust functionality. Whether you need a customer-facing portal, internal business tool, or a full-scale SaaS platform, our team delivers solutions that drive real results.",
    features: [
      "Progressive Web Apps (PWA)",
      "E-commerce Platforms",
      "SaaS Solutions",
      "Admin Dashboards",
      "CMS Development",
      "API Integration",
    ],
    benefits: [
      "Lightning-fast performance",
      "SEO-optimized architecture",
      "Scalable infrastructure",
      "24/7 monitoring & support",
    ],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS"],
    gradient: "from-[#3F3369] to-[#5a4d8a]",
    shadowColor: "rgba(63,51,105,0.3)",
    category: "development",
  },
  {
    id: "mobile-apps",
    icon: <Smartphone className="w-7 h-7" />,
    title: "Mobile Applications",
    tagline: "Apps Your Users Will Love",
    description:
      "Native and cross-platform mobile experiences that your users will love. iOS, Android, or both.",
    fullDescription:
      "From concept to app store, we build mobile applications that delight users and drive engagement. Our cross-platform expertise means you get native-feeling apps on both iOS and Android without doubling your investment.",
    features: [
      "React Native Development",
      "Flutter Applications",
      "Native iOS & Android",
      "App Store Optimization",
      "Push Notifications",
      "Offline Functionality",
    ],
    benefits: [
      "Single codebase, dual platforms",
      "Native-like performance",
      "Seamless updates",
      "Analytics integration",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    gradient: "from-[#32A790] to-[#4bc4a8]",
    shadowColor: "rgba(50,167,144,0.3)",
    category: "development",
  },
  {
    id: "ai-automation",
    icon: <Bot className="w-7 h-7" />,
    title: "AI Automations",
    tagline: "Intelligence That Works for You",
    description:
      "Intelligent automation solutions that streamline your operations and unlock new possibilities.",
    fullDescription:
      "Harness the power of artificial intelligence to automate repetitive tasks, gain insights from your data, and create intelligent customer experiences. We build custom AI solutions that fit your unique business needs.",
    features: [
      "Chatbots & Virtual Assistants",
      "Process Automation",
      "Predictive Analytics",
      "Custom AI Models",
      "Document Processing",
      "Workflow Optimization",
    ],
    benefits: [
      "Reduce operational costs",
      "24/7 customer support",
      "Data-driven decisions",
      "Scalable automation",
    ],
    technologies: ["OpenAI", "LangChain", "Python", "TensorFlow", "n8n"],
    gradient: "from-[#3F3369] to-[#32A790]",
    shadowColor: "rgba(63,51,105,0.25)",
    category: "development",
  },
  {
    id: "custom-software",
    icon: <Code2 className="w-7 h-7" />,
    title: "Custom Software",
    tagline: "Built for Your Business",
    description:
      "Bespoke software solutions tailored to your unique business requirements and workflows.",
    fullDescription:
      "Off-the-shelf software often falls short. We design and develop custom solutions that fit your exact needs, integrate with your existing systems, and grow with your business.",
    features: [
      "Enterprise Solutions",
      "API Development",
      "System Integration",
      "Legacy Modernization",
      "Database Design",
      "Cloud Migration",
    ],
    benefits: [
      "Perfect fit for your workflow",
      "Competitive advantage",
      "Full ownership",
      "Ongoing support",
    ],
    technologies: ["Node.js", "Python", "Java", "Docker", "Kubernetes"],
    gradient: "from-[#5a4d8a] to-[#3F3369]",
    shadowColor: "rgba(90,77,138,0.3)",
    category: "development",
  },
  {
    id: "digital-marketing",
    icon: <Megaphone className="w-7 h-7" />,
    title: "Digital Marketing",
    tagline: "Grow Your Digital Presence",
    description:
      "Data-driven marketing strategies that maximize ROI and drive measurable business growth.",
    fullDescription:
      "Cut through the noise with marketing strategies backed by data and creativity. We help you reach the right audience, at the right time, with the right message—maximizing every dollar of your marketing budget.",
    features: [
      "PPC Campaigns",
      "Content Marketing",
      "Marketing Automation",
      "Analytics & Reporting",
      "Conversion Optimization",
      "Lead Generation",
    ],
    benefits: [
      "Measurable ROI",
      "Targeted reach",
      "Data-driven optimization",
      "Brand visibility",
    ],
    technologies: ["Google Ads", "Meta Ads", "HubSpot", "Google Analytics"],
    gradient: "from-[#32A790] to-[#4bc4a8]",
    shadowColor: "rgba(50,167,144,0.3)",
    category: "marketing",
  },
  {
    id: "social-media",
    icon: <Share2 className="w-7 h-7" />,
    title: "Social Media Marketing",
    tagline: "Connect & Engage",
    description:
      "Build meaningful connections with your audience through strategic social media presence.",
    fullDescription:
      "Social media is where your customers spend their time. We create compelling content, build engaged communities, and turn followers into loyal customers through authentic brand storytelling.",
    features: [
      "Content Strategy",
      "Community Management",
      "Influencer Partnerships",
      "Social Advertising",
      "Brand Monitoring",
      "Crisis Management",
    ],
    benefits: [
      "Increased brand awareness",
      "Customer engagement",
      "Audience insights",
      "Community building",
    ],
    technologies: ["Meta Suite", "Hootsuite", "Canva", "Buffer"],
    gradient: "from-[#3F3369] to-[#5a4d8a]",
    shadowColor: "rgba(63,51,105,0.3)",
    category: "marketing",
  },
  {
    id: "email-marketing",
    icon: <Mail className="w-7 h-7" />,
    title: "Email Marketing",
    tagline: "Direct to Inbox Impact",
    description:
      "Engage and convert your audience with personalized email campaigns that deliver results.",
    fullDescription:
      "Email remains one of the most effective marketing channels. We craft personalized email journeys that nurture leads, retain customers, and drive consistent revenue growth.",
    features: [
      "Campaign Automation",
      "List Segmentation",
      "A/B Testing",
      "Performance Analytics",
      "Template Design",
      "Drip Campaigns",
    ],
    benefits: [
      "High conversion rates",
      "Cost-effective reach",
      "Personalized messaging",
      "Automation at scale",
    ],
    technologies: ["Mailchimp", "Klaviyo", "SendGrid", "ActiveCampaign"],
    gradient: "from-[#4bc4a8] to-[#32A790]",
    shadowColor: "rgba(75,196,168,0.3)",
    category: "marketing",
  },
  {
    id: "seo",
    icon: <Search className="w-7 h-7" />,
    title: "SEO Optimization",
    tagline: "Be Found Online",
    description:
      "Boost your visibility and organic traffic with proven search engine optimization strategies.",
    fullDescription:
      "Get discovered by customers actively searching for your services. Our SEO strategies improve your search rankings, drive qualified organic traffic, and establish your brand as an industry authority.",
    features: [
      "Technical SEO",
      "Content Optimization",
      "Link Building",
      "Local SEO",
      "Keyword Research",
      "Competitor Analysis",
    ],
    benefits: [
      "Sustainable traffic growth",
      "Higher search rankings",
      "Quality leads",
      "Long-term results",
    ],
    technologies: ["Ahrefs", "SEMrush", "Screaming Frog", "Google Search Console"],
    gradient: "from-[#3F3369] to-[#32A790]",
    shadowColor: "rgba(63,51,105,0.25)",
    category: "marketing",
  },
  {
    id: "branding",
    icon: <Palette className="w-7 h-7" />,
    title: "Branding & Design",
    tagline: "Stand Out Beautifully",
    description:
      "Create a memorable brand identity that resonates with your audience and stands out from the competition.",
    fullDescription:
      "Your brand is more than a logo—it's the entire experience customers have with your business. We create cohesive brand identities that tell your story, connect emotionally, and leave lasting impressions.",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Visual Identity",
      "UI/UX Design",
      "Marketing Collateral",
      "Packaging Design",
    ],
    benefits: [
      "Memorable first impressions",
      "Brand consistency",
      "Customer recognition",
      "Professional credibility",
    ],
    technologies: ["Figma", "Adobe Creative Suite", "Webflow", "Framer"],
    gradient: "from-[#32A790] to-[#3F3369]",
    shadowColor: "rgba(50,167,144,0.25)",
    category: "creative",
  },
];

const categories = [
  { id: "all", label: "All Services", icon: <Layers className="w-4 h-4" /> },
  { id: "development", label: "Development", icon: <Code2 className="w-4 h-4" /> },
  { id: "marketing", label: "Marketing", icon: <TrendingUp className="w-4 h-4" /> },
  { id: "creative", label: "Creative", icon: <Palette className="w-4 h-4" /> },
];

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
          <Code2 className="w-10 h-10 text-[#32A790] opacity-15" />
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
          <Zap className="w-6 h-6 text-[#3F3369] opacity-10" />
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
            <Layers className="w-4 h-4" style={{ color: "#3F3369" }} />
            <span className="text-sm font-medium" style={{ color: "#3F3369" }}>
              Our Services
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
          >
            <span className="text-secondary">Solutions That </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(130deg, #3F3369 0%, #32A790 100%)",
              }}
            >
              Drive Growth
            </span>
            <br />
            <span className="text-secondary">& </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(130deg, #32A790 0%, #3F3369 100%)",
              }}
            >
              Innovation
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10"
          >
            From cutting-edge development to strategic marketing, we deliver
            comprehensive digital solutions that transform your business and
            accelerate your success.
          </motion.p>

          {/* Service Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16"
          >
            {[
              { value: "9+", label: "Core Services" },
              { value: "100+", label: "Projects Delivered" },
              { value: "50+", label: "Happy Clients" },
              { value: "98%", label: "Client Satisfaction" },
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

// Services Overview Section with Filtering
const ServicesOverviewSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const filteredServices =
    activeCategory === "all"
      ? servicesData
      : servicesData.filter((service) => service.category === activeCategory);

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
            <Settings className="w-4 h-4" style={{ color: "#3F3369" }} />
            <span className="text-sm font-medium" style={{ color: "#3F3369" }}>
              Explore Our Expertise
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-secondary">Comprehensive </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(130deg, #3F3369 0%, #32A790 100%)",
              }}
            >
              Service Offerings
            </span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Whether you need to build, market, or design—we have the expertise
            to bring your vision to life. Explore our full range of services.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
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
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <motion.div
                  className="h-full relative rounded-3xl overflow-hidden cursor-pointer"
                  style={{
                    background:
                      "linear-gradient(145deg, #ffffff 0%, #fafafa 100%)",
                    boxShadow: `0 10px 40px -15px ${service.shadowColor}`,
                  }}
                  whileHover={{ y: -5 }}
                  onClick={() =>
                    setExpandedService(
                      expandedService === service.id ? null : service.id
                    )
                  }
                >
                  {/* Card Content */}
                  <div className="relative p-6 md:p-8">
                    {/* Header Row */}
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shrink-0 bg-gradient-to-br ${service.gradient}`}
                        style={{
                          boxShadow: `0 10px 30px -10px ${service.shadowColor}`,
                        }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {service.icon}
                      </motion.div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className="text-xs font-semibold px-2 py-1 rounded-full"
                            style={{
                              background:
                                service.category === "development"
                                  ? colors.primary.bgLight
                                  : service.category === "marketing"
                                    ? colors.secondary.bgLight
                                    : "rgba(63,51,105,0.05)",
                              color:
                                service.category === "development"
                                  ? colors.primary.text
                                  : service.category === "marketing"
                                    ? colors.secondary.text
                                    : colors.primary.text,
                            }}
                          >
                            {service.category.charAt(0).toUpperCase() +
                              service.category.slice(1)}
                          </span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-secondary">
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-500 font-medium">
                          {service.tagline}
                        </p>
                      </div>

                      <motion.div
                        animate={{ rotate: expandedService === service.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="shrink-0"
                      >
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      </motion.div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Features Preview */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.slice(0, 4).map((feature) => (
                        <span
                          key={feature}
                          className="text-xs px-3 py-1.5 rounded-full bg-gray-100 text-gray-600"
                        >
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 4 && (
                        <span className="text-xs px-3 py-1.5 rounded-full bg-gray-100 text-gray-500">
                          +{service.features.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {expandedService === service.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 border-t border-gray-100">
                            {/* Full Description */}
                            <p className="text-gray-600 leading-relaxed mb-6">
                              {service.fullDescription}
                            </p>

                            {/* All Features */}
                            <div className="mb-6">
                              <h4 className="font-semibold text-secondary mb-3 flex items-center gap-2">
                                <Settings className="w-4 h-4" />
                                What We Offer
                              </h4>
                              <div className="grid grid-cols-2 gap-2">
                                {service.features.map((feature) => (
                                  <div
                                    key={feature}
                                    className="flex items-center gap-2 text-sm text-gray-600"
                                  >
                                    <CheckCircle2 className="w-4 h-4 text-[#32A790] shrink-0" />
                                    {feature}
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Benefits */}
                            <div className="mb-6">
                              <h4 className="font-semibold text-secondary mb-3 flex items-center gap-2">
                                <Star className="w-4 h-4" />
                                Key Benefits
                              </h4>
                              <div className="grid grid-cols-2 gap-2">
                                {service.benefits.map((benefit) => (
                                  <div
                                    key={benefit}
                                    className="flex items-center gap-2 text-sm text-gray-600"
                                  >
                                    <Zap className="w-4 h-4 text-[#3F3369] shrink-0" />
                                    {benefit}
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Technologies */}
                            {service.technologies && (
                              <div className="mb-6">
                                <h4 className="font-semibold text-secondary mb-3 flex items-center gap-2">
                                  <Code2 className="w-4 h-4" />
                                  Technologies We Use
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {service.technologies.map((tech) => (
                                    <span
                                      key={tech}
                                      className="text-xs px-3 py-1.5 rounded-full font-medium"
                                      style={{
                                        background: colors.primary.bgLight,
                                        color: colors.primary.text,
                                      }}
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* CTA */}
                            <motion.a
                              href="/contact-us"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className={`inline-flex items-center gap-2 px-6 py-3 text-white font-medium rounded-xl transition-all duration-300 bg-gradient-to-br ${service.gradient}`}
                              style={{
                                boxShadow: `0 8px 25px -8px ${service.shadowColor}`,
                              }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              Get Started
                              <ArrowRight className="w-4 h-4" />
                            </motion.a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Hover Gradient */}
                  <div
                    className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle, ${
                        service.gradient.includes("32A790")
                          ? "rgba(50,167,144,0.1)"
                          : "rgba(63,51,105,0.1)"
                      } 0%, transparent 70%)`,
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

// Our Process Section
const OurProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We start by understanding your business, goals, challenges, and vision through in-depth consultations.",
      icon: <MessageCircle className="w-6 h-6" />,
      color: "#3F3369",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "Our team crafts a tailored strategy and roadmap, outlining the best approach to achieve your objectives.",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "#32A790",
    },
    {
      number: "03",
      title: "Design",
      description:
        "We create detailed designs and prototypes, ensuring every element aligns with your brand and user needs.",
      icon: <Palette className="w-6 h-6" />,
      color: "#3F3369",
    },
    {
      number: "04",
      title: "Development",
      description:
        "Our expert developers bring designs to life using cutting-edge technologies and best practices.",
      icon: <Code2 className="w-6 h-6" />,
      color: "#32A790",
    },
    {
      number: "05",
      title: "Testing",
      description:
        "Rigorous quality assurance ensures your solution is bug-free, secure, and performs flawlessly.",
      icon: <Shield className="w-6 h-6" />,
      color: "#3F3369",
    },
    {
      number: "06",
      title: "Launch & Support",
      description:
        "We deploy your solution and provide ongoing support to ensure continuous success and growth.",
      icon: <Rocket className="w-6 h-6" />,
      color: "#32A790",
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
            <Target className="w-4 h-4" style={{ color: "#3F3369" }} />
            <span className="text-sm font-medium" style={{ color: "#3F3369" }}>
              How We Work
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-secondary">Our Proven </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(130deg, #3F3369 0%, #32A790 100%)",
              }}
            >
              Process
            </span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            A structured approach that ensures quality, transparency, and
            results at every stage of your project.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
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
                {/* Step Number Background */}
                <div
                  className="absolute -top-4 -right-4 text-[80px] font-bold opacity-5 leading-none"
                  style={{ color: step.color }}
                >
                  {step.number}
                </div>

                <div className="relative z-10">
                  {/* Icon and Number */}
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-white"
                      style={{
                        background:
                          step.color === "#3F3369"
                            ? "linear-gradient(135deg, #3F3369 0%, #5a4d8a 100%)"
                            : "linear-gradient(135deg, #32A790 0%, #4bc4a8 100%)",
                        boxShadow:
                          step.color === "#3F3369"
                            ? "0 8px 25px -8px rgba(63,51,105,0.4)"
                            : "0 8px 25px -8px rgba(50,167,144,0.4)",
                      }}
                    >
                      {step.icon}
                    </div>
                    <span
                      className="text-sm font-bold px-3 py-1 rounded-full"
                      style={{
                        background:
                          step.color === "#3F3369"
                            ? colors.primary.bgLight
                            : colors.secondary.bgLight,
                        color: step.color,
                      }}
                    >
                      Step {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-secondary mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Hover glow */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      step.color === "#3F3369"
                        ? "radial-gradient(circle at top right, rgba(63,51,105,0.1) 0%, transparent 70%)"
                        : "radial-gradient(circle at top right, rgba(50,167,144,0.1) 0%, transparent 70%)",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Why Work With Us Section
const WhyWorkWithUsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const advantages = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Dedicated Team",
      description:
        "A committed team of experts focused solely on your project's success.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "On-Time Delivery",
      description:
        "We respect your timelines and deliver projects when promised.",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Clear Communication",
      description:
        "Regular updates and transparent communication throughout the project.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Assurance",
      description:
        "Rigorous testing and QA processes ensure flawless deliverables.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scalable Solutions",
      description:
        "Built to grow with your business, from startup to enterprise.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Proven Track Record",
      description:
        "100+ successful projects and 50+ satisfied clients worldwide.",
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
                The Divenza Advantage
              </span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-secondary">Why Partner </span>
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(130deg, #3F3369 0%, #32A790 100%)",
                }}
              >
                With Us?
              </span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We're not just service providers—we're your technology partners.
              Our commitment to excellence, innovation, and your success sets us
              apart in a crowded marketplace.
            </p>

            {/* Highlight Box */}
            <div
              className="relative rounded-2xl p-6 overflow-hidden"
              style={{
                background:
                  "linear-gradient(145deg, rgba(63,51,105,0.04) 0%, rgba(50,167,144,0.04) 100%)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-24 h-24 opacity-50"
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(50,167,144,0.15) 0%, transparent 70%)",
                }}
              />
              <p className="text-[#3F3369] font-medium italic relative z-10">
                "We measure our success by the growth we create for our clients.
                Every project is an opportunity to make a real difference."
              </p>
            </div>

            {/* CTA */}
            <motion.a
              href="/contact-us"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-2xl transition-all duration-300 mt-8"
              style={{
                background: "linear-gradient(135deg, #3F3369 0%, #5a4d8a 100%)",
                boxShadow: "0 10px 40px -10px rgba(63,51,105,0.5)",
              }}
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Right - Advantages Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
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
                  {advantage.icon}
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-sm mb-1">
                    {advantage.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {advantage.description}
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
          <Zap className="w-6 h-6 text-white" />
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
              Ready to Start?
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Something{" "}
            <span className="text-[#4bc4a8]">Amazing Together</span>
          </h2>

          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Have a project in mind? Let's discuss how our services can help you
            achieve your goals and take your business to the next level.
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
              Get Free Consultation
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
        </motion.div>
      </div>
    </section>
  );
};

// Main Page Component
const WhatWeDoPage = () => {
  return (
    <div className="">
      <HeroSection />
      <ServicesOverviewSection />
      <OurProcessSection />
      <WhyWorkWithUsSection />
      <CTASection />
    </div>
  );
};

export default WhatWeDoPage;
