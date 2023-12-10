'use client';

import styled, { css, keyframes } from 'styled-components';
import theme from '@/styles/theme';

const toRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);

  }
  `;

export const Container = styled.div`
  ${() => css`
    max-width: 140rem;
    margin: 0 auto;
    padding: ${theme.spacings.xxlarge} ${theme.spacings.xsmall}
      ${theme.spacings.small};
  `}
`;

export const Children = styled.main`
  animation: ${toRight} ease 0.4s;
`;
