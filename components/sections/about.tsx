'use client';

import Card from '@/components/ui/card';
import SectionHeading from '@/components/ui/section-heading';
import { Target, Eye, Award, Users } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Mission',
    description: 'To empower businesses with cutting-edge digital solutions that drive growth and innovation.',
  },
  {
    icon: Eye,
    title: 'Vision',
    description: 'To be India\'s most trusted digital transformation partner, setting industry standards.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We deliver award-winning solutions that exceed expectations and create lasting impact.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with clients as partners, understanding their unique needs and goals.',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          badge="About Us"
          title="Building Digital Excellence"
          description="We are a team of passionate professionals dedicated to transforming businesses through innovative digital solutions."
          centered
        />

        {/* Values */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} variant="gradient" hover className="text-center">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Icon className="w-8 h-8 text-primary-500" />
                    </div>
                    <h4 className="text-xl font-bold text-dark-900">{value.title}</h4>
                    <p className="text-dark-600 text-sm">{value.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
