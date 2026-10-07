import { useEffect, useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { company } from '@/data';

export default function FloatingButtons() {
  const [showCall, setShowCall] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowCall(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* WhatsApp - always visible */}
      <a
        href={`https://wa.me/${company.whatsapp.replace(/\D/g, '')}`}
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-110 group"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-navy-900 text-white text-sm font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
          Chat on WhatsApp
        </span>
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
      </a>

      {/* Call - appears on scroll, mobile only */}
      <a
        href={`tel:${company.phone}`}
        aria-label="Call now"
        className={`md:hidden fixed bottom-5 left-5 z-50 w-14 h-14 rounded-full bg-gold-500 hover:bg-gold-600 flex items-center justify-center shadow-lg shadow-gold-500/30 transition-all duration-300 ${
          showCall ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <Phone className="w-6 h-6 text-navy-950" />
      </a>
    </>
  );
}
