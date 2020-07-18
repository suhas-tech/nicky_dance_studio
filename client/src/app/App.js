import React from "react";
import { Router } from "react-router-dom";
import Routes from "./routes/Routes";
import history from "../history";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Header from "./commonComponent/Header/Header";
import "./styles/styles.css";
import Footer from "./commonComponent/Footer/Footer";

function App() {
  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes />
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
