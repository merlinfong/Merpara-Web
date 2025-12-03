import { TeamMember, WorkflowStep, ServicePackage, BrandJourney } from './types';

export const TEAM_MEMBERS: TeamMember[] = [
  // Strategy & Operations (Page 12)
  {
    name: "Merlin Feng",
    role: "Founder & CEO",
    description: "Drives cross-border strategy and ROI-focused execution, turning influencer ideas into sustainable businesses.",
    image: "/team/merlin-feng.jpg",
    flag: "🇨🇳",
    group: "Strategy"
  },
  {
    name: "Matthew Joy",
    role: "Co-Founder",
    description: "Based in the U.S., meets influencers in person, aligning long-term vision, content roadmap, and business goals.",
    image: "/team/matthew-joy.jpg",
    flag: "🇺🇸",
    group: "Strategy"
  },
  {
    name: "Anastasia Cui",
    role: "COO",
    description: "Leads product development and China supply-chain operations, from sampling to on-time, on-budget delivery.",
    image: "/team/anastasia-cui.jpg",
    flag: "🇨🇳",
    group: "Strategy"
  },
  // Brand & Growth (Page 13)
  {
    name: "Jenny Paola Cubillos",
    role: "Marketing Lead",
    description: "Designs global influencer and social strategies so every collection launch has a clear growth and content plan.",
    image: "/team/jenny-paola-cubillos.jpg",
    flag: "🇨🇴",
    group: "Brand"
  },
  {
    name: "Felicia Joy",
    role: "Creative Director & Social Media Lead",
    description: "Based in the U.S., turns each brand's DNA into cohesive visuals and social content that actually converts — from lookbooks to social media.",
    image: "/team/felicia-joy.jpg",
    flag: "🇺🇸",
    group: "Brand"
  },
  // Fashion Studio (Page 14)
  {
    name: "Linuccia Zhang",
    role: "Fashion Merchandising & Planning",
    description: "Builds season plans, pricing ladders, and launch calendars so each collection is both stylish and commercially sharp.",
    image: "/team/linuccia-zhang.jpg",
    flag: "🇨🇳",
    group: "Studio"
  },
  {
    name: "Will Guo",
    role: "Fashion Design Lead",
    description: "Translates creator aesthetics into production-ready designs, balancing silhouettes, fabrics, cost, and quality.",
    image: "/team/will-guo.jpg",
    flag: "🇨🇳",
    group: "Studio"
  }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: 1,
    title: "Brand Discovery",
    description: "We align on your vision, audience, and market insights to ensure a solid foundation."
  },
  {
    id: 2,
    title: "Product Planning",
    description: "Developing concepts, themes, and price points that resonate with your target audience."
  },
  {
    id: 3,
    title: "Design & Sampling",
    description: "Creating prototypes and ensuring fit/quality through your feedback loop."
  },
  {
    id: 4,
    title: "Production",
    description: "Managing quality control, logistics, and ensuring high manufacturing standards."
  },
  {
    id: 5,
    title: "Launch Support",
    description: "Assisting with warehousing, shipping logistics, and marketing strategies."
  }
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: "capsule",
    name: "The Capsule",
    price: "$2,500 deposit",
    description: "Perfect for testing the waters. A limited edition drop to engage your community without heavy commitment.",
    recommendedFor: "Artists & Micro-Influencers",
    features: [
      "Brand Discovery Session",
      "3-5 SKU Designs",
      "Prototype Sampling (1 round)",
      "Production Management",
      "Basic Logistics Support"
    ]
  },
  {
    id: "collection",
    name: "The Collection",
    price: "$5,000 deposit",
    description: "A complete seasonal line. Ideal for launching a fully realized fashion brand with diverse options.",
    recommendedFor: "Established Creators",
    features: [
      "Comprehensive Brand Strategy",
      "10-15 SKU Designs",
      "Premium Sampling (2 rounds)",
      "Custom Packaging Design",
      "Marketing Asset Creation",
      "Dedicated Project Manager"
    ]
  },
  {
    id: "enterprise",
    name: "Global Scale",
    price: "Custom",
    description: "Full ecosystem management for massive scale. Sustainable sourcing & global distribution.",
    recommendedFor: "Mega-Influencers & Celebrities",
    features: [
      "Full Supply Chain Ownership",
      "Unlimited SKU Development",
      "Sustainable Fabric Sourcing",
      "Global Warehousing Solutions",
      "Advanced ROI Analysis",
      "Executive Team Access"
    ]
  }
];

export const BRAND_JOURNEYS: BrandJourney[] = [
  {
    id: 1,
    title: "Athleisure Line",
    description: "Launching a successful athleisure line that blends performance with street style.",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Signature Dresses",
    description: "Creating a signature dress collection that defines effortless elegance.",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Sustainable Fashion",
    description: "Expanding into sustainable fashion options with eco-friendly fabrics and processes.",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Artist Capsule",
    description: "Collaborating on a capsule collection with artists to merge fashion and art.",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop"
  }
];