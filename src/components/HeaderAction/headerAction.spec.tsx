/* eslint-disable @next/next/no-img-element */

import { fireEvent } from '@testing-library/react';

import { renderWithTheme } from '@/ultis/tests/helpers';
import HeaderAction from '.';

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
    <img src={src} alt={alt} width={width} height={height} next-image={src} />
  ),
}));
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

// Mocking ReactSVG component

jest.mock('react-svg', () => ({
  ReactSVG: ({ src, title }: { src: string; title: string }) => (
    <img src={src} alt={title} />
  ),
}));

describe('HeaderAction component', () => {
  const mockProps = {
    title: 'Sample Title',
    actionName: 'Action',
    route: '/sample-route',
    actionIcon: '/path/to/icon.svg',
  };

  it('renders HeaderAction component with title and action button', () => {
    const { getByText, getByAltText } = renderWithTheme(
      <HeaderAction {...mockProps} />
    );
    const titleElement = getByText('Sample Title');
    const actionButton = getByText('Action');
    const iconImage = getByAltText('Action');

    expect(titleElement).toBeInTheDocument();
    expect(actionButton).toBeInTheDocument();
    expect(iconImage).toBeInTheDocument();
  });

  it('handles click event and navigates to the correct route', () => {
    const mockPush = jest.fn();
    require('next/navigation').useRouter.mockImplementation(() => ({
      push: mockPush,
    }));

    const { getByText } = renderWithTheme(<HeaderAction {...mockProps} />);
    const actionButton = getByText('Action');

    fireEvent.click(actionButton);

    expect(mockPush).toHaveBeenCalledWith('/sample-route');
  });
});
