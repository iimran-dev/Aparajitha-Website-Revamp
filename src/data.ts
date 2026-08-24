import { 
  Award, 
  Building2, 
  Users, 
  Factory, 
  ShieldCheck, 
  FileCheck2, 
  Scale, 
  ClipboardCheck,
  CheckCircle2,
  TrendingUp,
  AlertTriangle,
  Clock,
  Headphones,
  Linkedin,
  Youtube,
  Twitter,
  Facebook
} from 'lucide-react';

// ==========================================
// NAVBAR DATA
// ==========================================
export const navItems = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Platform', href: '#platform' },
  { label: 'Pan-India Coverage', href: '#coverage' },
  { label: 'Industries', href: '#industries' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Resources', href: '#resources' },
];

// ==========================================
// HERO SECTION DATA
// ==========================================
export const heroStats = [
  {
    icon: Award,
    value: '13+ Years',
    label: 'Experience',
  },
  {
    icon: Building2,
    value: '58,208+',
    label: 'Establishments',
  },
  {
    icon: Users,
    value: '3 Million+',
    label: 'Contract Labourers',
  },
  {
    icon: Factory,
    value: '1,175+',
    label: 'Factories',
  },
];

// ==========================================
// TRUSTED ENTERPRISES (STATS STRIP) DATA
// ==========================================
export interface ClientLogo {
  name: string;
  logoText: string;
  tagline: string;
}

export const clientLogos: ClientLogo[] = [
  { name: 'Reliance', logoText: 'Reliance', tagline: 'Industries Limited' },
  { name: 'Boeing', logoText: 'BOEING', tagline: 'Aerospace & Defense' },
  { name: 'Capgemini', logoText: 'Capgemini', tagline: 'Consulting & Tech' },
  { name: 'Caterpillar', logoText: 'CAT', tagline: 'Heavy Equipment' },
  { name: 'CBRE', logoText: 'CBRE', tagline: 'Real Estate' },
  { name: 'Oracle', logoText: 'ORACLE', tagline: 'Cloud Enterprise' },
  { name: 'MRF', logoText: 'MRF', tagline: 'Tyres & Rubber' },
  { name: 'Metro Cash & Carry', logoText: 'METRO', tagline: 'Wholesale Retail' },
  { name: 'GE Energy', logoText: 'GE', tagline: 'Energy & Power' },
  { name: 'Lupin', logoText: 'LUPIN', tagline: 'Pharmaceuticals' },
  { name: 'Puma', logoText: 'PUMA', tagline: 'Sports Apparel' },
  { name: 'Lodha Group', logoText: 'LODHA', tagline: 'Real Estate' },
];

// ==========================================
// COMPLIANCE CHALLENGES DATA
// ==========================================
export interface SolutionItem {
  icon: typeof ShieldCheck;
  title: string;
  description: string;
  badge: string;
  href: string;
}

export const complianceSolutions: SolutionItem[] = [
  {
    icon: Scale,
    title: 'Labour Law Compliance',
    description: 'End-to-end statutory compliance under Central and State Labour Acts across all your locations in India.',
    badge: 'Statutory Core',
    href: '#labour-law',
  },
  {
    icon: Users,
    title: 'Vendor & Contract Labour Compliance',
    description: 'Mitigate principal employer liabilities with automated contractor audits and CLRA compliance tracking.',
    badge: 'Vendor Risk',
    href: '#vendor-compliance',
  },
  {
    icon: FileCheck2,
    title: 'Payroll Compliance',
    description: 'Accurate computation and timely remittance of PF, ESI, Professional Tax, and LWF across states.',
    badge: 'PF, ESI & PT',
    href: '#payroll-compliance',
  },
  {
    icon: Factory,
    title: 'Factory & Establishment Compliance',
    description: 'Licencing, renewals, display notices, and register maintenance for factories and commercial establishments.',
    badge: 'Licensing & Audit',
    href: '#factory-establishment',
  },
  {
    icon: ClipboardCheck,
    title: 'Audit & Inspection Support',
    description: 'On-ground representation during government labour inspector visits and statutory authority notices.',
    badge: 'On-Ground Support',
    href: '#audit-support',
  },
];

