'use client';

import { ReactSVG } from 'react-svg';
import Button from '../Button';
import * as S from './styles';

import { options } from '@/ultis/const/options';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import SimpleSelect from '../Selected';
import { useEffect } from 'react';

type FormTodoProps = {
  todos?: string[];
};

const FormTodo = ({ todos }: FormTodoProps) => {
  const { handleSubmit, register, control, setValue } = useForm({
    mode: 'all',
  });

  useEffect(() => {
    setValue('description', 'tesdsdsdsd tett');
  }, [setValue]);

  const submit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <S.Form onSubmit={handleSubmit(submit)}>
      <S.InputWrapper>
        <S.Label>Description</S.Label>
        <S.TextAreaStyled
          rows={4}
          placeholder={'Describe your task here'}
          {...register('description')}
        />
      </S.InputWrapper>

      <SimpleSelect
        placeholder="Select an option"
        control={control}
        name="status"
        options={options}
      />

      <S.WrapperButtons>
        <Button theme="danger">
          <ReactSVG src="/assets/icons/trash.svg" />
          Delete
        </Button>
        <Button theme="primary" type="submit">
          <ReactSVG src="/assets/icons/confirm.svg" />
          Save
        </Button>
      </S.WrapperButtons>
    </S.Form>
  );
};

export default FormTodo;
