import theme from '@/styles/theme';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TotalRegister = styled.span`
  margin-top: 32px;
  font-size: 1.6rem;
  color: #000000;
  :hover {
    color: #3e3e3e;
  }
`;

export const Pagination = styled.div`
  display: flex;
  margin-top: 32px;
  align-items: center;

  span,
  button {
    cursor: pointer;
    color: #000000;

    -webkit-touch-callout: none;

    -webkit-user-select: none;

    -khtml-user-select: none;

    -moz-user-select: none;

    -ms-user-select: none;

    user-select: none;
  }

  span {
    font-size: 1.6rem;
    color: #000000;

    :hover {
      color: #3e3e3e;
    }
  }

  span + span {
    margin-left: 20px;
  }
`;

export const Buttons = styled.div`
  ${() => css`
    margin: 0 20px;

    .actived {
      background: ${theme.colors.green};

      color: white;
    }

    button {
      padding: 2px 7px;

      border: none;

      border-radius: 5px;

      font-weight: 600;

      font-size: 1.4rem;

      background: transparent;

      :hover {
        background: ${theme.colors.green};

        color: white;
      }
    }

    button + button {
      margin-left: 10px;
    }
  `}
`;
