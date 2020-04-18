import React, { useState, Component } from "react";
import { withRouter } from "react-router-dom";
import {
  Container,
  PositionRelative,
  PageHeader,
  SubmitButton,
  FormContainer,
  PageTitle,
  InputWrapper
} from "../../styles/commonStyles";
import { TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const ContactUs = () => {
  const initialFormData = {
    name: "",
    mail: "",
    phone: "",
    youtube: "",
    facebook: "",
    instagram: "",
    twitter: ""
  };

  const [formData, setformData] = useState(initialFormData);

  const onFormChnage = (name, e) => {
    setformData({ ...formData, [name]: e.target.value });
  };
  return (
    <div>
      <PageHeader>
        <Container>
          <PageTitle>
          Contact
          </PageTitle>
        </Container>
      </PageHeader>
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
                <TextField
                  variant="outlined"
                  multiline
                  rows="4"
                  label="Comment"
                  value={formData.comments}
                  onChange={e => onFormChnage("comments", e)}
                  fullWidth
                />
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

export default withRouter(ContactUs);
