import styled, { keyframes } from "styled-components";

export const PageNotFoundWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const MessageBox = styled.div`
    color: #fff;
    font-size: 32px;
`;
