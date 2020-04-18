import styled, { css } from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.colors.primaryColor};
  color: #fff;
  display: flex;
  justify-content: space-between;
`;

export const ShowMobile = styled.div`
  display: none;

  @media (max-width: 1280px) {
    z-index: 40;
    display: block;
    position: absolute;
    right: 0
    & > nav {
      position: absolute;
      top: 55px;
      right: 0;
      min-width:100vw;
      ul {
        flex-direction: column;
        background-color: ${props => props.theme.colors.primaryColor};
         li {
           cursor:pointer;
         }
      }
    }
  }
`;

export const ShowDesktop = styled.div`
  display: block;
  @media (max-width: 1280px) {
    display: none;
  }
`;
export const Nav = styled.nav`
  .selectedLink {
    background-color: #2da8ff;
    color: #000;
  }
  ul {
    display: flex;
    justify-content: flex-end;
    li .navLink {
      display: block;
      padding: 20px;
      font-weight: 600;
      letter-spacing: 1px;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  img {
    width: auto;
    height: 55px;
  }
`;

export const Hamburger = styled.div`
  display: none;
  @media (max-width: 1280px) {
    display: block;
    margin: auto 20px auto;
  }
  & > div {
    cursor: pointer;
  }
`;
