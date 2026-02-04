"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { AlertCircle } from "lucide-react";

interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  placeholder: string;
  error?: string;
  required?: boolean;
  icon: React.ReactNode;
}

const SelectField = ({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
  error,
  required = false,
  icon,
}: SelectFieldProps) => {
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
            isFocused ? "text-[#32A790]" : error ? "text-red-400" : "text-gray-400"
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
            error
              ? "border-red-300 bg-red-50/50 focus:border-red-400"
              : isFocused
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
              isFocused ? "text-[#32A790]" : error ? "text-red-400" : "text-gray-400"
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

export default SelectField;
