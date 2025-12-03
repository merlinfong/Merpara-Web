import { TeamMember, WorkflowStep, ServicePackage, BrandJourney } from './types';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Merlin Feng",
    role: "Founder & CEO",
    description: "Drives cross-border strategy and ROI-focused execution, turning influencer ideas into sustainable businesses.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    flag: "🇨🇳"
  },
  {
    name: "Matthew Joy",
    role: "Co-Founder",
    description: "Based in the U.S., aligns long-term vision, content roadmap, and business goals with influencers.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
    flag: "🇺🇸"
  },
  {
    name: "Anastasia Cui",
    role: "COO",
    description: "Leads product development and China supply-chain operations, from sampling to on-time delivery.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
    flag: "🇨🇳"
  },
  {
    name: "Jenny P. Cubillos",
    role: "Marketing Lead",
    description: "Designs global influencer and social strategies so every collection launch has a clear growth plan.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
    flag: "🇨🇴"
  },
  {
    name: "Felicia Joy",
    role: "Creative Director",
    description: "Turns each brand's DNA into cohesive visuals and social content that actually converts.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
    flag: "🇺🇸"
  },
  {
    name: "Will Guo",
    role: "Design Lead",
    description: "Translates creator aesthetics into production-ready designs, balancing cost and quality.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
    flag: "🇨🇳"
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