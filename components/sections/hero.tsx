'use client';

import { useEffect, useState } from 'react';
import Button from '@/components/ui/button';
import Badge from '@/components/ui/badge';
import { ArrowRight, Sparkles } from 'lucide-react';
import dynamic from 'next/dynamic';

const FloatingShapes = dynamic(() => import('@/components/three/floating-shapes'), {
  ssr: false,
});

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50">
      {/* 3D Background */}
      {mounted && <FloatingShapes />}

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400/30 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="flex justify-center animate-slide-down">
            <Badge variant="primary" size="lg" className="gap-2">
              <Sparkles className="w-4 h-4" />
              India's Premier Digital Agency
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-slide-up">
            Transform Your Business with{' '}
            <span className="gradient-text">Digital Excellence</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-dark-600 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            From web development to digital marketing, we deliver cutting-edge solutions for government, private, and freelance projects across all tech stacks.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('#contact')}
              className="group"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('#portfolio')}
            >
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {[
              { value: '500+', label: 'Projects Completed' },
              { value: '200+', label: 'Happy Clients' },
              { value: '50+', label: 'Team Members' },
              { value: '15+', label: 'Years Experience' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-dark-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-dark-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-dark-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
