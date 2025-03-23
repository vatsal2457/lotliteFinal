import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* About the Company Section */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Company</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img src="/about-five1.png" alt="About Lotlite Technology" className="w-full h-auto rounded-lg shadow-md mb-4" />
                <img src="/about-five2.png" alt="About Lotlite Technology" className="w-full h-auto rounded-lg shadow-md mb-4" />
                <img src="/inti.jpg" alt="About Lotlite Technology" className="w-full h-auto rounded-lg shadow-md" />
              </div>
              <div className="md:w-2/3 space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  Lotlite Technology is a leading global education technology company offering professional certifications, degree programs, and career-focused training to help you advance your career. We are committed to providing high-quality education and training solutions that empower individuals and organizations to achieve their goals.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
                    <p className="text-gray-600">
                      To provide accessible, high-quality education and training solutions that empower individuals and organizations to achieve their goals and contribute to global development.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h3>
                    <p className="text-gray-600">
                      To be the world's leading provider of innovative education and training solutions, recognized for our commitment to excellence, accessibility, and global impact.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-[#0077B5] mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">Industry-recognized certifications and programs</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-[#0077B5] mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">Expert instructors with real-world experience</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-[#0077B5] mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">Flexible learning options to suit your schedule</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-[#0077B5] mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">Comprehensive support throughout your learning journey</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-[#0077B5] mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">Global network of partners and opportunities</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Commitment</h3>
                  <p className="text-gray-600">
                    At Lotlite Technology, we are committed to providing the highest quality education and training solutions. Our programs are designed to meet the needs of both individuals and organizations, helping them stay competitive in today's rapidly changing world. We believe in making education accessible to all and are constantly innovating to improve our offerings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Board of Directors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center">
                <img src="/Alok_kumar.jpeg" alt="Binod Kumar Alok" className="w-32 h-32 mx-auto rounded-full mb-4 object-cover" />
                <h3 className="text-xl font-semibold text-gray-900">Binod Kumar Alok</h3>
                <p className="text-gray-600">Founder & Director</p>
                <p className="text-sm text-gray-500 mt-2">Lotlite Technology and Lotlite Real Estate Pvt Ltd</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center">
                <img src="/Ankur_Kumar.jpg" alt="Ankur Kumar" className="w-32 h-32 mx-auto rounded-full mb-4 object-cover" />
                <h3 className="text-xl font-semibold text-gray-900">Ankur Kumar</h3>
                <p className="text-gray-600">CTO at Lotlite Technology</p>
                <p className="text-sm text-gray-500 mt-2">Director at RichNusGeeks, IIT Bombay graduate</p>
                <p className="text-sm text-gray-500">Expert in Cloud Computing</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center">
                <img src="/Saiyam_kumar.jpg" alt="Saiyam Kumar" className="w-32 h-32 mx-auto rounded-full mb-4 object-cover" />
                <h3 className="text-xl font-semibold text-gray-900">Saiyam Kumar</h3>
                <p className="text-gray-600">Founder and Director</p>
                <p className="text-sm text-gray-500 mt-2">Responsible for leading sales strategies</p>
                <p className="text-sm text-gray-500">Managing all aspects of the sales team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Advisory Panel Section */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert Advisory Panel</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center">
                <img src="/Sachin_Sakhare.jpg" alt="Dr. Sachin R. Sakhare" className="w-24 h-24 mx-auto rounded-full mb-4 object-cover" />
                <h3 className="text-lg font-semibold text-gray-900">Dr. Sachin R. Sakhare</h3>
                <p className="text-gray-600">Professor and Head</p>
                <p className="text-sm text-gray-500 mt-2">Computer Engineering Department</p>
                <p className="text-sm text-gray-500">Vishwakarma Institute of Information Technology, Pune</p>
                <p className="text-sm text-gray-500">29 Years of experience</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center">
                <img src="/Mohd_Shafi.jpeg" alt="Mohd Shafi Pathan" className="w-24 h-24 mx-auto rounded-full mb-4 object-cover" />
                <h3 className="text-lg font-semibold text-gray-900">Mohd Shafi Pathan</h3>
                <p className="text-gray-600">Professor</p>
                <p className="text-sm text-gray-500 mt-2">Cyber Security & Forensics Specialist</p>
                <p className="text-sm text-gray-500">MIT ADT University, Pune</p>
                <p className="text-sm text-gray-500">24 years of experience</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4"></div>
                <h3 className="text-lg font-semibold text-gray-900">Gurunath Waghale</h3>
                <p className="text-gray-600">Assistant Professor</p>
                <p className="text-sm text-gray-500 mt-2">MIT ADT University</p>
                <p className="text-sm text-gray-500">8+ years of experience</p>
                <p className="text-sm text-gray-500">Gold medalist in Economics</p>
                <p className="text-sm text-gray-500">Multiple advanced degrees</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UK Business Partner Section */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our UK Business Partner</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="w-48 h-48 mx-auto bg-gray-200 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 text-center">RichNusGeeks</h3>
                <p className="text-gray-600 text-center mt-2">Leading Technology Solutions Provider</p>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 leading-relaxed">
                  RichNusGeeks is our strategic partner in the United Kingdom, bringing expertise in cutting-edge technology solutions and digital transformation. Together, we deliver innovative educational and technological solutions to clients across Europe.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#0077B5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">Strategic Technology Solutions</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#0077B5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">European Market Access</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#0077B5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">Joint Innovation Initiatives</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blockchain Partner Section */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Blockchain Partner</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="w-48 h-48 mx-auto bg-gray-200 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 text-center">Blockchain Solutions Ltd</h3>
                <p className="text-gray-600 text-center mt-2">Innovative Blockchain Technology</p>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 leading-relaxed">
                  Our partnership with Blockchain Solutions Ltd enables us to offer cutting-edge blockchain technology solutions and training programs. Together, we're shaping the future of decentralized technology education.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#0077B5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">Blockchain Development Training</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#0077B5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">Smart Contract Solutions</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#0077B5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">DApp Development</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Partner Section */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Security Partner</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="w-48 h-48 mx-auto bg-gray-200 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 text-center">SecureTech Solutions</h3>
                <p className="text-gray-600 text-center mt-2">Advanced Security Solutions</p>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 leading-relaxed">
                  SecureTech Solutions is our trusted partner in cybersecurity, providing comprehensive security solutions and training programs. Together, we're building a more secure digital future.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#0077B5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">Cybersecurity Training</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#0077B5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">Security Assessments</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#0077B5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">Threat Intelligence</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Partner Section */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Expert Partner</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="w-48 h-48 mx-auto bg-gray-200 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 text-center">TechExperts Global</h3>
                <p className="text-gray-600 text-center mt-2">Industry Expertise & Training</p>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 leading-relaxed">
                  TechExperts Global brings industry expertise and specialized training programs to our partnership. Together, we deliver comprehensive solutions that bridge the gap between education and industry needs.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#0077B5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">Industry-Specific Training</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#0077B5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">Expert Mentorship Programs</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#0077B5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">Career Development Support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amazing Team Members Section */}
      <section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Amazing Team Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="text-center">
                <img src="/t1.jpg" alt="Vikash Dubey" className="w-20 h-20 mx-auto rounded-full mb-3 object-cover" />
                <h3 className="text-base font-semibold text-gray-900">Vikash Dubey</h3>
                <p className="text-sm text-gray-600">Team Lead and Solution Architect</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="text-center">
                <img src="/t2.png" alt="Vatsal Vishal" className="w-20 h-20 mx-auto rounded-full mb-3 object-cover" />
                <h3 className="text-base font-semibold text-gray-900">Vatsal Vishal</h3>
                <p className="text-sm text-gray-600">Software Developer</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="text-center">
                <img src="/t3.jpg" alt="Vishal Chaudhari" className="w-20 h-20 mx-auto rounded-full mb-3 object-cover" />
                <h3 className="text-base font-semibold text-gray-900">Vishal Chaudhari</h3>
                <p className="text-sm text-gray-600">Software Developer</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="text-center">
                <img src="/t4.jpg" alt="Shubham Kokate" className="w-20 h-20 mx-auto rounded-full mb-3 object-cover" />
                <h3 className="text-base font-semibold text-gray-900">Shubham Kokate</h3>
                <p className="text-sm text-gray-600">Software Developer</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="text-center">
                <img src="/c1.jpg" alt="Amit Kumar" className="w-20 h-20 mx-auto rounded-full mb-3 object-cover" />
                <h3 className="text-base font-semibold text-gray-900">Amit Kumar</h3>
                <p className="text-sm text-gray-600">Team Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs; 