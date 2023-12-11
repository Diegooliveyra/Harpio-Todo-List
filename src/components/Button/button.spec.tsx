import { fireEvent } from '@testing-library/react';
import Button from '.';
import { renderWithTheme } from '@/ultis/tests/helpers';
import theme from '@/styles/theme';

describe('Button component', () => {
  it('renders button with default theme', () => {
    const { getByText } = renderWithTheme(<Button>Click me</Button>);
    const button = getByText('Click me');

    expect(button).toBeInTheDocument();
  });

  it('renders button with specified theme', () => {
    const { getByText } = renderWithTheme(
      <Button theme="danger">Delete</Button>
    );
    const button = getByText('Delete');

    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({ backgroundColor: theme.colors.red });
  });

  it('renders disabled button', () => {
    const { getByText } = renderWithTheme(<Button disabled>Disabled</Button>);
    const button = getByText('Disabled');

    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it('handles button click', () => {
    const handleClick = jest.fn();
    const { getByText } = renderWithTheme(
      <Button onClick={handleClick}>Click me</Button>
    );
    const button = getByText('Click me');

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
