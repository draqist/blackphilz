import Gallery from '@/components/home/Gallery';
import Hero from '@/components/home/Hero';
import Philosophy from '@/components/home/Philosophy';
import Services from '@/components/home/Services';
import Team from '@/components/home/Team';
import Footer from '@/components/layout/Footer';
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
      {/* <Footer /> */}
    </main>
  );
}