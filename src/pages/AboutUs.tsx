import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Empowering education through technology and innovation
          </p>
        </div>
      </div>

      {/* About the Company Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">
              About the Company
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <img
                    src="/about-five1.png"
                    alt="About Lotlite Technology"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div>
                  <p className="text-lg text-gray-600 mb-4">
                    Lotlite Technology is a leading global education technology company that specializes in providing professional certifications, degree programs, and career-focused training. Our mission is to bridge the gap between education and industry by offering cutting-edge programs that prepare students for the digital future.
                  </p>
                  <p className="text-lg text-gray-600">
                    We partner with top universities and industry leaders to deliver high-quality education that meets the demands of today's job market. Our programs are designed to equip students with practical skills and theoretical knowledge needed to excel in their chosen fields.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Our Mission</h3>
                  <p className="text-gray-600">
                    To empower individuals with the knowledge and skills needed to thrive in the digital age, while fostering innovation and excellence in education.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Our Vision</h3>
                  <p className="text-gray-600">
                    To be the world's leading provider of technology education, setting new standards in online learning and professional development.
                  </p>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Why Choose Us?</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Industry-Relevant Curriculum</h4>
                      <p className="text-gray-600">Our programs are designed in collaboration with industry experts to ensure relevance and practical applicability.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Expert Faculty</h4>
                      <p className="text-gray-600">Learn from experienced professionals who bring real-world insights to the classroom.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Flexible Learning</h4>
                      <p className="text-gray-600">Access your courses anytime, anywhere with our user-friendly online platform.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Career Support</h4>
                      <p className="text-gray-600">Get assistance with job placement, resume building, and interview preparation.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Our Commitment</h3>
                <p className="text-gray-600">
                  At Lotlite Technology, we are committed to providing high-quality education that transforms lives and careers. We believe in continuous innovation and improvement to ensure our students receive the best possible learning experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Board of Directors Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-gray-900 text-center">
            Board of Directors
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Director 1 */}
            <div className="bg-gray-50 rounded-lg shadow-md p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="/Alok_kumar.jpeg"
                  alt="Binod Kumar Alok"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Binod Kumar Alok</h3>
              <p className="text-gray-600 mb-4">Founder & Director</p>
              <p className="text-sm text-gray-500">
                Founder & Director at Lotlite Technology and Lotlite Real Estate Pvt Ltd
              </p>
            </div>

            {/* Director 2 */}
            <div className="bg-gray-50 rounded-lg shadow-md p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="/Ankur_Kumar.jpg"
                  alt="Ankur Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Ankur Kumar</h3>
              <p className="text-gray-600 mb-4">Chief Technology Officer</p>
              <p className="text-sm text-gray-500">
                CTO at Lotlite Technology and Director at RichNusGeeks, IIT Bombay graduate, expert in Cloud Computing
              </p>
            </div>

            {/* Director 3 */}
            <div className="bg-gray-50 rounded-lg shadow-md p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="/Saiyam_kumar.jpg"
                  alt="Saiyam Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Saiyam Kumar</h3>
              <p className="text-gray-600 mb-4">Founder & Director</p>
              <p className="text-sm text-gray-500">
                Founder and Director of Lotlite Technology, responsible for leading sales strategies and managing all aspects of the sales team
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Expert Advisory Panel Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-gray-900 text-center">
            Expert Advisory Panel
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Advisor 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="/Sachin_Sakhare.jpg"
                  alt="Dr. Sachin R. Sakhare"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Dr. Sachin R. Sakhare</h3>
              <p className="text-gray-600 mb-4">Professor and Head of Computer Engineering</p>
              <p className="text-sm text-gray-500">
                Professor and Head of the Computer Engineering Department at Vishwakarma Institute of Information Technology, Pune, India. He has 29 Years of experience.
              </p>
            </div>

            {/* Advisor 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="/Mohd_Shafi.jpeg"
                  alt="Mohd Shafi Pathan"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Mohd Shafi Pathan</h3>
              <p className="text-gray-600 mb-4">Professor and Cyber Security Specialist</p>
              <p className="text-sm text-gray-500">
                Professor and Cyber Security & Forensics Specialist at MIT ADT University, Pune, with 24 years of experience.
              </p>
            </div>

            {/* Advisor 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="/Dr. Rajendra G. Pawar.jpeg"
                  alt="Gurunath Waghale"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Gurunath Waghale</h3>
              <p className="text-gray-600 mb-4">Assistant Professor</p>
              <p className="text-sm text-gray-500">
                Assistant Professor at MIT ADT University with 8+ years of experience, gold medalist in Economics, and multiple advanced degrees.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Amazing Team Members Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-gray-900 text-center">
            Amazing Team Members
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gray-50 rounded-lg shadow-md p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="/t1.jpg"
                  alt="Vikash Dubey"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Vikash Dubey</h3>
              <p className="text-gray-600 mb-4">Team Lead and Solution Architect</p>
              <p className="text-sm text-gray-500">
                Leading technical solutions and team development
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gray-50 rounded-lg shadow-md p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="/t2.png"
                  alt="Vatsal Vishal"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Vatsal Vishal</h3>
              <p className="text-gray-600 mb-4">Software Developer</p>
              <p className="text-sm text-gray-500">
                Building innovative software solutions
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-gray-50 rounded-lg shadow-md p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="/t3.jpg"
                  alt="Vishal Chaudhari"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Vishal Chaudhari</h3>
              <p className="text-gray-600 mb-4">Software Developer</p>
              <p className="text-sm text-gray-500">
                Developing robust software applications
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="bg-gray-50 rounded-lg shadow-md p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="/t4.jpg"
                  alt="Shubham Kokate"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Shubham Kokate</h3>
              <p className="text-gray-600 mb-4">Software Developer</p>
              <p className="text-sm text-gray-500">
                Creating efficient and scalable solutions
              </p>
            </div>

            {/* Team Member 5 */}
            <div className="bg-gray-50 rounded-lg shadow-md p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="/c1.jpg"
                  alt="Amit Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Amit Kumar</h3>
              <p className="text-gray-600 mb-4">Team Manager</p>
              <p className="text-sm text-gray-500">
                Managing team operations and project delivery
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* UK Business Partner Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-gray-900 text-center">
            Our UK Business Partner
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">Strategic Partnership</h3>
                  <p className="text-gray-600 mb-4">
                    We have established a strong partnership with leading UK-based organizations to expand our global presence and enhance our educational offerings.
                  </p>
                  <p className="text-gray-600">
                    This partnership enables us to provide international exposure and opportunities to our students while maintaining the highest standards of education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blockchain Partner Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-gray-900 text-center">
            Blockchain Partner
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">Blockchain Innovation</h3>
                  <p className="text-gray-600 mb-4">
                    Our partnership with leading blockchain technology providers enables us to offer cutting-edge blockchain education and certification programs.
                  </p>
                  <p className="text-gray-600">
                    We provide comprehensive training in blockchain development, smart contracts, and decentralized applications to prepare students for the future of technology.
                  </p>
                </div>
                <div className="order-1 md:order-2">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security Partner Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-gray-900 text-center">
            Security Partner
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                 
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">Cybersecurity Excellence</h3>
                  <p className="text-gray-600 mb-4">
                    Our partnership with renowned cybersecurity organizations ensures that our students receive the most up-to-date training in security practices and technologies.
                  </p>
                  <p className="text-gray-600">
                    We offer specialized programs in ethical hacking, network security, and information security management to address the growing demand for cybersecurity professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expert Partner Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-gray-900 text-center">
            Our Expert Partner
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">Industry Expertise</h3>
                  <p className="text-gray-600 mb-4">
                    We collaborate with industry experts and thought leaders to ensure our curriculum remains relevant and aligned with current market demands.
                  </p>
                  <p className="text-gray-600">
                    Our expert partners provide valuable insights, mentorship, and real-world project opportunities to enhance the learning experience of our students.
                  </p>
                </div>
                <div className="order-1 md:order-2">
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs; 