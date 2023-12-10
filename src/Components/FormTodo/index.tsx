'use client';

import { ReactSVG } from 'react-svg';
import Button from '../Button';
import * as S from './styles';

import { options } from '@/ultis/const/options';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import SimpleSelect from '../Selected';
import { useEffect } from 'react';
import { z } from 'zod';

type FormTodoProps = {
  todos?: string[];
};

const schema = z.object({
  description: z.string().max(30, 'Maximum 30 characters required'),
  status: z.string({
    required_error: 'Required field',
  }),
});

const FormTodo = ({ todos }: FormTodoProps) => {
  const {
    handleSubmit,
    register,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    setValue('description', '');
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
        {errors.description && (
          <S.ErrorMessage>
            {errors.description.message?.toString()}
          </S.ErrorMessage>
        )}
      </S.InputWrapper>

      <SimpleSelect
        placeholder="Select an option"
        control={control}
        name="status"
        options={options}
      />
      {errors.status && (
        <S.ErrorMessage>{errors.status.message?.toString()}</S.ErrorMessage>
      )}

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
