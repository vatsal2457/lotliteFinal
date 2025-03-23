import React, { useState } from 'react';
import { Menu, X, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Logo />
            <span className="ml-2 text-xl font-semibold text-[#0077B5]">Technology</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/corporate-partner-program" className="text-gray-700 hover:text-[#0077B5] font-medium">
              Corporate Programs
            </Link>
            <Link to="/it-services" className="text-gray-700 hover:text-[#0077B5] font-medium">
              IT Services
            </Link>
            <Link to="/maang-certificates" className="text-gray-700 hover:text-[#0077B5] font-medium">
              Certificates
            </Link>
            <Link to="/foreign-exchange" className="text-gray-700 hover:text-[#0077B5] font-medium">
              Foreign Exchange
            </Link>
            <Link to="/foreign-degree-programs" className="text-gray-700 hover:text-[#0077B5] font-medium">
              Foreign Degree 
            </Link>
            <Link to="/university-partner-program" className="text-gray-700 hover:text-[#0077B5] font-medium">
              University Partner 
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/career" className="px-4 py-2 text-[#0077B5] font-medium border border-[#0077B5] rounded-md hover:bg-[#0077B5] hover:text-white transition-colors">
              Career
            </Link>
            <Link to="/contact-us" className="px-4 py-2 bg-[#0077B5] text-white font-medium rounded-md hover:bg-[#005d8f] transition-colors">
              Contact Us
            </Link>
            <Link to="/admin/login" className="px-4 py-2 text-gray-600 font-medium border border-gray-300 rounded-md hover:bg-gray-50 transition-colors flex items-center gap-2">
              <Lock className="h-4 w-4" />
              Admin
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3">
            <div className="space-y-3">
              <Link to="/corporate-partner-program" className="block py-2 text-gray-700 font-medium">
                Corporate Partner Programs
              </Link>
              <Link to="/it-services" className="block py-2 text-gray-700 font-medium">
                IT Services
              </Link>
              <Link to="/maang-certificates" className="block py-2 text-gray-700 font-medium">
                MAANG Certificates
              </Link>
              <Link to="/foreign-exchange" className="block py-2 text-gray-700 font-medium">
                Foreign Exchange
              </Link>
              <Link to="/foreign-degree-programs" className="block py-2 text-gray-700 font-medium">
                Foreign Degree Programs
              </Link>
              <Link to="/university-partner-program" className="block py-2 text-gray-700 font-medium">
                University Partner Program
              </Link>
              <div className="flex flex-col space-y-2 pt-3">
                <Link to="/career" className="w-full px-4 py-2 text-[#0077B5] font-medium border border-[#0077B5] rounded-md hover:bg-[#0077B5] hover:text-white transition-colors">
                  Career
                </Link>
                <Link to="/contact-us" className="w-full px-4 py-2 bg-[#0077B5] text-white font-medium rounded-md hover:bg-[#005d8f] transition-colors">
                  Contact Us
                </Link>
                <Link to="/admin/login" className="w-full px-4 py-2 text-gray-600 font-medium border border-gray-300 rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                  <Lock className="h-4 w-4" />
                  Admin Login
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