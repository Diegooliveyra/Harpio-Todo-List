'use client';

import { ReactSVG } from 'react-svg';
import Button from '../Button';
import * as S from './styles';
type FormTodoProps = {
  todos?: string[];
};

const FormTodo = ({ todos }: FormTodoProps) => {
  return (
    <S.Form>
      <S.InputWrapper>
        <S.Label>Description</S.Label>
        <S.TextAreaStyled rows={4} placeholder={'todo her'} />
      </S.InputWrapper>
      <S.SelectWrapper>
        <S.Label>Status</S.Label>
        <S.SelectStyled>
          <S.Option value={''} disabled selected>
            {'Selecione'}
          </S.Option>

          <S.Option value={'option'}>{'option'}</S.Option>
          <S.Option value={'option'}>{'option'}</S.Option>
          <S.Option value={'option'}>{'option'}</S.Option>
        </S.SelectStyled>
      </S.SelectWrapper>

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
