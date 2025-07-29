import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8002';
        const response = await axios.get(`${backendUrl}/api/certifications`);
        setCertifications(response.data);
      } catch (error) {
        console.error('Error fetching certifications:', error);
        // Fallback data
        setCertifications([
          {
            name: "Advanced MS Excel",
            issuer: "NSIC",
            description: "Advanced Excel functions, macros, and data analysis"
          },
          {
            name: "Financial Literacy",
            issuer: "NSE Academy", 
            description: "Financial markets and investment principles"
          },
          {
            name: "CyberShikshaa Fundamentals",
            issuer: "CyberShikshaa",
            description: "Cybersecurity fundamentals and best practices"
          },
          {
            name: "Course on Computer Concepts",
            issuer: "NIELIT",
            description: "Basic computer concepts and applications"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchCertifications();
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (certifications.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % certifications.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [certifications.length]);

  const backgroundImage = "https://images.pexels.com/photos/669612/pexels-photo-669612.jpeg";

  const getIcon = (index) => {
    const icons = ['🏅', '📊', '🛡️', '💻'];
    return icons[index % icons.length];
  };

  const getColor = (index) => {
    const colors = [
      { bg: 'bg-deep-blue', border: 'border-deep-blue', text: 'text-deep-blue' },
      { bg: 'bg-olive-green', border: 'border-olive-green', text: 'text-olive-green' },
      { bg: 'bg-digital-crimson', border: 'border-digital-crimson', text: 'text-digital-crimson' },
      { bg: 'bg-light-blue', border: 'border-light-blue', text: 'text-light-blue' }
    ];
    return colors[index % colors.length];
  };

  if (loading) {
    return (
      <section id="certifications" className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-deep-blue mx-auto"></div>
        </div>
      </section>
    );
  }

  return (
    <section id="certifications" className="py-20 bg-soft-gray relative">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-blue mb-4">
            My <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-olive-green mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional certifications showcasing expertise in technology and finance
          </p>
        </div>

        {/* Certifications Carousel */}
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {certifications.map((cert, index) => {
                const colors = getColor(index);
                
                return (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-white rounded-2xl shadow-xl p-8 mx-4">
                      <div className="text-center">
                        {/* Icon */}
                        <div className="text-8xl mb-6">{getIcon(index)}</div>
                        
                        {/* Certificate Name */}
                        <h3 className={`text-3xl font-bold ${colors.text} mb-4`}>
                          {cert.name}
                        </h3>
                        
                        {/* Issuer */}
                        <div className={`inline-block ${colors.bg} text-white px-6 py-2 rounded-full font-semibold mb-6`}>
                          {cert.issuer}
                        </div>
                        
                        {/* Description */}
                        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                          {cert.description}
                        </p>
                        
                        {/* Badge */}
                        <div className="mt-8">
                          <div className={`inline-flex items-center space-x-2 ${colors.border} border-2 rounded-full px-6 py-3`}>
                            <span className="text-2xl">✓</span>
                            <span className={`${colors.text} font-semibold`}>Certified</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {certifications.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentSlide === index ? 'bg-deep-blue' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + certifications.length) % certifications.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <svg className="w-6 h-6 text-deep-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % certifications.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <svg className="w-6 h-6 text-deep-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Certification Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const colors = getColor(index);
            
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 card-hover text-center animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-4xl mb-4">{getIcon(index)}</div>
                <h4 className={`text-lg font-bold ${colors.text} mb-2`}>
                  {cert.name}
                </h4>
                <div className={`text-sm ${colors.text} font-medium opacity-75`}>
                  {cert.issuer}
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievement Summary */}
        <div className="mt-16 bg-gradient-primary rounded-2xl shadow-xl p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Continuous Learning Journey
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-3xl mx-auto">
            These certifications represent my commitment to staying current with industry trends and 
            continuously improving my skills in technology, finance, and data analysis.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-olive-green">4</div>
              <div className="text-blue-100">Certifications</div>
              <div className="text-olive-green text-sm">Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-white">3</div>
              <div className="text-blue-100">Skill Areas</div>
              <div className="text-olive-green text-sm">Covered</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-olive-green">100%</div>
              <div className="text-blue-100">Commitment</div>
              <div className="text-olive-green text-sm">To Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;