import { FiUpload, FiDollarSign, FiClock, FiShield, FiAward, FiUsers, FiMessageCircle } from 'react-icons/fi';

export interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
}

export interface ChatQuestion {
  id: number;
  question: string;
  answer: string;
}

export const steps: Step[] = [
  {
    id: 1,
    title: "Upload License",
    description: "Submit your license details securely through our encrypted portal.",
    icon: FiUpload
  },
  {
    id: 2,
    title: "Get Valuation",
    description: "Receive a fair, market-based valuation within 24 hours.",
    icon: FiDollarSign
  },
  {
    id: 3,
    title: "Get Paid",
    description: "Get paid instantly via your preferred payment method.",
    icon: FiClock
  }
];

export const features: Feature[] = [
  {
    id: 1,
    title: "Fast Payments",
    description: "Get paid within hours of accepting our valuation.",
    icon: FiClock
  },
  {
    id: 2,
    title: "Fair Valuations",
    description: "Market-driven pricing to maximize your value.",
    icon: FiAward
  },
  {
    id: 3,
    title: "Secure Process",
    description: "Encrypted submissions for your complete safety.",
    icon: FiShield
  },
  {
    id: 4,
    title: "Expert Support",
    description: "24/7 support from our dedicated team.",
    icon: FiUsers
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jane Doe",
    role: "IT Manager",
    company: "TechCorp",
    text: "SoftSell made selling our unused licenses incredibly easy. The process was fast, and the valuation was fair. Highly recommended for any business with surplus software."
  },
  {
    id: 2,
    name: "John Smith",
    role: "CFO",
    company: "Innovate Inc.",
    text: "The valuation was spot-on and payment was instant. SoftSell helped us recover significant value from our unused licenses. Their team was professional throughout the process."
  }
];

export const chatQuestions: ChatQuestion[] = [
  {
    id: 1,
    question: "How do I sell my license?",
    answer: "Upload your license details via our secure form, and we'll handle the rest. Our team will evaluate your license and provide a fair market valuation within 24 hours."
  },
  {
    id: 2,
    question: "What licenses do you accept?",
    answer: "We accept a wide range of licenses including Microsoft, Adobe, SAP, Oracle, Autodesk, and many more. If you're unsure about your specific license, please contact us."
  },
  {
    id: 3,
    question: "How long does valuation take?",
    answer: "Our expert team completes valuations within 24 hours of submission. For common software licenses, you may receive your valuation even faster."
  },
  {
    id: 4,
    question: "How do I get paid?",
    answer: "Once you accept our valuation, we process payments through your preferred method: bank transfer, PayPal, or cryptocurrency. Payments are typically processed within 1-2 business days."
  }
];

export const licenseTypes = [
  { value: "microsoft", label: "Microsoft" },
  { value: "adobe", label: "Adobe" },
  { value: "sap", label: "SAP" },
  { value: "oracle", label: "Oracle" },
  { value: "autodesk", label: "Autodesk" },
  { value: "other", label: "Other" }
];