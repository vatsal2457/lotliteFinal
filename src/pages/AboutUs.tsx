import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* About the Company Section */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Company</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 leading-relaxed">
              LotLite is a cutting-edge technology company dedicated to revolutionizing the way businesses manage their operations. Founded with a vision to simplify complex processes, we've grown into a trusted partner for organizations worldwide.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Our mission is to empower businesses with innovative solutions that drive efficiency, productivity, and growth. We believe in creating technology that makes a difference in people's lives.
            </p>
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
                <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900">Binod Kumar Alok</h3>
                <p className="text-gray-600">Founder & Director</p>
                <p className="text-sm text-gray-500 mt-2">Lotlite Technology and Lotlite Real Estate Pvt Ltd</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900">Ankur Kumar</h3>
                <p className="text-gray-600">CTO at Lotlite Technology</p>
                <p className="text-sm text-gray-500 mt-2">Director at RichNusGeeks, IIT Bombay graduate</p>
                <p className="text-sm text-gray-500">Expert in Cloud Computing</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4"></div>
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
                <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4"></div>
                <h3 className="text-lg font-semibold text-gray-900">Dr. Sachin R. Sakhare</h3>
                <p className="text-gray-600">Professor and Head</p>
                <p className="text-sm text-gray-500 mt-2">Computer Engineering Department</p>
                <p className="text-sm text-gray-500">Vishwakarma Institute of Information Technology, Pune</p>
                <p className="text-sm text-gray-500">29 Years of experience</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4"></div>
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

      {/* Amazing Team Members Section */}
      <section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Amazing Team Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full mb-3"></div>
                <h3 className="text-base font-semibold text-gray-900">Vikash Dubey</h3>
                <p className="text-sm text-gray-600">Team Lead and Solution Architect</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full mb-3"></div>
                <h3 className="text-base font-semibold text-gray-900">Vatsal Vishal</h3>
                <p className="text-sm text-gray-600">Software Developer</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full mb-3"></div>
                <h3 className="text-base font-semibold text-gray-900">Vishal Chaudhari</h3>
                <p className="text-sm text-gray-600">Software Developer</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full mb-3"></div>
                <h3 className="text-base font-semibold text-gray-900">Shubham Kokate</h3>
                <p className="text-sm text-gray-600">Software Developer</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full mb-3"></div>
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