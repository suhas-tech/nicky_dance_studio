import React from "react";

import Routes from "./Routes";
import Header from "./Header";
import Footer from "./Footer";

const Router = (props) => {
    return (
        <React.Fragment>
            <Header />
            <Routes />
            <Footer />
        </React.Fragment>
    );
};

export default Router;
