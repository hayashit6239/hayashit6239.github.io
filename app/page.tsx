import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { FeatureGrid } from '@/components/FeatureGrid';
import { CfP } from '@/components/CfP';
import { CodeOfConduct } from '@/components/CodeOfConduct';
import { Staff } from '@/components/Staff';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <div id="theme">
          <FeatureGrid />
        </div>
        <div id="cfp">
          <CfP />
        </div>
        <div id="conduct">
          <CodeOfConduct />
        </div>
        <div id="staff">
          <Staff />
        </div>
        <Footer />
      </main>
    </>
  );
}
