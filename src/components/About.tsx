import { CheckCircle2, Users, Lightbulb, ShieldCheck, Handshake, Wrench, Leaf, TrendingUp } from 'lucide-react';
import { heroImages } from '@/data';
import { useReveal } from '@/hooks/useReveal';

const values = [
  { icon: Lightbulb, label: 'Engineering-driven approach' },
  { icon: Wrench, label: 'Quality workmanship' },
  { icon: Handshake, label: 'Customer-focused solutions' },
  { icon: ShieldCheck, label: 'Transparent communication' },
  { icon: TrendingUp, label: 'Reliable installation' },
  { icon: Leaf, label: 'Long-term value' },
  { icon: CheckCircle2, label: 'Commitment to renewable energy' },
];

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="section-pad bg-navy-50">
      <div className="container-custom">
        <div ref={ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center reveal ${visible ? 'visible' : ''}`}>
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/10">
              <img
                src={heroImages.about}
                alt="Workers installing solar panels on a roof for sustainable energy solutions"
                className="w-full h-[420px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white rounded-2xl shadow-xl p-5 max-w-[200px] border border-navy-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-gold-500 flex items-center justify-center">
                  <Users className="w-5 h-5 text-navy-950" />
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-navy-900 leading-none">3</p>
                  <p className="text-xs text-navy-500">Mechanical Engineers</p>
                </div>
              </div>
              <p className="text-xs text-navy-400">Founded the company in 2020</p>
            </div>
            {/* Decorative accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold-400/20 rounded-2xl -z-10" />
          </div>

          {/* Text side */}
          <div>
            <p className="text-gold-600 font-semibold text-sm uppercase tracking-wider mb-2">
              About Vihaan Spark Solar
            </p>
            <h2 className="section-title mb-5">
              An Engineering-Driven Solar Company
            </h2>
            <p className="text-navy-600 leading-relaxed mb-4">
              Vihaan Spark Solar was established in 2020 by three mechanical engineers who shared a vision of making clean and reliable solar energy more accessible to homes and businesses.
            </p>
            <p className="text-navy-600 leading-relaxed mb-6">
              Combining engineering knowledge with practical project experience, the company focuses on delivering solar solutions designed around each customer's energy requirements.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white border border-navy-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4.5 h-4.5 text-gold-600" style={{ width: 18, height: 18 }} />
                    </div>
                    <span className="text-sm text-navy-700 font-medium">{value.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
