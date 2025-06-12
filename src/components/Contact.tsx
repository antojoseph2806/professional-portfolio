import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Clock, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'antomaruthaniyil@yahoo.com',
      action: 'mailto:antomaruthaniyil@yahoo.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+916282289862',
      action: 'tel:+916282289862'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Idukki, Kerala',
      action: "https://maps.app.goo.gl/g29dcF8m1bPerbcB8"
    },
    {
      icon: Globe,
      title: 'Website',
      content: 'www.antojoseph.website',
      action: "www.antojoseph.website"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/antojoseph2806',
      color: 'hover:text-gray-800'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/antojoseph2806',
      color: 'hover:text-blue-600'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://instagram.com/anto_maruthaniyil',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              I'm always interested in new opportunities and collaborations. 
              Let's discuss how we can work together to bring your ideas to life.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-amber-500 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div
              className={`transform transition-all duration-1000 delay-200 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact Information</h2>
                  <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;
                      return (
                        <a
                          key={index}
                          href={info.action}
                          className="flex items-center space-x-6 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-1"
                        >
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Icon className="text-white" size={24} />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">{info.title}</h3>
                            <p className="text-gray-600 text-lg">{info.content}</p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>

                <div className="text-center mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Me</h3>
                  <div className="flex justify-center space-x-6">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center text-gray-600 ${social.color} hover:shadow-xl transform hover:scale-110 transition-all duration-300`}
                        >
                          <Icon size={24} />
                        </a>
                      );
                    })}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Availability</h3>
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                      <div className="flex items-center space-x-3 text-green-800 mb-2">
                        <Clock size={24} />
                        <span className="text-xl font-semibold">Available for new projects</span>
                      </div>
                      <p className="text-green-700">
                        Currently accepting new freelance and full-time opportunities
                      </p>
                    </div>
                  </div>

                  {/* Map Placeholder */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                      <div className="text-center text-white">
                        <MapPin size={48} className="mx-auto mb-4" />
                        <h3 className="text-xl font-semibold">Maruthaniyil, Prakash P.O</h3>
                        <p className="text-blue-100">Idukki, Kerala</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;