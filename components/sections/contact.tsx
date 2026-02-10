'use client';

import { useState } from 'react';
import Card from '@/components/ui/card';
import Input from '@/components/ui/input';
import Textarea from '@/components/ui/textarea';
import Button from '@/components/ui/button';
import SectionHeading from '@/components/ui/section-heading';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! (Demo mode)');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          badge="Get In Touch"
          title="Let's Start Your Project"
          description="Have a project in mind? We'd love to hear from you."
          centered
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card variant="gradient">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="font-bold text-dark-900 mb-1">Email Us</h3>
                  <a href="mailto:hello@owilavy.com" className="text-dark-600 hover:text-primary-500">
                    hello@owilavy.com
                  </a>
                </div>
              </div>
            </Card>

            <Card variant="gradient">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="font-bold text-dark-900 mb-1">Call Us</h3>
                  <a href="tel:+911234567890" className="text-dark-600 hover:text-primary-500">
                    +91 123 456 7890
                  </a>
                </div>
              </div>
            </Card>

            <Card variant="gradient">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="font-bold text-dark-900 mb-1">Visit Us</h3>
                  <p className="text-dark-600">
                    Jaipur, Rajasthan<br />India
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card variant="default">
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  name="name"
                  label="Your Name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  label="Email Address"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="phone"
                  type="tel"
                  label="Phone Number"
                  placeholder="+91 12345 67890"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <Textarea
                  name="message"
                  label="Your Message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                />
                <Button type="submit" variant="primary" size="lg" className="w-full group">
                  Send Message
                  <Send className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
