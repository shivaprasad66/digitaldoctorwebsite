export interface Product {
  id: string;
  name: string;
  price: number;
  comparePrice?: number | null;
  category: string;
  inStock: boolean;
  image: string;
  description: string;
  condition: string;
  rating: number;
  reviewsCount: number;
  specs?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface RepairCategory {
  id: string;
  name: string;
  icon: string;
  popularBrands: string[];
  description: string;
}

export interface RepairModel {
  id: string;
  categoryId: string;
  brand: string;
  name: string;
  image?: string;
  releaseYear?: number;
}

export interface RepairIssue {
  id: string;
  name: string;
  category: string;
  basePrice: number;
  estimatedMinutes: number;
  description: string;
  commonSymptoms: string[];
}

export interface RepairQuote {
  categoryId: string;
  categoryName: string;
  brand: string;
  model: string;
  issueId: string;
  issueName: string;
  serviceMode: 'in-store' | 'mobile-van' | 'mail-in';
  estimatedCost: number;
  estimatedTime: string;
  isDataImportant: boolean;
  notes?: string;
  customerName?: string;
  customerPhone?: string;
  customerEmail?: string;
  preferredDate?: string;
  preferredTime?: string;
  address?: string;
}

export interface TrackingTicket {
  ticketId: string;
  customerName: string;
  device: string;
  issue: string;
  serviceType: 'In-Store Express' | 'Mobile Van Unit' | 'Mail-In Service';
  currentStep: number;
  status: string;
  statusDate: string;
  estimatedCompletion: string;
  technician: string;
  steps: {
    title: string;
    description: string;
    completed: boolean;
    current: boolean;
    timestamp?: string;
  }[];
  notes?: string;
  warrantyEnds?: string;
}

export interface FAQItem {
  id: string;
  category: 'general' | 'pricing' | 'turnaround' | 'mail-in' | 'warranty';
  question: string;
  answer: string;
}
