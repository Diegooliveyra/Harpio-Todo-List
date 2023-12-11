'use client';

import theme from '@/styles/theme';
import styled, { css } from 'styled-components';
import { ThemeButton } from '.';

const themeModifier = {
  primary: () => css`
    background-color: ${theme.colors.green};
    color: ${theme.colors.white};
    border: 1px solid transparent;

    &:hover {
      filter: brightness(1.1);
    }
  `,
  danger: () => css`
    background-color: ${theme.colors.red};
    color: ${theme.colors.white};

    &:hover {
      filter: brightness(1.1);
    }
  `,
};

type ContainerProps = {
  disabled: boolean;
  themebtn: ThemeButton;
};

export const Container = styled.button<ContainerProps>`
  ${({ disabled, themebtn }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.body};
    font-weight: ${theme.font.normal};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};

    border: none;
    border-radius: ${theme.border.radius};
    width: 100%;
    transition: all 0.4s ease-in-out;

    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    opacity: ${disabled ? '.3' : '1'};

    ${theme && themeModifier[themebtn]}

    &:disabled,
    [disabled] {
      opacity: 0.6;
    }

    svg {
      margin-top: 2px;
    }
  `}
`;
