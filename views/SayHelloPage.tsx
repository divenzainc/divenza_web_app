"use client";

import { useState, useEffect } from "react";
import apiClient from "@/utils/ApiClient";
import toast from "react-hot-toast";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import type { CountryCode } from "libphonenumber-js/core";
import {
  HeroSection,
  ContactFormSection,
  OtpVerificationModal,
  SuccessModal,
  FormData,
  FormErrors,
  DropdownOption,
} from "@/components/say-hello";

const initialFormData: FormData = {
  name: "",
  mobile: "",
  email: "",
  serviceType: "",
  businessType: "",
  businessBrief: "",
  flexibleTime: "",
  communicationMedium: "",
};

interface SayHelloPageProps {
  defaultCountry?: CountryCode;
}

const SayHelloPage = ({ defaultCountry = "LK" }: SayHelloPageProps) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [customerId, setCustomerId] = useState<string>("");

  // Dropdown data from API
  const [serviceTypes, setServiceTypes] = useState<DropdownOption[]>([]);
  const [businessTypes, setBusinessTypes] = useState<DropdownOption[]>([]);
  const [isLoadingServiceTypes, setIsLoadingServiceTypes] = useState(true);
  const [isLoadingBusinessTypes, setIsLoadingBusinessTypes] = useState(true);

  // Fetch service types and business types on mount
  useEffect(() => {
    const fetchServiceTypes = async () => {
      try {
        const response = await apiClient.get("/service-type/get-all");
        if (response.data.status) {
          setServiceTypes(
            response.data.data.map((item: { _id: string; name: string }) => ({
              _id: item._id,
              name: item.name,
            }))
          );
        }
      } catch (error) {
        console.error("Error fetching service types:", error);
      } finally {
        setIsLoadingServiceTypes(false);
      }
    };

    const fetchBusinessTypes = async () => {
      try {
        const response = await apiClient.get("/business-type/get-all");
        if (response.data.status) {
          setBusinessTypes(
            response.data.data.map((item: { _id: string; name: string }) => ({
              _id: item._id,
              name: item.name,
            }))
          );
        }
      } catch (error) {
        console.error("Error fetching business types:", error);
      } finally {
        setIsLoadingBusinessTypes(false);
      }
    };

    fetchServiceTypes();
    fetchBusinessTypes();
  }, []);

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

  // Handle searchable select changes
  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Handle phone number change
  const handlePhoneChange = (value: string) => {
    setFormData((prev) => ({ ...prev, mobile: value }));
    if (errors.mobile) {
      setErrors((prev) => ({ ...prev, mobile: undefined }));
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

    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!isPossiblePhoneNumber(formData.mobile)) {
      newErrors.mobile = "Please enter a valid mobile number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.serviceType) {
      newErrors.serviceType = "Please select a service type";
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
        defaultCountry={defaultCountry}
        serviceTypes={serviceTypes}
        businessTypes={businessTypes}
        isLoadingServiceTypes={isLoadingServiceTypes}
        isLoadingBusinessTypes={isLoadingBusinessTypes}
        onInputChange={handleInputChange}
        onSelectChange={handleSelectChange}
        onPhoneChange={handlePhoneChange}
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
