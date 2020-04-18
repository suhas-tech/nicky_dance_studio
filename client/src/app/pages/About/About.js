import React from "react";
import { Grid } from "@material-ui/core";
import { Container } from "../../styles/commonStyles";
import { Title, Description, DescriptionWrapper, AboutWrapper } from "./style";
import { ImageUrl, VideoUrl } from "../../utils/url";

const About = props => {
  return (
    <Container>
      <AboutWrapper>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          spacing={3}
        >
          <Grid item md={6}>
            <Title>Nicky Pinto</Title>
            <DescriptionWrapper>
              <Description>
                Dance Plus 3, Nostalgia along with <br /> Leonel S and Gavin R
              </Description>
              <Description>Dance Classes in 4 venues</Description>

              <Description>Dance style, Urban</Description>

              <Description>Collaborations with ROL 'IGT'</Description>
            </DescriptionWrapper>
          </Grid>
          <Grid item md={6}>
            <img src={ImageUrl("photo(2).jpg")} alt="Missing" />
          </Grid>
        </Grid>
      </AboutWrapper>
    </Container>
  );
};

export default About;
