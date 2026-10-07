import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react';
import Logo from './Logo';
import { company, footerLinks } from '@/data';

export default function Footer() {
  const socials = [
    { icon: Facebook, href: company.social.facebook, label: 'Facebook' },
    { icon: Instagram, href: company.social.instagram, label: 'Instagram' },
    { icon: Linkedin, href: company.social.linkedin, label: 'LinkedIn' },
    { icon: Youtube, href: company.social.youtube, label: 'YouTube' },
  ];

  return (
    <footer className="bg-navy-950 text-navy-200">
      {/* Main footer */}
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 text-sm text-navy-300 leading-relaxed">
              Engineering a brighter, cleaner future with solar energy.
            </p>
            <p className="mt-3 text-sm text-gold-400 font-semibold">
              {company.tagline}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-navy-300 hover:text-gold-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              <li className="text-sm text-navy-300">Residential Solar</li>
              <li className="text-sm text-navy-300">Commercial Solar</li>
              <li className="text-sm text-navy-300">Individual House Projects</li>
              <li className="text-sm text-navy-300">Group House Projects</li>
              <li className="text-sm text-navy-300">Consultation & Design</li>
              <li className="text-sm text-navy-300">Installation</li>
              <li className="text-sm text-navy-300">Maintenance & Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <a href={`tel:${company.phone}`} className="text-sm text-navy-300 hover:text-gold-400 transition-colors">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <a href={`https://wa.me/${company.whatsapp.replace(/\D/g, '')}`} className="text-sm text-navy-300 hover:text-gold-400 transition-colors">
                  {company.whatsapp}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <a href={`mailto:${company.email}`} className="text-sm text-navy-300 hover:text-gold-400 transition-colors break-words">
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-navy-300">{company.address}</span>
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-3 mt-5">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg bg-navy-800 hover:bg-gold-500 flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Icon className="w-4 h-4 text-navy-300 hover:text-navy-950 transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-800">
        <div className="container-custom py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-navy-400 text-center md:text-left">
            © 2026 Vihaan Spark Solar. All Rights Reserved.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 text-xs text-navy-400 hover:text-gold-400 transition-colors"
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
