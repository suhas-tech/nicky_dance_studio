import styled, { css } from "styled-components";

export const WinnerTitle = styled.div`
  margin-top: 30px;
  p:first-child {
    font-size: 22px;
    text-align: center;
    color: darkblue;
    font-weight: 600;
  }
  p {
    font-size: 18px;
    text-align: center;
  }
`;

export const InputImage = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const InputImageLabel = styled.label`
  position: relative;
  img {
    margin-top: 20px;
    max-height: 500px;
    display:flex;
    justify-content:center;
    object-fit:contain
  }
  svg {
    margin-top: 20px;
    border: 2px solid #881888;
    border-radius: 5px;
  }
  
  &:hover svg {

    transform: scale(0.8);
    transition: all .2s ease-in-out
  }

`;
