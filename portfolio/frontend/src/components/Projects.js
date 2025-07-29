import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8002';
        const response = await axios.get(`${backendUrl}/api/projects`);
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
        // Fallback data
        setProjects([
          {
            id: "1",
            title: "Data Entry Automation in Excel",
            description: "Developed automated Excel macros to streamline data entry processes, reducing manual work by 70%",
            tech_used: ["MS Excel", "VBA", "Python"],
            challenge: "Manual data entry was time-consuming and error-prone",
            outcome: "Increased efficiency by 70% and reduced errors by 90%"
          },
          {
            id: "2", 
            title: "Portfolio Website Development",
            description: "Created a responsive portfolio website using modern web technologies",
            tech_used: ["HTML", "CSS", "JavaScript", "React"],
            challenge: "Creating a professional online presence",
            outcome: "Professional website showcasing skills and projects"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const projectImages = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  ];

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-deep-blue mx-auto"></div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-soft-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-blue mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-olive-green mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Showcasing practical applications of my skills in data analysis and web development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover animate-slide-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-deep-blue to-light-blue relative overflow-hidden">
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `url(${projectImages[index % projectImages.length]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl text-white opacity-80">
                    {index === 0 ? '📊' : '💻'}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-deep-blue mb-4">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">
                    Tech Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech_used.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-deep-blue text-white px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Challenge & Outcome */}
                <div className="space-y-4">
                  <div className="p-4 bg-red-50 rounded-lg border-l-4 border-digital-crimson">
                    <h4 className="text-sm font-semibold text-digital-crimson mb-2 uppercase tracking-wide">
                      Challenge
                    </h4>
                    <p className="text-gray-700 text-sm">
                      {project.challenge}
                    </p>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-olive-green">
                    <h4 className="text-sm font-semibold text-olive-green mb-2 uppercase tracking-wide">
                      Outcome
                    </h4>
                    <p className="text-gray-700 text-sm">
                      {project.outcome}
                    </p>
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button className="w-full bg-gradient-primary text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-deep-blue mb-4">
              More Projects Coming Soon!
            </h3>
            <p className="text-gray-600 mb-6">
              I'm constantly working on new projects that combine my passion for data analysis and technology. 
              Stay tuned for updates!
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-olive-green text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 hover:transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;