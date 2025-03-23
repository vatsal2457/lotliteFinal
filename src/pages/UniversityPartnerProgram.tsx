import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-spring-3d-carousel';
import CollegeSection from '../components/CollegeSection';

const UniversityPartnerProgram = () => {
  const [goToSlide, setGoToSlide] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setGoToSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, []);

  const slides = [
    {
      key: 1,
      content: (
        <img
          src="/src/images/1741581292597.jpg"
          alt="University Campus"
          className="rounded-xl shadow-2xl w-full h-[500px] object-cover"
        />
      )
    },
    {
      key: 2,
      content: (
        <img
          src="/src/images/1741581292500.jpg"
          alt="Global Education"
          className="rounded-xl shadow-2xl w-full h-[500px] object-cover"
        />
      )
    },
    {
      key: 3,
      content: (
        <img
          src="/src/images/1741581292216.jpg"
          alt="Student Life"
          className="rounded-xl shadow-2xl w-full h-[500px] object-cover"
        />
      )
    }
  ].map((slide, index) => ({
    ...slide,
    onClick: () => setGoToSlide(index)
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">University Partner Program</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Building bridges between educational institutions to provide students with global academic opportunities and cross-cultural experiences
          </p>
        </div>
      </div>

      {/* Carousel Section with Partner Universities */}
      <div className="relative bg-gradient-to-r from-[#0077B5] to-[#005d8f] py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left side - Partner Universities */}
            <div className="md:w-5/12">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                Our Premier <br />
                <span className="text-yellow-400">University Partners</span>
              </h2>
              
              <p className="text-xl text-white/90 mb-6 leading-relaxed">
                Join a network of prestigious educational institutions committed to global excellence and collaborative learning.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="bg-white/20 rounded-full p-2">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-white font-medium">INTI University Malaysia</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-white/20 rounded-full p-2">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-white font-medium">Skyline University Sharjah, United Arab Emirates</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-white/20 rounded-full p-2">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-white font-medium">University of Toronto, Canada</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-white/20 rounded-full p-2">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-white font-medium">ETH Zurich, Switzerland</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-white/20 rounded-full p-2">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-white font-medium">University of Melbourne, Australia</span>
                </li>
              </ul>

              <Link to="/contact-us" className="inline-block px-8 py-4 bg-white text-[#0077B5] font-bold rounded-full hover:bg-gray-100 transition-colors text-lg">
                Explore Partnerships
              </Link>
            </div>

            {/* Right side - 3D Carousel */}
            <div className="md:w-7/12">
              <div className="relative h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm"></div>
                <Carousel
                  slides={slides}
                  goToSlide={goToSlide}
                  offsetRadius={2}
                  showNavigation={false}
                  animationConfig={{ tension: 120, friction: 14 }}
                />
                
                {/* Carousel indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        goToSlide === index 
                          ? 'w-8 bg-white' 
                          : 'bg-white/50'
                      }`}
                      onClick={() => setGoToSlide(index)}
                    />
                  ))}
                </div>

                {/* Stats badge */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-lg p-4 backdrop-blur-sm bg-white/90">
                  <p className="font-bold text-gray-800 text-2xl">50+</p>
                  <p className="text-sm text-gray-600">Partner institutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
              <CollegeSection/>
      {/* Program Description Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">
              About Our University Partnerships
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center">
              Our University Partner Program creates strategic alliances with leading educational institutions worldwide. Through these partnerships, we establish collaborative frameworks that enable student exchanges, joint research initiatives, dual degree programs, and shared academic resources, enriching the educational experience for students across borders.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Academic Collaboration Card */}
              <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
                <div className="absolute inset-0 bg-cover bg-center z-0 group-hover:scale-110 transition-transform duration-500" 
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
                  }}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-blue-900/70 z-10"></div>
                <div className="relative z-20">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Academic Collaboration</h3>
                  <p className="text-gray-100">
                    Our partnerships facilitate joint curriculum development, shared teaching methodologies, and collaborative research projects. Faculty exchanges promote knowledge transfer and innovative teaching approaches, while shared academic resources expand learning opportunities for all students.
                  </p>
                </div>
              </div>

              {/* Student Mobility Card */}
              <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
                <div className="absolute inset-0 bg-cover bg-center z-0 group-hover:scale-110 transition-transform duration-500" 
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
                  }}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-blue-900/70 z-10"></div>
                <div className="relative z-20">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Student Mobility</h3>
                  <p className="text-gray-100">
                    Students benefit from semester exchanges, summer programs, and study abroad opportunities at partner institutions. These experiences provide exposure to different educational systems, diverse perspectives, and global networks, enhancing future career prospects and personal growth.
                  </p>
                </div>
              </div>

              {/* Joint Degree Programs Card */}
              <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
                <div className="absolute inset-0 bg-cover bg-center z-0 group-hover:scale-110 transition-transform duration-500" 
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1627556704302-624286467c65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
                  }}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-blue-900/70 z-10"></div>
                <div className="relative z-20">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Joint Degree Programs</h3>
                  <p className="text-gray-100">
                    Our partnerships include dual and joint degree programs that allow students to earn qualifications from multiple institutions. These innovative programs combine the strengths of partner universities, offering unique educational pathways and enhanced recognition in the global job market.
                  </p>
                </div>
              </div>

              {/* Research Collaboration Card */}
              <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
                <div className="absolute inset-0 bg-cover bg-center z-0 group-hover:scale-110 transition-transform duration-500" 
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
                  }}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-blue-900/70 z-10"></div>
                <div className="relative z-20">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Research Collaboration</h3>
                  <p className="text-gray-100">
                    Partner institutions engage in joint research initiatives, share laboratory facilities, and collaborate on publications. This global collaboration addresses complex challenges through diverse perspectives and pooled expertise, leading to breakthrough innovations and societal impact.
                  </p>
                </div>
              </div>
            </div>

            {/* Partner Universities Section */}
            <div className="mt-20">
              <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">
                Our Partner Universities
              </h2>
              <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                We collaborate with prestigious educational institutions worldwide to offer unparalleled academic opportunities
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {/* University 1 */}
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                  <div className="h-48 rounded-xl bg-gray-200 mb-6 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                      alt="University Campus"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">INTI University</h3>
                  <p className="text-gray-600 mb-4">Malaysia</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Engineering</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Business</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Sciences</span>
                  </div>
                  <a href="#" className="text-blue-600 font-medium hover:underline">View Programs →</a>
                </div>

                {/* University 2 */}
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                  <div className="h-48 rounded-xl bg-gray-200 mb-6 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1592280771190-3e2e4d977758?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="University Campus"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Skyline University Sharjah, United Arab Emirates</h3>
                  <p className="text-gray-600 mb-4">United Arab Emirates</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Computer Science</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Medicine</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Law</span>
                  </div>
                  <a href="#" className="text-blue-600 font-medium hover:underline">View Programs →</a>
                </div>

                {/* University 3 */}
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                  <div className="h-48 rounded-xl bg-gray-200 mb-6 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                      alt="University Campus"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">University of Toronto</h3>
                  <p className="text-gray-600 mb-4">Canada</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Arts</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Social Sciences</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Management</span>
                  </div>
                  <a href="#" className="text-blue-600 font-medium hover:underline">View Programs →</a>
                </div>
              </div>
            </div>

            {/* Testimonials Section */}
            <div className="mt-20">
              <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">
                Success Stories
              </h2>
              <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                Learn how our University Partner Program has created lasting impact for institutions and students alike
              </p>

              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-10 rounded-2xl shadow-xl">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/3">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 mx-auto">
                      <img 
                        src="https://images.unsplash.com/photo-1580894794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                        alt="University Administrator"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <blockquote className="text-white text-lg italic mb-6">
                      "The partnership with Lotelite has transformed our international programs. We've seen a 40% increase in student engagement in global initiatives, and our faculty report enriched research collaborations across continents. The streamlined exchange processes and dedicated support have made implementation truly seamless."
                    </blockquote>
                    <div className="text-white">
                      <p className="font-bold text-xl">Dr. Sarah Thompson</p>
                      <p className="text-blue-200">Director of International Relations, INTI University</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-20 text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Ready to Join Our Partner Network?</h3>
              <p className="text-gray-600 mb-8">
                Connect with us to explore partnership opportunities and expand your institution's global footprint
              </p>
              <Link to="/contact-us" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transform hover:-translate-y-1 transition-all">
                Become a Partner
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityPartnerProgram; 