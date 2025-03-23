import React from 'react';
import Logo from './Logo';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 text-gray-400 max-w-md">
              Lotlite Technology is a leading global education technology company offering professional certifications, degree programs, and career-focused training to help you advance your career.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[#0077B5] mr-3" />
                <span className="text-gray-400">+91 8805843309</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#0077B5] mr-3" />
                <span className="text-gray-400">contact@lotlitetechnology.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-[#0077B5] mr-3 mt-1" />
                <span className="text-gray-400">Lotlite Technology Pvt Ltd. Office - 122, Gera Imperium, Opp- Wipro, Hinjewadi Phase 2, Rajiv Gandhi Infotech Park, Pune, Maharashtra 411057</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Data Science</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Software Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Foriegn Deegree </a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Foriegn Exchange Programs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Product Management</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Partners</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Student Success</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Career Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Scholarships</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Events</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Webinars</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Lotlite. All rights reserved.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-4 flex flex-wrap justify-center md:justify-start space-x-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;