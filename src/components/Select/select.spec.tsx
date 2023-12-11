import { render, fireEvent, screen } from '@testing-library/react';

import { useForm } from 'react-hook-form';
import SimpleSelect from './';

const mockOptions = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];

type FormData = {
  selectField: string;
};

describe('SimpleSelect component', () => {
  it('handles select change and updates form state', async () => {
    renderForm();

    const select = screen.getByRole('combobox');
    fireEvent.mouseDown(select);

    const optionToSelect = screen.getByText('Option 2');
    fireEvent.click(optionToSelect);
  });
});

function SimpleSelectForm() {
  const { formState, control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      selectField: '',
    },
  });

  return (
    <form onSubmit={handleSubmit(() => {})}>
      <SimpleSelect
        //@ts-ignore
        control={control}
        options={mockOptions}
        name="selectField"
        placeholder="Select an option"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

function renderForm() {
  render(<SimpleSelectForm />);
}
