import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

// Mock react-router-dom
jest.mock('react-router-dom', () => ({
  Link: ({ children, to }: { children: React.ReactNode; to: string }) => (
    <a href={to} data-testid="link">
      {children}
    </a>
  ),
  useLocation: () => ({
    pathname: '/',
  }),
}));

// Mock heroicons
jest.mock('@heroicons/react/24/outline', () => ({
  Bars3Icon: () => <div data-testid="menu-icon">Menu</div>,
  XMarkIcon: () => <div data-testid="close-icon">Close</div>,
}));

describe('Header Component', () => {
  beforeEach(() => {
    render(<Header />);
  });

  test('renders logo and company name', () => {
    // Check logo exists
    expect(screen.getByText('B')).toBeInTheDocument();
    expect(screen.getByText('Builder Co.')).toBeInTheDocument();
    expect(screen.getByText('Quality Carpentry & Construction')).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    // Check navigation links
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Gallery')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('mobile menu toggles when clicked', () => {
    // Find the menu button by its test ID
    const menuButton = screen.getByTestId('menu-icon').closest('button');
    
    if (!menuButton) {
      throw new Error('Menu button not found');
    }
    
    // Mobile menu should be hidden initially
    // Instead of checking visibility, check that the mobile menu container doesn't exist yet
    expect(screen.queryByText('Home', { selector: '.md\\:hidden a' })).not.toBeInTheDocument();
    
    // Click the menu button to open
    fireEvent.click(menuButton);
    
    // After clicking, we should see the close icon
    expect(screen.getByTestId('close-icon')).toBeInTheDocument();
    
    // Now the mobile menu should be visible with links
    expect(screen.queryByText('Home', { selector: '.md\\:hidden a' })).toBeInTheDocument();
    
    // Click again to close
    const closeButton = screen.getByTestId('close-icon').closest('button');
    
    if (closeButton) {
      fireEvent.click(closeButton);
      
      // After closing, we should see the menu icon again
      expect(screen.getByTestId('menu-icon')).toBeInTheDocument();
      
      // And the mobile menu should be hidden again
      expect(screen.queryByText('Home', { selector: '.md\\:hidden a' })).not.toBeInTheDocument();
    } else {
      throw new Error('Close button not found');
    }
  });
}); 