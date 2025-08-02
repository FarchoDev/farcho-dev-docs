import Features02Page from '@/components/features-02/features-02';
import Features06Page from '@/components/features-06/features-06';
import Footer05Page from '@/components/footer-05/footer-05';
import Hero06 from '@/components/hero-06/hero-06';

export default function HomePage() {
  return (
    <main className="relative flex flex-1 flex-col justify-center text-center">
      <Hero06/>
      <Features02Page/>
      <Features06Page/>
      <Footer05Page/>
    </main>
  );
}
