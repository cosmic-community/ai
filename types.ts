// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Invoice type with proper metadata structure
export interface Invoice extends CosmicObject {
  type: 'invoices';
  metadata: {
    invoice_number: string;
    total_amount: number;
    invoice_type: {
      key: 'electricity' | 'water' | 'internet' | 'phone' | 'gas' | 'other';
      value: string;
    };
    due_date: string;
    payment_status: {
      key: 'pending' | 'paid' | 'overdue' | 'cancelled';
      value: string;
    };
    potential_penalty?: number;
    suggested_savings?: number;
    savings_percentage?: number;
    invoice_image?: {
      url: string;
      imgix_url: string;
    };
    company_name?: string;
    ai_notes?: string;
    auto_processed?: boolean;
  };
}

// Payment suggestion type
export interface PaymentSuggestion extends CosmicObject {
  type: 'payment-suggestions';
  metadata: {
    suggestion_title: string;
    suggestion_description: string;
    savings_rate: number;
    saved_amount: number;
    payment_method: {
      key: 'bank_transfer' | 'credit_card' | 'mobile_payment' | 'cash' | 'e_wallet';
      value: string;
    };
    recommended_bank?: string;
    priority: {
      key: 'high' | 'medium' | 'low';
      value: string;
    };
    valid_until?: string;
    suggestion_icon?: string;
  };
}

// Monthly report type
export interface MonthlyReport extends CosmicObject {
  type: 'monthly-reports';
  metadata: {
    report_month: string;
    total_payments: number;
    total_savings: number;
    invoice_count: number;
    paid_invoices: number;
    pending_invoices: number;
    overall_savings_rate?: number;
    chart_data?: {
      categories: string[];
      payments: number[];
      savings: number[];
      months: string[];
      monthly_totals: number[];
      monthly_savings: number[];
    };
    report_summary?: string;
    ai_recommendations?: string;
    report_pdf?: {
      url: string;
      imgix_url: string;
    };
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
}

// Helper type guards
export function isInvoice(obj: CosmicObject): obj is Invoice {
  return obj.type === 'invoices';
}

export function isPaymentSuggestion(obj: CosmicObject): obj is PaymentSuggestion {
  return obj.type === 'payment-suggestions';
}

export function isMonthlyReport(obj: CosmicObject): obj is MonthlyReport {
  return obj.type === 'monthly-reports';
}