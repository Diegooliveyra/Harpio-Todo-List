'use client';

import styled, { css } from 'styled-components';
import theme from '@/styles/theme';

export const Content = styled.div`
  ${() => css`
    max-width: ${theme.grid.container};
    padding-top: ${theme.spacings.large};
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`;

export const Title = styled.h1`
  font-size: ${theme.font.sizes.h1};
  color: ${theme.colors.black};
  position: relative;
  padding-left: ${theme.spacings.small};

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0px;
    top: 4px;
    width: 10px;
    height: 40px;
    background-color: ${theme.colors.green};
    border-radius: 8px;
  }
`;

export const Logo = styled.div`
  ${() => css`
    display: flex;
    gap: ${theme.spacings.xxsmall};
    align-items: center;

    h2 {
      font-size: ${theme.font.sizes.h2};
      color: ${theme.colors.black};
      margin-top: ${theme.spacings.xxsmall};
    }
  `}
`;
