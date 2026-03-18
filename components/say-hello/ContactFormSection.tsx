"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useEffect } from "react";
import {
  Send,
  User,
  Phone,
  Mail,
  Briefcase,
  MessageSquare,
  Clock,
  AlertCircle,
  MessageCircle,
  MapPin,
  Globe,
  Layers,
  Calendar,
} from "lucide-react";
import type { CountryCode } from "libphonenumber-js/core";
import { FormData, FormErrors, DropdownOption } from "./types";
import { communicationMediums, locations } from "./constants";
import InputField from "./InputField";
import PhoneInputField from "./PhoneInputField";
import SearchableSelectField from "./SearchableSelectField";
import SelectField from "./SelectField";
import TextareaField from "./TextareaField";
import MediumCard from "./MediumCard";
import TimePickerField from "./TimePickerField";

const DAYS_OF_WEEK = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

interface ContactFormSectionProps {
  formData: FormData;
  errors: FormErrors;
  isSubmitting: boolean;
  defaultCountry?: CountryCode;
  serviceTypes: DropdownOption[];
  businessTypes: DropdownOption[];
  isLoadingServiceTypes?: boolean;
  isLoadingBusinessTypes?: boolean;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  onSelectChange: (name: string, value: string) => void;
  onPhoneChange: (value: string) => void;
  onSameAsMobileChange: (value: boolean) => void;
  onMediumSelect: (mediumId: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const ContactFormSection = ({
  formData,
  errors,
  isSubmitting,
  defaultCountry = "LK",
  serviceTypes,
  businessTypes,
  isLoadingServiceTypes = false,
  isLoadingBusinessTypes = false,
  onInputChange,
  onSelectChange,
  onPhoneChange,
  onSameAsMobileChange,
  onMediumSelect,
  onSubmit,
}: ContactFormSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Sync WhatsApp number when "Same as Mobile" is checked or mobile changes
  useEffect(() => {
    if (!formData.sameAsMobile) return;
    const stripped = formData.mobile ? formData.mobile.replace(/^\+/, "") : "";
    onSelectChange("whatsAppNumber", stripped);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.mobile, formData.sameAsMobile]);

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
              background: "linear-gradient(145deg, #ffffff 0%, #fafafa 100%)",
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

            <form onSubmit={onSubmit} className="relative z-10 space-y-8">
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
                    onChange={onInputChange}
                    error={errors.name}
                    required
                    icon={<User className="w-5 h-5" />}
                  />
                  <PhoneInputField
                    label="Mobile Number"
                    value={formData.mobile}
                    onChange={onPhoneChange}
                    error={errors.mobile}
                    required
                    defaultCountry={defaultCountry}
                  />
                </div>
                <div className="mt-6">
                  <InputField
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={onInputChange}
                    error={errors.email}
                    required
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
                  <div className="grid md:grid-cols-2 gap-6">
                    <SearchableSelectField
                      label="Type of Service"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={onSelectChange}
                      options={serviceTypes}
                      placeholder="Select a service type"
                      error={errors.serviceType}
                      required
                      icon={<Layers className="w-5 h-5" />}
                      isLoading={isLoadingServiceTypes}
                    />
                    <SearchableSelectField
                      label="Type of Business"
                      name="businessType"
                      value={formData.businessType}
                      onChange={onSelectChange}
                      options={businessTypes}
                      placeholder="Select your business type"
                      error={errors.businessType}
                      required
                      icon={<Briefcase className="w-5 h-5" />}
                      isLoading={isLoadingBusinessTypes}
                    />
                  </div>
                  <TextareaField
                    label="Brief About Your Business"
                    name="businessBrief"
                    placeholder="Tell us a little about your business and what you're looking to achieve..."
                    value={formData.businessBrief}
                    onChange={onInputChange}
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
                  {/* Day & Time row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <SelectField
                      label="Preferred Day"
                      name="flexibleDate"
                      value={formData.flexibleDate}
                      onChange={onInputChange}
                      options={DAYS_OF_WEEK}
                      placeholder="Select a day"
                      error={errors.flexibleDate}
                      required
                      icon={<Calendar className="w-5 h-5" />}
                    />
                    <TimePickerField
                      label="Preferred Time"
                      name="flexibleTime"
                      value={formData.flexibleTime ?? ""}
                      onChange={onSelectChange}
                      error={errors.flexibleTime}
                      required
                    />
                  </div>

                  {/* WhatsApp Number */}
                  <div>
                    <InputField
                      label="WhatsApp Number"
                      name="whatsAppNumber"
                      placeholder="e.g., 94761234567"
                      value={formData.whatsAppNumber ?? ""}
                      onChange={onInputChange}
                      error={errors.whatsAppNumber}
                      required
                      icon={<Phone className="w-5 h-5" />}
                    />
                    <label className="mt-3 flex items-center gap-2.5 cursor-pointer select-none w-fit">
                      <div
                        onClick={() => onSameAsMobileChange(!formData.sameAsMobile)}
                        className={`relative w-10 h-5 rounded-full transition-all duration-300 shrink-0 ${
                          formData.sameAsMobile ? "bg-[#32A790]" : "bg-gray-200"
                        }`}
                      >
                        <div
                          className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-300 ${
                            formData.sameAsMobile ? "translate-x-5" : "translate-x-0"
                          }`}
                        />
                      </div>
                      <span className="text-sm text-gray-600">
                        Same as Mobile{" "}
                        <span className="text-gray-400 text-xs">(no + sign, e.g. 94769781811)</span>
                      </span>
                    </label>
                  </div>

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
                          onClick={() => onMediumSelect(medium.id)}
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

                  <div className="flex items-start gap-3 mt-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: "linear-gradient(135deg, rgba(50,167,144,0.15) 0%, rgba(63,51,105,0.1) 100%)",
                      }}
                    >
                      <Phone className="w-4 h-4 text-[#32A790]" />
                    </div>
                    <div className="text-gray-600 leading-relaxed">
                      <a href={`tel:${location.phone.replace(/[\s()-]/g, "")}`} className="hover:text-[#32A790] transition-colors">
                        {location.phone}
                      </a>
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
                {/* <div className="flex items-center justify-center gap-2 text-sm text-[#32A790] font-medium">
                  <Mail className="w-4 h-4" />
                  <span>sales@divenzainc.com</span>
                </div> */}
                <div className="flex items-center justify-center gap-2 text-sm text-[#32A790] font-medium">
                  <Mail className="w-4 h-4" />
                  <span>contact@divenzainc.com</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
