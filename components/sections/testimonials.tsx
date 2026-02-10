'use client';

import Card from '@/components/ui/card';
import SectionHeading from '@/components/ui/section-heading';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Vikram Singh',
    role: 'CEO, TechCorp India',
    rating: 5,
    text: 'Owilavy transformed our digital presence completely. Their expertise in web development and SEO helped us increase our online revenue by 300%. Highly recommended!',
  },
  {
    name: 'Ananya Desai',
    role: 'Founder, StyleHub',
    rating: 5,
    text: 'The mobile app they developed for our e-commerce business exceeded all expectations. The team was professional, responsive, and delivered on time.',
  },
  {
    name: 'Rahul Mehta',
    role: 'Director, Government Project',
    rating: 5,
    text: 'Working with Owilavy on our government portal was seamless. They understood our requirements perfectly and delivered a secure, scalable solution.',
  },
  {
    name: 'Meera Kapoor',
    role: 'Marketing Head, RetailPro',
    rating: 5,
    text: 'Their digital marketing services helped us reach our target audience effectively. Our brand visibility increased significantly within just 3 months.',
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container-custom">
        <SectionHeading
          badge="Testimonials"
          title="What Our Clients Say"
          description="Don't just take our word for it - hear from some of our satisfied clients."
          centered
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} variant="default" hover>
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-dark-700 leading-relaxed italic">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-bold text-dark-900">{testimonial.name}</h4>
                  <p className="text-sm text-primary-500">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
