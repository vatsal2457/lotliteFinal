import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ProtectedRoute from './components/ProtectedRoute';

// Page Components
import Home from './pages/Home';
import CorporatePrograms from './pages/CorporatePrograms';
import MaangCertificates from './pages/MaangCertificates';
import ForeignExchange from './pages/ForeignExchange';
import ForeignDegreePrograms from './pages/ForeignDegreePrograms';
import Contact from './pages/ContactUs';
import Career from './pages/Career';
import UniversityPartnerProgram from './pages/UniversityPartnerProgram';
import CorporatePartnerProgram from './pages/CorporatePartnerProgram';
import ITServices from './pages/ITServices';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          
          {/* Public Routes */}
          <Route
            path="/*"
            element={
              <>
                <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/corporate-programs" element={<CorporatePrograms />} />
                  <Route path="/maang-certificates" element={<MaangCertificates />} />
                  <Route path="/foreign-exchange" element={<ForeignExchange />} />
                  <Route path="/foreign-degree-programs" element={<ForeignDegreePrograms />} />
                  <Route path="/university-partner-program" element={<UniversityPartnerProgram />} />
                  <Route path="/corporate-partner-program" element={<CorporatePartnerProgram />} />
                  <Route path="/it-services" element={<ITServices />} />
                  <Route path="/contact-us" element={<Contact />} />
                  <Route path="/career" element={<Career />} />
                  <Route path="/about-us" element={<AboutUs />} />
                </Routes>
                <Footer />
                <WhatsAppButton 
                  phoneNumber="919876543210" 
                  message="Hello, I'm interested in learning more about Lotelite Technology services." 
                />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;