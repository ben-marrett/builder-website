import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BeforeAfterModal from './BeforeAfterModal';

// Mock framer-motion (using the shared mock)
jest.mock('framer-motion');

// Mock heroicons
jest.mock('@heroicons/react/24/outline', () => ({
  XMarkIcon: () => <div data-testid="close-icon">X</div>,
}));

describe('BeforeAfterModal Component', () => {
  const mockProject = {
    id: 1,
    title: 'Test Project',
    beforeImage: 'https://example.com/before.jpg',
    afterImage: 'https://example.com/after.jpg',
    description: 'This is a test project description',
  };

  const mockOnClose = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders nothing when closed', () => {
    render(
      <BeforeAfterModal 
        isOpen={false} 
        onClose={mockOnClose} 
        project={mockProject} 
      />
    );
    
    expect(screen.queryByText('Test Project')).not.toBeInTheDocument();
  });

  test('renders project details when open', () => {
    render(
      <BeforeAfterModal 
        isOpen={true} 
        onClose={mockOnClose} 
        project={mockProject} 
      />
    );
    
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('This is a test project description')).toBeInTheDocument();
    
    // Check for before/after images - note that we need to check for the src attributes
    const beforeAfterContainer = screen.getAllByTestId('motion-div');
    expect(beforeAfterContainer.length).toBeGreaterThan(0);
  });

  test('calls onClose when close button is clicked', () => {
    render(
      <BeforeAfterModal 
        isOpen={true} 
        onClose={mockOnClose} 
        project={mockProject} 
      />
    );
    
    // Find the close button by its test ID
    const closeIcon = screen.getByTestId('close-icon');
    const closeButton = closeIcon.closest('button');
    
    if (closeButton) {
      fireEvent.click(closeButton);
      expect(mockOnClose).toHaveBeenCalledTimes(1);
    } else {
      throw new Error('Close button not found');
    }
  });

  test('calls onClose when clicking outside the modal', () => {
    render(
      <BeforeAfterModal 
        isOpen={true} 
        onClose={mockOnClose} 
        project={mockProject} 
      />
    );
    
    // Get the backdrop (the outermost motion div)
    const backdrop = screen.getAllByTestId('motion-div')[0];
    
    if (backdrop) {
      fireEvent.click(backdrop);
      expect(mockOnClose).toHaveBeenCalledTimes(1);
    } else {
      throw new Error('Backdrop not found');
    }
  });
}); 