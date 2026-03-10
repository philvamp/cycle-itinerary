import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  it('renders all Bruges postcard images in the gallery', () => {
    // We expect there to be a gallery with at least the new images.
    // However, window.matchMedia is needed by Framer Motion in test environments usually.
    // If it's not set up, we mock it.
    if (!window.matchMedia) {
      window.matchMedia = jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }));
    }

    render(<App />);

    const marketImage = screen.getByAltText('Bruges Market Bustle');
    expect(marketImage).toBeInTheDocument();
    expect(marketImage).toHaveAttribute('src', '/bruges-market2.png');

    const canalImage = screen.getByAltText('Bruges Canal Sunset');
    expect(canalImage).toBeInTheDocument();
    expect(canalImage).toHaveAttribute('src', '/bruges-canal2.png');

    const steakImage = screen.getByAltText('Steak Frites');
    expect(steakImage).toBeInTheDocument();
    expect(steakImage).toHaveAttribute('src', '/bruges-steak.png');

    const beerImage = screen.getByAltText('Belgian Beer');
    expect(beerImage).toBeInTheDocument();
    expect(beerImage).toHaveAttribute('src', '/bruges-beer.png');
  });
});
