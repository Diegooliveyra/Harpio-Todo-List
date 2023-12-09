import theme from '@/styles/theme';
import styled, { css } from 'styled-components';

export const Content = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 50px 0 25px;
  overflow: hidden;
  gap: 10px;
  border-bottom: 1px solid ${theme.colors.grayLight};

  @media screen and (max-width: 1024px) {
    overflow-x: scroll;
  }
`;

export const GuidePanel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

type TabsProps = {
  actived?: boolean;
};

export const Tabs = styled.div<TabsProps>`
  ${({ actived }) => css`
    display: flex;
    height: 50px;
    background: inherit;
    color: ${actived ? theme.colors.green : theme.colors.black};
    border-bottom: ${actived
      ? `4px solid ${theme.colors.green}`
      : `4px solid transparent`};

    width: fit-content;
    padding: 16px;
    font-size: ${theme.font.sizes.body};
    line-height: ${theme.spacings.small};
    font-weight: ${theme.font.semiBold};
    cursor: pointer;

    align-items: center;

    svg path {
      fill: ${actived ? theme.colors.green : theme.colors.black};
      fill-opacity: 0.88;
    }

    span {
      margin-right: 10px;
      position: relative;
      top: 2px;
    }

    p {
      font-weight: 600;
      white-space: nowrap;
    }

    actived {
      border-bottom: 2px solid ${theme.colors.green};
      a {
        color: ${theme.colors.green};
      }
    }

    @media screen and (min-width: 1024px) {
      min-width: 80px;
    }
  `}
`;
