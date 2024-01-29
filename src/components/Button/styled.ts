/* eslint-disable @typescript-eslint/no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    padding: 15px 30px;
    border: 0;
    border-radius: 15px;
    color: white;
    cursor: pointer;
    background: linear-gradient(35deg, rgb(59, 115, 2), rgb(154, 217,91));
    transition: all ease-in-out;

    &:hover {
      animation-name: btn;
      animation-duration: 0.5s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      animation-timing-function: ease-in-out;
      box-shadow: 0 0 50px 20px rgba(113, 168, 67, 0.6);
    }
  `}

  @keyframes btn {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.05);
    }
  }
`;
