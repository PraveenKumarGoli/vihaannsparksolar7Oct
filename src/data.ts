import {
  Home,
  Building2,
  Users,
  Settings,
  Wrench,
  ClipboardCheck,
  Lightbulb,
  ShieldCheck,
  Calendar,
  Handshake,
  PhoneCall,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Sun,
  Zap,
  PanelTop,
  type LucideIcon,
} from 'lucide-react';

export const company = {
  name: 'Vihaan Spark Solar',
  tagline: 'Engineering Solar. Powering Tomorrow.',
  established: '2020',
  foundedBy: 'Three Mechanical Engineers',
  phone: '+91 9542535556',
  whatsapp: '+91 9542535556',
  email: 'vihaansparksolar@gmail.com',
  address: 'Undavalli, Amaravati, Andhra Pradesh, India',
  mapEmbed: 'https://www.google.com/maps/embed?pb=[Your-Google-Maps-Embed-Code]',
  hours: 'Monday – Saturday: 9:00 AM – 6:00 PM',
  social: {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
    youtube: '#',
  },
};

export const heroImages = {
  main: 'https://images.pexels.com/photos/38171120/pexels-photo-38171120.jpeg?auto=compress&cs=tinysrgb&w=1920',
  residential: 'https://images.pexels.com/photos/12243093/pexels-photo-12243093.jpeg?auto=compress&cs=tinysrgb&w=1200',
  commercial: 'https://images.pexels.com/photos/9799994/pexels-photo-9799994.jpeg?auto=compress&cs=tinysrgb&w=1200',
  about: 'https://images.pexels.com/photos/11645008/pexels-photo-11645008.jpeg?auto=compress&cs=tinysrgb&w=1200',
  consultation: 'https://images.pexels.com/photos/9616959/pexels-photo-9616959.jpeg?auto=compress&cs=tinysrgb&w=1200',
  panelTexture: 'https://images.pexels.com/photos/411011/sun-energy-solar-electricity-411011.jpeg?auto=compress&cs=tinysrgb&w=1200',
  panelCloseup: 'https://images.pexels.com/photos/18306342/pexels-photo-18306342.jpeg?auto=compress&cs=tinysrgb&w=1200',
  installation: 'https://images.pexels.com/photos/9875418/pexels-photo-9875418.jpeg?auto=compress&cs=tinysrgb&w=1200',
  groupHouses: 'https://images.pexels.com/photos/9875674/pexels-photo-9875674.jpeg?auto=compress&cs=tinysrgb&w=1200',
  commercialBuilding: 'https://images.pexels.com/photos/8783541/pexels-photo-8783541.jpeg?auto=compress&cs=tinysrgb&w=1200',
  solarFarm: 'https://images.pexels.com/photos/35105443/pexels-photo-35105443.jpeg?auto=compress&cs=tinysrgb&w=1200',
};

export type ServiceItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: ServiceItem[] = [
  {
    icon: Home,
    title: 'Residential Solar Solutions',
    description:
      'Solar systems designed for individual homes to reduce electricity expenses and increase energy independence.',
  },
  {
    icon: Building2,
    title: 'Commercial Solar Solutions',
    description:
      'Solar power systems for offices, shops, commercial buildings, industries, and other businesses.',
  },
  {
    icon: Home,
    title: 'Individual House Projects',
    description:
      'Customized rooftop solar solutions based on household electricity consumption, available roof space, and customer requirements.',
  },
  {
    icon: Users,
    title: 'Group House Projects',
    description:
      'Solar solutions for group housing communities, apartments, and multiple-house developments.',
  },
  {
    icon: ClipboardCheck,
    title: 'Solar Consultation & System Design',
    description:
      'Professional assessment, system sizing, energy analysis, and customized solar planning.',
  },
  {
    icon: Wrench,
    title: 'Solar Installation',
    description:
      'Complete installation with proper engineering, safety practices, and quality workmanship.',
  },
  {
    icon: Settings,
    title: 'Solar Maintenance & Support',
    description:
      'Post-installation assistance, system inspection, troubleshooting, and maintenance services.',
  },
];

export type SolutionCategory = {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
};

