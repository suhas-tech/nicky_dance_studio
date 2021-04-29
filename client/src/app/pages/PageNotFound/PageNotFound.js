import React from "react";

import { MessageBox, PageNotFoundWrapper } from "./style";
const PageNotFound = () => {
    return (
        <PageNotFoundWrapper>
            <MessageBox>
                <h1>404</h1>
                <p>
                    <span>Page</span>
                    <span> Not </span>
                    <span>Found</span>
                </p>
            </MessageBox>
        </PageNotFoundWrapper>
    );
};

export default PageNotFound;
