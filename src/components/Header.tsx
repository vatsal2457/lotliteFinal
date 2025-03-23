import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <Logo />
            <span className="text-xl font-bold text-[#0077B5]">Technology</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/corporate-partner-program" className="text-gray-700 hover:text-[#0077B5] font-medium transition-colors duration-200">
              Corporate Programs
            </Link>
            <Link to="/it-services" className="text-gray-700 hover:text-[#0077B5] font-medium transition-colors duration-200">
              IT Services
            </Link>
            <Link to="/maang-certificates" className="text-gray-700 hover:text-[#0077B5] font-medium transition-colors duration-200">
              Certificates
            </Link>
            <Link to="/foreign-exchange" className="text-gray-700 hover:text-[#0077B5] font-medium transition-colors duration-200">
              Foreign Exchange
            </Link>
            <Link to="/foreign-degree-programs" className="text-gray-700 hover:text-[#0077B5] font-medium transition-colors duration-200">
              Foreign Degree
            </Link>
            <Link to="/university-partner-program" className="text-gray-700 hover:text-[#0077B5] font-medium transition-colors duration-200">
              University Partner
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/career" className="px-5 py-2 text-[#0077B5] font-medium border-2 border-[#0077B5] rounded-md hover:bg-[#0077B5] hover:text-white transition-all duration-200">
              Career
            </Link>
            <Link to="/contact-us" className="px-5 py-2 bg-[#0077B5] text-white font-medium rounded-md hover:bg-[#005d8f] transition-colors duration-200">
              Contact Us
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 hover:bg-gray-100 rounded-md transition-colors duration-200" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-6 py-4">
            <div className="space-y-4">
              <Link to="/corporate-partner-program" className="block py-2.5 text-gray-700 font-medium hover:text-[#0077B5] transition-colors duration-200">
                Corporate Partner Programs
              </Link>
              <Link to="/it-services" className="block py-2.5 text-gray-700 font-medium hover:text-[#0077B5] transition-colors duration-200">
                IT Services
              </Link>
              <Link to="/maang-certificates" className="block py-2.5 text-gray-700 font-medium hover:text-[#0077B5] transition-colors duration-200">
                MAANG Certificates
              </Link>
              <Link to="/foreign-exchange" className="block py-2.5 text-gray-700 font-medium hover:text-[#0077B5] transition-colors duration-200">
                Foreign Exchange
              </Link>
              <Link to="/foreign-degree-programs" className="block py-2.5 text-gray-700 font-medium hover:text-[#0077B5] transition-colors duration-200">
                Foreign Degree Programs
              </Link>
              <Link to="/university-partner-program" className="block py-2.5 text-gray-700 font-medium hover:text-[#0077B5] transition-colors duration-200">
                University Partner Program
              </Link>
              <div className="flex flex-col space-y-3 pt-4 border-t">
                <Link to="/career" className="w-full px-5 py-2.5 text-[#0077B5] font-medium border-2 border-[#0077B5] rounded-md hover:bg-[#0077B5] hover:text-white transition-all duration-200 text-center">
                  Career
                </Link>
                <Link to="/contact-us" className="w-full px-5 py-2.5 bg-[#0077B5] text-white font-medium rounded-md hover:bg-[#005d8f] transition-colors duration-200 text-center">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;