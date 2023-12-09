'use client';

import CardTodo from '../CardTodo';
import * as S from './styles';
type ListTodoProps = {
  todos: string[];
};

const ListTodo = ({ todos }: ListTodoProps) => {
  return (
    <>
      {todos?.length ? (
        <S.Container>
          {todos.map((todo) => (
            <CardTodo key={todo} description={todo} />
          ))}
        </S.Container>
      ) : (
        <p>Nada aqui</p>
      )}
    </>
  );
};

export default ListTodo;
