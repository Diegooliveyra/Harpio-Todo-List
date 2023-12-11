import { fireEvent } from '@testing-library/react';
import CardTodo from '.';
import { renderWithTheme } from '@/ultis/tests/helpers';

const mockTask = {
  id: '1',
  description: 'Sample Task',
  status: 'NotStarted',
};

describe('CardTodo component', () => {
  it('renders CardTodo component with a task', () => {
    const { getByText } = renderWithTheme(
      <CardTodo todo={mockTask} onClick={() => {}} />
    );
    const cardTodo = getByText(/Sample Task/i);

    expect(cardTodo).toBeInTheDocument();
  });

  it('handles click event', () => {
    const mockClickHandler = jest.fn();

    const { getByText } = renderWithTheme(
      <CardTodo todo={mockTask} onClick={mockClickHandler} />
    );
    const cardTodo = getByText(/Sample Task/i);

    fireEvent.click(cardTodo);

    expect(mockClickHandler).toHaveBeenCalledTimes(1);
  });

  it('displays the correct status badge', () => {
    const { getByText } = renderWithTheme(
      <CardTodo todo={mockTask} onClick={() => {}} />
    );
    const statusBadge = getByText('Not Started');

    expect(statusBadge).toBeInTheDocument();
  });
});
