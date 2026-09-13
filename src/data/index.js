export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
]

export const services = [
  {
    id: 1,
    title: 'Website Development',
    shortDesc: 'Modern, responsive, and high-performance websites.',
    description: 'We craft fast, SEO-friendly websites that deliver exceptional user experiences across all devices. From corporate sites to complex platforms, we build with scalability and performance in mind.',
    features: ['Custom Design', 'Responsive Layout', 'SEO Optimized', 'Performance Tuning', 'CMS Integration', 'Cross-Browser Support'],
    icon: 'Globe',
    category: 'Websites',
  },
  {
    id: 2,
    title: 'Web Application Development',
    shortDesc: 'Interactive and functional web applications.',
    description: 'Powerful web applications built with modern frameworks and architectures. We create scalable solutions that handle complex business logic while maintaining excellent user experience.',
    features: ['SPA Development', 'API Integration', 'Real-Time Features', 'Authentication Systems', 'Database Design', 'Cloud Deployment'],
    icon: 'Layers',
    category: 'Applications',
  },
  {
    id: 3,
    title: 'Mobile App Development',
    shortDesc: 'User-friendly mobile application experiences.',
    description: 'Cross-platform mobile applications that feel native on iOS and Android. We focus on performance, usability, and beautiful interfaces that users love.',
    features: ['Cross-Platform', 'Native Performance', 'Offline Support', 'Push Notifications', 'App Store Deployment', 'Analytics Integration'],
    icon: 'Smartphone',
    category: 'Applications',
  },
  {
    id: 4,
    title: 'UI/UX Design',
    shortDesc: 'Clean, intuitive, and engaging interfaces.',
    description: 'User-centered design that balances aesthetics with functionality. We research, prototype, and iterate to create interfaces that are both beautiful and highly usable.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design', 'Usability Testing', 'Design Systems'],
    icon: 'Palette',
    category: 'UI/UX',
  },
  {
    id: 5,
    title: 'Landing Page Development',
    shortDesc: 'High-converting and visually attractive landing pages.',
    description: 'Conversion-focused landing pages designed to turn visitors into customers. Every element is optimized for engagement, clarity, and action.',
    features: ['A/B Testing Ready', 'Fast Load Times', 'Mobile Optimized', 'CTA Strategy', 'Form Optimization', 'Analytics Setup'],
    icon: 'Target',
    category: 'Websites',
  },
  {
    id: 6,
    title: 'Website Redesign',
    shortDesc: 'Modernizing outdated websites and improving UX.',
    description: 'Give your digital presence a complete modern makeover. We transform outdated websites into contemporary, high-performing experiences that align with your brand.',
    features: ['Visual Refresh', 'UX Improvement', 'Performance Upgrade', 'Content Migration', 'SEO Preservation', 'User Training'],
    icon: 'RefreshCw',
    category: 'Websites',
  },
]

export const projects = [
  {
    id: 1,
    title: 'NOVA',
    subtitle: 'Technology Website',
    category: 'Websites',
    description: 'A cutting-edge technology company website featuring immersive product showcases, interactive data visualizations, and a seamless booking experience. Designed to position NOVA as an industry innovator.',
    fullDescription: 'NOVA needed a flagship web presence that matched their pioneering approach to technology. We created an immersive experience featuring animated product demos, real-time performance metrics, and an interactive technology roadmap. The result is a website that doesn\'t just describe innovation — it demonstrates it.',
    tags: ['React', 'Framer Motion', 'GSAP', 'Three.js'],
    year: '2025',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    accent: '#8B5CF6',
  },
  {
    id: 2,
    title: 'SALT PAN',
    subtitle: 'Restaurant Information Website',
    category: 'Websites',
    description: 'An elegant restaurant website for a modern coastal dining experience. Features include an interactive menu with dish details, seamless reservation system, and a sensory-driven visual design.',
    fullDescription: 'SALT PAN required a digital presence that captured the essence of their coastal cuisine philosophy. We built a taste-driven experience featuring photography-forward menu browsing, integrated table reservations, and a chef\'s journal that tells the story behind each dish.',
    tags: ['Next.js', 'Tailwind', 'Sanity CMS'],
    year: '2025',
    gradient: 'linear-gradient(135deg, #2d2416 0%, #40301e 50%, #1a1510 100%)',
    accent: '#E4A853',
  },
  {
    id: 3,
    title: 'AURA',
    subtitle: 'Creative Brand Website',
    category: 'UI/UX',
    description: 'A creative agency and brand showcase featuring bold typography, asymmetric layouts, and interactive portfolio pieces. A celebration of design as a strategic business tool.',
    fullDescription: 'AURA is a comprehensive brand experience website that serves as both portfolio and manifesto. We designed an editorial-style layout with bold type pairings, animated case study reveals, and a custom cursor experience that makes every interaction memorable.',
    tags: ['Figma', 'React', 'Custom Animations'],
    year: '2024',
    gradient: 'linear-gradient(135deg, #2e1065 0%, #4c1d95 50%, #1e1b4b 100%)',
    accent: '#A78BFA',
  },
  {
    id: 4,
    title: 'PULSE',
    subtitle: 'Fitness Platform Concept',
    category: 'Applications',
    description: 'A comprehensive fitness tracking application with workout plans, nutrition tracking, progress analytics, and community features. Designed for both beginners and athletes.',
    fullDescription: 'PULSE is a full-featured fitness platform concept that combines personalized training programs with social motivation. Features include AI-generated workout plans, nutrition logging with barcode scanning, progress photo comparisons, live class streaming, and achievement gamification.',
    tags: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
    year: '2025',
    gradient: 'linear-gradient(135deg, #0c4a6e 0%, #075985 50%, #082f49 100%)',
    accent: '#22D3EE',
  },
  {
    id: 5,
    title: 'NEXUS',
    subtitle: 'SaaS Dashboard Concept',
    category: 'Applications',
    description: 'A powerful analytics dashboard for managing multi-platform marketing campaigns. Features real-time data visualization, AI insights, automated reporting, and team collaboration tools.',
    fullDescription: 'NEXUS reimagines the marketing dashboard for data-driven teams. We designed an information architecture that surfaces critical metrics without overwhelming users, featuring customizable widget layouts, natural language querying for data, automated performance reports, and a built-in collaboration layer.',
    tags: ['TypeScript', 'D3.js', 'PostgreSQL'],
    year: '2025',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #020617 100%)',
    accent: '#38BDF8',
  },
  {
    id: 6,
    title: 'VERTEX',
    subtitle: 'Architecture Portfolio',
    category: 'UI/UX',
    description: 'A sophisticated portfolio for an architecture studio featuring immersive project galleries, 3D model viewers, and a project timeline spanning decades of award-winning work.',
    fullDescription: 'VERTEX required a portfolio as precise and considered as their architecture. We designed a spatial interface with immersive image galleries, interactive 3D model embeds for key projects, a chronological archive showcasing their legacy, and a custom publishing system for their design journal.',
    tags: ['Figma', 'Webflow', 'Spline 3D'],
    year: '2024',
    gradient: 'linear-gradient(135deg, #1c1917 0%, #292524 50%, #0c0a09 100%)',
    accent: '#E7E5E4',
  },
]

