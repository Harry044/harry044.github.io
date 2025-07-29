import React from 'react';

const Hero = () => {
  const profileImage = "https://customer-assets.emergentagent.com/job_harish-portfolio/artifacts/khxaxf2b_PRofile%20HK.JPG";
  
  const handleDownloadResume = () => {
    // Create a placeholder resume download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Harish_Kumar_Resume.pdf';
    alert('Resume download feature - Please contact directly for actual resume');
  };

  const handleContactClick = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/harishkumar044', '_blank');
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-primary flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-olive-green opacity-20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-digital-crimson opacity-15 rounded-full animate-float" style={{animationDelay: '4s'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-slide-up leading-tight">
              Hi, I'm <span className="text-olive-green">Harish Kumar</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-blue-100 mb-6 animate-slide-up font-light" style={{animationDelay: '0.2s'}}>
              Economics Graduate | Excel Specialist | Data Enthusiast
            </h2>
            
            <p className="text-lg text-blue-100 mb-8 animate-slide-up leading-relaxed" style={{animationDelay: '0.4s'}}>
              <em>"Driven by Data. Powered by Purpose."</em>
            </p>

            <p className="text-base md:text-lg text-blue-200 mb-10 animate-slide-up leading-relaxed max-w-2xl" style={{animationDelay: '0.6s'}}>
              Passionate about leveraging analytical skills and digital tools to solve real-world problems. 
              With expertise in Microsoft Excel, Python, and web technologies, I bring economic insight and technical proficiency to every project.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{animationDelay: '0.8s'}}>
              <button
                onClick={handleDownloadResume}
                className="bg-olive-green text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 hover:transform hover:scale-105 shadow-lg"
              >
                View Resume
              </button>
              <button
                onClick={handleContactClick}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-deep-blue transition-all duration-300 hover:transform hover:scale-105"
              >
                Contact Me
              </button>
              <button
                onClick={handleLinkedInClick}
                className="bg-digital-crimson text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 hover:transform hover:scale-105 shadow-lg"
              >
                LinkedIn
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl animate-bounce-in">
                <img
                  src={profileImage}
                  alt="Harish Kumar"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x400/1e3a8a/ffffff?text=Harish+Kumar';
                  }}
                />
              </div>
              
              {/* Decorative ring */}
              <div className="absolute -inset-4 border-4 border-olive-green rounded-full opacity-50 animate-ping"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;