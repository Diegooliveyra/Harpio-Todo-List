'use client';

import { ReactSVG } from 'react-svg';
import Button from '../Button';
import * as S from './styles';
import Select from 'react-select';

import { useState } from 'react';
import theme from '@/styles/theme';
import { options } from '@/ultis/const/options';

type OptionType = {
  value: string;
  label: string;
};

type FormTodoProps = {
  todos?: string[];
};

const FormTodo = ({ todos }: FormTodoProps) => {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  return (
    <S.Form>
      <S.InputWrapper>
        <S.Label>Description</S.Label>
        <S.TextAreaStyled rows={4} placeholder={'todo her'} />
      </S.InputWrapper>

      <Select
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
        placeholder={'Selected Option'}
        value={selectedOption}
        onChange={(value) => setSelectedOption(value)}
        options={options}
      />

      <S.WrapperButtons>
        <Button theme="danger">
          <ReactSVG src="/assets/icons/trash.svg" />
          Delete
        </Button>
        <Button theme="primary">
          <ReactSVG src="/assets/icons/confirm.svg" />
          Save
        </Button>
      </S.WrapperButtons>
    </S.Form>
  );
};

export default FormTodo;
