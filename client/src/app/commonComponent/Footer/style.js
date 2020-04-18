import styled, { css } from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: #000;
  color: #000;
  height: 300px;
  position: relative;
  .h-100 {
    height: 100%;
  }
`;

export const SocialIcons = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 3px 2px 5px 1px rgba(255, 255, 255, 0.6);
  @media (max-width: 425px) {
    width: 30px;
    height: 30px;
  }
`;

export const SocialIconsWrapper = styled.div`
  height: 100%;
  width: 500px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  flex-wrap: wrap;

  @media (max-width: 425px) {
    width: 280px;
  }
`;

export const CreatedByLabel = styled.p`
  color: #fff;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;
