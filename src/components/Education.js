import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Education = () => {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8002';
        const response = await axios.get(`${backendUrl}/api/education`);
        setEducation(response.data);
      } catch (error) {
        console.error('Error fetching education:', error);
        // Fallback data
        setEducation([
          {
            degree: "MA in Economics",
            institution: "Vallabh Govt. College, Mandi (Sardar Patel University)",
            percentage: "65%",
            year: "2023",
            achievement: null
          },
          {
            degree: "BA in Economics",
            institution: "Govt. College Bassa",
            percentage: "80%", 
            year: "2021",
            achievement: null
          },
          {
            degree: "O-Level IT",
            institution: "NIELIT Shimla",
            percentage: "73%",
            year: "2020",
            achievement: "IT Certification"
          },
          {
            degree: "Higher Secondary Certificate (HSC)",
            institution: "Government School",
            percentage: "88%",
            year: "2019",
            achievement: "Awarded laptop scholarship for academic excellence"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchEducation();
  }, []);

  const backgroundImage = "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHxhbmFseXRpY3N8ZW58MHx8fHwxNzUzNzg4NDQ5fDA&ixlib=rb-4.1.0&q=85";

  const getIcon = (index) => {
    const icons = ['🎓', '📚', '💻', '🏆'];
    return icons[index % icons.length];
  };

  const getColor = (index) => {
    const colors = [
      { border: 'border-deep-blue', bg: 'bg-deep-blue', text: 'text-deep-blue' },
      { border: 'border-olive-green', bg: 'bg-olive-green', text: 'text-olive-green' },
      { border: 'border-digital-crimson', bg: 'bg-digital-crimson', text: 'text-digital-crimson' },
      { border: 'border-light-blue', bg: 'bg-light-blue', text: 'text-light-blue' }
    ];
    return colors[index % colors.length];
  };

  if (loading) {
    return (
      <section id="education" className="py-20 bg-gradient-to-br from-deep-blue to-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto"></div>
        </div>
      </section>
    );
  }

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-deep-blue to-light-blue relative">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-olive-green">Education</span>
          </h2>
          <div className="w-24 h-1 bg-olive-green mx-auto mb-8"></div>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            A journey of continuous learning and academic excellence
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white/30 h-full hidden lg:block"></div>

          {/* Education items */}
          <div className="space-y-12">
            {education.map((item, index) => {
              const colors = getColor(index);
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} animate-slide-up`}
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  {/* Content */}
                  <div className={`lg:w-5/12 ${isEven ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="bg-white rounded-2xl shadow-xl p-8 card-hover">
                      {/* Icon and Year */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-4xl">{getIcon(index)}</div>
                        <span className={`${colors.bg} text-white px-4 py-2 rounded-full text-sm font-bold`}>
                          {item.year}
                        </span>
                      </div>

                      {/* Degree */}
                      <h3 className={`text-2xl font-bold ${colors.text} mb-2`}>
                        {item.degree}
                      </h3>

                      {/* Institution */}
                      <p className="text-gray-600 mb-4 font-medium">
                        {item.institution}
                      </p>

                      {/* Percentage */}
                      {item.percentage && (
                        <div className="mb-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-600">Score</span>
                            <span className="text-sm font-bold text-gray-800">{item.percentage}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${colors.bg} transition-all duration-1000 ease-out`}
                              style={{
                                width: item.percentage
                              }}
                            ></div>
                          </div>
                        </div>
                      )}

                      {/* Achievement */}
                      {item.achievement && (
                        <div className={`p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400`}>
                          <div className="flex items-start space-x-2">
                            <span className="text-yellow-500 text-xl">🏆</span>
                            <p className="text-gray-700 text-sm font-medium">
                              {item.achievement}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div className={`w-6 h-6 ${colors.bg} rounded-full border-4 border-white shadow-lg`}></div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden lg:block lg:w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-white">5+</div>
              <div className="text-blue-100">Years of Education</div>
              <div className="text-olive-green text-sm">Continuous Learning</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-olive-green">80%+</div>
              <div className="text-blue-100">Average Performance</div>
              <div className="text-olive-green text-sm">Academic Excellence</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-white">1</div>
              <div className="text-blue-100">Scholarship Awarded</div>
              <div className="text-olive-green text-sm">Merit Recognition</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;