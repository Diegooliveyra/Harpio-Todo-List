'use client';

import { useRouter } from 'next/navigation';
import { capitalizeFirstLetter } from '@/ultis/texts';
import { ITaskDTO } from '@/service/tasks.interface';
import * as S from './styles';

type StatusType = 'NotStarted' | 'InProgress' | 'Closed';

type CardTodoProps = {
  todo: ITaskDTO;
};

const CardTodo = ({ todo }: CardTodoProps) => {
  const router = useRouter();

  return (
    <S.Card
      status={todo.status as StatusType}
      onClick={() => router.push(`/form/${todo.id}`)}
    >
      {capitalizeFirstLetter(todo?.description)}
      <S.Badge status={todo.status as StatusType}>{todo.status}</S.Badge>
    </S.Card>
  );
};

export default CardTodo;
