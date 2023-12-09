import styled, { css } from 'styled-components';
import theme from '@/styles/theme';

export const Container = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
  `}
`;
