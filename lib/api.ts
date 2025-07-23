// API configuration with dynamic base URL
const getBaseUrl = () => {
  // In development, use localhost:3000
  // In production, this could be an environment variable
  if (typeof window !== 'undefined') {
    // Client-side
    return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  }
  // Server-side
  return process.env.API_URL || 'http://localhost:3000';
};

export const API_BASE_URL = getBaseUrl();

// API endpoints
export const API_ENDPOINTS = {
  LOGIN: '/api/v1/users/login',
  SIGNUP: '/api/v1/users/create',
  // Add more endpoints as needed
};

// Generic API call function
export const apiCall = async (endpoint: string, options: RequestInit = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const defaultOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  };

  const response = await fetch(url, {
    ...defaultOptions,
    ...options,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
  }

  return response.json();
};

// Login API function
export const loginUser = async (email: string, password: string) => {
  return apiCall(API_ENDPOINTS.LOGIN, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
};

// Signup API function
export const signupUser = async (userData: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  address?: string;
}) => {
  return apiCall(API_ENDPOINTS.SIGNUP, {
    method: 'POST',
    body: JSON.stringify(userData),
  });
};
