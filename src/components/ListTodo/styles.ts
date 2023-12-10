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

export const NotFound = styled.div`
  ${() => css`
    border-radius: ${theme.border.radius};
    height: 388px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.small};
  `}
`;

export const NotFountText = styled.div`
  ${() => css`
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.body};
    line-height: ${theme.spacings.small};
    color: ${theme.colors.black};
  `}
`;

export const WrapperLoading = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 250px;
  }
`;
