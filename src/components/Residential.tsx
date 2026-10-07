import { CheckCircle2, ArrowRight } from 'lucide-react';
import { heroImages } from '@/data';
import { useReveal } from '@/hooks/useReveal';

const benefits = [
  'Reduce dependence on conventional electricity',
  'Make better use of rooftop space',
  'Generate clean energy',
  'Potentially reduce electricity expenses',
  'Contribute to a cleaner environment',
];

export default function Residential() {
  const { ref, visible } = useReveal();

  return (
    <section id="residential" className="section-pad bg-white">
      <div className="container-custom">
        <div ref={ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center reveal ${visible ? 'visible' : ''}`}>
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/10">
              <img
                src={heroImages.residential}
                alt="Solar panels on a suburban home surrounded by greenery under a sunny blue sky"
                className="w-full h-[440px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-28 h-28 bg-gold-400/20 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-green-400/20 rounded-full -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-gold-600 font-semibold text-sm uppercase tracking-wider mb-2">
              Residential Solar
            </p>
            <h2 className="section-title mb-5">
              Turn Your Rooftop Into Your Own Power Source
            </h2>
            <p className="text-navy-600 leading-relaxed mb-6">
              Residential solar helps you make productive use of your rooftop and take control of your energy. Here's what it can offer:
            </p>

            <ul className="space-y-3 mb-8">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span className="text-navy-700">{benefit}</span>
                </li>
              ))}
            </ul>

            <a href="#calculator" className="btn-primary">
              Get a Residential Solar Quote
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
