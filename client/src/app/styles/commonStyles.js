import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  @media (max-width: 1180px) {
    max-width: 980px;
  }
  @media (max-width: 980px) {
    max-width: 880px;
  }
  @media (max-width: 880px) {
    max-width: 767px;
  }
  @media (max-width: 767px) {
    max-width: 100%;
    margin: 0 80px;
  }
  @media (max-width: 500px) {
    max-width: 100%;
    margin: 0 30px;
  }
`;

export const Button = styled.button`
color: #fff;
cursor: pointer;
display: flex;
justify-content: center;
position: relative;
z-index: 10;
transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
background-color: #0497ff;
font-size: 20px;
padding: 10px 50px;
border-radius: 40px;

&:hover {
  color: #000 !important;
  background-color: transparent;
  text-shadow: #fff;
}
&:hover:before {
  left: 0%;
  right: auto;
  width: 100%;
}

&:before {
  display: block;
  position: absolute;
  top: 0px;
  right: 0px;
  height: 100%;
  width: 0px;
  z-index: -1;
  content: "";
  color: #000 !important;
  background: #f7ca18;
  border-radius: 40px;
  transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
`;

export const SubmitButton = styled.button`
color: #fff;
cursor: pointer;
display: flex;
justify-content: center;
position: relative;
z-index: 10;
transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
background-color: #0497ff;
font-size: 20px;
padding: 10px 50px;
border-radius: 40px;

&:hover {
  color: #000 !important;
  background-color: transparent;
  text-shadow: #fff;
}
&:hover:before {
  left: 0%;
  right: auto;
  width: 100%;
}

&:before {
  display: block;
  position: absolute;
  top: 0px;
  right: 0px;
  height: 100%;
  width: 0px;
  z-index: -1;
  content: "";
  color: #000 !important;
  background: #f7ca18;
  border-radius: 40px;
  transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
}
`;

export const InputWrapper = styled.div`
  margin-bottom: 30px;
`;

export const PositionRelative = styled.div`
  position: relative;
`;

export const MarginAuto = styled.div`
  margin: 0 auto;
`;

export const PageHeader = styled.div`
  background-color: #000;
  padding: 40px 0;
`;

export const BlackBackground = styled.div`
  background-color: #000;
  padding: 80px 0;
`;

export const SecondBackground = styled.div`
  background-color: ${props => props.theme.colors.primaryColor};
  padding: 80px 0;
`;

export const FormContainer = styled.div`
  border-radius: 30px;
  margin: 0 auto;
  color: black;
  margin-top: 20px;
  padding: 20px;
`;

export const PageTitle = styled.p`
  color: #fff;
  font-weight: 600;
  padding: 10px 60px;
  text-align: center;
  font-size: 20px;
`;

export const SubscribeButton = styled.button`
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 10;
  transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
  background-color: #fd0202;
  font-size: 20px;
  padding: 10px 50px;
  border-radius: 40px;
  top: -20px;
  &:hover {
    color: #000 !important;
    background-color: transparent;
    text-shadow: #fff;
  }
  &:hover:before {
    left: 0%;
    right: auto;
    width: 100%;
  }

  &:before {
    display: block;
    position: absolute;
    top: 0px;
    right: 0px;
    height: 100%;
    width: 0px;
    z-index: -1;
    content: "";
    color: #000 !important;
    background: #f7ca18;
    border-radius: 40px;
    transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
  }
`;

export const YouTubeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 51%;
  & iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0; top: 0;
  }


`;
