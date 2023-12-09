'use client';

import { useState } from 'react';
import CardTodo from '../CardTodo';
import Pagination from '../Pagination';
import * as S from './styles';
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
        <p>Nada aqui</p>
      )}
    </>
  );
};

export default ListTodo;
