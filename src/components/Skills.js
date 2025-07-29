import React from 'react';

const Skills = () => {
  const skillsData = [
    {
      category: "Data Science Tools",
      skills: ["Python", "MS Excel (Advanced)", "Data Analysis", "Statistical Analysis", "Machine Learning", "Data Visualization"],
      icon: "📊",
      color: "bg-deep-blue",
      textColor: "text-deep-blue"
    },
    {
      category: "AI & Tech Skills",
      skills: ["Artificial Intelligence", "HTML", "CSS", "JavaScript", "Database Management", "Research Methods"],
      icon: "🤖",
      color: "bg-olive-green",
      textColor: "text-olive-green"
    },
    {
      category: "Soft Skills", 
      skills: ["Analytical Thinking", "Problem Solving", "Communication", "Project Management", "Critical Thinking", "Attention to Detail"],
      icon: "🧠",
      color: "bg-digital-crimson",
      textColor: "text-digital-crimson"
    }
  ];

  const backgroundImage = "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3N8ZW58MHx8fHwxNzUzNzg4NDQ5fDA&ixlib=rb-4.1.0&q=85";

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-deep-blue to-light-blue relative">
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
            My <span className="text-olive-green">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-olive-green mx-auto mb-8"></div>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            A comprehensive toolkit for data analysis, web development, and problem-solving
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 card-hover animate-slide-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">{category.icon}</div>
                <h3 className={`text-2xl font-bold ${category.textColor} mb-2`}>
                  {category.category}
                </h3>
                <div className={`w-16 h-1 ${category.color} mx-auto rounded-full`}></div>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  >
                    <div className={`w-3 h-3 ${category.color} rounded-full flex-shrink-0`}></div>
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>

              {/* Skill Level Indicator */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-600">Proficiency</span>
                  <span className="text-sm font-medium text-gray-800">
                    {index === 0 ? "Advanced" : index === 1 ? "Intermediate" : "Expert"}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${category.color} transition-all duration-1000 ease-out`}
                    style={{
                      width: index === 0 ? "90%" : index === 1 ? "75%" : "95%"
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Additional Competencies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Data Entry", level: "Expert", icon: "⌨️" },
              { name: "Financial Analysis", level: "Advanced", icon: "💰" },
              { name: "Report Writing", level: "Advanced", icon: "📝" },
              { name: "Team Collaboration", level: "Expert", icon: "🤝" }
            ].map((skill, index) => (
              <div
                key={index}
                className="text-center p-4 bg-white/20 rounded-xl hover:bg-white/30 transition-all duration-300"
              >
                <div className="text-3xl mb-2">{skill.icon}</div>
                <h4 className="text-white font-semibold mb-1">{skill.name}</h4>
                <span className="text-olive-green text-sm font-medium">{skill.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;