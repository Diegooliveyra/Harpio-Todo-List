import { render, screen } from '@testing-library/react';
import FormTodo from './';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { mockNextRouter } from '@/ultis/mock-next-router';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

const router = mockNextRouter({});

describe('FormTodo', () => {
  it('renders FormTodo component', () => {
    render(
      <RouterContext.Provider value={router}>
        <FormTodo />
      </RouterContext.Provider>
    );
  });
  it('renders FormTodo correctly', () => {
    render(
      <RouterContext.Provider value={router}>
        <FormTodo />
      </RouterContext.Provider>
    );

    expect(screen.getByLabelText(/Description/i)).toBeInTheDocument();

    expect(screen.getByText('Save')).toBeInTheDocument();
  });
});
