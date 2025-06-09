import React from 'react';
import { Shield, Lock, Server, Cpu } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-slate-100" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">About Signalianz Security Hub</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Established by the Military College of Signals, we are dedicated to fostering a community of cybersecurity excellence and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-navy-900 mb-4">Our Mission</h3>
            <p className="text-slate-600 mb-6">
              To develop world-class cybersecurity professionals through rigorous training, 
              cutting-edge research, and practical experience, protecting our digital 
              infrastructure against evolving threats.
            </p>
            
            <h3 className="text-2xl font-bold text-navy-900 mb-4">Our Vision</h3>
            <p className="text-slate-600 mb-6">
              To become the premier cybersecurity hub that produces elite digital defenders 
              capable of securing critical infrastructure and advancing the field of cybersecurity.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center mt-8">
              <div className="flex -space-x-4">
                <img className="w-12 h-12 rounded-full border-2 border-white" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Member" />
                <img className="w-12 h-12 rounded-full border-2 border-white" src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Member" />
                <img className="w-12 h-12 rounded-full border-2 border-white" src="https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Member" />
              </div>
              <p className="ml-4 text-slate-600">Join over 200+ members in our community</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Shield className="h-10 w-10 text-cyan-600 mb-4" />
              <h4 className="text-xl font-bold text-navy-900 mb-2">Elite Training</h4>
              <p className="text-slate-600">
                Rigorous cybersecurity curriculum developed by military and industry experts.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Lock className="h-10 w-10 text-cyan-600 mb-4" />
              <h4 className="text-xl font-bold text-navy-900 mb-2">Practical Experience</h4>
              <p className="text-slate-600">
                Hands-on experience through CTF competitions and real-world scenarios.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Server className="h-10 w-10 text-cyan-600 mb-4" />
              <h4 className="text-xl font-bold text-navy-900 mb-2">Research Initiatives</h4>
              <p className="text-slate-600">
                Cutting-edge research in emerging cybersecurity threats and defenses.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Cpu className="h-10 w-10 text-cyan-600 mb-4" />
              <h4 className="text-xl font-bold text-navy-900 mb-2">Innovation Lab</h4>
              <p className="text-slate-600">
                State-of-the-art facilities for testing and developing security solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;