'use client';

import { ReactSVG } from 'react-svg';

import { options } from '@/ultis/const/options';
import useFormControl from './hooks/useForm';

import Button from '../Button';

import * as S from './styles';
import SimpleSelect from '../Select';

type FormTodoProps = {
  id?: string;
};

const FormTodo = ({ id }: FormTodoProps) => {
  const {
    control,
    handleSubmit,
    register,
    submit,
    errors,
    removeTask,
    loading,
    sending,
  } = useFormControl(id);

  return (
    <>
      {loading ? (
        <S.WrapperLoading style={{ marginTop: `10vh` }}>
          <ReactSVG
            src="/assets/imgs/loading.svg"
            style={{ width: '50px' }}
            wrapper="span"
          ></ReactSVG>
        </S.WrapperLoading>
      ) : (
        <S.Form onSubmit={handleSubmit(submit)}>
          <S.InputWrapper>
            <S.Label htmlFor="description">Description</S.Label>
            <S.TextAreaStyled
              id="description"
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
          <S.Label htmlFor="status">Status</S.Label>
          <SimpleSelect
            placeholder="What is the current status of the task?"
            control={control}
            name="status"
            options={options}
          />
          {errors.status && (
            <S.ErrorMessage>{errors.status.message?.toString()}</S.ErrorMessage>
          )}

          <S.WrapperButtons>
            {!!id ? (
              <Button
                theme="danger"
                type="button"
                onClick={removeTask}
                disabled={sending.delete}
              >
                <ReactSVG src="/assets/icons/trash.svg" />
                {sending.delete ? 'Deleting...' : 'Delete'}
              </Button>
            ) : null}

            <Button theme="primary" type="submit" disabled={sending.create}>
              <ReactSVG src="/assets/icons/confirm.svg" />
              {id
                ? sending.create
                  ? 'Updating...'
                  : 'Update'
                : sending.create
                ? 'Creating...'
                : 'Create'}
            </Button>
          </S.WrapperButtons>
        </S.Form>
      )}
    </>
  );
};

export default FormTodo;
