import { ArrowRight, Phone, FileText, Calendar, Users, Building2 } from 'lucide-react';
import { heroImages, company } from '@/data';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImages.main}
          alt="Rooftop solar panel array capturing sunlight for renewable energy"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom pt-28 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              {company.tagline}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] text-balance animate-fade-in-up">
            Powering a Brighter Future with{' '}
            <span className="text-gold-400">Solar Energy</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Engineering reliable solar solutions for homes and businesses since 2020.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <a href="#contact" className="btn-primary">
              Get a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#calculator" className="btn-secondary">
              <FileText className="w-5 h-5" />
              Request a Quote
            </a>
            <a
              href="tel:+91[YourPhoneNumber]"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call Us
            </a>
          </div>

          {/* Trust statement */}
          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-white/70 text-sm font-medium animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gold-400" />
              Established in 2020
            </span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4 text-gold-400" />
              Founded by 3 Mechanical Engineers
            </span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-gold-400" />
              Residential & Commercial Solar Solutions
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gold-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
