import { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2, X, type LucideIcon } from 'lucide-react';
import { heroImages } from '@/data';

type ServiceModalProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  onClose: () => void;
};

type ServiceDetail = {
  intro: string;
  benefits: string[];
  images: string[];
  imageAlts: string[];
  process?: string[];
};

const serviceDetails: Record<string, ServiceDetail> = {
  'Residential Solar': {
    intro: 'Solar solutions designed around your home, energy use, and available rooftop space.',
    benefits: ['Lower dependence on grid electricity', 'Clean renewable energy for your family', 'Customized system sizing', 'Professional installation and support'],
    images: [heroImages.residential, heroImages.installation, heroImages.panelCloseup],
    imageAlts: ['Residential home with rooftop solar panels', 'Technician installing solar panels on a home', 'Close-up of solar panel cells'],
  },
  'Commercial Solar': {
    intro: 'Practical rooftop solar systems that help businesses use their available space productively.',
    benefits: ['Designed for your operating needs', 'Thoughtful use of commercial rooftops', 'Professional installation planning', 'Ongoing maintenance and support'],
    images: [heroImages.commercial, heroImages.commercialBuilding, heroImages.solarFarm],
    imageAlts: ['Commercial building with solar panels', 'Large rooftop solar installation', 'Solar panels across a large energy site'],
  },
  'Solar Installation': {
    intro: 'A carefully managed installation journey, from site preparation through testing and activation.',
    benefits: ['Site-ready installation planning', 'Safety-focused workmanship', 'System testing before handover', 'Support after installation'],
    images: [heroImages.installation, heroImages.about, heroImages.panelCloseup],
    imageAlts: ['Solar installation work on a rooftop', 'Solar workers planning an installation', 'Detailed solar panel surface'],
    process: ['Site assessment', 'System design', 'Equipment selection', 'Professional installation', 'Testing and commissioning', 'System monitoring'],
  },
  'Solar Consultation & System Design': {
    intro: 'Understand your energy needs, roof potential, and the right direction for your solar project.',
    benefits: ['Energy-use discussion', 'Roof space and sunlight review', 'System sizing guidance', 'Clear next steps without pressure'],
    images: [heroImages.consultation, heroImages.panelTexture, heroImages.residential],
    imageAlts: ['Solar planning consultation over blueprints', 'Solar panel texture in sunlight', 'Home with rooftop solar panels'],
  },
};

const fallbackDetail: ServiceDetail = {
  intro: 'A thoughtful solar service tailored to your property, energy requirements, and long-term goals.',
  benefits: ['Customized recommendations', 'Engineering-driven planning', 'Quality-focused execution', 'Long-term customer support'],
  images: [heroImages.panelCloseup, heroImages.installation, heroImages.commercial],
  imageAlts: ['Solar panel close-up', 'Solar installation work', 'Commercial rooftop solar panels'],
};

export default function ServiceModal({ title, description, icon: Icon, onClose }: ServiceModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const detail = serviceDetails[title] ?? fallbackDetail;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-0 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="absolute inset-0 bg-navy-950/70 backdrop-blur-sm animate-fade-in" />
      <div className="relative z-10 w-full sm:max-w-4xl max-h-[92vh] overflow-y-auto bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl animate-fade-in-up">
        <div className="relative h-48 sm:h-64 overflow-hidden rounded-t-3xl">
          <img src={detail.images[0]} alt={detail.imageAlts[0]} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close service details"
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 text-navy-900 flex items-center justify-center hover:bg-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-5 left-5 right-5 flex items-end gap-3">
            <div className="w-12 h-12 rounded-xl bg-gold-500 flex items-center justify-center shrink-0">
              <Icon className="w-6 h-6 text-navy-950" />
            </div>
            <div>
              <p className="text-gold-300 text-xs font-bold uppercase tracking-wider">Vihaan Spark Solar</p>
              <h2 id="service-modal-title" className="text-2xl sm:text-3xl font-bold text-white">{title}</h2>
            </div>
          </div>
        </div>

        <div className="p-5 sm:p-8">
          <p className="text-navy-600 leading-relaxed">{detail.intro} {description}</p>

          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-7 mt-7">
            <div>
              <h3 className="text-lg font-bold text-navy-900 mb-3">Key benefits</h3>
              <ul className="space-y-3">
                {detail.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5 text-sm text-navy-600">
                    <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>

              {detail.process && (
                <div className="mt-6">
                  <h3 className="text-lg font-bold text-navy-900 mb-3">How it works</h3>
                  <ol className="grid grid-cols-2 gap-2.5">
                    {detail.process.map((step, index) => (
                      <li key={step} className="flex items-center gap-2 text-xs text-navy-600">
                        <span className="w-6 h-6 rounded-full bg-gold-100 text-gold-700 font-bold flex items-center justify-center shrink-0">{index + 1}</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>

            <div>
              <h3 className="text-lg font-bold text-navy-900 mb-3">Why choose Vihaan Spark Solar?</h3>
              <p className="text-sm text-navy-600 leading-relaxed mb-4">We combine practical engineering with clear communication, careful workmanship, and support that continues beyond installation.</p>
              <div className="grid grid-cols-2 gap-3">
                {detail.images.slice(1).map((image, index) => (
                  <img key={image} src={image} alt={detail.imageAlts[index + 1]} className="w-full h-28 sm:h-36 object-cover rounded-xl" loading="lazy" />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-navy-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div>
              <p className="font-bold text-navy-900">Ready to explore solar?</p>
              <p className="text-sm text-navy-500">Start with a free, no-pressure conversation.</p>
            </div>
            <a href="#contact" onClick={onClose} className="btn-primary shrink-0">
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
