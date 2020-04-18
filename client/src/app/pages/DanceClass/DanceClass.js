import React from "react";
import Carousel from "../../commonComponent/Carousel/Carousel";
import {
  Container,
  YouTubeWrapper,
  BlackBackground,
  SecondBackground
} from "../../styles/commonStyles";
import Grid from "@material-ui/core/Grid";
import YouTube from "react-youtube";
import { ImageUrl, VideoUrl } from "../../utils/url";

const DanceClass = () => {
  const opts1 = {
    width: "1280",
    height: "720",
    playerVars: {
      autoplay: 0,
      loop: 1,
      iv_load_policy: 3,
      enablejsapi: 1,
      rel: 0
    }
  };
  return (
    <>
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
              md={4}
            >
              <img src={ImageUrl("photo(2).jpg")} alt="Missing" />
            </Grid>

            <Grid
              item
              container
              direction="row"
              justify="center"
              alignItems="center"
              md={4}
            >
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={3}
              >
                <Grid
                  item
                  direction="row"
                  justify="center"
                  alignItems="center"
                  md={12}
                >
                  <img src={ImageUrl("photo(2).jpg")} alt="Missing" />
                </Grid>
                <Grid
                  item
                  direction="row"
                  justify="center"
                  alignItems="center"
                  md={12}
                >
                  <img src={ImageUrl("photo(2).jpg")} alt="Missing" />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="row"
              justify="center"
              alignItems="center"
              md={4}
            >
              <img src={ImageUrl("photo(2).jpg")} alt="Missing" />
            </Grid>
          </Grid>
        </Container>
      </SecondBackground>
      <BlackBackground>
        <Container>
          <Carousel />
        </Container>
      </BlackBackground>
    </>
  );
};

export default DanceClass;
