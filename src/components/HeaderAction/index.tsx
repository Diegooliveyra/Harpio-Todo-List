'use client';

import { ReactSVG } from 'react-svg';
import * as S from './styles';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '../Button';

type HeaderActionProps = {
  title: string;
  actionName: string;
  route: string;
  actionIcon: string;
};

const HeaderAction = ({
  title,
  actionName,
  route,
  actionIcon,
}: HeaderActionProps) => {
  const router = useRouter();
  return (
    <S.Content>
      <S.Title>{title}</S.Title>
      <Button
        title={actionName}
        onClick={() => router.push(route)}
        style={{ width: 'fit-content' }}
      >
        <ReactSVG src={actionIcon} title={actionName} />
        {actionName}
      </Button>
    </S.Content>
  );
};

export default HeaderAction;
