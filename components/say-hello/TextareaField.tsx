"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface TextareaFieldProps {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  icon: React.ReactNode;
}

const TextareaField = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  required = false,
  icon,
}: TextareaFieldProps) => {
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

export default TextareaField;