// ==========================================
// SIMPLIANCE SHOWCASE DATA
// ==========================================
export const platformFeatures = [
  'Compliance Calendar & Alerts',
  'Vendor & Contract Labour Management',
  'Document Management & Auto Reminders',
  'Audit Management & Corrective Actions',
  'Real-time Reports & Analytics',
];

export interface DashboardStatItem {
  title: string;
  value: string;
  subtext: string;
  borderColor: string;
  valueColor: string;
}

export const dashboardStats: DashboardStatItem[] = [
  {
    title: 'Upcoming Compliances',
    value: '42',
    subtext: 'Due in next 30 days',
    borderColor: 'border-l-blue-500',
    valueColor: 'text-slate-900',
  },
  {
    title: 'Overdue Compliances',
    value: '7',
    subtext: 'Require immediate action',
    borderColor: 'border-l-red-500',
    valueColor: 'text-red-600',
  },
  {
    title: 'Active Vendors',
    value: '1,248',
    subtext: 'Across all locations',
    borderColor: 'border-l-indigo-500',
    valueColor: 'text-slate-900',
  },
  {
    title: 'Documents',
    value: '3,562',
    subtext: 'Total Documents',
    borderColor: 'border-l-emerald-500',
    valueColor: 'text-slate-900',
  },
];

export interface ComplianceEvent {
  title: string;
  date: string;
  status: 'Completed' | 'Pending' | 'Due Soon';
}

export const complianceEvents: ComplianceEvent[] = [
  { title: 'ESI Monthly Return Filing', date: '15 May 2025', status: 'Due Soon' },
  { title: 'PF ECR Filing & Challan', date: '15 May 2025', status: 'Completed' },
  { title: 'Contract Labour Half-Yearly Return', date: '30 May 2025', status: 'Pending' },
];

// ==========================================
// INDIA COMPLIANCE MAP DATA
// ==========================================
export interface StateDetail {
  name: string;
  establishments: string;
  filings: string;
  status: string;
  hub: string;
}

export const stateDetails: Record<string, StateDetail> = {
  'Tamil Nadu': {
    name: 'Tamil Nadu',
    establishments: '8,400+',
    filings: '520K+',
    status: 'Headquarters & Primary Hub',
    hub: 'Madurai & Chennai Offices',
  },
  Maharashtra: {
    name: 'Maharashtra',
    establishments: '12,100+',
    filings: '890K+',
    status: 'Western Regional Hub',
    hub: 'Mumbai & Pune Offices',
  },
  Karnataka: {
    name: 'Karnataka',
    establishments: '9,800+',
    filings: '640K+',
    status: 'Southern Tech Hub',
    hub: 'Bengaluru Office',
  },
  Telangana: {
    name: 'Telangana',
    establishments: '6,200+',
    filings: '380K+',
    status: 'Active Operations',
    hub: 'Hyderabad Desk',
  },
  Gujarat: {
    name: 'Gujarat',
    establishments: '7,500+',
    filings: '490K+',
    status: 'Industrial Corridor Hub',
    hub: 'Ahmedabad Desk',
  },
  'Delhi NCR': {
    name: 'Delhi NCR',
    establishments: '10,300+',
    filings: '710K+',
    status: 'Northern Regional Hub',
    hub: 'Gurugram & Noida Offices',
  },
  'West Bengal': {
    name: 'West Bengal',
    establishments: '4,100+',
    filings: '280K+',
    status: 'Eastern Operations',
    hub: 'Kolkata Desk',
  },
};

// ==========================================
// INDUSTRY SOLUTIONS DATA
// ==========================================
export interface IndustryItem {
  id: string;
  name: string;
  badge: string;
  href: string;
}

