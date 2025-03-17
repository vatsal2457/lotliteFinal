// API service for connecting to the backend
import { API_BASE_URL } from './config';

// Interface for contact form data
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

// Function to send a contact form to the backend
export const sendContactForm = async (formData: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    // Transform the data to match the backend schema
    const contactData = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      message: formData.message
    };
    
    console.log('Sending data to backend:', contactData);
    console.log('API URL:', API_BASE_URL);
    
    // Add timeout to the fetch request
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
    
    try {
      const response = await fetch(`${API_BASE_URL}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      const data = await response.json();
      console.log('Response from backend:', data);
      
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
      
      return {
        success: true,
        message: 'Your message has been sent successfully. We will get back to you soon!'
      };
    } catch (fetchError) {
      if (fetchError.name === 'AbortError') {
        throw new Error('Request timed out. The server may be down or unreachable.');
      }
      throw fetchError;
    }
  } catch (error) {
    console.error('Error sending contact form:', error);
    
    // Provide more specific error messages
    if (error.message === 'Failed to fetch') {
      throw new Error('Cannot connect to the server. Please check your internet connection and try again, or contact support if the problem persists.');
    }
    
    throw error;
  }
};

// Add more API functions as needed 