"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  Send,
  User,
  Phone,
  Mail,
  Briefcase,
  MessageSquare,
  Clock,
  Video,
  PhoneCall,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  MessageCircle,
  MapPin,
  Globe,
} from "lucide-react";

// Communication medium options
const communicationMediums = [
  {
    id: "normal_call",
    label: "Normal Call",
    icon: <PhoneCall className="w-5 h-5" />,
    description: "Traditional phone call",
  },
  {
    id: "whatsapp_call",
    label: "WhatsApp Call",
    icon: <Phone className="w-5 h-5" />,
    description: "Voice or video via WhatsApp",
  },
  {
    id: "google_meet",
    label: "Google Meet",
    icon: <Video className="w-5 h-5" />,
    description: "Video conference",
  },
  {
    id: "zoom",
    label: "Zoom",
    icon: <Video className="w-5 h-5" />,
    description: "Video meeting",
  },
  {
    id: "ms_teams",
    label: "MS Teams",
    icon: <Video className="w-5 h-5" />,
    description: "Microsoft Teams call",
  },
];

// Business type options
const businessTypes = [
  "Startup",
  "Small Business",
  "Medium Enterprise",
  "Large Enterprise",
  "E-commerce",
  "Healthcare",
  "Education",
  "Finance",
  "Real Estate",
  "Hospitality",
  "Retail",
  "Manufacturing",
  "Technology",
  "Other",
];

// Form data interface
interface FormData {
  name: string;
  mobile: string;
  email: string;
  businessType: string;
  businessBrief: string;
  flexibleTime: string;
  communicationMedium: string;
}

// Form errors interface
interface FormErrors {
  name?: string;
  mobile?: string;
  email?: string;
  flexibleTime?: string;
  communicationMedium?: string;
}

