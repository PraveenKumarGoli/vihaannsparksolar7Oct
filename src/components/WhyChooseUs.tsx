import { whyChooseUs } from '@/data';
import { useReveal } from '@/hooks/useReveal';

export default function WhyChooseUs() {
  const { ref, visible } = useReveal();

  return (
    <section className="section-pad bg-navy-900 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div ref={ref} className={`text-center mb-14 reveal ${visible ? 'visible' : ''}`}>
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            The Vihaan Spark Solar Difference
          </h2>
          <p className="text-navy-200 mt-4 max-w-2xl mx-auto text-base md:text-lg">
            What sets us apart is our engineering foundation and commitment to every customer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`group p-7 rounded-2xl bg-navy-800 border border-navy-700 hover:border-gold-500 hover:bg-navy-700 transition-all duration-300 reveal ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gold-500/10 group-hover:bg-gold-500 flex items-center justify-center mb-5 transition-all duration-300">
                  <Icon className="w-7 h-7 text-gold-400 group-hover:text-navy-950 transition-colors duration-300" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-navy-200 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
