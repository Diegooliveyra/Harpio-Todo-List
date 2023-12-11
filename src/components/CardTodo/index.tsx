'use client';

import { useRouter } from 'next/navigation';
import { capitalizeFirstLetter } from '@/ultis/texts';
import { ITaskDTO } from '@/service/tasks.interface';
import * as S from './styles';
import { StatusEnumFormatted } from '@/ultis/enums/status.enum';

type StatusType = 'NotStarted' | 'InProgress' | 'Closed';

type CardTodoProps = {
  todo: ITaskDTO;
  onClick: () => void;
};

const CardTodo = ({ todo, onClick }: CardTodoProps) => {
  return (
    <S.Card status={todo.status as StatusType} onClick={onClick}>
      {capitalizeFirstLetter(todo?.description)}
      <S.Badge status={todo.status as StatusType}>
        {StatusEnumFormatted[todo.status as StatusType]}
      </S.Badge>
    </S.Card>
  );
};

export default CardTodo;
