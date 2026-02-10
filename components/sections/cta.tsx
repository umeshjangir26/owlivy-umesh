'use client';

import Button from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-primary-500 via-accent-500 to-primary-600 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">Ready to Transform?</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold">
            Let's Build Something Amazing Together
          </h2>

          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join over 200+ satisfied clients who trusted us with their digital transformation.
          </p>

          <Button
            variant="secondary"
            size="lg"
            onClick={scrollToContact}
            className="bg-white text-primary-600 hover:bg-white/90 group"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
