import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import GamesSection from '@/components/GamesSection';
import MotivationalThoughts from '@/components/MotivationalThoughts';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <GamesSection />
      <MotivationalThoughts />
      <AboutSection />
      <Footer />
    </main>
  );
}
