import styled, { css } from "styled-components";

export const PositionRelative = styled.div`
  position: relative;
`;




export const LogoVideoWrapper = styled.div`
  width: 100%;
  video {
    width: 100%;
    height: 620px;
    object-fit: cover;
    @media (max-width: 767px) {
      height: 450px;
    }
    @media (max-width: 500px) {
      height: 350px;
    }
  }
`;

export const DisplayCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BlackBackground = styled.div`
  background-color: #000;
`;

export const TeamDetails = styled.div`
  margin-left: 30px;
  color: #000;
  display: flex;
  flex-direction: column;
  p {
    margin: 10px 0;
  }
  .team {
    font-size: 36px;
    font-weight:600
    @media (max-width: 500px) {
      font-size: 24px;
    }
  }
  .text,
  .booking {
    word-break: break-word;
    font-size: 26px;
    @media (max-width: 500px) {
      font-size: 14px;
    }
  }

`;

export const TranslateLeft = styled.img`
  transform: translateZ(-939px) perspective(1210px) rotateY(-327deg) scale(1)
    translateY(10.2847px);
  -webkit-box-shadow: -12px 3px 26px -8px rgba(0, 0, 0, 0.65);
  -moz-box-shadow: -12px 3px 26px -8px rgba(0, 0, 0, 0.65);
  box-shadow: -12px 3px 26px -8px rgba(0, 0, 0, 0.65);
`;

export const TranslateRight = styled.img`
  transform: translateZ(-939px) perspective(1210px) rotateY(327deg) scale(1)
    translateY(10.2847px);
  -webkit-box-shadow: -12px 3px 26px -8px rgba(0, 0, 0, 0.65);
  -moz-box-shadow: -12px 3px 26px -8px rgba(0, 0, 0, 0.65);
  box-shadow: -12px 3px 26px -8px rgba(0, 0, 0, 0.65);
`;

export const DisplayBlock = styled.div`
  display: block;
`;

export const MarginY = styled.div`
  margin: 60px 0;
`;
