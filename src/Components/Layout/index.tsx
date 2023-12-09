'use client';

import { ReactSVG } from 'react-svg';
import * as S from './styles';
import Image from 'next/image';
import Header from '../Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Container>
      <Header />
      {children}
    </S.Container>
  );
};

export default Layout;
