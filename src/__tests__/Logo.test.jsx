import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Logo from '../components/Logo';

describe('Logo Component', () => {
  it('renders with default props', () => {
    render(<Logo />);
    const svgElement = document.querySelector('svg');
    
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('width', '25');
    expect(svgElement).toHaveAttribute('height', '30');
    expect(svgElement).toHaveClass('trusty-inline-flex');
  });

  it('accepts custom width and height', () => {
    render(<Logo width={50} height={60} />);
    const svgElement = document.querySelector('svg');
    
    expect(svgElement).toHaveAttribute('width', '50');
    expect(svgElement).toHaveAttribute('height', '60');
  });

  it('accepts additional className', () => {
    render(<Logo className="custom-class" />);
    const svgElement = document.querySelector('svg');
    
    expect(svgElement).toHaveClass('trusty-inline-flex');
    expect(svgElement).toHaveClass('custom-class');
  });
});