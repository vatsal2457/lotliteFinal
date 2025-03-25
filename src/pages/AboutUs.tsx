import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[60vh] bg-gradient-to-r from-blue-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl font-bold mb-6 text-white"
            >
              About Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              Empowering education through technology and innovation
            </motion.p>
          </div>
        </div>
      </div>

      {/* About the Company Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">
                About the Company
              </h2>
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-3"></div>
                  <img
                    src="/about-five1.png"
                    alt="About Lotlite Technology"
                    className="relative w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="space-y-6">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Lotlite Technology is a leading global education technology company that specializes in providing professional certifications, degree programs, and career-focused training. Our mission is to bridge the gap between education and industry by offering cutting-edge programs that prepare students for the digital future.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We partner with top universities and industry leaders to deliver high-quality education that meets the demands of today's job market. Our programs are designed to equip students with practical skills and theoretical knowledge needed to excel in their chosen fields.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-blue-50 p-6 rounded-xl"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">Our Mission</h3>
                  <p className="text-gray-600">
                    To empower individuals with the knowledge and skills needed to thrive in the digital age, while fostering innovation and excellence in education.
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-indigo-50 p-6 rounded-xl"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">Our Vision</h3>
                  <p className="text-gray-600">
                    To be the world's leading provider of technology education, setting new standards in online learning and professional development.
                  </p>
                </motion.div>
              </div>

              <div className="mt-16">
                <h3 className="text-3xl font-semibold mb-8 text-gray-900 text-center">Why Choose Us?</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Industry-Relevant Curriculum",
                      description: "Our programs are designed in collaboration with industry experts to ensure relevance and practical applicability.",
                      icon: "📚"
                    },
                    {
                      title: "Expert Faculty",
                      description: "Learn from experienced professionals who bring real-world insights to the classroom.",
                      icon: "👨‍🏫"
                    },
                    {
                      title: "Flexible Learning",
                      description: "Access your courses anytime, anywhere with our user-friendly online platform.",
                      icon: "💻"
                    },
                    {
                      title: "Career Support",
                      description: "Get assistance with job placement, resume building, and interview preparation.",
                      icon: "🎯"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                    >
                      <div className="text-4xl mb-4">{item.icon}</div>
                      <h4 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Board of Directors Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-gray-900 text-center"
          >
            Board of Directors
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Binod Kumar Alok",
                role: "Founder & Director",
                image: "/Alok_kumar.jpeg",
                description: "Founder & Director at Lotlite Technology and Lotlite Real Estate Pvt Ltd"
              },
              {
                name: "Ankur Kumar",
                role: "Chief Technology Officer",
                image: "/Ankur_Kumar.jpg",
                description: "CTO at Lotlite Technology and Director at RichNusGeeks, IIT Bombay graduate, expert in Cloud Computing"
              },
              {
                name: "Saiyam Kumar",
                role: "Founder & Director",
                image: "/Saiyam_kumar.jpg",
                description: "Founder and Director of Lotlite Technology, responsible for leading sales strategies and managing all aspects of the sales team"
              }
            ].map((director, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 rounded-2xl shadow-lg p-6 text-center"
              >
                <div className="relative w-40 h-40 mx-auto mb-6">
                  <div className="absolute inset-0 bg-blue-600 rounded-full transform rotate-3"></div>
                  <img
                    src={director.image}
                    alt={director.name}
                    className="relative w-full h-full object-cover rounded-full border-4 border-white"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">{director.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{director.role}</p>
                <p className="text-gray-600">{director.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Expert Advisory Panel Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-gray-900 text-center"
          >
            Expert Advisory Panel
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sachin R. Sakhare",
                role: "Professor and Head of Computer Engineering",
                image: "/Sachin_Sakhare.jpg",
                description: "Professor and Head of the Computer Engineering Department at Vishwakarma Institute of Information Technology, Pune, India. He has 29 Years of experience."
              },
              {
                name: "Mohd Shafi Pathan",
                role: "Professor and Cyber Security Specialist",
                image: "/Mohd_Shafi.jpeg",
                description: "Professor and Cyber Security & Forensics Specialist at MIT ADT University, Pune, with 24 years of experience."
              },
              {
                name: "Gurunath Waghale",
                role: "Assistant Professor",
                image: "/Dr. Rajendra G. Pawar.jpeg",
                description: "Assistant Professor at MIT ADT University with 8+ years of experience, gold medalist in Economics, and multiple advanced degrees."
              }
            ].map((advisor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center"
              >
                <div className="relative w-40 h-40 mx-auto mb-6">
                  <div className="absolute inset-0 bg-indigo-600 rounded-full transform rotate-3"></div>
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="relative w-full h-full object-cover rounded-full border-4 border-white"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">{advisor.name}</h3>
                <p className="text-indigo-600 font-medium mb-4">{advisor.role}</p>
                <p className="text-gray-600">{advisor.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-gray-900 text-center"
          >
            Amazing Team Members
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Vikash Dubey",
                role: "Team Lead and Solution Architect",
                image: "/t1.jpg",
                description: "Leading technical solutions and team development"
              },
              {
                name: "Vatsal Vishal",
                role: "Software Developer",
                image: "/t2.png",
                description: "Building innovative software solutions"
              },
              {
                name: "Vishal Chaudhari",
                role: "Software Developer",
                image: "/t3.jpg",
                description: "Developing robust software applications"
              },
              {
                name: "Shubham Kokate",
                role: "Software Developer",
                image: "/t4.jpg",
                description: "Creating efficient and scalable solutions"
              },
              {
                name: "Amit Kumar",
                role: "Team Manager",
                image: "/c1.jpg",
                description: "Managing team operations and project delivery"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 rounded-2xl shadow-lg p-6 text-center"
              >
                <div className="relative w-40 h-40 mx-auto mb-6">
                  <div className="absolute inset-0 bg-blue-600 rounded-full transform rotate-3"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative w-full h-full object-cover rounded-full border-4 border-white"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-gray-900 text-center"
          >
            Our Strategic Partners
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "UK Business Partner",
                description: "We have established a strong partnership with leading UK-based organizations to expand our global presence and enhance our educational offerings.",
                bgColor: "bg-white"
              },
              {
                title: "Blockchain Partner",
                description: "Our partnership with leading blockchain technology providers enables us to offer cutting-edge blockchain education and certification programs.",
                bgColor: "bg-white"
              },
              {
                title: "Security Partner",
                description: "Our partnership with renowned cybersecurity organizations ensures that our students receive the most up-to-date training in security practices and technologies.",
                bgColor: "bg-white"
              },
              {
                title: "Expert Partner",
                description: "We collaborate with industry experts and thought leaders to ensure our curriculum remains relevant and aligned with current market demands.",
                bgColor: "bg-white"
              }
            ].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className={`${partner.bgColor} rounded-2xl shadow-lg p-8`}
              >
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">{partner.title}</h3>
                <p className="text-gray-600">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs; 