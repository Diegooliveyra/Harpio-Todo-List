import { Control, Controller, FieldValues } from 'react-hook-form';
import Select from 'react-select';

import theme from '@/styles/theme';

type SelectProps = {
  control: Control<FieldValues>;
  options: any[];
  name: string;
  placeholder: string;
};

const SimpleSelect = ({ control, options, name, placeholder }: SelectProps) => {
  return (
    <Controller
      control={control}
      render={({ field: { onChange, value, name, ref } }) => (
        <Select
          placeholder={placeholder}
          ref={ref}
          value={options.find((c) => c.value === value)}
          name={name}
          options={options}
          onChange={(selectedOption) => {
            onChange(selectedOption?.value);
          }}
          styles={{
            control: () => ({
              display: 'flex',
              flexDirection: 'row',
              borderRadius: '0.8rem',
              fontSize: '1.6rem',
              height: '5.6rem',
              padding: '0 .6rem',
              border: '1px solid #ECECEC',
              background: '#FFF',
              color: 'red',
            }),
            singleValue: (base: any) => ({
              ...base,
              color: theme.colors.black,
            }),
          }}
        />
      )}
      name={name}
    />
  );
};

export default SimpleSelect;
