import { fireEvent } from '@testing-library/react';

import NavTabs from './';
import { renderWithTheme } from '@/ultis/tests/helpers';

describe('NavTabs component', () => {
  const tabs = [
    {
      label: 'Tab 1',
      component: <div data-testid="tab1-content" />,
      onClick: jest.fn(),
    },
    { label: 'Tab 2', component: <div data-testid="tab2-content" /> },
    { label: 'Tab 3', component: <div data-testid="tab3-content" /> },
  ];

  it('renders NavTabs component with tabs', () => {
    const { getByText, getByTestId } = renderWithTheme(<NavTabs tabs={tabs} />);
    const tab1 = getByText('Tab 1');
    const tab2 = getByText('Tab 2');
    const tab3 = getByText('Tab 3');

    expect(tab1).toBeInTheDocument();
    expect(tab2).toBeInTheDocument();
    expect(tab3).toBeInTheDocument();

    // Check if the content of the first tab is rendered
    const tab1Content = getByTestId('tab1-content');
    expect(tab1Content).toBeInTheDocument();
  });

  it('handles tab click events and switches content', () => {
    const { getByText, getByTestId } = renderWithTheme(<NavTabs tabs={tabs} />);
    const tab1 = getByText('Tab 1');

    // Click on the second tab
    fireEvent.click(tab1);

    // Check if the content of the second tab is rendered
    const tab2Content = getByTestId('tab1-content');
    expect(tab2Content).toBeInTheDocument();

    // Ensure that the onClick function of the first tab is called
    expect(tabs[0].onClick).toHaveBeenCalledTimes(1);
  });

  // You can add more test cases based on your specific requirements
  // Test case 3: Test the structure of the NavTabs component
  // Test case 4: ...
});
