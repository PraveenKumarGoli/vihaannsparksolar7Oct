import { processSteps } from '@/data';
import { useReveal } from '@/hooks/useReveal';

export default function HowItWorks() {
  const { ref, visible } = useReveal();

  return (
    <section className="section-pad bg-navy-50">
      <div className="container-custom">
        <div ref={ref} className={`text-center mb-14 reveal ${visible ? 'visible' : ''}`}>
          <p className="text-gold-600 font-semibold text-sm uppercase tracking-wider mb-2">
            How It Works
          </p>
          <h2 className="section-title">Your Solar Journey in 6 Simple Steps</h2>
          <p className="section-subtitle mx-auto">
            A clear, transparent process from first contact to long-term support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {processSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className={`relative reveal ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Connector line */}
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 border-t-2 border-dashed border-navy-200" />
                )}

                <div className="relative text-center group">
                  <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-white border-2 border-navy-100 group-hover:border-gold-500 transition-all duration-300 mb-4 shadow-sm group-hover:shadow-lg group-hover:shadow-gold-500/20">
                    <Icon className="w-9 h-9 text-navy-700 group-hover:text-gold-600 transition-colors duration-300" strokeWidth={2} />
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gold-500 text-navy-950 text-xs font-extrabold flex items-center justify-center shadow-md">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-navy-900 mb-1.5">{step.title}</h3>
                  <p className="text-sm text-navy-500 leading-relaxed px-2">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
