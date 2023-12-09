'use client';

import styled, { css } from 'styled-components';
import theme from '@/styles/theme';

export const Container = styled.header`
  ${() => css`
    max-width: ${theme.grid.container};
    margin: 0 auto;
    padding-top: ${theme.spacings.xxlarge};
  `}
`;
