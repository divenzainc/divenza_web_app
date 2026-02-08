"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { AlertCircle } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import type { E164Number, CountryCode } from "libphonenumber-js/core";
import "react-phone-number-input/style.css";

interface PhoneInputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  defaultCountry?: CountryCode;
}

const PhoneInputField = ({
  label,
  value,
  onChange,
  error,
  required = false,
  defaultCountry = "LK",
}: PhoneInputFieldProps) => {
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
        <PhoneInput
          international
          defaultCountry={defaultCountry}
          limitMaxLength
          value={(value as E164Number) || undefined}
          onChange={(val) => onChange(val || "")}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`phone-input-custom w-full pl-4 pr-4 py-2 rounded-2xl border-2 transition-all duration-300 outline-none ${
            error
              ? "border-red-300 bg-red-50/50 focus-within:border-red-400"
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

export default PhoneInputField;
