import { useState } from 'react';
import { Home, Lightbulb, PanelTop, Sun, Zap } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

type FlowStep = {
  title: string;
  icon: typeof Sun;
  description: string;
};

const flowSteps: FlowStep[] = [
  { title: 'Sunlight', icon: Sun, description: 'Solar energy begins with sunlight reaching your rooftop or project site.' },
  { title: 'Solar Panels', icon: PanelTop, description: 'Photovoltaic panels convert sunlight into direct-current electricity.' },
  { title: 'Inverter', icon: Zap, description: 'The inverter converts that energy into usable electricity for your property.' },
  { title: 'Electricity', icon: Lightbulb, description: 'Clean power is ready for the appliances, equipment, and systems you use every day.' },
  { title: 'Home or Business', icon: Home, description: 'Your property uses solar power while the system continues generating through daylight hours.' },
];

export default function SolarFlow() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { ref, visible } = useReveal();
  const selected = flowSteps[selectedIndex];

  return (
    <section className="section-pad bg-white">
      <div className="container-custom">
        <div ref={ref} className={`text-center mb-12 reveal ${visible ? 'visible' : ''}`}>
          <p className="text-gold-600 font-semibold text-sm uppercase tracking-wider mb-2">How Solar Works</p>
          <h2 className="section-title">From Sunlight to Useful Energy</h2>
          <p className="section-subtitle mx-auto">Select each step to see how a solar system turns sunlight into power for your home or business.</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-0">
            {flowSteps.map((step, index) => {
              const Icon = step.icon;
              const isSelected = index === selectedIndex;
              return (
                <div key={step.title} className="relative flex items-center md:block">
                  {index < flowSteps.length - 1 && <div className="hidden md:block absolute top-10 left-1/2 w-full border-t-2 border-dashed border-navy-200" />}
                  <button
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    aria-pressed={isSelected}
                    className={`relative z-10 w-full flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-300 ${isSelected ? 'text-navy-950' : 'text-navy-500 hover:text-navy-800'}`}
                  >
                    <span className={`w-20 h-20 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${isSelected ? 'bg-gold-500 border-gold-500 shadow-lg shadow-gold-500/25 scale-105' : 'bg-white border-navy-200'}`}>
                      <Icon className="w-8 h-8" />
                    </span>
                    <span className="text-sm font-bold text-center">{step.title}</span>
                  </button>
                </div>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl bg-navy-50 border border-navy-100 p-6 md:p-8 text-center animate-fade-in" key={selected.title}>
            <p className="text-gold-600 font-semibold text-xs uppercase tracking-wider mb-2">Step {selectedIndex + 1} of {flowSteps.length}</p>
            <h3 className="text-xl md:text-2xl font-bold text-navy-900 mb-2">{selected.title}</h3>
            <p className="text-navy-600 max-w-2xl mx-auto leading-relaxed">{selected.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
