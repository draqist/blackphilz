import Gallery from '@/components/home/Gallery';
import Hero from '@/components/home/Hero';
import Philosophy from '@/components/home/Philosophy';
import Services from '@/components/home/Services';
import Team from '@/components/home/Team';
import Testimonials from '@/components/home/Testimonials';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Home | Blackphilz",
  description: "Welcome to Blackphilz. We build the future with precision engineering and premium construction services.",
};

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-background">
      <Hero />
      <Philosophy />
      <Services />
      <Gallery />
      <Team />
      <Testimonials />
    </main>
  );
}