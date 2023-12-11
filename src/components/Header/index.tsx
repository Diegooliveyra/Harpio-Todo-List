'use client';

import { useRouter } from 'next/navigation';
import * as S from './styles';
import Image from 'next/image';

const Header = () => {
  const router = useRouter();
  return (
    <S.Container>
      <S.Content>
        <S.Logo onClick={() => router.push('/')}>
          <Image
            src={'/assets/imgs/logotipo.png'}
            alt="logotipo"
            width={'50'}
            height={'50'}
          />
          <h2>Todo.List</h2>
        </S.Logo>
      </S.Content>
    </S.Container>
  );
};

export default Header;
