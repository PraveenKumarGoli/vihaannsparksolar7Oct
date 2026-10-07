import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import Services from '@/components/Services';
import About from '@/components/About';
import Timeline from '@/components/Timeline';
import WhyChooseUs from '@/components/WhyChooseUs';
import HowItWorks from '@/components/HowItWorks';
import SolarFlow from '@/components/SolarFlow';
import Residential from '@/components/Residential';
import Commercial from '@/components/Commercial';
import Projects from '@/components/Projects';
import SolarCalculator from '@/components/SolarCalculator';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <Services />
        <About />
        <Timeline />
        <WhyChooseUs />
        <HowItWorks />
        <SolarFlow />
        <Residential />
        <Commercial />
        <Projects />
        <SolarCalculator />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
