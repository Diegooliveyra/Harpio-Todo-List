'use client';

import styled, { css } from 'styled-components';
import theme from '@/styles/theme';

export const Container = styled.header`
  ${() => css`
    max-width: 140rem;
    margin: 0 auto;
    padding: ${theme.spacings.xxlarge} ${theme.spacings.xsmall} 0;
  `}
`;
