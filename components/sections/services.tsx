'use client';

import Card from '@/components/ui/card';
import SectionHeading from '@/components/ui/section-heading';
import { 
  Code2, 
  Smartphone, 
  Megaphone, 
  Search, 
  Palette, 
  ShoppingCart,
  BarChart3,
  Cloud
} from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Custom websites built with modern tech stacks - React, Next.js, Node.js, and more. Responsive, fast, and SEO-optimized.',
    features: ['Custom CMS', 'E-commerce', 'Web Apps'],
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android using React Native, Flutter, and Swift.',
    features: ['iOS & Android', 'Cross-platform', 'PWA'],
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies including social media, content marketing, and paid advertising campaigns.',
    features: ['Social Media', 'Content Strategy', 'PPC Campaigns'],
  },
  {
    icon: Search,
    title: 'SEO Services',
    description: 'Improve your search engine rankings with our expert SEO services. Technical SEO, on-page, and off-page optimization.',
    features: ['Technical SEO', 'Local SEO', 'Link Building'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that enhance user experience. From wireframes to high-fidelity prototypes.',
    features: ['User Research', 'Prototyping', 'Design Systems'],
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    description: 'Complete e-commerce platforms with payment integration, inventory management, and analytics.',
    features: ['Shopify', 'WooCommerce', 'Custom Stores'],
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Data-driven insights to optimize your business performance. Track metrics, analyze user behavior, and make informed decisions.',
    features: ['Google Analytics', 'Custom Dashboards', 'Reports'],
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and DevOps services. AWS, Google Cloud, Azure deployment and management.',
    features: ['Cloud Migration', 'DevOps', 'CI/CD'],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          badge="What We Offer"
          title="Comprehensive Digital Services"
          description="From concept to launch, we provide end-to-end solutions tailored to your business needs."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                variant="default"
                hover
                className="group"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-dark-900">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-dark-600 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-dark-700"
                      >
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
