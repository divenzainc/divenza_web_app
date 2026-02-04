import { ReactNode } from "react";

// Form data interface
export interface FormData {
  name: string;
  mobile: string;
  email: string;
  businessType: string;
  businessBrief: string;
  flexibleTime: string;
  communicationMedium: string;
}

// Form errors interface
export interface FormErrors {
  name?: string;
  mobile?: string;
  email?: string;
  businessType?: string;
  flexibleTime?: string;
  communicationMedium?: string;
}

// Communication medium type
export interface CommunicationMedium {
  id: string;
  label: string;
  icon: ReactNode;
  description: string;
}

// Location type
export interface Location {
  country: string;
  flag: string;
  address: string[];
  phone: string;
}
