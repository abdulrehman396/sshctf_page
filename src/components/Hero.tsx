import React, { useEffect, useState } from 'react';
import { Shield, Lock, Code } from 'lucide-react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = 'Securing the Digital Frontier';
  
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(typingInterval);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="relative h-screen flex items-center" id="hero">
      <div 
        className="absolute inset-0 bg-navy-950 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
          opacity: 0.7
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center mb-4 space-x-2">
            <Shield className="h-8 w-8 text-cyan-500" />
            <h3 className="text-cyan-400 font-bold">Military College of Signals</h3>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Signalian Security Hub
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-200 mb-6 h-8">
            {text}<span className="animate-pulse">|</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">
            An elite cybersecurity community developing the next generation of digital defenders through rigorous training, cutting-edge research, and practical experience.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center">
              <Lock className="mr-2 h-5 w-5" />
              Join the Community
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white border border-white px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center">
              <Code className="mr-2 h-5 w-5" />
              Explore Programs
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <a 
          href="#about" 
          className="text-white animate-bounce"
          aria-label="Scroll down"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;