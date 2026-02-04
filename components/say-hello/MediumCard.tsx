"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { CommunicationMedium } from "./types";

interface MediumCardProps {
  medium: CommunicationMedium;
  isSelected: boolean;
  onClick: () => void;
  index: number;
}

const MediumCard = ({ medium, isSelected, onClick, index }: MediumCardProps) => {
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

export default MediumCard;
