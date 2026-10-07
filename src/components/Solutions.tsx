import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { solutions } from '@/data';
import ServiceModal from './ServiceModal';
import { useReveal } from '@/hooks/useReveal';

export default function Solutions() {
  const { ref, visible } = useReveal();
  const [selectedSolution, setSelectedSolution] = useState<(typeof solutions)[number] | null>(null);

  return (
    <section className="section-pad bg-navy-50">
      <div className="container-custom">
        <div ref={ref} className={`text-center mb-12 reveal ${visible ? 'visible' : ''}`}>
          <p className="text-gold-600 font-semibold text-sm uppercase tracking-wider mb-2">
            What We Do
          </p>
          <h2 className="section-title">Solar Solutions for Every Need</h2>
          <p className="section-subtitle mx-auto">
            From individual homes to large commercial buildings, we design solar systems around your energy requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, i) => {
            const Icon = solution.icon;
            return (
              <div
                key={solution.title}
                className={`group relative overflow-hidden rounded-2xl card card-hover reveal ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-gold-500 flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6 text-navy-950" strokeWidth={2} />
                  </div>
                  <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                    {solution.title}
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-navy-500 text-sm leading-relaxed">{solution.description}</p>
                  <button
                    type="button"
                    onClick={() => setSelectedSolution(solution)}
                    className="mt-4 inline-flex items-center gap-1.5 text-gold-600 font-semibold text-sm hover:gap-2.5 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {selectedSolution && (
        <ServiceModal
          title={selectedSolution.title}
          description={selectedSolution.description}
          icon={selectedSolution.icon}
          onClose={() => setSelectedSolution(null)}
        />
      )}
    </section>
  );
}