export const solutions: SolutionCategory[] = [
  {
    icon: Home,
    title: 'Residential Solar',
    description: 'Solar systems designed for individual homes and family residences.',
    image: heroImages.residential,
  },
  {
    icon: Building2,
    title: 'Commercial Solar',
    description: 'Solar power for offices, shops, and commercial establishments.',
    image: heroImages.commercial,
  },
  {
    icon: Home,
    title: 'Individual Houses',
    description: 'Custom rooftop solar based on your home energy consumption.',
    image: heroImages.installation,
  },
  {
    icon: Users,
    title: 'Group Houses',
    description: 'Solar for group housing communities and apartment complexes.',
    image: heroImages.groupHouses,
  },
  {
    icon: Settings,
    title: 'Custom Solar Solutions',
    description: 'Tailored solar systems designed around your unique requirements.',
    image: heroImages.panelCloseup,
  },
];

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export const timeline: TimelineItem[] = [
  {
    year: '2020',
    title: 'Founded',
    description:
      'Vihaan Spark Solar was established by three mechanical engineers with a vision for reliable and accessible solar energy.',
  },
  {
    year: '2021',
    title: 'Early Projects',
    description:
      '[Add milestone details — early residential and small commercial projects undertaken by the team.]',
  },
  {
    year: '2022',
    title: 'Growing Reach',
    description:
      '[Add milestone details — expansion of services to group housing and larger commercial projects.]',
  },
  {
    year: '2023',
    title: 'Service Expansion',
    description:
      '[Add milestone details — addition of consultation, system design, and maintenance services.]',
  },
  {
    year: '2024',
    title: 'Continued Growth',
    description:
      '[Add milestone details — continued commitment to engineering-driven solar solutions.]',
  },
];

export type WhyChooseItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const whyChooseUs: WhyChooseItem[] = [
  {
    icon: Lightbulb,
    title: 'Engineering Expertise',
    description: 'Founded by three mechanical engineers with a deep technical foundation.',
  },
  {
    icon: Calendar,
    title: 'Established in 2020',
    description: 'Serving customers with a long-term commitment to solar energy.',
  },
  {
    icon: Building2,
    title: 'Residential & Commercial Expertise',
    description: 'Solutions for individual homes, group houses, and commercial projects.',
  },
  {
    icon: Settings,
    title: 'Customized Solutions',
    description: 'Solar systems designed according to each customer\'s requirements.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality-Focused Execution',
    description: 'Emphasis on proper design, installation, safety, and workmanship.',
  },
  {
    icon: Handshake,
    title: 'Customer-Centric Approach',
    description: 'Clear communication and support throughout the project.',
  },
];

export type ProcessStep = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    icon: PhoneCall,
    title: 'Contact Us',
    description: 'Tell us about your electricity requirements.',
  },
  {
    number: '02',
    icon: MapPin,
    title: 'Site Assessment',
    description: 'Our team evaluates your site and solar potential.',
  },
  {
    number: '03',
    icon: ClipboardCheck,
    title: 'System Design',
    description: 'We design a solution based on your energy requirements and available space.',
  },
  {
    number: '04',
    icon: Wrench,
    title: 'Installation',
    description: 'Our team installs the solar system professionally.',
  },
  {
    number: '05',
    icon: ShieldCheck,
    title: 'Testing & Activation',
    description: 'We test the system carefully before it is activated for use.',
  },
  {
    number: '06',
    icon: Settings,
    title: 'Support & Maintenance',
    description: 'We continue to assist you after installation.'
  },
];

export type ProjectCategory = 'Residential' | 'Group Houses' | 'Commercial';

export type ProjectItem = {
  name: string;
  location: string;
  capacity: string;
  type: ProjectCategory;
  date: string;
  image: string;
};

