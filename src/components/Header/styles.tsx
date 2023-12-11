'use client';

import styled, { css } from 'styled-components';
import theme from '@/styles/theme';

export const Container = styled.header`
  ${() => css`
    padding: ${theme.spacings.xsmall};
    background-color: ${theme.colors.white};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px solid ${theme.colors.grayLight};
    z-index: 10;
  `}
`;

export const Content = styled.div`
  ${() => css`
    max-width: ${theme.grid.container};
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`;

export const Logo = styled.div`
  ${() => css`
    display: flex;
    gap: ${theme.spacings.xxsmall};
    align-items: center;
    cursor: pointer;

    h2 {
      font-size: ${theme.font.sizes.h2};
      color: ${theme.colors.black};
      margin-top: ${theme.spacings.xxsmall};
    }
  `}
`;
