'use client';

import { useRouter } from 'next/navigation';
import * as S from './styles';
import { textTrucante } from '@/ultis/texts';

type CardTodoProps = {
  description: string;
};

const CardTodo = ({ description }: CardTodoProps) => {
  const router = useRouter();
  return (
    <S.Card onClick={() => router.push('/form/id')}>
      {textTrucante({ text: description, size: 150 })}
    </S.Card>
  );
};

export default CardTodo;