export const projects: ProjectItem[] = [
  {
    name: '[Project Name]',
    location: '[Location]',
    capacity: '[System Capacity]',
    type: 'Residential',
    date: '[Installation Date]',
    image: heroImages.residential,
  },
  {
    name: '[Project Name]',
    location: '[Location]',
    capacity: '[System Capacity]',
    type: 'Group Houses',
    date: '[Installation Date]',
    image: heroImages.groupHouses,
  },
  {
    name: '[Project Name]',
    location: '[Location]',
    capacity: '[System Capacity]',
    type: 'Commercial',
    date: '[Installation Date]',
    image: heroImages.commercialBuilding,
  },
  {
    name: '[Project Name]',
    location: '[Location]',
    capacity: '[System Capacity]',
    type: 'Residential',
    date: '[Installation Date]',
    image: heroImages.installation,
  },
  {
    name: '[Project Name]',
    location: '[Location]',
    capacity: '[System Capacity]',
    type: 'Commercial',
    date: '[Installation Date]',
    image: heroImages.commercial,
  },
  {
    name: '[Project Name]',
    location: '[Location]',
    capacity: '[System Capacity]',
    type: 'Group Houses',
    date: '[Installation Date]',
    image: heroImages.solarFarm,
  },
];

export type TestimonialItem = {
  name: string;
  location: string;
  type: string;
  text: string;
};

export const testimonials: TestimonialItem[] = [
  {
    name: '[Customer Name]',
    location: '[Location]',
    type: 'Residential',
    text: 'Customer testimonial will be added here.',
  },
  {
    name: '[Customer Name]',
    location: '[Location]',
    type: 'Commercial',
    text: 'Customer testimonial will be added here.',
  },
  {
    name: '[Customer Name]',
    location: '[Location]',
    type: 'Group Houses',
    text: 'Customer testimonial will be added here.',
  },
];

export type FAQItem = {
  question: string;
  answer: string;
};

export const faqs: FAQItem[] = [
  {
    question: 'What is rooftop solar?',
    answer:
      'Rooftop solar is a system of solar panels installed on the roof of a home or building that converts sunlight into electricity. It allows you to generate your own power from unused rooftop space.',
  },
  {
    question: 'Is solar suitable for my home?',
    answer:
      'Solar is suitable for most homes with adequate roof space and sunlight exposure. Our team can assess your site to determine feasibility and the best system size for your energy needs.',
  },
  {
    question: 'Is solar suitable for commercial buildings?',
    answer:
      'Yes. Solar is well-suited for offices, shops, commercial buildings, and institutions with available rooftop space. It can help businesses manage their energy requirements productively.',
  },
  {
    question: 'How do I determine the right solar system size?',
    answer:
      'The right system size depends on your electricity consumption, available roof space, and energy goals. Our consultation includes a professional assessment and system sizing recommendation.',
  },
  {
    question: 'How much rooftop space is required?',
    answer:
      'The space required depends on the system capacity needed for your energy consumption. During the site assessment, our team measures your roof and advises on the optimal layout.',
  },
  {
    question: 'What maintenance does a solar system require?',
    answer:
      'Solar systems generally require minimal maintenance, including periodic cleaning and inspection. We offer maintenance and support services to keep your system running reliably.',
  },
  {
    question: 'How long does installation take?',
    answer:
      'Installation time varies based on system size and site conditions. After the site assessment and system design, we provide an estimated timeline for your specific project.',
  },
  {
    question: 'Can you handle group housing projects?',
    answer:
      'Yes. We design and install solar solutions for group housing communities, apartments, and multiple-house developments, tailored to the community\'s shared energy requirements.',
  },
  {
    question: 'Do you provide consultation and site assessment?',
    answer:
      'Yes. Professional consultation and site assessment are part of our process. We evaluate your site, analyze your energy needs, and design a customized solar solution.',
  },
  {
    question: 'How can I request a quotation?',
    answer:
      'You can request a quotation by filling out the contact form, calling us, or sending a message on WhatsApp. Our team will get in touch to understand your requirements and provide a quote.',
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Residential', href: '#residential' },
  { label: 'Commercial', href: '#commercial' },
  { label: 'Projects', href: '#projects' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Residential Solar', href: '#residential' },
  { label: 'Commercial Solar', href: '#commercial' },
  { label: 'Projects', href: '#projects' },
  { label: 'FAQs', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const contactIcons = {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
};

export const logoIcons = {
  Sun,
  Zap,
  PanelTop,
};
