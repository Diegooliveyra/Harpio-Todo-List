'use client';

import React, { ReactNode, useState } from 'react';

import * as S from './styles';
export type Tap = {
  label: string;
  component: ReactNode;
  onClick?: () => void;
};
type NavTabsProps = {
  tabs: Tap[];
  activeTab?: number;
};
const NavTabs = ({ tabs, activeTab }: NavTabsProps) => {
  const [actived, setActived] = useState(activeTab || 0);
  return (
    <S.GuidePanel>
      <S.Content>
        {tabs.map((item, index) => (
          <S.Tabs
            key={index}
            actived={index === actived}
            onClick={() => {
              setActived(index);
              if (item?.onClick) item.onClick();
            }}
          >
            <p>{item.label}</p>
          </S.Tabs>
        ))}
      </S.Content>
      {tabs.map((item, index) => index === actived && item.component)}
    </S.GuidePanel>
  );
};

export default NavTabs;
