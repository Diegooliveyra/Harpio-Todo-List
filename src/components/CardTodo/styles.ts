import theme from '@/styles/theme';
import styled, { css } from 'styled-components';

export const Card = styled.div`
  ${() => css`
    width: 100%;
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};
    color: ${theme.colors.black};
    border: 1px solid ${theme.colors.grayLight};
    border-left: 12px solid ${theme.colors.green};
    border-radius: ${theme.border.radius};
    transition: all ease 0.3s;
    background: #fff;
    cursor: pointer;

    &:hover {
      border-color: ${theme.colors.green};
    }
  `}
`;
