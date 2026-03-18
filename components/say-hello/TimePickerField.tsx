"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Clock, ChevronDown, AlertCircle } from "lucide-react";

interface TimePickerFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  error?: string;
  required?: boolean;
}

const generateTimeSlots = (): string[] => {
  const slots: string[] = [];
  for (let hour = 6; hour <= 22; hour++) {
    for (const min of [0, 30]) {
      const h = hour % 12 || 12;
      const ampm = hour < 12 ? "AM" : "PM";
      const m = min === 0 ? "00" : "30";
      slots.push(`${h}:${m} ${ampm}`);
    }
  }
  return slots;
};

const TIME_SLOTS = generateTimeSlots();

const TimePickerField = ({
  label,
  name,
  value,
  onChange,
  error,
  required = false,
}: TimePickerFieldProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const selectedRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll to selected item when dropdown opens
  useEffect(() => {
    if (isOpen && selectedRef.current) {
      selectedRef.current.scrollIntoView({ block: "center" });
    }
  }, [isOpen]);

  const handleSelect = (time: string) => {
    onChange(name, time);
    setIsOpen(false);
  };

  const isFocused = isOpen;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative"
      ref={containerRef}
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
        {/* Clock icon */}
        <div
          className={`absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-colors duration-200 ${
            isFocused ? "text-[#32A790]" : error ? "text-red-400" : "text-gray-400"
          }`}
        >
          <Clock className="w-5 h-5" />
        </div>

        {/* Trigger button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className={`w-full pl-12 pr-10 py-2 rounded-2xl border-2 transition-all duration-300 outline-none text-left text-sm ${
            error
              ? "border-red-300 bg-red-50/50 focus:border-red-400"
              : isFocused
              ? "border-[#32A790] bg-white shadow-lg shadow-[#32A790]/10"
              : "border-gray-200 bg-gray-50/50 hover:border-gray-300"
          } ${!value ? "text-gray-400" : "text-gray-800"}`}
        >
          {value || "Select a time"}
        </button>

        {/* Chevron */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <ChevronDown
            className={`w-5 h-5 transition-all duration-200 ${
              isOpen ? "rotate-180 text-[#32A790]" : error ? "text-red-400" : "text-gray-400"
            }`}
          />
        </div>

        {/* Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -6, scaleY: 0.95 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: -6, scaleY: 0.95 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              style={{ transformOrigin: "top", boxShadow: "0 20px 60px -10px rgba(63,51,105,0.2)" }}
              className="absolute z-50 w-full mt-2 rounded-2xl border border-gray-100 bg-white overflow-hidden"
            >
              {/* Header */}
              <div className="px-4 py-2.5 border-b border-gray-100 bg-gradient-to-r from-[#3F3369]/5 to-[#32A790]/5">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Select Time
                </p>
              </div>

              {/* Time list */}
              <div className="max-h-52 overflow-y-auto">
                {TIME_SLOTS.map((time) => {
                  const isSelected = value === time;
                  return (
                    <button
                      key={time}
                      ref={isSelected ? selectedRef : undefined}
                      type="button"
                      onClick={() => handleSelect(time)}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-all duration-150 flex items-center justify-between group ${
                        isSelected
                          ? "bg-[#32A790]/10 text-[#32A790] font-semibold"
                          : "text-gray-700 hover:bg-gray-50 hover:text-[#32A790]"
                      }`}
                    >
                      <span>{time}</span>
                      {isSelected && (
                        <svg
                          className="w-4 h-4 text-[#32A790]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Error */}
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

export default TimePickerField;