// Input Field Component
const InputField = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  required = false,
  icon,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  icon: React.ReactNode;
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative"
    >
      <label className="block mb-2 text-sm font-medium text-gray-700">
        {label}
        {required ? (
          <span className="text-red-500 ml-1">*</span>
        ) : (
          <span className="text-gray-400 ml-1 text-xs">(Optional)</span>
        )}
      </label>
      <div className="relative">
        <div
          className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-200 ${
            isFocused ? "text-[#32A790]" : error ? "text-red-400" : "text-gray-400"
          }`}
        >
          {icon}
        </div>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={`w-full pl-12 pr-4 py-2 rounded-2xl border-2 transition-all duration-300 outline-none text-gray-800 placeholder-gray-400 ${
            error
              ? "border-red-300 bg-red-50/50 focus:border-red-400"
              : isFocused
              ? "border-[#32A790] bg-white shadow-lg shadow-[#32A790]/10"
              : "border-gray-200 bg-gray-50/50 hover:border-gray-300"
          }`}
        />
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="mt-2 text-sm text-red-500 flex items-center gap-1"
          >
            <AlertCircle className="w-4 h-4" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Select Field Component
const SelectField = ({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
  required = false,
  icon,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  placeholder: string;
  required?: boolean;
  icon: React.ReactNode;
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative"
    >
      <label className="block mb-2 text-sm font-medium text-gray-700">
        {label}
        {required ? (
          <span className="text-red-500 ml-1">*</span>
        ) : (
          <span className="text-gray-400 ml-1 text-xs">(Optional)</span>
        )}
      </label>
      <div className="relative">
        <div
          className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-200 pointer-events-none ${
            isFocused ? "text-[#32A790]" : "text-gray-400"
          }`}
        >
          {icon}
        </div>
        <select
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full pl-12 pr-4 py-2 rounded-2xl border-2 transition-all duration-300 outline-none text-gray-800 appearance-none cursor-pointer ${
            isFocused
              ? "border-[#32A790] bg-white shadow-lg shadow-[#32A790]/10"
              : "border-gray-200 bg-gray-50/50 hover:border-gray-300"
          } ${!value ? "text-gray-400" : ""}`}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg
            className={`w-5 h-5 transition-colors duration-200 ${
              isFocused ? "text-[#32A790]" : "text-gray-400"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

// Textarea Field Component
const TextareaField = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  required = false,
  icon,
}: {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  icon: React.ReactNode;
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative"
    >
      <label className="block mb-2 text-sm font-medium text-gray-700">
        {label}
        {required ? (
          <span className="text-red-500 ml-1">*</span>
        ) : (
          <span className="text-gray-400 ml-1 text-xs">(Optional)</span>
        )}
      </label>
      <div className="relative">
        <div
          className={`absolute left-4 top-4 transition-colors duration-200 ${
            isFocused ? "text-[#32A790]" : "text-gray-400"
          }`}
        >
          {icon}
        </div>
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          rows={4}
          className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 transition-all duration-300 outline-none text-gray-800 placeholder-gray-400 resize-none ${
            isFocused
              ? "border-[#32A790] bg-white shadow-lg shadow-[#32A790]/10"
              : "border-gray-200 bg-gray-50/50 hover:border-gray-300"
          }`}
        />
      </div>
    </motion.div>
  );
};

// Communication Medium Card Component
const MediumCard = ({
  medium,
  isSelected,
  onClick,
  index,
}: {
  medium: (typeof communicationMediums)[0];
  isSelected: boolean;
  onClick: () => void;
  index: number;
}) => {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative p-4 rounded-2xl border-2 transition-all duration-300 text-left group ${
        isSelected
          ? "border-[#32A790] bg-gradient-to-br from-[#32A790]/10 to-[#32A790]/5 shadow-lg shadow-[#32A790]/20"
          : "border-gray-200 bg-white hover:border-[#32A790]/50 hover:shadow-md"
      }`}
    >
      {isSelected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-2 -right-2 w-6 h-6 bg-[#32A790] rounded-full flex items-center justify-center"
        >
          <CheckCircle2 className="w-4 h-4 text-white" />
        </motion.div>
      )}
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 ${
          isSelected
            ? "bg-[#32A790] text-white"
            : "bg-gray-100 text-gray-500 group-hover:bg-[#32A790]/10 group-hover:text-[#32A790]"
        }`}
      >
        {medium.icon}
      </div>
      <h4
        className={`font-semibold text-sm mb-1 transition-colors duration-300 ${
          isSelected ? "text-[#32A790]" : "text-gray-800"
        }`}
      >
        {medium.label}
      </h4>
      <p className="text-xs text-gray-500">{medium.description}</p>
    </motion.button>
  );
};

// Hero Section
const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { once: true });

  return (
    <section
      ref={heroRef}
      className="relative min-h-[50vh] md:min-h-[60vh] overflow-hidden bg-gradient-to-b from-[#fafafa] to-white flex items-center"
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
          <MessageCircle className="w-10 h-10 text-[#32A790] opacity-15" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
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
            <MessageCircle className="w-4 h-4" style={{ color: "#3F3369" }} />
            <span className="text-sm font-medium" style={{ color: "#3F3369" }}>
              Let's Connect
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
          >
            <span className="text-secondary">Say </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(130deg, #3F3369 0%, #32A790 100%)",
              }}
            >
              Hello!
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            We're excited to hear from you! Tell us about your business and
            let's schedule a conversation at your convenience.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

// Contact Form Section
const ContactFormSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    mobile: "",
    email: "",
    businessType: "",
    businessBrief: "",
    flexibleTime: "",
    communicationMedium: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleMediumSelect = (mediumId: string) => {
    setFormData((prev) => ({ ...prev, communicationMedium: mediumId }));
    if (errors.communicationMedium) {
      setErrors((prev) => ({ ...prev, communicationMedium: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Mobile validation
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[\d\s+()-]{8,20}$/.test(formData.mobile.trim())) {
      newErrors.mobile = "Please enter a valid mobile number";
    }

    // Email validation (optional but must be valid if provided)
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Flexible time validation
    if (!formData.flexibleTime.trim()) {
      newErrors.flexibleTime = "Please specify a flexible time for discussion";
    }

    // Communication medium validation
    if (!formData.communicationMedium) {
      newErrors.communicationMedium = "Please select a communication medium";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call - Replace this with actual API integration
    try {
      // await axios.post('/api/contact', formData);
      console.log("Form Data:", formData);

      // Simulating API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="relative py-16 md:py-24 overflow-hidden bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center p-8 md:p-12 rounded-3xl"
            style={{
              background:
                "linear-gradient(145deg, rgba(50,167,144,0.1) 0%, rgba(63,51,105,0.05) 100%)",
              boxShadow: "0 20px 60px -20px rgba(50,167,144,0.3)",
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #32A790 0%, #4bc4a8 100%)",
              }}
            >
              <CheckCircle2 className="w-10 h-10 text-white" />
            </motion.div>
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
              Thank You for Reaching Out!
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              We've received your message and will get back to you within 24 hours.
              Looking forward to our conversation!
            </p>
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: "",
                  mobile: "",
                  email: "",
                  businessType: "",
                  businessBrief: "",
                  flexibleTime: "",
                  communicationMedium: "",
                });
              }}
              className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-2xl transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #3F3369 0%, #5a4d8a 100%)",
                boxShadow: "0 10px 40px -10px rgba(63,51,105,0.5)",
              }}
            >
              Send Another Message
            </motion.button>
          </motion.div>
        </div>
      </section>
    );
  }

  // Location data
  const locations = [
    {
      country: "Sri Lanka",
      flag: "🇱🇰",
      address: ["123 Business Street,", "Tech City, TC 12345"],
    },
    {
      country: "Canada",
      flag: "🇨🇦",
      address: ["Oshawa Centre", "419 King St W,", "Oshawa, ON", "L1J 2K5"],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden bg-white"
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
        <motion.div
          className="absolute bottom-20 -left-20 w-[500px] h-[500px] rounded-full"
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
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Form - Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 relative rounded-3xl p-6 sm:p-8 md:p-12 overflow-hidden"
            style={{
              background:
                "linear-gradient(145deg, #ffffff 0%, #fafafa 100%)",
              boxShadow: "0 25px 80px -20px rgba(63,51,105,0.2)",
            }}
          >
            {/* Decorative corner */}
            <div
              className="absolute top-0 right-0 w-40 h-40 opacity-50"
              style={{
                background:
                  "radial-gradient(circle at top right, rgba(50,167,144,0.15) 0%, transparent 70%)",
              }}
            />

            <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
            {/* Personal Information Section */}
            <div>
              <h3 className="text-xl font-bold text-secondary mb-6 flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
                  style={{
                    background: "linear-gradient(135deg, #3F3369 0%, #5a4d8a 100%)",
                  }}
                >
                  <User className="w-4 h-4" />
                </div>
                Personal Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <InputField
                  label="Full Name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                  error={errors.name}
                  required
                  icon={<User className="w-5 h-5" />}
                />
                <InputField
                  label="Mobile Number"
                  name="mobile"
                  type="tel"
                  placeholder="+1 (234) 567-890"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  error={errors.mobile}
                  required
                  icon={<Phone className="w-5 h-5" />}
                />
              </div>
              <div className="mt-6">
                <InputField
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  error={errors.email}
                  icon={<Mail className="w-5 h-5" />}
                />
              </div>
            </div>

            {/* Business Information Section */}
            <div>
              <h3 className="text-xl font-bold text-secondary mb-6 flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
                  style={{
                    background: "linear-gradient(135deg, #32A790 0%, #4bc4a8 100%)",
                  }}
                >
                  <Briefcase className="w-4 h-4" />
                </div>
                Business Details
              </h3>
              <div className="space-y-6">
                <SelectField
                  label="Type of Business"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleInputChange}
                  options={businessTypes}
                  placeholder="Select your business type"
                  icon={<Briefcase className="w-5 h-5" />}
                />
                <TextareaField
                  label="Brief About Your Business"
                  name="businessBrief"
                  placeholder="Tell us a little about your business and what you're looking to achieve..."
                  value={formData.businessBrief}
                  onChange={handleInputChange}
                  icon={<MessageSquare className="w-5 h-5" />}
                />
              </div>
            </div>

            {/* Schedule Section */}
            <div>
              <h3 className="text-xl font-bold text-secondary mb-6 flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
                  style={{
                    background: "linear-gradient(135deg, #3F3369 0%, #32A790 100%)",
                  }}
                >
                  <Clock className="w-4 h-4" />
                </div>
                Schedule a Discussion
              </h3>
              <div className="space-y-6">
                <InputField
                  label="Flexible Time for Discussion"
                  name="flexibleTime"
                  placeholder="e.g., Weekdays after 3 PM, Monday & Wednesday mornings"
                  value={formData.flexibleTime}
                  onChange={handleInputChange}
                  error={errors.flexibleTime}
                  required
                  icon={<Clock className="w-5 h-5" />}
                />

                {/* Communication Medium Selection */}
                <div>
                  <label className="block mb-4 text-sm font-medium text-gray-700">
                    Preferred Communication Medium
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                    {communicationMediums.map((medium, index) => (
                      <MediumCard
                        key={medium.id}
                        medium={medium}
                        isSelected={formData.communicationMedium === medium.id}
                        onClick={() => handleMediumSelect(medium.id)}
                        index={index}
                      />
                    ))}
                  </div>
                  <AnimatePresence>
                    {errors.communicationMedium && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="mt-3 text-sm text-red-500 flex items-center gap-1"
                      >
                        <AlertCircle className="w-4 h-4" />
                        {errors.communicationMedium}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="pt-4"
            >
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-10 py-4 text-white font-semibold rounded-2xl transition-all duration-300 ${
                  isSubmitting ? "opacity-80 cursor-not-allowed" : ""
                }`}
                style={{
                  background:
                    "linear-gradient(135deg, #3F3369 0%, #5a4d8a 50%, #32A790 100%)",
                  boxShadow: "0 15px 50px -15px rgba(63,51,105,0.5)",
                }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </motion.button>
            </motion.div>
          </form>
          </motion.div>

          {/* Locations - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Locations Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                  style={{
                    background: "linear-gradient(135deg, #3F3369 0%, #32A790 100%)",
                  }}
                >
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-secondary">Our Locations</h3>
              </div>
              <p className="text-gray-600">
                Visit us at any of our global offices
              </p>
            </div>

            {/* Location Cards */}
            {locations.map((location, index) => (
              <motion.div
                key={location.country}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="relative rounded-2xl p-6 overflow-hidden group cursor-pointer"
                style={{
                  background: "linear-gradient(145deg, #ffffff 0%, #fafafa 100%)",
                  boxShadow: "0 15px 50px -15px rgba(63,51,105,0.15)",
                }}
              >
                {/* Decorative gradient overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(145deg, rgba(50,167,144,0.05) 0%, rgba(63,51,105,0.03) 100%)",
                  }}
                />

                {/* Location content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    {/* <span className="text-3xl">{location.flag}</span> */}
                    <div>
                      <h4 className="text-lg font-bold text-secondary">
                        Divenza {location.country}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: "linear-gradient(135deg, rgba(50,167,144,0.15) 0%, rgba(63,51,105,0.1) 100%)",
                      }}
                    >
                      <MapPin className="w-4 h-4 text-[#32A790]" />
                    </div>
                    <div className="text-gray-600 leading-relaxed">
                      {location.address.map((line, idx) => (
                        <p key={idx}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div
                  className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                  style={{
                    background: "radial-gradient(circle, #32A790 0%, transparent 70%)",
                  }}
                />
              </motion.div>
            ))}

            {/* Additional Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="rounded-2xl p-6 border-2 border-dashed border-gray-200 bg-gray-50/50"
            >
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center bg-[#32A790]/10">
                  <MessageCircle className="w-6 h-6 text-[#32A790]" />
                </div>
                <h4 className="font-semibold text-secondary mb-2">
                  Prefer to Chat?
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  Fill out the form and we'll get back to you within 24 hours.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-[#32A790] font-medium">
                  <Mail className="w-4 h-4" />
                  <span>info@divenzainc.com</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Main Page Component
const SayHelloPage = () => {
  return (
    <div className="">
      <HeroSection />
      <ContactFormSection />
    </div>
  );
};

export default SayHelloPage;
