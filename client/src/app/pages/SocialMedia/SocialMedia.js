import React from "react";
import { Container, SubscribeButton,YouTubeWrapper } from "../../styles/commonStyles";
import YouTube from "react-youtube";
import Grid from "@material-ui/core/Grid";

const SocialMedia = () => {
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
    <div>
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

          <Grid
            item
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <SubscribeButton>Subscribe</SubscribeButton>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SocialMedia;
