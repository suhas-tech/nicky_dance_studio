import React from "react";
import {
  Container,
  SubscribeButton,
  YouTubeWrapper,
  Button,
  BlackBackground
} from "../../styles/commonStyles";
import YouTube from "react-youtube";
import {
  LogoVideoWrapper,
  DisplayCenter,
  TranslateLeft,
  TranslateRight,
  TeamDetails,
  PositionRelative,
  MarginY
} from "./style";
import { Grid } from "@material-ui/core";

import { ImageUrl, VideoUrl } from "../../utils/url";

// import * as Actions from "../../actions/actions";

const Home = props => {
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
      list: "PLW7SiZroZ_Arn6nKsUUiikwM04o8TBWqH",
      iv_load_policy: 3,
      rel: 0
    }
  };

  const opts1 = {
    height: "100%",
    width: "100%",

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
      <LogoVideoWrapper>
        <video muted autoPlay loop>
          <source src={VideoUrl("logo_revel_main.mp4")} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </LogoVideoWrapper>
      <Grid item container direction="row" justify="center" alignItems="center">
        <SubscribeButton>Subscribe</SubscribeButton>
      </Grid>
      <Container>
        <MarginY>
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
              xs={12}
            >
              <YouTubeWrapper>
                <YouTube
                  videoId="yRLeZnhpNSE"
                  opts={opts1}
                  // onReady={_onReady}
                />
              </YouTubeWrapper>
            </Grid>
          </Grid>
        </MarginY>
      </Container>

      <Container>
        <MarginY>
          <DisplayCenter>
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
                xs={12}
                md={6}
              >
                <div>
                  <TranslateLeft src={ImageUrl("nicky.jpg")} />
                </div>
              </Grid>
              <Grid
                item
                direction="row"
                justify="center"
                alignItems="center"
                xs={12}
                md={6}
              >
                <TeamDetails>
                  <p className="team"> Team Nicky Pinto</p>
                  <p className="text"> Events/Workshops </p>
                  <p className="booking">
                    Bookings - nickypintoofficial@gmail.com
                  </p>
                  <>
                    <PositionRelative className="bookNow">
                      <Button>
                        <span>Book Now</span>
                      </Button>
                    </PositionRelative>
                  </>
                </TeamDetails>
              </Grid>
            </Grid>
          </DisplayCenter>
        </MarginY>
      </Container>
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
              direction="row"
              justify="center"
              alignItems="center"
              xs={12}
            >
              <YouTubeWrapper>
                <YouTube opts={opts} />
              </YouTubeWrapper>
            </Grid>
          </Grid>
        </Container>
      </BlackBackground>

      <Container>
        <MarginY>
          <DisplayCenter>
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
                xs={12}
                md={6}
              >
                <TeamDetails>
                  <p className="team"> Nostalgia</p>
                  <p className="text"> Events/Workshops </p>
                  <p className="booking">
                    Bookings - nostalgiaofficialtrio@gmail.com
                  </p>
                  <>
                    <PositionRelative className="bookNow">
                      <Button>
                        <span>Book Now</span>
                      </Button>
                    </PositionRelative>
                  </>
                </TeamDetails>
              </Grid>
              <Grid
                item
                direction="row"
                justify="center"
                alignItems="center"
                xs={12}
                md={6}
              >
                <TranslateRight src={ImageUrl("nicky.jpg")} />
              </Grid>
            </Grid>
          </DisplayCenter>
        </MarginY>
      </Container>
    </>
  );
};

export default Home;
