"use client";

import { useState } from "react";
import apiClient from "@/utils/ApiClient";
import toast from "react-hot-toast";
import {
  HeroSection,
  ContactFormSection,
  OtpVerificationModal,
  SuccessModal,
  FormData,
  FormErrors,
} from "@/components/say-hello";

const initialFormData: FormData = {
  name: "",
  mobile: "",
  email: "",
  businessType: "",
  businessBrief: "",
  flexibleTime: "",
  communicationMedium: "",
};

const SayHelloPage = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [customerId, setCustomerId] = useState<string>("");

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Handle communication medium selection
  const handleMediumSelect = (mediumId: string) => {
    setFormData((prev) => ({ ...prev, communicationMedium: mediumId }));
    if (errors.communicationMedium) {
      setErrors((prev) => ({ ...prev, communicationMedium: undefined }));
    }
  };

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[\d\s+()-]{8,20}$/.test(formData.mobile.trim())) {
      newErrors.mobile = "Please enter a valid mobile number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.businessType) {
      newErrors.businessType = "Please select your business type";
    }

    if (!formData.flexibleTime.trim()) {
      newErrors.flexibleTime = "Please specify a flexible time for discussion";
    }

    if (!formData.communicationMedium) {
      newErrors.communicationMedium = "Please select a communication medium";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission (API call)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await apiClient.post("/customer/contact", formData);
      if (response.data.status) {
        toast.success(response.data.message);
        if (response.data.data?.customerId) {
          setCustomerId(response.data.data.customerId);
          setShowOtpModal(true);
        }
      } else {
        toast.error(response.data.message || "Something went wrong. Please try again.");
      }
    } catch (error: unknown) {
      console.error("Error submitting form:", error);
      const axiosError = error as { response?: { data?: { message?: string } } };
      toast.error(
        axiosError.response?.data?.message || "Failed to submit form. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle OTP verification (API call)
  const handleVerifyOtp = async (otp: string): Promise<{ success: boolean; message?: string }> => {
    try {
      const response = await apiClient.post("/customer/verify-otp", {
        customerId,
        otp,
      });

      if (response.data.status) {
        toast.success(response.data.message || "OTP verified successfully!");
        setShowOtpModal(false);
        setCustomerId("");
        setShowSuccessModal(true);
        setFormData(initialFormData);
        return { success: true };
      } else {
        return { success: false, message: response.data.message || "Invalid OTP. Please try again." };
      }
    } catch (error: unknown) {
      const axiosError = error as { response?: { data?: { message?: string } } };
      return {
        success: false,
        message: axiosError.response?.data?.message || "Verification failed. Please try again.",
      };
    }
  };

  // Handle OTP resend (API call)
  const handleResendOtp = async (): Promise<{ success: boolean; message?: string }> => {
    try {
      const response = await apiClient.post("/customer/resend-otp", {
        customerId,
      });

      if (response.data.status) {
        toast.success(response.data.message || "OTP resent successfully!");
        return { success: true };
      } else {
        return { success: false, message: response.data.message || "Failed to resend OTP." };
      }
    } catch (error: unknown) {
      const axiosError = error as { response?: { data?: { message?: string } } };
      return {
        success: false,
        message: axiosError.response?.data?.message || "Failed to resend OTP. Please try again.",
      };
    }
  };

  // Handle OTP modal close
  const handleOtpModalClose = () => {
    setShowOtpModal(false);
  };

  // Handle success modal close
  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
  };

  return (
    <div className="">
      <HeroSection />
      <ContactFormSection
        formData={formData}
        errors={errors}
        isSubmitting={isSubmitting}
        onInputChange={handleInputChange}
        onMediumSelect={handleMediumSelect}
        onSubmit={handleSubmit}
      />
      <OtpVerificationModal
        isOpen={showOtpModal}
        onClose={handleOtpModalClose}
        customerId={customerId}
        onVerifyOtp={handleVerifyOtp}
        onResendOtp={handleResendOtp}
      />
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={handleSuccessModalClose}
      />
    </div>
  );
};

export default SayHelloPage;
