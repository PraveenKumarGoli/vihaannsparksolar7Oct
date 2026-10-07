import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data';
import { useReveal } from '@/hooks/useReveal';

export default function Testimonials() {
  const { ref, visible } = useReveal();

  return (
    <section className="section-pad bg-navy-50">
      <div className="container-custom">
        <div ref={ref} className={`text-center mb-12 reveal ${visible ? 'visible' : ''}`}>
          <p className="text-gold-600 font-semibold text-sm uppercase tracking-wider mb-2">
            Testimonials
          </p>
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle mx-auto">
            Real customer experiences will be added here. The placeholders below will be replaced with genuine reviews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className={`relative p-7 rounded-2xl bg-white border border-navy-100 card-hover reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <Quote className="w-10 h-10 text-gold-200 mb-4" />
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-gold-300" fill="currentColor" />
                ))}
              </div>
              <p className="text-navy-600 leading-relaxed italic mb-6">"{testimonial.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-navy-100">
                <div className="w-11 h-11 rounded-full bg-navy-100 flex items-center justify-center text-navy-400 font-bold text-sm">
                  {testimonial.name.charAt(1) === 'C' ? '?' : testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-sm">{testimonial.name}</p>
                  <p className="text-xs text-navy-400">
                    {testimonial.location} · {testimonial.type}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
