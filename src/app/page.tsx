import Gallery from '@/components/home/Gallery';
import Hero from '@/components/home/Hero';
import Philosophy from '@/components/home/Philosophy';
import Services from '@/components/home/Services';
import Team from '@/components/home/Team';
import Header from '@/components/layout/Header';

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-background">
      <Header />
      <Hero />
      <Philosophy />
      <Services />
      <Gallery />
      <Team />
      {/* Spacer to allow scrolling so you can test the parallax */}
      <section className="h-screen flex items-center justify-center">
        <p className="text-muted">Content continues here...</p>
      </section>
    </main>
  );
}