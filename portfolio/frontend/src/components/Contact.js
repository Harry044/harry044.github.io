import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const backgroundImage = "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHw0fHx0ZWNobm9sb2d5fGVufDB8fHx8MTc1Mzc3ODc5MHww&ixlib=rb-4.1.0&q=85";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8002';
      const response = await axios.post(`${backendUrl}/api/contact`, formData);
      
      if (response.data.status === 'success') {
        setSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setError('Failed to send message. Please try again or contact directly.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'mr.harishgrewal514@gmail.com',
      href: 'mailto:mr.harishgrewal514@gmail.com',
      color: 'text-deep-blue'
    },
    {
      icon: '📞',
      label: 'Phone',
      value: '9805877514',
      href: 'tel:9805877514',
      color: 'text-olive-green'
    },
    {
      icon: '🔗',
      label: 'LinkedIn',
      value: 'linkedin.com/in/harishkumar044',
      href: 'https://www.linkedin.com/in/harishkumar044',
      color: 'text-digital-crimson'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-deep-blue to-light-blue relative">
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
            Get In <span className="text-olive-green">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-olive-green mx-auto mb-8"></div>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Ready to collaborate or discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : '_self'}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-center space-x-4 p-4 bg-white/20 rounded-xl hover:bg-white/30 transition-all duration-300 group"
                  >
                    <div className="text-4xl">{info.icon}</div>
                    <div>
                      <p className="text-blue-100 text-sm font-medium uppercase tracking-wide">
                        {info.label}
                      </p>
                      <p className="text-white font-semibold group-hover:text-olive-green transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Links</h3>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => window.open('https://www.linkedin.com/in/harishkumar044', '_blank')}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <span>💼</span>
                  <span>LinkedIn</span>
                </button>
                <button
                  onClick={() => alert('Resume download - Please contact directly')}
                  className="bg-olive-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <span>📄</span>
                  <span>Resume</span>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-deep-blue mb-6">Send me a message</h3>
            
            {success && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <span className="text-green-500 text-xl">✅</span>
                  <p className="text-green-700 font-medium">
                    Thank you for your message! I'll get back to you soon.
                  </p>
                </div>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <span className="text-red-500 text-xl">❌</span>
                  <p className="text-red-700 font-medium">{error}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-blue focus:border-transparent transition-colors duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-blue focus:border-transparent transition-colors duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-blue focus:border-transparent transition-colors duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-blue focus:border-transparent transition-colors duration-300 resize-vertical"
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-primary text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {loading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <span>Send Message</span>
                    <span>🚀</span>
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Let's Work Together!
            </h3>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Whether you need data analysis, Excel automation, or web development services, 
              I'm here to help turn your ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:mr.harishgrewal514@gmail.com"
                className="bg-olive-green text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 hover:transform hover:scale-105"
              >
                Email Me Directly
              </a>
              <a
                href="https://www.linkedin.com/in/harishkumar044"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-digital-crimson text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 hover:transform hover:scale-105"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;