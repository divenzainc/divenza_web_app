"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect, useMemo } from "react";
import { AlertCircle, ChevronDown, Search, Check, X, Loader2 } from "lucide-react";
import { DropdownOption } from "./types";

interface SearchableSelectFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  options: DropdownOption[];
  placeholder: string;
  error?: string;
  required?: boolean;
  icon: React.ReactNode;
  isLoading?: boolean;
}

const SearchableSelectField = ({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
  error,
  required = false,
  icon,
  isLoading = false,
}: SearchableSelectFieldProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const selectedOption = useMemo(
    () => options.find((opt) => opt._id === value),
    [options, value]
  );

  const filtered = useMemo(() => {
    if (!search.trim()) return options;
    const lower = search.toLowerCase();
    return options.filter((opt) => opt.name.toLowerCase().includes(lower));
  }, [options, search]);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSelect = (option: DropdownOption) => {
    onChange(name, option._id);
    setIsOpen(false);
    setSearch("");
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(name, "");
    setSearch("");
  };

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

      {/* Trigger Button */}
      <div
        onClick={() => !isLoading && setIsOpen(!isOpen)}
        className={`relative w-full pl-12 pr-10 py-2 rounded-2xl border-2 transition-all duration-300 cursor-pointer select-none flex items-center min-h-[44px] ${
          error
            ? "border-red-300 bg-red-50/50"
            : isOpen
            ? "border-[#32A790] bg-white shadow-lg shadow-[#32A790]/10"
            : "border-gray-200 bg-gray-50/50 hover:border-gray-300"
        }`}
      >
        <div
          className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-200 pointer-events-none ${
            isOpen ? "text-[#32A790]" : error ? "text-red-400" : "text-gray-400"
          }`}
        >
          {icon}
        </div>

        <span className={selectedOption ? "text-gray-800" : "text-gray-400"}>
          {isLoading ? "Loading..." : selectedOption ? selectedOption.name : placeholder}
        </span>

        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1">
          {isLoading ? (
            <Loader2 className="w-4 h-4 text-gray-400 animate-spin" />
          ) : (
            <>
              {value && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="p-0.5 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <X className="w-3.5 h-3.5 text-gray-400" />
                </button>
              )}
              <ChevronDown
                className={`w-5 h-5 transition-all duration-200 ${
                  isOpen ? "text-[#32A790] rotate-180" : error ? "text-red-400" : "text-gray-400"
                }`}
              />
            </>
          )}
        </div>
      </div>

      {/* Dropdown Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute z-50 mt-2 w-full bg-white rounded-2xl border border-gray-200 shadow-xl shadow-gray-200/50 overflow-hidden"
          >
            {/* Search Input */}
            <div className="p-3 border-b border-gray-100">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  ref={inputRef}
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search..."
                  className="w-full pl-9 pr-4 py-2 text-sm rounded-xl border border-gray-200 bg-gray-50 focus:border-[#32A790] focus:bg-white focus:outline-none transition-all duration-200 text-gray-800 placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Options List */}
            <div className="max-h-52 overflow-y-auto overscroll-contain py-1">
              {filtered.length === 0 ? (
                <div className="px-4 py-6 text-center text-sm text-gray-400">
                  No results found
                </div>
              ) : (
                filtered.map((option) => {
                  const isSelected = option._id === value;
                  return (
                    <button
                      key={option._id}
                      type="button"
                      onClick={() => handleSelect(option)}
                      className={`w-full text-left px-4 py-2.5 text-sm flex items-center justify-between transition-colors duration-150 ${
                        isSelected
                          ? "bg-[#32A790]/10 text-[#32A790] font-medium"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <span>{option.name}</span>
                      {isSelected && <Check className="w-4 h-4 text-[#32A790] flex-shrink-0" />}
                    </button>
                  );
                })
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Message */}
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

export default SearchableSelectField;
