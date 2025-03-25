import React from 'react';

// Category types
export type CategoryValue = 'renovations' | 'new-construction' | 'carpentry' | 'outdoor';

export interface Category {
  value: CategoryValue;
  label: string;
}

// Project types
export interface Project {
  id: number;
  title: string;
  category: CategoryValue;
  shortDescription?: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

// Service types
export interface Service {
  title: string;
  description: string;
  features: string[];
  imageKey: keyof typeof import('../data/images').serviceImages;
}

// Process types
export interface ProcessStep {
  title: string;
  description: string;
}

// Additional service types
export interface AdditionalService {
  title: string;
  description: string;
  icon: React.ReactNode;
}

// Team Member types
export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageIndex: number; // Index in teamMemberImages array
}

// Testimonial types
export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}

// Image types
export interface ServiceImages {
  renovations: string;
  newConstruction: string;
  carpentry: string;
  kitchenRemodeling: string;
  bathroomRemodeling: string;
  outdoorLiving: string;
}

export interface Images {
  heroImage: string;
  featuredProjectImages: string[];
  serviceImages: ServiceImages;
  aboutStoryImage: string;
  teamMemberImages: string[];
  testimonialImages: string[];
} 