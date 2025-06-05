import React from 'react';
import { Shield, Users, BookOpen, Trophy, Server, Code, Lock, Search } from 'lucide-react';

const ServiceCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
      <div className="bg-cyan-600 text-white p-3 rounded-full inline-block mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-navy-900 mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Cybersecurity Training",
      description: "Comprehensive training programs covering offensive and defensive cybersecurity techniques for all skill levels."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Events",
      description: "Regular workshops, seminars, and networking events connecting members with industry professionals."
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Educational Resources",
      description: "Access to exclusive learning materials, labs, and specialized courses developed by security experts."
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "CTF Competitions",
      description: "Regular Capture The Flag competitions to test and enhance your cybersecurity skills in real-world scenarios."
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Security Research",
      description: "Opportunities to participate in cutting-edge research projects addressing emerging security challenges."
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Secure Coding",
      description: "Learn best practices for developing secure applications and identifying vulnerabilities in existing code."
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Penetration Testing",
      description: "Hands-on training in ethical hacking and penetration testing methodologies."
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Threat Intelligence",
      description: "Analysis of current cyber threats and development of effective countermeasures."
    }
  ];

  return (
    <section className="py-20 bg-navy-900" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Programs & Services</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Comprehensive offerings designed to develop elite cybersecurity professionals through hands-on experience and expert guidance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;