import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import Portfolio from '@/components/sections/portfolio';
import About from '@/components/sections/about';
import Testimonials from '@/components/sections/testimonials';
import CTA from '@/components/sections/cta';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Testimonials />
      <CTA />
      <Contact />
    </main>
  );
}
