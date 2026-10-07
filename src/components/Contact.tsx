import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram, Linkedin, Youtube, User, Send, CheckCircle2 } from 'lucide-react';
import { company } from '@/data';
import { useReveal } from '@/hooks/useReveal';

type ContactForm = {
  name: string;
  phone: string;
  email: string;
  location: string;
  projectType: string;
  message: string;
};

const initialForm: ContactForm = {
  name: '',
  phone: '',
  email: '',
  location: '',
  projectType: 'Residential',
  message: '',
};

export default function Contact() {
  const { ref, visible } = useReveal();
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactForm, string>> = {};
    if (!form.name.trim()) newErrors.name = 'Please enter your name';
    if (!form.phone.trim()) newErrors.phone = 'Please enter your phone number';
    else if (!/^[0-9+\-\s]{8,15}$/.test(form.phone.trim())) newErrors.phone = 'Please enter a valid phone number';
    if (!form.email.trim()) newErrors.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) newErrors.email = 'Please enter a valid email';
    if (!form.message.trim()) newErrors.message = 'Please enter a message';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const handleChange = (field: keyof ContactForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: company.phone, href: `tel:${company.phone}` },
    { icon: MessageCircle, label: 'WhatsApp', value: company.whatsapp, href: `https://wa.me/${company.whatsapp.replace(/\D/g, '')}` },
    { icon: Mail, label: 'Email', value: company.email, href: `mailto:${company.email}` },
    { icon: MapPin, label: 'Office Address', value: company.address },
    { icon: Clock, label: 'Business Hours', value: company.hours },
  ];

  const socials = [
    { icon: Facebook, href: company.social.facebook, label: 'Facebook' },
    { icon: Instagram, href: company.social.instagram, label: 'Instagram' },
    { icon: Linkedin, href: company.social.linkedin, label: 'LinkedIn' },
    { icon: Youtube, href: company.social.youtube, label: 'YouTube' },
  ];

  return (
    <section id="contact" className="section-pad bg-navy-50">
      <div className="container-custom">
        <div ref={ref} className={`text-center mb-12 reveal ${visible ? 'visible' : ''}`}>
          <p className="text-gold-600 font-semibold text-sm uppercase tracking-wider mb-2">
            Contact Us
          </p>
          <h2 className="section-title">Let's Build Your Solar Future</h2>
          <p className="section-subtitle mx-auto">
            Ready to go solar? Reach out for a free consultation. Our team will get back to you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.label}
                  className="flex items-start gap-4 p-5 bg-white rounded-xl border border-navy-100 hover:border-gold-300 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-lg bg-gold-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-gold-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-navy-400 uppercase tracking-wider mb-0.5">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a href={info.href} className="text-navy-700 text-sm hover:text-gold-600 transition-colors break-words">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-navy-700 text-sm break-words">{info.value}</p>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Social links */}
            <div className="p-5 bg-white rounded-xl border border-navy-100">
              <p className="text-xs font-semibold text-navy-400 uppercase tracking-wider mb-3">
                Follow Us
              </p>
              <div className="flex gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-lg bg-navy-50 hover:bg-gold-500 flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <Icon className="w-5 h-5 text-navy-600 hover:text-navy-950 transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-xl border border-navy-100 overflow-hidden bg-white">
              <div className="h-48 bg-navy-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-navy-300 mx-auto mb-1" />
                  <p className="text-sm text-navy-400">Google Maps location will be embedded here</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-white rounded-2xl p-8 md:p-12 text-center border border-green-300 h-full flex flex-col items-center justify-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-2">Thank You, {form.name}!</h3>
                <p className="text-navy-500 mb-6">
                  Your consultation request has been received. We'll contact you at {form.phone} or {form.email} soon.
                </p>
                <button
                  onClick={() => {
                    setForm(initialForm);
                    setSubmitted(false);
                  }}
                  className="btn-outline"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 border border-navy-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-navy-700 mb-1.5">
                      <User className="w-4 h-4 text-gold-500" />
                      Name *
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className="input-field"
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-navy-700 mb-1.5">
                      <Phone className="w-4 h-4 text-gold-500" />
                      Phone *
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className="input-field"
                      placeholder="+91 XXXXX XXXXX"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-navy-700 mb-1.5">
                      <Mail className="w-4 h-4 text-gold-500" />
                      Email *
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="input-field"
                      placeholder="you@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-navy-700 mb-1.5">
                      <MapPin className="w-4 h-4 text-gold-500" />
                      Location
                    </label>
                    <input
                      type="text"
                      value={form.location}
                      onChange={(e) => handleChange('location', e.target.value)}
                      className="input-field"
                      placeholder="City, State"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-navy-700 mb-1.5">
                      <Send className="w-4 h-4 text-gold-500" />
                      Project Type
                    </label>
                    <select
                      value={form.projectType}
                      onChange={(e) => handleChange('projectType', e.target.value)}
                      className="input-field"
                    >
                      <option>Residential</option>
                      <option>Commercial</option>
                      <option>Group Housing</option>
                      <option>Consultation Only</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-navy-700 mb-1.5">
                      <MessageCircle className="w-4 h-4 text-gold-500" />
                      Message *
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      rows={4}
                      className="input-field resize-none"
                      placeholder="Tell us about your solar requirements..."
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                </div>

                <button type="submit" className="w-full mt-6 btn-primary justify-center text-base">
                  <Send className="w-5 h-5" />
                  Request a Free Consultation
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
