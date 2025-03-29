import React from 'react';
import { Link } from 'react-router-dom';

const MaangCertificates = () => (
  <div className="min-h-screen">
    {/* Hero Section */}
    <div className="relative h-[500px] bg-gradient-to-r from-blue-900 to-indigo-900 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute transform -rotate-45 bg-white/10 w-96 h-96 rounded-full -top-20 -left-20"></div>
        <div className="absolute transform rotate-45 bg-white/10 w-96 h-96 rounded-full -bottom-20 -right-20"></div>
      </div>
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl font-bold mb-6 transform hover:scale-105 transition-transform">
            MAANG Certification
          </h1>
          <p className="text-xl mb-8">
            Earn industry-recognized certifications for Meta, Amazon, Apple, Netflix, and Google technologies
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all">
            Explore Certifications
          </button>
        </div>
      </div>
    </div>

    {/* Description Section */}
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Why Choose MAANG Certifications?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Our MAANG certification program is designed to validate your expertise in the technologies and practices used by the world's leading tech companies. These certifications are recognized globally and can significantly enhance your career prospects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Meta Certification */}
          <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center z-0" 
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')`
              }}>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90 z-10"></div>
            <div className="relative z-20">
              <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Meta Certifications</h3>
              <p className="text-gray-100 mb-4">Validate your expertise in:</p>
              <ul className="text-gray-100 space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  React & React Native
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  GraphQL
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Frontend Development
                </li>
              </ul>
            </div>
          </div>

          {/* Amazon Certification */}
          <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center z-0" 
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
              }}>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90 z-10"></div>
            <div className="relative z-20">
              <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Amazon Certifications</h3>
              <p className="text-gray-100 mb-4">Master AWS technologies:</p>
              <ul className="text-gray-100 space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  AWS Solutions Architect
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  AWS Developer
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Cloud Practitioner
                </li>
              </ul>
            </div>
          </div>

          {/* Google Certification */}
          <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center z-0" 
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
              }}>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90 z-10"></div>
            <div className="relative z-20">
              <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Google Certifications</h3>
              <p className="text-gray-100 mb-4">Excel in Google technologies:</p>
              <ul className="text-gray-100 space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Google Cloud Platform
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Android Development
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Flutter Development
                </li>
              </ul>
            </div>
          </div>

          {/* Autodesk Master Class */}
          <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center z-0" 
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1545987796-200677ee1011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
              }}>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90 z-10"></div>
            <div className="relative z-20">
              <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Autodesk Master Class</h3>
              <p className="text-gray-100 mb-4">Master Autodesk tools and technologies:</p>
              <ul className="text-gray-100 space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  AutoCAD Expertise
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  3D Modeling
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Industry Projects
                </li>
              </ul>
            </div>
          </div>

          {/* Adobe Creative Cloud */}
          <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center z-0" 
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
              }}>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90 z-10"></div>
            <div className="relative z-20">
              <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Adobe Creative Cloud</h3>
              <p className="text-gray-100 mb-4">Master creative design tools:</p>
              <ul className="text-gray-100 space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Photoshop & Illustrator
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  UI/UX Design
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Digital Marketing
                </li>
              </ul>
            </div>
          </div>

          {/* AWS Cloud */}
          <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center z-0" 
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')`
              }}>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90 z-10"></div>
            <div className="relative z-20">
              <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">AWS Cloud</h3>
              <p className="text-gray-100 mb-4">Cloud computing expertise:</p>
              <ul className="text-gray-100 space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Cloud Architecture
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  DevOps
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Security & Compliance
                </li>
              </ul>
            </div>
          </div>

          {/* Project Management */}
          <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center z-0" 
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
              }}>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90 z-10"></div>
            <div className="relative z-20">
              <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Project Management</h3>
              <p className="text-gray-100 mb-4">Master project management skills:</p>
              <ul className="text-gray-100 space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Agile & Scrum
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Risk Management
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Team Leadership
                </li>
              </ul>
            </div>
          </div>

          {/* Blockchain Certification */}
          <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center z-0" 
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1621504450181-5d356f61d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
              }}>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90 z-10"></div>
            <div className="relative z-20">
              <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Blockchain Certification</h3>
              <p className="text-gray-100 mb-4">Master blockchain technologies:</p>
              <ul className="text-gray-100 space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Smart Contracts
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  DApp Development
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Web3 Integration
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why MAANG Certification Section */}
        <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Why MAANG Certification Matters
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                In today's competitive tech landscape, MAANG certifications have become a crucial differentiator for professionals seeking to advance their careers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Career Growth */}
              <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center z-0" 
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
                  }}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90 z-10"></div>
                <div className="relative z-20">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Accelerated Career Growth</h3>
                  <p className="text-gray-100">
                    MAANG certifications open doors to senior positions and leadership roles. 85% of certified professionals report faster career progression within their organizations.
                  </p>
                </div>
              </div>

              {/* Salary Benefits */}
              <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center z-0" 
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')`
                  }}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90 z-10"></div>
                <div className="relative z-20">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Higher Salary Potential</h3>
                  <p className="text-gray-100">
                    Certified professionals earn 25-35% more than their non-certified peers. MAANG certifications are particularly valued in salary negotiations.
                  </p>
                </div>
              </div>

              {/* Industry Recognition */}
              <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center z-0" 
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')`
                  }}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90 z-10"></div>
                <div className="relative z-20">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Industry Recognition</h3>
                  <p className="text-gray-100">
                    MAANG certifications are globally recognized and respected. They serve as a testament to your expertise and commitment to professional development.
                  </p>
                </div>
              </div>

              {/* Technical Expertise */}
              <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center z-0" 
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
                  }}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90 z-10"></div>
                <div className="relative z-20">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Technical Excellence</h3>
                  <p className="text-gray-100">
                    The certification process ensures you master the latest technologies and best practices used by MAANG companies, making you a valuable asset to any team.
                  </p>
                </div>
              </div>

              {/* Job Opportunities */}
              <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center z-0" 
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
                  }}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90 z-10"></div>
                <div className="relative z-20">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Expanded Job Opportunities</h3>
                  <p className="text-gray-100">
                    Certified professionals are 3x more likely to receive job offers from top tech companies. MAANG certifications are often a prerequisite for senior positions.
                  </p>
                </div>
              </div>

              {/* Professional Network */}
              <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center z-0" 
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')`
                  }}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90 z-10"></div>
                <div className="relative z-20">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Professional Network</h3>
                  <p className="text-gray-100">
                    Join an exclusive community of certified professionals. Access networking events, job fairs, and mentorship opportunities with industry experts.
                  </p>
                </div>
              </div>
            </div>

            {/* Student Reviews Section */}
            <div className="py-20 bg-white">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4 text-gray-900">
                    Student Success Stories
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                    Hear from our successful graduates who have transformed their careers with MAANG certifications
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Review 1 */}
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center z-0" 
                      style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
                      }}>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90 z-10"></div>
                    <div className="relative z-20">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-2xl font-bold text-white mr-4">
                          PS
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">Priya Sharma</h3>
                          <p className="text-gray-100">Software Development</p>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-100 italic">
                        "The MAANG certification program completely transformed my career. The practical projects and expert mentorship helped me land a senior developer position at a leading tech company. The mock interviews were particularly helpful in preparing me for the actual interview process."
                      </p>
                      <div className="mt-4 text-sm text-gray-200">
                        Placed at: Google India
                      </div>
                    </div>
                  </div>

                  {/* Review 2 */}
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center z-0" 
                      style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
                      }}>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90 z-10"></div>
                    <div className="relative z-20">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-2xl font-bold text-white mr-4">
                          RV
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">Rahul Verma</h3>
                          <p className="text-gray-100">Cloud Computing</p>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-100 italic">
                        "The AWS certification track was exceptional. The hands-on labs and real-world projects gave me the confidence to handle complex cloud infrastructure. I'm now working as a Cloud Architect at Amazon Web Services."
                      </p>
                      <div className="mt-4 text-sm text-gray-200">
                        Placed at: Amazon Web Services
                      </div>
                    </div>
                  </div>

                  {/* Review 3 */}
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center z-0" 
                      style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
                      }}>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90 z-10"></div>
                    <div className="relative z-20">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-2xl font-bold text-white mr-4">
                          AP
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">Anjali Patel</h3>
                          <p className="text-gray-100">Mobile Development</p>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-100 italic">
                        "The Meta certification program helped me master React Native and mobile development. The project-based learning approach and industry expert guidance were invaluable. I'm now working on Meta's Instagram team."
                      </p>
                      <div className="mt-4 text-sm text-gray-200">
                        Placed at: Meta (Instagram)
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Review Stats */}
                <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                    <p className="text-gray-600">Placement Rate</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">₹15L+</div>
                    <p className="text-gray-600">Average Package</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                    <p className="text-gray-600">Successful Placements</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Ready to Advance Your Career?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of professionals who have transformed their careers with MAANG certifications. Start your journey today and position yourself for success in the tech industry.
              </p>
              <Link to="/contact-us" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transform hover:-translate-y-1 transition-all">
                Get Certified Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MaangCertificates; 