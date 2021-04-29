import styled from "styled-components";

export const HomeBanner = styled.div`
    width: 100%;
    position: relative;
    background-color: ${(props) => props.theme.colors.primary};
    color: #fff;
    display: flex;
    justify-content: center;
    max-height: 500px;
    height: 350px;
    padding: 20px;
    & .logo {
        display: flex;
        align-items: center;
    }
    & .picture {
        > img {
            height: 350px;
            width: 310px;
            object-fit: contain;
        }
    }
`;

export const TranslateLeft = styled.img`
    transform: translateZ(-939px) perspective(1210px) rotateY(-327deg) scale(1)
        translateY(10.2847px);
    -webkit-box-shadow: -12px 3px 26px -8px rgba(0, 0, 0, 0.65);
    -moz-box-shadow: -12px 3px 26px -8px rgba(0, 0, 0, 0.65);
    box-shadow: -12px 3px 26px -8px rgba(0, 0, 0, 0.65);
`;

export const TranslateRight = styled.img`
    transform: translateZ(-939px) perspective(1210px) rotateY(327deg) scale(1)
        translateY(10.2847px);
    -webkit-box-shadow: -12px 3px 26px -8px rgba(0, 0, 0, 0.65);
    -moz-box-shadow: -12px 3px 26px -8px rgba(0, 0, 0, 0.65);
    box-shadow: -12px 3px 26px -8px rgba(0, 0, 0, 0.65);
`;

export const Section = styled.div`
    padding: 60px 0;

    &.green-background {
        background-color: #9bdc2830;
    }
`;

export const SectionTitle = styled.div`
    margin: 10px auto 20px;
    font-size: 22px;
    color: ${(props) => props.theme.colors.primary};
    opacity: 0.8;
    font-weight: 800;
    display: flex;
    padding-bottom: 10px;
`;

export const SectionBody = styled.div`
    margin: 10px 0 20px;
    font-size: 18px;
    color: ${(props) => props.theme.colors.black};
    opacity: 0.8;
    font-weight: 500;
    display: grid;
    grid-template-columns: 60% 40%;
    & .highlight {
        font-size: 20px;
        font-weight: 600;
    }

    & p {
        margin: 25px 0;
    }

    & .image img {
        width: 100%;
        height: 100%;
    }
`;

export const StyleCardSection = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 240px);
    justify-content: space-between;
    grid-gap: 20px;
`;

export const MoreText = styled.div`
    font-size: 60px;
    font-weight: 600;
    text-align: right;
`;

export const VideosWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    grid-gap: 20px;
    & > div {
        transform: translateZ(-939px) perspective(1210px) rotateY(-327deg)
            scale(1) translateY(10.2847px);
    }
`;

export const Area = styled.div`
    .area {
        background: #4e54c8;
        background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
        width: 100%;
    }

    .circles {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .circles li {
        position: absolute;
        display: block;
        list-style: none;
        width: 20px;
        height: 20px;
        background: rgba(255, 255, 255, 0.2);
        animation: animate 25s linear infinite;
        bottom: -150px;
    }

    .circles li:nth-child(1) {
        left: 25%;
        width: 80px;
        height: 80px;
        animation-delay: 0s;
    }

    .circles li:nth-child(2) {
        left: 10%;
        width: 20px;
        height: 20px;
        animation-delay: 2s;
        animation-duration: 12s;
    }

    .circles li:nth-child(3) {
        left: 70%;
        width: 20px;
        height: 20px;
        animation-delay: 4s;
    }

    .circles li:nth-child(4) {
        left: 40%;
        width: 60px;
        height: 60px;
        animation-delay: 0s;
        animation-duration: 18s;
    }

    .circles li:nth-child(5) {
        left: 65%;
        width: 20px;
        height: 20px;
        animation-delay: 0s;
    }

    .circles li:nth-child(6) {
        left: 75%;
        width: 110px;
        height: 110px;
        animation-delay: 3s;
    }

    .circles li:nth-child(7) {
        left: 35%;
        width: 150px;
        height: 150px;
        animation-delay: 7s;
    }

    .circles li:nth-child(8) {
        left: 50%;
        width: 25px;
        height: 25px;
        animation-delay: 15s;
        animation-duration: 45s;
    }

    .circles li:nth-child(9) {
        left: 20%;
        width: 15px;
        height: 15px;
        animation-delay: 2s;
        animation-duration: 35s;
    }

    .circles li:nth-child(10) {
        left: 85%;
        width: 150px;
        height: 150px;
        animation-delay: 0s;
        animation-duration: 11s;
    }

    @keyframes animate {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
            border-radius: 0;
        }

        100% {
            transform: translateY(-1000px) rotate(720deg);
            opacity: 0;
            border-radius: 50%;
        }
    }
`;
