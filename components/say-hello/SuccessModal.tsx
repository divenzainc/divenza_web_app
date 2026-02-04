"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal = ({ isOpen, onClose }: SuccessModalProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>

          {/* Content */}
          <div
            className="text-center p-8 md:p-12"
            style={{
              background:
                "linear-gradient(145deg, rgba(50,167,144,0.1) 0%, rgba(63,51,105,0.05) 100%)",
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
              We've received your message and will get back to you within 24
              hours. Looking forward to our conversation!
            </p>
            <motion.button
              type="button"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onClose}
              className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-2xl transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #3F3369 0%, #5a4d8a 100%)",
                boxShadow: "0 10px 40px -10px rgba(63,51,105,0.5)",
              }}
            >
              Close
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SuccessModal;
