import { useState, type FormEvent } from 'react';
import { Calculator, User, Phone, Mail, MapPin, Home, Building2, Ruler, FileText, CheckCircle2, TrendingDown, Zap } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

type FormState = {
  name: string;
  phone: string;
  email: string;
  location: string;
  customerType: string;
  monthlyBill: string;
  propertyType: string;
  roofArea: string;
  requirements: string;
};

const initialForm: FormState = {
  name: '',
  phone: '',
  email: '',
  location: '',
  customerType: 'Residential',
  monthlyBill: '',
  propertyType: 'Individual House',
  roofArea: '',
  requirements: '',
};

export default function SolarCalculator() {
  const { ref, visible } = useReveal();
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) newErrors.name = 'Please enter your name';
    if (!form.phone.trim()) newErrors.phone = 'Please enter your phone number';
    else if (!/^[0-9+\-\s]{8,15}$/.test(form.phone.trim())) newErrors.phone = 'Please enter a valid phone number';
    if (!form.email.trim()) newErrors.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) newErrors.email = 'Please enter a valid email';
    if (!form.location.trim()) newErrors.location = 'Please enter your location';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const billToSystemSize: Record<string, string> = {
    'Up to ₹2,000': '1–2 kW',
    '₹2,000 – ₹5,000': '2–4 kW',
    '₹5,000 – ₹10,000': '4–7 kW',
    '₹10,000 – ₹25,000': '7–15 kW',
    'Above ₹25,000': '15+ kW',
  };
  const estimatedSize = billToSystemSize[form.monthlyBill] ?? 'Select your bill range';
  const estimatedOffset = form.monthlyBill ? (form.customerType === 'Commercial' ? 'Potentially offset a meaningful share of daytime consumption' : 'Potentially offset a meaningful share of household consumption') : 'Choose a bill range to see an estimate';

  return (
    <section id="calculator" className="section-pad bg-navy-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div ref={ref} className={`text-center mb-12 reveal ${visible ? 'visible' : ''}`}>
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gold-500/10 mb-4">
            <Calculator className="w-7 h-7 text-gold-400" />
          </div>
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
            Solar Estimate
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Get Your Solar Estimate
          </h2>
          <p className="text-navy-200 mt-4 max-w-2xl mx-auto text-base md:text-lg">
            Tell us about your energy needs and we'll get back to you with a personalized solar estimate. All estimates are approximate.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div className="rounded-2xl bg-navy-800 border border-navy-700 p-5">
              <div className="flex items-center gap-2 text-gold-400 text-sm font-semibold mb-2">
                <Zap className="w-4 h-4" />
                Approximate system size
              </div>
              <p className="text-2xl font-bold text-white">{estimatedSize}</p>
              <p className="text-xs text-navy-300 mt-1">Based on your selected monthly bill</p>
            </div>
            <div className="rounded-2xl bg-navy-800 border border-navy-700 p-5">
              <div className="flex items-center gap-2 text-green-400 text-sm font-semibold mb-2">
                <TrendingDown className="w-4 h-4" />
                Potential energy impact
              </div>
              <p className="text-sm font-semibold text-white leading-relaxed">{estimatedOffset}</p>
              <p className="text-xs text-navy-300 mt-1">Not a savings guarantee</p>
            </div>
          </div>
          {submitted ? (
            <div className="bg-navy-800 rounded-2xl p-8 md:p-12 text-center border border-gold-500/30">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Thank You, {form.name}!</h3>
              <p className="text-navy-200 mb-6">
                We've received your request. Our team will contact you at {form.phone} or {form.email} shortly with your solar estimate.
              </p>
              <button
                onClick={() => {
                  setForm(initialForm);
                  setSubmitted(false);
                }}
                className="btn-primary"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-navy-800 rounded-2xl p-6 md:p-8 border border-navy-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-navy-200 mb-1.5">
                    <User className="w-4 h-4 text-gold-400" />
                    Name *
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-navy-600 text-white placeholder-navy-400 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-navy-200 mb-1.5">
                    <Phone className="w-4 h-4 text-gold-400" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-navy-600 text-white placeholder-navy-400 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-navy-200 mb-1.5">
                    <Mail className="w-4 h-4 text-gold-400" />
                    Email *
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-navy-600 text-white placeholder-navy-400 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Location */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-navy-200 mb-1.5">
                    <MapPin className="w-4 h-4 text-gold-400" />
                    Location *
                  </label>
                  <input
                    type="text"
                    value={form.location}
                    onChange={(e) => handleChange('location', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-navy-600 text-white placeholder-navy-400 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                    placeholder="City, State"
                  />
                  {errors.location && <p className="text-red-400 text-xs mt-1">{errors.location}</p>}
                </div>

                {/* Customer Type */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-navy-200 mb-1.5">
                    <Home className="w-4 h-4 text-gold-400" />
                    Residential / Commercial
                  </label>
                  <select
                    value={form.customerType}
                    onChange={(e) => handleChange('customerType', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-navy-600 text-white focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                  >
                    <option>Residential</option>
                    <option>Commercial</option>
                  </select>
                </div>

                {/* Monthly Bill */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-navy-200 mb-1.5">
                    <Building2 className="w-4 h-4 text-gold-400" />
                    Monthly Electricity Bill
                  </label>
                  <select
                    value={form.monthlyBill}
                    onChange={(e) => handleChange('monthlyBill', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-navy-600 text-white focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                  >
                    <option value="">Select range</option>
                    <option>Up to ₹2,000</option>
                    <option>₹2,000 – ₹5,000</option>
                    <option>₹5,000 – ₹10,000</option>
                    <option>₹10,000 – ₹25,000</option>
                    <option>Above ₹25,000</option>
                  </select>
                </div>

                {/* Property Type */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-navy-200 mb-1.5">
                    <Home className="w-4 h-4 text-gold-400" />
                    Property Type
                  </label>
                  <select
                    value={form.propertyType}
                    onChange={(e) => handleChange('propertyType', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-navy-600 text-white focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                  >
                    <option>Individual House</option>
                    <option>Group House / Apartment</option>
                    <option>Office / Shop</option>
                    <option>Commercial Building</option>
                    <option>Institution</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Roof Area */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-navy-200 mb-1.5">
                    <Ruler className="w-4 h-4 text-gold-400" />
                    Approximate Roof Area
                  </label>
                  <input
                    type="text"
                    value={form.roofArea}
                    onChange={(e) => handleChange('roofArea', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-navy-600 text-white placeholder-navy-400 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                    placeholder="e.g. 500 sq. ft."
                  />
                </div>
              </div>

              {/* Additional Requirements */}
              <div className="mt-5">
                <label className="flex items-center gap-2 text-sm font-medium text-navy-200 mb-1.5">
                  <FileText className="w-4 h-4 text-gold-400" />
                  Additional Requirements
                </label>
                <textarea
                  value={form.requirements}
                  onChange={(e) => handleChange('requirements', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-navy-600 text-white placeholder-navy-400 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all resize-none"
                  placeholder="Tell us about any specific requirements or questions..."
                />
              </div>

              <button type="submit" className="w-full mt-6 btn-primary justify-center text-base">
                <Calculator className="w-5 h-5" />
                Get My Solar Estimate
              </button>

              <p className="text-center text-xs text-navy-300 mt-3">
                Estimates are approximate and based on the information provided. Actual system sizing and savings depend on a site assessment.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
