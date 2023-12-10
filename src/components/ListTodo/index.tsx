'use client';

import { useState } from 'react';
import CardTodo from '../CardTodo';
import Pagination from '../Pagination';
import * as S from './styles';
import { ReactSVG } from 'react-svg';
type ListTodoProps = {
  todos: string[];
};

const ListTodo = ({ todos }: ListTodoProps) => {
  const [numberPage, setNumberPage] = useState(1);
  return (
    <>
      {todos?.length ? (
        <>
          <S.Container>
            {todos.map((todo) => (
              <CardTodo key={todo} description={todo} />
            ))}
          </S.Container>

          <S.WrapperPagination>
            <Pagination
              actualPage={1}
              totalPage={2}
              setNumberPage={setNumberPage}
            />
          </S.WrapperPagination>
        </>
      ) : (
        <S.NotFound>
          <ReactSVG
            src={'/assets/imgs/not-found.svg'}
            role={'figure'}
            wrapper="div"
          />
          <S.NotFountText>Nenhum registro encontrado</S.NotFountText>
        </S.NotFound>
      )}
    </>
  );
};

export default ListTodo;
