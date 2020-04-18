import styled, { keyframes } from "styled-components";

const float = keyframes`
100% {
    transform: translateY(20px);
  }
`;

export const PageNotFoundWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  & > svg {
    margin-right: 100px;
  }
  #Polygon-1,
  #Polygon-2,
  #Polygon-3,
  #Polygon-4,
  #Polygon-4,
  #Polygon-5 {
    animation: ${float} 1s infinite ease-in-out alternate;
  }
  #Polygon-2 {
    animation-delay: 0.2s;
  }
  #Polygon-3 {
    animation-delay: 0.4s;
  }
  #Polygon-4 {
    animation-delay: 0.6s;
  }
  #Polygon-5 {
    animation-delay: 0.8s;
  }
`;

const bounce = keyframes`
100% {
    top: -10px;

}
`;

export const MessageBox = styled.div`
  color: #fff;
  font-size: 32px;
  & h1 {
    color: red;
    font-weight: 600;
    font-size: 40px;
    @media (max-width: 768px) {
      margin-top:30px;
      text-align: center;
    }
  }
  & > p span {
    color: #fff;
    position: relative;
    top: 10px;
    display: inline-block;
    margin-right: 10px;
    animation: ${bounce} 0.3s ease infinite alternate;
  }

  & > p span:nth-child(1) {
    animation-delay: 0.5s;
  }
  & > p span:nth-child(2) {
    animation-delay: 0.6s;
  }
  & > p span:nth-child(3) {
    animation-delay: 0.7s;
  }
`;
