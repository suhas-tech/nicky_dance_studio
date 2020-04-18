import React, { useState } from "react";
import {
  InputWrapper,
  SubmitButton,
  Container,
  PositionRelative,
  PageHeader,
  FormContainer,
  PageTitle
} from "../../styles/commonStyles";
import { WinnerTitle, InputImage, InputImageLabel } from "./style";
import { TextField } from "@material-ui/core";
import UploadIcon from "../../svg/UploadIcon";
import Grid from "@material-ui/core/Grid";
import { ImageUrl, VideoUrl } from "../../utils/url";

const Fans = () => {
  const initialFormData = {
    name: "",
    mail: "",
    phone: "",
    youtube: "",
    facebook: "",
    instagram: "",
    twitter: ""
  };

  const initialUrlData = {
    youtube: "",
    facebook: "",
    instagram: "",
    twitter: ""
  };
  const [formData, setformData] = useState(initialFormData);
  const [screenshotUrl, setScreenshotUrl] = useState(initialUrlData);

  const onFormChnage = (name, e) => {
    setformData({ ...formData, [name]: e.target.value });
  };

  const handleChange = (name, e) => {
    setScreenshotUrl({
      ...screenshotUrl,
      [name]: URL.createObjectURL(e.target.files[0])
    });
    setformData({ ...formData, [name]: e.target.files[0] });
  };

  return (
    <div>
      <PageHeader>
        <Container>
          <PageTitle>
            Be the lucky fan to win a gift hamper and dine and interact with Nicky Pinto
          </PageTitle>
        </Container>
      </PageHeader>
      <Container>
        <WinnerTitle>
          <p>Winner</p>
          <p>Name will be announced on 12th December</p>
        </WinnerTitle>
      </Container>
      <Container>
        <Grid container justify="center" spacing={3}>
          <Grid xs={12} md={8} item>
            <FormContainer>
              <InputWrapper>
                <TextField
                  variant="outlined"
                  label="Name"
                  value={formData.name}
                  onChange={e => onFormChnage("name", e)}
                  fullWidth
                />
              </InputWrapper>
              <InputWrapper>
                <TextField
                  variant="outlined"
                  label="E Mail"
                  value={formData.mail}
                  onChange={e => onFormChnage("mail", e)}
                  fullWidth
                />
              </InputWrapper>
              <InputWrapper>
                <TextField
                  variant="outlined"
                  label="Phone"
                  value={formData.phone}
                  onChange={e => onFormChnage("phone", e)}
                  fullWidth
                />
              </InputWrapper>
              <InputWrapper>
                <InputImageLabel>
                  Subscribe to Nicky Pinto's YouTube Channel and click on the bell icon and Upload the
                  screenshot
                  {screenshotUrl.youtube === "" ? (
                    <UploadIcon />
                  ) : (
                    <img alt="Screenshot missing" src={screenshotUrl.youtube} />
                  )}
                  <InputImage
                    type="file"
                    accept=".jpeg,.png,.jpg"
                    name="youtube"
                    onChange={e => handleChange("youtube", e)}
                  />
                </InputImageLabel>
              </InputWrapper>
              <InputWrapper>
                <InputImageLabel>
                  Hit the like button on Nicky Pinto's FB Page - @nickyshimon
                  and Upload the screenshot
                  {screenshotUrl.facebook === "" ? (
                  <UploadIcon />) : (
                    <img alt="Screenshot missing" src={screenshotUrl.facebook} />
                  )}
                  <InputImage
                    type="file"
                    accept=".jpeg,.png,.jpg"
                    name="facebook"
                    onChange={e => handleChange("facebook", e)}
                  />
                </InputImageLabel>
              </InputWrapper>
              <InputWrapper>
                <InputImageLabel>
                  Follow nicky.pinto on instagram and upload a screenshot
                  {screenshotUrl.instagram === "" ? (
                  <UploadIcon /> ) : (
                    <img alt="Screenshot missing" src={screenshotUrl.instagram} />
                  )}
                  <InputImage
                    type="file"
                    accept=".jpeg,.png,.jpg"
                    name="instagram"
                    onChange={e => handleChange("instagram", e)}
                  />
                </InputImageLabel>
              </InputWrapper>
              <InputWrapper>
                <InputImageLabel>
                  Follow @nickyshimon on Twitter and upload a screenshot
                  {screenshotUrl.twitter === "" ? (
                  <UploadIcon /> ) : (
                    <img alt="Screenshot missing" src={screenshotUrl.twitter} />
                  )}
                  <InputImage
                    type="file"
                    accept=".jpeg,.png,.jpg"
                    name="twitter"
                  />
                </InputImageLabel>
              </InputWrapper>
              <PositionRelative>
                <SubmitButton style={{ margin: "30px auto 0px" }}>
                  <span>Submit</span>
                </SubmitButton>
              </PositionRelative>
            </FormContainer>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Fans;
