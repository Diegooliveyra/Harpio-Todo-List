import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '.';
import { renderWithTheme } from '@/ultis/tests/helpers';

// Mocking the next/image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({
    src,
    alt,
    width,
    height,
  }: {
    src: string;
    alt: string;
    width: string;
    height: string;
  }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} width={width} height={height} next-image={src} />
  ),
}));

describe('Header component', () => {
  it('renders Header component with logo and title', () => {
    const { getByAltText, getByText } = renderWithTheme(<Header />);
    const logoImage = getByAltText('logotipo');
    const titleElement = getByText('Todo.List');

    expect(logoImage).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
  });

  it('renders logo with the correct attributes', () => {
    const { getByAltText } = renderWithTheme(<Header />);
    const logoImage = getByAltText('logotipo');

    expect(logoImage).toHaveAttribute(
      'next-image',
      '/assets/imgs/logotipo.png'
    );
    expect(logoImage).toHaveAttribute('alt', 'logotipo');
    expect(logoImage).toHaveAttribute('width', '50');
    expect(logoImage).toHaveAttribute('height', '50');
  });
});