export const industriesData: IndustryItem[] = [
  { id: '1', name: 'Manufacturing', badge: 'Factory Laws', href: '#manufacturing' },
  { id: '2', name: 'Retail & E-commerce', badge: 'Shops & Est.', href: '#retail' },
  { id: '3', name: 'NBFC & Finance', badge: 'Statutory Core', href: '#nbfc' },
  { id: '4', name: 'Insurance', badge: 'PF & ESI', href: '#insurance' },
  { id: '5', name: 'Logistics & Transport', badge: 'Contract Labour', href: '#logistics' },
  { id: '6', name: 'IT & ITES', badge: 'SEZ & Labour', href: '#it-ites' },
  { id: '7', name: 'Healthcare', badge: 'Hospital Acts', href: '#healthcare' },
  { id: '8', name: 'Real Estate', badge: 'BOCW Act', href: '#real-estate' },
];

// ==========================================
// SUCCESS STORIES DATA
// ==========================================
export interface CaseStudy {
  id: string;
  category: string;
  badge: string;
  title: string;
  headline: string;
  subtext: string;
  image: string;
  fallbackImage: string;
  href: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    category: 'Manufacturing',
    badge: 'Manufacturing',
    title: 'Reduced Compliance Penalties by 92%',
    headline: 'Reduced Compliance Penalties by 92%',
    subtext: 'for a leading auto component manufacturer',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    href: '#case-study-manufacturing',
  },
  {
    id: '2',
    category: 'Retail',
    badge: 'Retail',
    title: 'Streamlined Compliance for 500+ Stores',
    headline: 'Streamlined Compliance for 500+ Stores',
    subtext: 'across India for a leading retail brand',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    href: '#case-study-retail',
  },
  {
    id: '3',
    category: 'NBFC',
    badge: 'NBFC',
    title: '100% On-time Compliance Achieved',
    headline: '100% On-time Compliance Achieved',
    subtext: 'for a top NBFC with multi-state operations',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    href: '#case-study-nbfc',
  },
];

// ==========================================
// RESOURCE CENTER ARTICLES DATA
// ==========================================
export interface ArticleResource {
  id: string;
  title: string;
  date: string;
  badge: string;
  image: string;
  fallbackImage: string;
  href: string;
}

export const resources: ArticleResource[] = [
  {
    id: '1',
    title: 'Key Updates in the Code on Wages, 2019',
    date: '21 May 2025',
    badge: 'Labour Law',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    href: '#article-wages',
  },
  {
    id: '2',
    title: 'EPFO Compliance Checklist for FY 2025-26',
    date: '18 May 2025',
    badge: 'PF & ESI',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
    href: '#article-epfo',
  },
  {
    id: '3',
    title: 'How to Prepare for a Labour Department Audit',
    date: '15 May 2025',
    badge: 'Compliance',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    href: '#article-audit',
  },
  {
    id: '4',
    title: 'Factories Act Compliance: What Employers Must Know',
    date: '10 May 2025',
    badge: 'Industrial Law',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    href: '#article-factories-act',
  },
];

// ==========================================
// FINAL CTA TRUST INDICATORS DATA
// ==========================================
export const trustIndicators = [
  { icon: ShieldCheck, label: 'ISO 27001 Certified' },
  { icon: Award, label: '25+ Years Experience' },
  { icon: Building2, label: '58,000+ Clients' },
  { icon: Headphones, label: '24/7 Support' },
];

// ==========================================
// FOOTER DATA
// ==========================================
export const footerServices = [
  'Labour Compliance',
  'Vendor Compliance',
  'Factory Compliance',
  'Payroll Compliance',
  'Audit Management',
];

export const footerIndustries = [
  'Manufacturing',
  'Retail',
  'Logistics',
  'BFSI',
  'Healthcare',
  'Real Estate',
  'IT & ITES',
];

export const footerResourceLinks = [
  'Intelligence Hub',
  'Guides',
  'Webinars',
  'Whitepapers',
  'Reports',
];

export const footerSocialLinks = [
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Youtube, label: 'YouTube' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Facebook, label: 'Facebook' },
];

export const footerLinks = [
  'Privacy Policy',
  'Terms & Conditions',
  'Sitemap',
];
