import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-[#0077B5]">Lotlite Technology</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering minds through innovative education and technology solutions
          </p>
        </motion.div>

        {/* About the Company Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-gray-900 mb-6"
            >
              About the Company
            </motion.h2>
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row gap-8">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="md:w-1/3 space-y-4"
                >
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src="/about-five1.png" 
                    alt="About Lotlite Technology" 
                    className="w-full h-auto rounded-xl shadow-lg" 
                  />
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src="/about-five2.png" 
                    alt="About Lotlite Technology" 
                    className="w-full h-auto rounded-xl shadow-lg" 
                  />
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src="/inti.jpg" 
                    alt="About Lotlite Technology" 
                    className="w-full h-auto rounded-xl shadow-lg" 
                  />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="md:w-2/3 space-y-6"
                >
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Lotlite Technology is a leading global education technology company offering professional certifications, degree programs, and career-focused training to help you advance your career. We are committed to providing high-quality education and training solutions that empower individuals and organizations to achieve their goals.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div 
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-md"
                    >
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
                      <p className="text-gray-600">
                        To provide accessible, high-quality education and training solutions that empower individuals and organizations to achieve their goals and contribute to global development.
                      </p>
                    </motion.div>
                    
                    <motion.div 
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-md"
                    >
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h3>
                      <p className="text-gray-600">
                        To be the world's leading provider of innovative education and training solutions, recognized for our commitment to excellence, accessibility, and global impact.
                      </p>
                    </motion.div>
                  </div>

                  <motion.div 
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="mt-8"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
                    <motion.ul variants={staggerContainer} className="space-y-3">
                      {[
                        "Industry-recognized certifications and programs",
                        "Expert instructors with real-world experience",
                        "Flexible learning options to suit your schedule",
                        "Comprehensive support throughout your learning journey",
                        "Global network of partners and opportunities"
                      ].map((item, index) => (
                        <motion.li 
                          key={index}
                          variants={fadeIn}
                          className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                          <svg className="w-6 h-6 text-[#0077B5] mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-600">{item}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Commitment</h3>
                    <p className="text-gray-600">
                      At Lotlite Technology, we are committed to providing the highest quality education and training solutions. Our programs are designed to meet the needs of both individuals and organizations, helping them stay competitive in today's rapidly changing world. We believe in making education accessible to all and are constantly innovating to improve our offerings.
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Board of Directors Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-gray-900 mb-6"
            >
              Board of Directors
            </motion.h2>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                {
                  name: "Binod Kumar Alok",
                  role: "Founder & Director",
                  description: "Lotlite Technology and Lotlite Real Estate Pvt Ltd",
                  image: "/Alok_kumar.jpeg"
                },
                {
                  name: "Ankur Kumar",
                  role: "CTO at Lotlite Technology",
                  description: "Director at RichNusGeeks, IIT Bombay graduate, Expert in Cloud Computing",
                  image: "/Ankur_Kumar.jpg"
                },
                {
                  name: "Saiyam Kumar",
                  role: "Founder and Director",
                  description: "Responsible for leading sales strategies and managing all aspects of the sales team",
                  image: "/Saiyam_kumar.jpg"
                }
              ].map((director, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-center">
                    <motion.img 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src={director.image} 
                      alt={director.name} 
                      className="w-32 h-32 mx-auto rounded-full mb-4 object-cover shadow-md" 
                    />
                    <h3 className="text-xl font-semibold text-gray-900">{director.name}</h3>
                    <p className="text-gray-600">{director.role}</p>
                    <p className="text-sm text-gray-500 mt-2">{director.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Expert Advisory Panel Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-gray-900 mb-6"
            >
              Expert Advisory Panel
            </motion.h2>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {[
                {
                  name: "Dr. Sachin R. Sakhare",
                  role: "Professor and Head",
                  description: "Computer Engineering Department, Vishwakarma Institute of Information Technology, Pune",
                  experience: "29 Years of experience",
                  image: "/Sachin_Sakhare.jpg"
                },
                {
                  name: "Mohd Shafi Pathan",
                  role: "Professor",
                  description: "Cyber Security & Forensics Specialist, MIT ADT University, Pune",
                  experience: "24 years of experience",
                  image: "/Mohd_Shafi.jpeg"
                }
              ].map((expert, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-center">
                    <motion.img 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src={expert.image} 
                      alt={expert.name} 
                      className="w-24 h-24 mx-auto rounded-full mb-4 object-cover shadow-md" 
                    />
                    <h3 className="text-lg font-semibold text-gray-900">{expert.name}</h3>
                    <p className="text-gray-600">{expert.role}</p>
                    <p className="text-sm text-gray-500 mt-2">{expert.description}</p>
                    <p className="text-sm text-gray-500">{expert.experience}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* UK Business Partner Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-gray-900 mb-6"
            >
              Our UK Business Partner
            </motion.h2>
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="md:w-1/3"
                >
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-[#0077B5]">RNG</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center">RichNusGeeks</h3>
                  <p className="text-gray-600 text-center mt-2">Leading Technology Solutions Provider</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="md:w-2/3"
                >
                  <p className="text-gray-600 leading-relaxed">
                    RichNusGeeks is our strategic partner in the United Kingdom, bringing expertise in cutting-edge technology solutions and digital transformation. Together, we deliver innovative educational and technological solutions to clients across Europe.
                  </p>
                  <motion.ul 
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="mt-4 space-y-2"
                  >
                    {[
                      "Strategic Technology Solutions",
                      "European Market Access",
                      "Joint Innovation Initiatives"
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        variants={fadeIn}
                        className="flex items-center bg-gray-50 p-3 rounded-lg"
                      >
                        <svg className="w-5 h-5 text-[#0077B5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Blockchain Partner Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-gray-900 mb-6"
            >
              Our Blockchain Partner
            </motion.h2>
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="md:w-1/3"
                >
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-[#0077B5]">BSL</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center">Blockchain Solutions Ltd</h3>
                  <p className="text-gray-600 text-center mt-2">Innovative Blockchain Technology</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="md:w-2/3"
                >
                  <p className="text-gray-600 leading-relaxed">
                    Our partnership with Blockchain Solutions Ltd enables us to offer cutting-edge blockchain technology solutions and training programs. Together, we're shaping the future of decentralized technology education.
                  </p>
                  <motion.ul 
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="mt-4 space-y-2"
                  >
                    {[
                      "Blockchain Development Training",
                      "Smart Contract Solutions",
                      "DApp Development"
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        variants={fadeIn}
                        className="flex items-center bg-gray-50 p-3 rounded-lg"
                      >
                        <svg className="w-5 h-5 text-[#0077B5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Security Partner Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-gray-900 mb-6"
            >
              Our Security Partner
            </motion.h2>
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="md:w-1/3"
                >
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-red-100 to-orange-100 rounded-xl mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-[#0077B5]">STS</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center">SecureTech Solutions</h3>
                  <p className="text-gray-600 text-center mt-2">Advanced Security Solutions</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="md:w-2/3"
                >
                  <p className="text-gray-600 leading-relaxed">
                    SecureTech Solutions is our trusted partner in cybersecurity, providing comprehensive security solutions and training programs. Together, we're building a more secure digital future.
                  </p>
                  <motion.ul 
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="mt-4 space-y-2"
                  >
                    {[
                      "Cybersecurity Training",
                      "Security Assessments",
                      "Threat Intelligence"
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        variants={fadeIn}
                        className="flex items-center bg-gray-50 p-3 rounded-lg"
                      >
                        <svg className="w-5 h-5 text-[#0077B5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Expert Partner Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-gray-900 mb-6"
            >
              Our Expert Partner
            </motion.h2>
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="md:w-1/3"
                >
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-[#0077B5]">TEG</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center">TechExperts Global</h3>
                  <p className="text-gray-600 text-center mt-2">Industry Expertise & Training</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="md:w-2/3"
                >
                  <p className="text-gray-600 leading-relaxed">
                    TechExperts Global brings industry expertise and specialized training programs to our partnership. Together, we deliver comprehensive solutions that bridge the gap between education and industry needs.
                  </p>
                  <motion.ul 
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="mt-4 space-y-2"
                  >
                    {[
                      "Industry-Specific Training",
                      "Expert Mentorship Programs",
                      "Career Development Support"
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        variants={fadeIn}
                        className="flex items-center bg-gray-50 p-3 rounded-lg"
                      >
                        <svg className="w-5 h-5 text-[#0077B5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Amazing Team Members Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-gray-900 mb-6"
            >
              Amazing Team Members
            </motion.h2>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid grid-cols-2 md:grid-cols-5 gap-4"
            >
              {[
                {
                  name: "Vikash Dubey",
                  role: "Team Lead and Solution Architect",
                  image: "/t1.jpg"
                },
                {
                  name: "Vatsal Vishal",
                  role: "Software Developer",
                  image: "/t2.png"
                },
                {
                  name: "Vishal Chaudhari",
                  role: "Software Developer",
                  image: "/t3.jpg"
                },
                {
                  name: "Shubham Kokate",
                  role: "Software Developer",
                  image: "/t4.jpg"
                },
                {
                  name: "Amit Kumar",
                  role: "Team Manager",
                  image: "/c1.jpg"
                }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-center">
                    <motion.img 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src={member.image} 
                      alt={member.name} 
                      className="w-20 h-20 mx-auto rounded-full mb-3 object-cover shadow-md" 
                    />
                    <h3 className="text-base font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutUs; 