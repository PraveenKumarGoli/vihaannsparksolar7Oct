import { timeline } from '@/data';
import { useReveal } from '@/hooks/useReveal';

export default function Timeline() {
  const { ref, visible } = useReveal();

  return (
    <section className="section-pad bg-white">
      <div className="container-custom">
        <div ref={ref} className={`text-center mb-14 reveal ${visible ? 'visible' : ''}`}>
          <p className="text-gold-600 font-semibold text-sm uppercase tracking-wider mb-2">
            Our Journey
          </p>
          <h2 className="section-title">From Vision to Reality</h2>
          <p className="section-subtitle mx-auto">
            Building a solar company rooted in engineering excellence since 2020.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-navy-100 md:-translate-x-1/2" />

          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={item.year}
                className={`relative flex items-start gap-6 mb-10 last:mb-0 ${
                  isLeft ? 'md:flex-row-reverse' : ''
                } reveal ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gold-500 border-4 border-white shadow-md md:-translate-x-1/2 mt-1.5 z-10" />

                {/* Card */}
                <div className={`flex-1 pl-12 md:pl-0 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="inline-block">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-100 text-gold-700 font-bold text-sm rounded-full mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-lg font-bold text-navy-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-navy-500 leading-relaxed max-w-sm">{item.description}</p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
