import { fireEvent } from '@testing-library/react';
import Pagination from './';
import { renderWithTheme } from '@/ultis/tests/helpers';

describe('Pagination component', () => {
  const mockSetNumberPage = jest.fn();

  it('renders Pagination component with buttons', () => {
    const { getAllByRole, getByText } = renderWithTheme(
      <Pagination
        actualPage={1}
        totalPage={5}
        setNumberPage={mockSetNumberPage}
      />
    );

    const buttons = getAllByRole('button');
    expect(buttons).toHaveLength(5);

    const previewSpan = getByText('Preview');
    const nextSpan = getByText('Next');
    expect(previewSpan).toBeInTheDocument();
    expect(nextSpan).toBeInTheDocument();
  });

  it('handles button click events and updates state', () => {
    const { getByText } = renderWithTheme(
      <Pagination
        actualPage={1}
        totalPage={5}
        setNumberPage={mockSetNumberPage}
      />
    );

    const nextButton = getByText('Next');
    fireEvent.click(nextButton);

    expect(mockSetNumberPage).toHaveBeenCalledWith(2);
  });
});
