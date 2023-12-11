'use client';

import * as S from './styles';
import Image from 'next/image';

const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Logo>
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
