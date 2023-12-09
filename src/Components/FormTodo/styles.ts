import styled, { css } from 'styled-components';
import theme from '@/styles/theme';

export const Form = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
    padding-top: ${theme.spacings.large};
  `}
`;

export const WrapperPagination = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    justify-content: flex-end;
  `}
`;

export const InputWrapper = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  font-size: ${theme.font.sizes.body};
  color: ${theme.colors.black};
  margin-bottom: 5px;
  display: block;
`;

export const TextAreaStyled = styled.textarea`
  padding: ${theme.spacings.xsmall};
  font-size: 16px;
  border: 1px solid ${theme.colors.gray};
  border-radius: ${theme.border.radius};
  color: ${theme.colors.black};
  width: 100%;
  outline: none;
  resize: none;

  &:focus {
    border-color: ${theme.colors.green};
  }
`;

export const SelectWrapper = styled.div`
  margin-bottom: 15px;
`;

export const SelectStyled = styled.select`
  padding: ${theme.spacings.xsmall};
  font-size: 16px;
  border: 1px solid ${theme.colors.gray};
  border-radius: ${theme.border.radius};
  color: ${theme.colors.black};
  width: 100%;
  outline: none;
  appearance: none;

  &:focus {
    border-color: ${theme.colors.green};
  }
`;

export const Option = styled.option`
  padding: 10px;
`;

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  gap: ${theme.spacings.xsmall};

  button {
    width: fit-content;
  }
`;