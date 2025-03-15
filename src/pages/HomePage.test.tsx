import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

// Mock react-router-dom
jest.mock('react-router-dom', () => ({
  Link: ({ children, to }: { children: React.ReactNode; to: string }) => (
    <a href={to} data-testid="link">
      {children}
    </a>
  ),
}));

// Mock framer-motion (using the shared mock)
jest.mock('framer-motion');

// Mock the images to avoid loading issues
jest.mock('../data/images', () => ({
  heroImage: 'mock-hero-image.jpg',
  featuredProjectImages: ['mock-project-1.jpg', 'mock-project-2.jpg', 'mock-project-3.jpg'],
  testimonialImages: ['mock-testimonial-1.jpg', 'mock-testimonial-2.jpg', 'mock-testimonial-3.jpg'],
}));

describe('HomePage Component', () => {
  beforeEach(() => {
    render(<HomePage />);
  });

  test('renders hero section with headline', () => {
    expect(screen.getByText(/Quality Craftsmanship & Construction Excellence/i)).toBeInTheDocument();
    expect(screen.getByText(/Bringing over 30 years of experience/i)).toBeInTheDocument();
  });

  test('renders services section', () => {
    expect(screen.getByText('Our Services')).toBeInTheDocument();
    expect(screen.getByText('Custom Construction')).toBeInTheDocument();
    expect(screen.getByText('Renovations & Extensions')).toBeInTheDocument();
    expect(screen.getByText('Bespoke Furniture')).toBeInTheDocument();
  });

  test('renders featured projects section', () => {
    expect(screen.getByText('Featured Projects')).toBeInTheDocument();
    expect(screen.getByText('Modern Kitchen Renovation')).toBeInTheDocument();
    expect(screen.getByText('Custom Deck Construction')).toBeInTheDocument();
    expect(screen.getByText('Home Extension')).toBeInTheDocument();
  });

  test('renders testimonials section', () => {
    expect(screen.getByText('What Our Clients Say')).toBeInTheDocument();
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument();
    expect(screen.getByText('Mark Williams')).toBeInTheDocument();
  });

  test('renders call-to-action section', () => {
    expect(screen.getByText('Ready to Start Your Project?')).toBeInTheDocument();
    expect(screen.getByText(/Contact us today for a free consultation/i)).toBeInTheDocument();
    expect(screen.getByText('Get in Touch')).toBeInTheDocument();
  });
}); 