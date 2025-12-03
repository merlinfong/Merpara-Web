export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  flag?: string;
}

export interface WorkflowStep {
  id: number;
  title: string;
  description: string;
}

export interface ServicePackage {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  recommendedFor: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface BrandJourney {
  id: number;
  title: string;
  description: string;
  image: string;
}