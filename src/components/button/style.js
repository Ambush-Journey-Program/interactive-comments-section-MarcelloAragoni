import styled, { css } from 'styled-components';

const variants = {
  send: css`
    color: #fff;
    background-color: #5357b6;
    text-transform: uppercase;

    & svg {
      display: none;
    }
  `,
  ghost: css`
    color: #5357b6;
    background-color: transparent;
    text-transform: none;
  `,
  delete: css`
    color: #ed6368;
    background-color: transparent;
    text-transform: none;
  `
};

export const Button = styled.button`
  position: relative;
  height: 3rem;
  width: 6.5rem;
  padding: 0 1.33px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  border-radius: 0.3rem;

  & svg {
    margin-right: 10px;
  }

  ${({ variant }) => variants[variant]}
`;
