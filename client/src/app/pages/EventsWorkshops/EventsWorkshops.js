import React from "react";
import Carousel from "../../commonComponent/Carousel/Carousel";
import {
  Container,
  YouTubeWrapper,
  BlackBackground,
  SecondBackground
} from "../../styles/commonStyles";
import YouTube from "react-youtube";
import Grid from "@material-ui/core/Grid";
const EventsWorkshops = () => {
  const opts1 = {
    width: "1280",
    height: "720",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      loop: 1,
      iv_load_policy: 3,
      enablejsapi: 1,
      rel: 0
    }
  };
  return (
    <div>
      <BlackBackground>
        <Container>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
          >
            <Grid
              item
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <YouTubeWrapper>
                <YouTube videoId="yRLeZnhpNSE" opts={opts1} />
              </YouTubeWrapper>
            </Grid>
          </Grid>
        </Container>
      </BlackBackground>
      <SecondBackground>
        <Container>
          <Carousel />
        </Container>
      </SecondBackground>
    </div>
  );
};

export default EventsWorkshops;
