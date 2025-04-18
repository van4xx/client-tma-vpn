// API service for communicating with the backend

const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-api-url.com/api' 
  : 'http://localhost:3001/api';

// Types for API responses
export interface Tariff {
  id: string;
  name: string;
  price: number;
  description: string;
  speed: string;
  countries: string[];
}

export interface Plan {
  id: string;
  name: string;
  price: number;
  totalPrice: number;
  duration: string;
  durationHours?: number;
  durationDays: number;
}

export interface PaymentData {
  paymentId: string;
  paymentUrl: string;
  expiresAt: string;
}

// Fetch all tariffs
export const fetchTariffs = async (): Promise<Tariff[]> => {
  try {
    const response = await fetch(`${API_URL}/tariffs`);
    
    if (!response.ok) {
      throw new Error(`Error fetching tariffs: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching tariffs:', error);
    throw error;
  }
};

// Fetch plans for a specific tariff
export const fetchPlans = async (tariffId: string): Promise<Plan[]> => {
  try {
    const response = await fetch(`${API_URL}/plans/${tariffId}`);
    
    if (!response.ok) {
      throw new Error(`Error fetching plans: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching plans:', error);
    throw error;
  }
};

// Create a payment
export const createPayment = async (
  tariffId: string,
  planId: string,
  email?: string,
  autoRenewal?: boolean
): Promise<PaymentData> => {
  try {
    const response = await fetch(`${API_URL}/payments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tariffId,
        planId,
        email,
        autoRenewal
      }),
    });
    
    if (!response.ok) {
      throw new Error(`Error creating payment: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error creating payment:', error);
    throw error;
  }
};

// Validate payment and get VPN key
export const validatePayment = async (
  paymentId: string
): Promise<{ success: boolean; key?: string; message?: string }> => {
  try {
    const response = await fetch(`${API_URL}/payments/validate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        paymentId
      }),
    });
    
    if (!response.ok) {
      throw new Error(`Error validating payment: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error validating payment:', error);
    throw error;
  }
}; 