import React from "react";
import { Container } from "../../styles/commonStyles";
import {
  FooterWrapper,
  SocialIcons,
  SocialIconsWrapper,
  CreatedByLabel
} from "./style";
const Footer = () => {
  return (
    <FooterWrapper>
      <Container className="h-100">
        <SocialIconsWrapper>
          <SocialIcons src="./assets/icons/facebook.svg" />
          <SocialIcons src="./assets/icons/insta.svg" />
          <SocialIcons src="./assets/icons/youtube.svg" />
          <SocialIcons src="./assets/icons/twitter.svg" />
          <SocialIcons src="./assets/icons/snapchat.svg" />
        </SocialIconsWrapper>
      </Container>
      <CreatedByLabel> Created by Suhas B S </CreatedByLabel>
    </FooterWrapper>
  );
};

export default Footer;
