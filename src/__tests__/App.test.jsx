import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component Italian Translations', () => {
  it('should display the main heading in Italian', () => {
    render(<App />);
    const heading = screen.getByText('Il Tuo Assistente AI Intelligente');
    expect(heading).toBeInTheDocument();
  });

  it('should have navigation buttons with Italian aria-labels', () => {
    render(<App />);
    
    // Check for the previous testimonial button
    const prevButton = screen.getByLabelText('Testimonianza precedente');
    expect(prevButton).toBeInTheDocument();
    
    // Check for the next testimonial button
    const nextButton = screen.getByLabelText('Testimonianza successiva');
    expect(nextButton).toBeInTheDocument();
  });

  it('should have testimonial navigation dots with Italian aria-labels', () => {
    render(<App />);
    
    // Check for the first testimonial navigation dot
    const firstDot = screen.getByLabelText('Vai alla testimonianza 1');
    expect(firstDot).toBeInTheDocument();
  });
});