export const projectFilters = [
  { key: 'all', label: 'All' },
  { key: 'Websites', label: 'Websites' },
  { key: 'Applications', label: 'Applications' },
  { key: 'UI/UX', label: 'UI/UX' },
]

export const processSteps = [
  {
    step: '01',
    title: 'Discover',
    description: 'Understand the client\'s goals and requirements through in-depth research, stakeholder interviews, and competitive analysis.',
    details: ['Workshop sessions', 'Stakeholder interviews', 'Competitive analysis', 'User research', 'Goal definition'],
  },
  {
    step: '02',
    title: 'Design',
    description: 'Create the visual direction and user experience through wireframes, prototypes, and design system development.',
    details: ['Information architecture', 'Wireframing', 'Visual design', 'Interactive prototypes', 'Design system'],
  },
  {
    step: '03',
    title: 'Develop',
    description: 'Build a responsive and functional digital product using modern technologies, best practices, and clean code.',
    details: ['Frontend development', 'Backend integration', 'CMS setup', 'API connections', 'Quality assurance'],
  },
  {
    step: '04',
    title: 'Refine',
    description: 'Test, improve, and polish the experience through user testing, performance optimization, and quality reviews.',
    details: ['User testing', 'Bug fixing', 'Performance tuning', 'Accessibility audit', 'Cross-device testing'],
  },
  {
    step: '05',
    title: 'Launch',
    description: 'Prepare the final project for delivery with deployment, training, documentation, and ongoing support setup.',
    details: ['Deployment setup', 'Content migration', 'Client training', 'Documentation', 'Post-launch support'],
  },
]

export const stats = [
  { value: 150, suffix: '+', label: 'Projects Delivered', description: 'Conceptual portfolio work across industries' },
  { value: 98, suffix: '%', label: 'Satisfaction Rate', description: 'Based on client feedback surveys' },
  { value: 12, suffix: '', label: 'Core Services', description: 'End-to-end digital solutions' },
  { value: 6, suffix: '', label: 'Process Steps', description: 'From discovery to launch and beyond' },
]

export const aboutCards = [
  {
    title: 'Creative Thinking',
    description: 'We approach every project with fresh perspectives, combining strategic thinking with imaginative design to create experiences that stand out.',
    icon: 'Lightbulb',
  },
  {
    title: 'Modern Technology',
    description: 'We stay at the forefront of web technologies, using the latest frameworks, tools, and best practices to build future-proof solutions.',
    icon: 'Zap',
  },
  {
    title: 'User-Centered Design',
    description: 'Every decision is informed by the end user. We design intuitive experiences that feel effortless while achieving business goals.',
    icon: 'Users',
  },
]

export const contactInfo = [
  { label: 'Email', value: 'hello@echolance.demo', icon: 'Mail' },
  { label: 'Phone', value: '+1 (555) 123-4567', icon: 'Phone' },
  { label: 'Location', value: 'San Francisco, CA — Demo Address', icon: 'MapPin' },
]

export const socialLinks = [
  { name: 'Twitter', icon: 'Twitter', href: '#demo' },
  { name: 'LinkedIn', icon: 'Linkedin', href: '#demo' },
  { name: 'Instagram', icon: 'Instagram', href: '#demo' },
  { name: 'Dribbble', icon: 'Dribbble', href: '#demo' },
  { name: 'GitHub', icon: 'Github', href: '#demo' },
]

export const footerLinks = {
  navigation: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ],
  services: [
    { name: 'Website Development', href: '#services' },
    { name: 'Web Application', href: '#services' },
    { name: 'Mobile App Development', href: '#services' },
    { name: 'UI/UX Design', href: '#services' },
    { name: 'Landing Pages', href: '#services' },
    { name: 'Website Redesign', href: '#services' },
  ],
}
