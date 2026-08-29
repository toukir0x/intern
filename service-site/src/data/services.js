// Replace this local data source with fetch('/api/services') when a backend is ready.
export const services = [
  {
    id: 1,
    slug: "web-development",
    title: "Web Development",
    category: "Development",
    icon: "⌘",
    shortDescription:
      "Fast, responsive and scalable websites for modern businesses.",
    description:
      "We create high-performance websites that are responsive across devices, easy to maintain and designed around business goals.",
    features: [
      "Responsive design",
      "React / modern frontend",
      "Backend API integration",
      "Performance optimization",
    ],
    price: "Starting from $500",
    popular: true,
  },
  {
    id: 2,
    slug: "ui-ux-design",
    title: "UI/UX Design",
    category: "Design",
    icon: "◈",
    shortDescription:
      "User-focused interfaces that are simple, attractive and effective.",
    description:
      "Our UI/UX process turns complex requirements into intuitive user journeys and polished interfaces.",
    features: [
      "User flow planning",
      "Wireframes",
      "High-fidelity UI",
      "Design system",
    ],
    price: "Starting from $300",
    popular: false,
  },
  {
    id: 3,
    slug: "digital-marketing",
    title: "Digital Marketing",
    category: "Marketing",
    icon: "↗",
    shortDescription:
      "Data-driven campaigns that help businesses reach the right audience.",
    description:
      "Build awareness and qualified traffic with content, campaign planning and performance-focused digital marketing.",
    features: [
      "Campaign strategy",
      "Social media marketing",
      "Content planning",
      "Performance reporting",
    ],
    price: "Starting from $350",
    popular: true,
  },
  {
    id: 4,
    slug: "seo-optimization",
    title: "SEO Optimization",
    category: "Marketing",
    icon: "◎",
    shortDescription:
      "Technical and content improvements for stronger search visibility.",
    description:
      "We improve technical SEO, content structure and on-page signals to help your website attract relevant organic traffic.",
    features: [
      "Technical SEO audit",
      "On-page optimization",
      "Keyword strategy",
      "Monthly reporting",
    ],
    price: "Starting from $250",
    popular: false,
  },
  {
    id: 5,
    slug: "brand-strategy",
    title: "Brand Strategy",
    category: "Branding",
    icon: "✦",
    shortDescription:
      "A clear brand direction that makes your business memorable.",
    description:
      "Create a consistent brand foundation with positioning, messaging and visual direction aligned to your target audience.",
    features: [
      "Brand positioning",
      "Audience research",
      "Messaging direction",
      "Visual identity guidance",
    ],
    price: "Starting from $400",
    popular: false,
  },
  {
    id: 6,
    slug: "business-solutions",
    title: "Business Solutions",
    category: "Development",
    icon: "▣",
    shortDescription:
      "Custom digital tools and workflows built around your operations.",
    description:
      "We build practical digital solutions that connect business processes, reduce manual work and improve team productivity.",
    features: [
      "Custom dashboards",
      "Database integration",
      "API development",
      "Workflow automation",
    ],
    price: "Custom quote",
    popular: true,
  },
];
export const categories = ["All", ...new Set(services.map((s) => s.category))];
export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug);
