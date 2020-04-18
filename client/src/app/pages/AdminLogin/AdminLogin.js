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
import * as Actions from "../../actions/actions"

import { useDispatch, useSelector } from "react-redux";

const ContactUs = () => {
  const dispatch = useDispatch();
  const initialFormData = {
    email: "",
    password: "",
  };

  const [userLogin, setUserLogin] = useState(initialFormData);

  const onFormChange = (name, e) => {
    setUserLogin({ ...userLogin, [name]: e.target.value });
  };

  const LoginHandler = () => {
    dispatch(
      Actions.login({
        endPoint: `api/authenticate`,
        data : userLogin
      })
    );
  }

  return (
    <div>
      <PageHeader>
        <Container>
          <PageTitle>
           Admin Login
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
                  label="User Name"
                  value={userLogin.email}
                  onChange={e => onFormChange("email", e)}
                  fullWidth
                />
              </InputWrapper>
              <InputWrapper>
                <TextField
                  variant="outlined"
                  label="Password"
                  value={userLogin.password}
                  onChange={e => onFormChange("password", e)}
                  fullWidth
                />
              </InputWrapper>

          
              <PositionRelative>
                <SubmitButton onClick={LoginHandler} style={{ margin: "30px auto 0px" }}>
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
