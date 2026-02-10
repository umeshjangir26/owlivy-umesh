'use client';

import { useState } from 'react';
import Card from '@/components/ui/card';
import Badge from '@/components/ui/badge';
import Button from '@/components/ui/button';
import SectionHeading from '@/components/ui/section-heading';
import { ExternalLink, Github } from 'lucide-react';

const categories = ['All', 'Web', 'Mobile', 'E-commerce', 'Design'];

const projects = [
  {
    title: 'E-commerce Platform',
    category: 'E-commerce',
    description: 'Full-featured online store with payment integration and inventory management.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    links: { live: '#', github: '#' },
  },
  {
    title: 'Mobile Banking App',
    category: 'Mobile',
    description: 'Secure mobile banking application with biometric authentication.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    tags: ['React Native', 'Firebase', 'Redux'],
    links: { live: '#', github: '#' },
  },
  {
    title: 'Corporate Website',
    category: 'Web',
    description: 'Modern corporate website with CMS and multilingual support.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tags: ['React', 'Sanity', 'Tailwind'],
    links: { live: '#', github: '#' },
  },
  {
    title: 'SaaS Dashboard',
    category: 'Web',
    description: 'Analytics dashboard with real-time data visualization.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['Vue.js', 'D3.js', 'Node.js'],
    links: { live: '#', github: '#' },
  },
  {
    title: 'Restaurant App',
    category: 'Mobile',
    description: 'Food ordering app with real-time order tracking.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
    tags: ['Flutter', 'Firebase', 'Maps API'],
    links: { live: '#', github: '#' },
  },
  {
    title: 'Brand Identity Design',
    category: 'Design',
    description: 'Complete brand identity including logo, colors, and guidelines.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    tags: ['Figma', 'Illustrator', 'Branding'],
    links: { live: '#' },
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container-custom">
        <SectionHeading
          badge="Our Work"
          title="Featured Projects"
          description="Explore our portfolio of successful projects across various industries and technologies."
          centered
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                  : 'bg-white text-dark-700 hover:bg-dark-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              variant="default"
              hover
              className="overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden rounded-t-xl -m-6 mb-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                  <a
                    href={project.links.live}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 space-y-4">
                <Badge variant="primary" size="sm">
                  {project.category}
                </Badge>
                
                <h3 className="text-xl font-bold text-dark-900">
                  {project.title}
                </h3>
                
                <p className="text-dark-600 text-sm">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-dark-100 text-dark-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button variant="primary" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
