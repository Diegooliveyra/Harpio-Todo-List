/* eslint-disable react/display-name */

import Layout from './';
import { renderWithTheme } from '@/ultis/tests/helpers';

jest.mock('../Header', () => () => <div data-testid="mocked-header" />);

describe('Layout component', () => {
  it('renders Layout component with Header and children', () => {
    const { getByTestId, getByText } = renderWithTheme(
      <Layout>Test Content</Layout>
    );
    const headerElement = getByTestId('mocked-header');
    const childrenElement = getByText('Test Content');

    expect(headerElement).toBeInTheDocument();
    expect(childrenElement).toBeInTheDocument();
  });
});
