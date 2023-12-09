import styled, { css } from 'styled-components';
import theme from '@/styles/theme';

export const Container = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
  `}
`;

export const WrapperPagination = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    justify-content: flex-end;
  `}
`;
