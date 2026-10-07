import { Building2, Store, GraduationCap, Users, Factory, ArrowRight } from 'lucide-react';
import { heroImages } from '@/data';
import { useReveal } from '@/hooks/useReveal';

const targets = [
  { icon: Building2, label: 'Offices' },
  { icon: Store, label: 'Shops' },
  { icon: Building2, label: 'Commercial Buildings' },
  { icon: GraduationCap, label: 'Institutions' },
  { icon: Users, label: 'Group Housing' },
  { icon: Factory, label: 'Other Establishments' },
];

export default function Commercial() {
  const { ref, visible } = useReveal();

  return (
    <section id="commercial" className="section-pad bg-navy-50">
      <div className="container-custom">
        <div ref={ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center reveal ${visible ? 'visible' : ''}`}>
          {/* Content */}
          <div>
            <p className="text-gold-600 font-semibold text-sm uppercase tracking-wider mb-2">
              Commercial Solar
            </p>
            <h2 className="section-title mb-5">
              Smart Solar Solutions for Your Business
            </h2>
            <p className="text-navy-600 leading-relaxed mb-6">
              Commercial solar helps businesses manage their energy requirements and make productive use of available rooftop space. We design systems for a wide range of establishments:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {targets.map((target) => {
                const Icon = target.icon;
                return (
                  <div
                    key={target.label}
                    className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-navy-100 hover:border-gold-300 hover:shadow-md transition-all duration-300 text-center"
                  >
                    <Icon className="w-6 h-6 text-gold-600" strokeWidth={2} />
                    <span className="text-xs font-medium text-navy-700">{target.label}</span>
                  </div>
                );
              })}
            </div>

            <a href="#contact" className="btn-primary">
              Discuss Your Commercial Project
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/10">
              <img
                src={heroImages.commercialBuilding}
                alt="Aerial drone shot of solar panels on a large industrial rooftop"
                className="w-full h-[440px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-28 h-28 bg-gold-400/20 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
