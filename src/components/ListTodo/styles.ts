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
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
    animation: ${toRight} ease 0.4s;
  `}
`;

export const WrapperPagination = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-right: ${theme.spacings.xsmall};
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
