import React from 'react';

const About = () => {
  const backgroundImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxkYXRhfGVufDB8fHx8MTc1Mzc4ODQ0NHww&ixlib=rb-4.1.0&q=85";

  const softSkills = [
    "Problem-solving",
    "Attention to detail", 
    "Adaptability",
    "Analytical Thinking",
    "Communication"
  ];

  const highlights = [
    {
      icon: "🎓",
      title: "Educational Excellence",
      description: "Master's in Economics with strong academic foundation"
    },
    {
      icon: "💻",
      title: "Technical Proficiency",
      description: "Advanced Excel, Python, and web development skills"
    },
    {
      icon: "🏆",
      title: "Government Recognition",
      description: "Awarded laptop scholarship for academic achievement"
    },
    {
      icon: "📊",
      title: "Data-Driven Mindset",
      description: "Passionate about turning data into actionable insights"
    }
  ];

  return (
    <section id="about" className="py-20 bg-soft-gray relative">
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
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-olive-green mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A dedicated professional combining economic expertise with technical innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed text-lg">
                A data-driven enthusiast with a strong academic foundation in <strong className="text-deep-blue">Economics</strong> and 
                <strong className="text-deep-blue"> Information Technology</strong>. I'm passionate about leveraging analytical skills 
                and digital tools to solve real-world problems.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-lg">
                With expertise in <strong className="text-olive-green">Microsoft Excel</strong>, 
                <strong className="text-olive-green"> Python</strong>, and web technologies, I bring a unique blend of 
                economic insight and technical proficiency to every project. My goal is to bridge the gap between 
                complex data and meaningful business decisions.
              </p>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-deep-blue mb-4">Core Strengths</h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-white px-4 py-2 rounded-full text-deep-blue font-medium shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg card-hover border-l-4 border-olive-green"
              >
                <div className="text-4xl mb-4">{highlight.icon}</div>
                <h4 className="text-xl font-semibold text-deep-blue mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-deep-blue">5+</div>
              <div className="text-gray-600">Years of Study</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-olive-green">88%</div>
              <div className="text-gray-600">HSC Score</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-digital-crimson">4</div>
              <div className="text-gray-600">Certifications</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-deep-blue">1</div>
              <div className="text-gray-600">Scholarship Won</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;