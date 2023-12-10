import theme from '@/styles/theme';
import styled, { css } from 'styled-components';

const cardModifier = {
  NotStarted: () => css`
    border-left-color: ${theme.colors.yellow};

    &:hover {
      border-color: ${theme.colors.yellow};
    }
  `,
  InProgress: () => css`
    border-left-color: ${theme.colors.green};
    &:hover {
      border-color: ${theme.colors.green};
    }
  `,
  Closed: () => css`
    border-left-color: ${theme.colors.red};
    &:hover {
      border-color: ${theme.colors.red};
    }
  `,
};

type CardProps = {
  status: 'NotStarted' | 'InProgress' | 'Closed';
};

export const Card = styled.div<CardProps>`
  ${({ status }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-height: 84px;
    gap: ${theme.spacings.xxsmall};
    padding: ${theme.spacings.xsmall};
    color: ${theme.colors.black};
    border: 1px solid ${theme.colors.grayLight};
    border-left: 12px solid ${theme.colors.green};
    border-radius: ${theme.border.radius};
    transition: all ease 0.3s;
    background: #fff;
    cursor: pointer;

    ${status && cardModifier[status]}
  `}
`;

const badgeModifier = {
  NotStarted: () => css`
    background-color: ${theme.colors.yellow};
  `,
  InProgress: () => css`
    background-color: ${theme.colors.green};
  `,
  Closed: () => css`
    background-color: ${theme.colors.red};
  `,
};

export const Badge = styled.span<CardProps>`
  ${({ status }) => css`
    width: 140px;
    max-height: 28px;
    text-align: center;
    align-self: center;
    padding: 10px ${theme.spacings.xxsmall};
    border-radius: calc(${theme.border.radius} / 2);
    color: #fff;
    font-size: ${theme.font.sizes.button};
    line-height: ${theme.spacings.xxsmall};

    ${status && badgeModifier[status]}
  `}
`;
