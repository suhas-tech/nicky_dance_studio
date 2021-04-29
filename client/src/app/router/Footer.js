import React from "react";
import { Container } from "@theme/common";
import {
    FooterWrapper,
    SocialIconsWrapper,
    TwoColumnWrapper,
    CreatedByLabel,
} from "./style";

import NP_LOGO from "@images/npLogo.png";
import YouTube from "@svg/YouTube";
import Instagram from "@svg/Instagram";
import Twitter from "@svg/Twitter";
import Facebook from "@svg/Facebook";

const Footer = () => {
    return (
        <FooterWrapper>
            <Container className="h-100">
                <TwoColumnWrapper>
                    <div className="one-column">
                        <div className="footer-logo">
                            <img src={NP_LOGO} alt="Logo" />
                        </div>
                        <SocialIconsWrapper>
                            <div className="icon">
                                <YouTube />
                            </div>
                            <div className="icon">
                                <Instagram />
                            </div>
                            <div className="icon">
                                <Twitter />
                            </div>
                            <div className="icon">
                                <Facebook />
                            </div>
                        </SocialIconsWrapper>
                        <CreatedByLabel>CREATED BY SUHAS</CreatedByLabel>
                    </div>
                    <div className="two-column">
                        <div className="quotes">
                            <div>
                                “When you dance, you can enjoy the luxury of
                                being you.”
                            </div>
                            <div>
                                <b>Paulo Coelho</b>
                            </div>
                        </div>
                    </div>
                </TwoColumnWrapper>
            </Container>
        </FooterWrapper>
    );
};

export default Footer;
