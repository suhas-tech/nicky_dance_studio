import React from "react";
import { Container } from "@theme/common";
import {
    HomeBanner,
    Section,
    SectionTitle,
    SectionBody,
    StyleCardSection,
    MoreText,
    VideosWrapper,
    InstructorWrapper,
    Area,
    InstructorCard,
} from "./style";

import NP_LOGO from "@images/npLogo.png";
import NP_PIC from "@images/NP.png";
import PREVIEW from "@images/danceIllustrator.png";

import Instructor1 from "@images/Instructor1.jpg";
import Instructor2 from "@images/Instructor2.jpg";
import Instructor3 from "@images/Instructor3.jpg";
import Instructor4 from "@images/Instructor4.jpg";
import Instructor5 from "@images/Instructor5.jpg";


import StyleCard from "@components/StyleCard";

import { danceStyles, youTubeVideos } from "./constant";

import YouTube from "react-youtube";
const Home = (props) => {
    const opts = {
        height: "195",
        width: "320",
        playerVars: {
            autoplay: 0,
            iv_load_policy: 3,
            rel: 0,
        },
    };

    return (
        <React.Fragment>
            <HomeBanner>
                <div className="logo">
                    <img src={NP_LOGO} alt="Logo" />
                </div>
                <div className="picture">
                    <img src={NP_PIC} alt="Logo" />
                </div>
                <Area>
                    <ul class="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </Area>
            </HomeBanner>
            <Section>
                <Container>
                    <SectionTitle>WHAT DO WE DO HERE?</SectionTitle>
                    <SectionBody>
                        <div className="text">
                            <p className="highlight">
                                We strive to help accomplish your goals one step
                                at a time!
                            </p>

                            <p>
                                We have a community of professionals and
                                inspiring instructors. We will match you with an
                                instructor with whom you feel at ease and whom
                                you're excited to learn from. We will also work
                                with your schedule and budget to ensure that the
                                lessons are both, convenient and affordable.{" "}
                            </p>
                            <p>
                                When we begin, we like to teach beginners the
                                fundamentals of Hip Hop, Contemporary and House.
                                This will include lessons on how to groove,
                                warm-up, body control, freestyle and musicality,
                                as well as an introduction on choreography to a
                                song and perform it.
                            </p>
                            <p>
                                We've developed unique lesson plans that have
                                proven effective. From shuffle to contemporary,
                                bollywood to open Style, and much more, we'll
                                get you dancing in no time. Lessons are
                                available online through "zoom" etc.
                            </p>
                        </div>
                        <div className="image">
                            <img src={PREVIEW} alt="Logo" />
                        </div>
                    </SectionBody>
                </Container>
            </Section>
            <Section className="green-background">
                <Container>
                    <SectionTitle>OUR STYLES</SectionTitle>
                    <StyleCardSection>
                        {danceStyles.map((item) => {
                            return <StyleCard {...item} />;
                        })}
                    </StyleCardSection>
                    <MoreText>{"& more..."}</MoreText>
                </Container>
            </Section>
            <Section>
                <Container>
                    <SectionTitle>OUR INSTRUCTORS</SectionTitle>
                    <InstructorWrapper>
                        <InstructorCard>
                            <img src={Instructor1} alt="Logo" />
                            <div className="nameTag">Trisha Rai</div>
                        </InstructorCard>
                        <InstructorCard>
                            <img src={Instructor2} alt="Logo" />
                            <div className="nameTag">Jerusha Maben</div>
                        </InstructorCard>
                        <InstructorCard>
                            <img src={Instructor3} alt="Logo" />
                            <div className="nameTag">Sejal Alva</div>
                        </InstructorCard>
                        <InstructorCard>
                            <img src={Instructor4} alt="Logo" />
                            <div className="nameTag">Suneira Mendonsa</div>
                        </InstructorCard>
                        <InstructorCard>
                            <img src={Instructor5} alt="Logo" />
                            <div className="nameTag">Gavin Rodrigues</div>
                        </InstructorCard>
                    </InstructorWrapper>
                </Container>
            </Section>
            <Section className="green-background">
                <Container>
                    <SectionTitle>CHECKOUT OUR VIDEOS</SectionTitle>
                    <VideosWrapper>
                        {youTubeVideos.map((item) => {
                            return (
                                <div>
                                    {" "}
                                    <YouTube videoId={item.id} opts={opts} />
                                </div>
                            );
                        })}
                    </VideosWrapper>
                </Container>
            </Section>
        </React.Fragment>
    );
};

export default Home;
