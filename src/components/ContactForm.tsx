import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! Our team will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      interest: '',
      message: ''
    });
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our programs? Interested in corporate training? Our education advisors are here to help.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="lg:w-1/3 bg-[#0077B5] text-white p-8">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="mb-8">Fill out the form and our team will get back to you within 24 hours.</p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-6 w-6 mr-4 flex-shrink-0" />
                <div>
                  <p className="font-medium">Call Us</p>
                  <p>+91 8805843309</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 mr-4 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email Us</p>
                  <p>contact@lotlitetechnology.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-4 flex-shrink-0" />
                <div>
                  <p className="font-medium">Visit Us</p>
                  <p>Lotlite Technology Pvt Ltd. Office - 122, Gera Imperium, Opp- Wipro, Hinjewadi Phase 2, Rajiv Gandhi Infotech Park, Pune, Maharashtra 411057</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3 p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0077B5] focus:border-[#0077B5] outline-none"
                    placeholder="vatsal vishal"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0077B5] focus:border-[#0077B5] outline-none"
                    placeholder="vatsal@gmail.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0077B5] focus:border-[#0077B5] outline-none"
                    placeholder="+91 8805843309"
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                    I'm Interested In
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0077B5] focus:border-[#0077B5] outline-none"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="Data Science">Data Science</option>
                    <option value="Software Development">Software Development</option>
                    <option value="Business Analytics">Business Analytics</option>
                    <option value="Management">Management</option>
                    <option value="Corporate Training">Corporate Training</option>
                    <option value="Study Abroad">Study Abroad</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0077B5] focus:border-[#0077B5] outline-none"
                  placeholder="Tell us about your education goals..."
                ></textarea>
              </div>
              
              <div className="flex items-center mb-6">
                <input
                  type="checkbox"
                  id="consent"
                  className="h-4 w-4 text-[#0077B5] focus:ring-[#0077B5] border-gray-300 rounded"
                  required
                />
                <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
                  I consent to receiving emails about your products and services. You can unsubscribe at any time.
                </label>
              </div>
              
              <button
                type="submit"
                className="px-6 py-3 bg-[#0077B5] text-white font-medium rounded-md hover:bg-[#005d8f] transition-colors flex items-center"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;