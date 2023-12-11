import { ThemeProvider } from 'styled-components';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import theme from '@/styles/theme';

export const renderWithTheme = (
  children: React.ReactNode,
  options?: RenderOptions
): RenderResult =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>, options);
