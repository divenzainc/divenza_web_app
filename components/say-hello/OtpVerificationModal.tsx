"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { X, ShieldCheck, AlertCircle, RefreshCw } from "lucide-react";

interface OtpVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  inquiryId: string;
  onVerifyOtp: (otp: string) => Promise<{ success: boolean; message?: string }>;
  onResendOtp: () => Promise<{ success: boolean; message?: string }>;
}

const OtpVerificationModal = ({
  isOpen,
  onClose,
  inquiryId,
  onVerifyOtp,
  onResendOtp,
}: OtpVerificationModalProps) => {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [error, setError] = useState<string>("");
  const [resendTimer, setResendTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Countdown timer for resend
  useEffect(() => {
    if (!isOpen) return;

    setResendTimer(30);
    setCanResend(false);

    const interval = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          setCanResend(true);
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen]);

  // Focus first input when modal opens
  useEffect(() => {
    if (isOpen && inputRefs.current[0]) {
      setTimeout(() => inputRefs.current[0]?.focus(), 100);
    }
  }, [isOpen]);

  const handleOtpChange = (index: number, value: string) => {
    if (value && !/^\d$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError("");

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (pastedData) {
      const newOtp = [...otp];
      pastedData.split("").forEach((char, index) => {
        if (index < 6) newOtp[index] = char;
      });
      setOtp(newOtp);
      setError("");
      const focusIndex = Math.min(pastedData.length, 5);
      inputRefs.current[focusIndex]?.focus();
    }
  };

  const handleVerifyOtp = useCallback(async () => {
    const otpString = otp.join("");
    if (otpString.length !== 6) {
      setError("Please enter the complete 6-digit OTP");
      return;
    }

    setIsVerifying(true);
    setError("");

    try {
      const result = await onVerifyOtp(otpString);
      if (!result.success) {
        setError(result.message || "Invalid OTP. Please try again.");
      }
    } catch {
      setError("Verification failed. Please try again.");
    } finally {
      setIsVerifying(false);
    }
  }, [otp, onVerifyOtp]);

  const handleResendOtp = async () => {
    if (!canResend || isResending) return;

    setIsResending(true);
    setError("");

    try {
      const result = await onResendOtp();
      if (result.success) {
        setOtp(["", "", "", "", "", ""]);
        setResendTimer(30);
        setCanResend(false);
        inputRefs.current[0]?.focus();

        const interval = setInterval(() => {
          setResendTimer((prev) => {
            if (prev <= 1) {
              setCanResend(true);
              clearInterval(interval);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      } else {
        setError(result.message || "Failed to resend OTP.");
      }
    } catch {
      setError("Failed to resend OTP. Please try again.");
    } finally {
      setIsResending(false);
    }
  };

  // Handle Enter key to submit
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Enter" && isOpen && otp.join("").length === 6) {
        handleVerifyOtp();
      }
    };

    window.addEventListener("keypress", handleKeyPress);
    return () => window.removeEventListener("keypress", handleKeyPress);
  }, [isOpen, otp, handleVerifyOtp]);

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
          {/* Decorative Header Background */}
          <div
            className="absolute top-0 left-0 right-0 h-32"
            style={{
              background: "linear-gradient(135deg, #3F3369 0%, #32A790 100%)",
            }}
          />

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Content */}
          <div className="relative pt-8 pb-8 px-6 sm:px-8">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 rounded-full flex items-center justify-center bg-white shadow-xl"
              >
                <ShieldCheck className="w-10 h-10 text-[#32A790]" />
              </motion.div>
            </div>

            {/* Title */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-secondary mb-2">
                Verify Your Number
              </h3>
              <p className="text-gray-600 text-sm">
                We've sent a 6-digit verification code to your mobile number.
                Please enter it below.
              </p>
            </div>

            {/* OTP Input */}
            <div className="mb-6">
              <div className="flex justify-center gap-2 sm:gap-3">
                {otp.map((digit, index) => (
                  <motion.input
                    key={index}
                    ref={(el) => { inputRefs.current[index] = el; }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    className={`w-11 h-14 sm:w-12 sm:h-16 text-center text-xl sm:text-2xl font-bold rounded-xl border-2 transition-all duration-300 outline-none ${
                      error
                        ? "border-red-300 bg-red-50 text-red-600"
                        : digit
                        ? "border-[#32A790] bg-[#32A790]/5 text-[#32A790]"
                        : "border-gray-200 bg-gray-50 text-gray-800 focus:border-[#32A790] focus:bg-white"
                    }`}
                  />
                ))}
              </div>

              {/* Error Message */}
              <AnimatePresence>
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="mt-4 text-sm text-red-500 flex items-center justify-center gap-1"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {error}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Verify Button */}
            <motion.button
              type="button"
              onClick={handleVerifyOtp}
              disabled={isVerifying || otp.join("").length !== 6}
              whileHover={{ scale: isVerifying ? 1 : 1.02 }}
              whileTap={{ scale: isVerifying ? 1 : 0.98 }}
              className={`w-full py-4 rounded-2xl font-semibold text-white transition-all duration-300 ${
                isVerifying || otp.join("").length !== 6
                  ? "opacity-60 cursor-not-allowed"
                  : ""
              }`}
              style={{
                background: "linear-gradient(135deg, #3F3369 0%, #32A790 100%)",
                boxShadow: "0 10px 40px -10px rgba(63,51,105,0.5)",
              }}
            >
              {isVerifying ? (
                <span className="flex items-center justify-center gap-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  Verifying...
                </span>
              ) : (
                "Verify OTP"
              )}
            </motion.button>

            {/* Resend Option */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500 mb-2">
                Didn't receive the code?
              </p>
              {canResend ? (
                <button
                  type="button"
                  onClick={handleResendOtp}
                  disabled={isResending}
                  className="inline-flex items-center gap-2 text-[#32A790] font-semibold hover:text-[#2a9078] transition-colors disabled:opacity-60"
                >
                  {isResending ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <RefreshCw className="w-4 h-4" />
                      </motion.div>
                      Resending...
                    </>
                  ) : (
                    <>
                      <RefreshCw className="w-4 h-4" />
                      Resend OTP
                    </>
                  )}
                </button>
              ) : (
                <p className="text-sm text-gray-400">
                  Resend available in{" "}
                  <span className="font-semibold text-[#3F3369]">
                    {resendTimer}s
                  </span>
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default OtpVerificationModal;
