import styled from "styled-components";

export const CardWrapper = styled.div`
    position: relative;
    min-height:400px;
    & .card {
        position: relative;
        width:100%;
        height:100%;
        background: #232323;
        border-radius: 20px;
        overflow: hidden;
    }

    @media (max-width: 767px) {
        & .card::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background:   ${(props) => props.theme.colors.secondary};
     
    }
    & .card:hover::before {
    }

    & .card:hover .image-box .text {
        color: #232323;
    }

    /* watermark */
    & .card::after {
        content: "${(props) => props.name}";
        position: absolute;
        top: 30%;
        left: -20%;
        font-size: 8em;
        font-weight: 800;
        font-style: italic;
        color: rgba(255, 255, 255, 0.04);
    }

    /* style product */
    & .card .image-box {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10000;
        width: 100%;
        height: 220px;
        transition: 0.5s;
    }
    & .card:hover .image-box {
        top: 0;
        transform: translateY(0);
    }
    & .card .image-box .text {
        position: absolute;
        font-size: 190px;
        top: -15%;
        color: #fff;
    
        transition: color 0.5s ease;
    }

    /* style product info */
    & .card .content-box {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100px;
        text-align: center;
        transition: 1s;
        z-index: 10;
    }
    & .card:hover .content-box {
        height: 150px;
    }
    & .card .content-box h2 {
        position: relative;
        font-weight: 600;
        letter-spacing: 1px;
        color: #fff;
        font-size: 28px;
    }
    & .card .content-box .size,
    & .card .content-box .color {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px 20px;
        transition: 0.5s;
        opacity: 0;
        visibility: hidden;
    }
    & .card:hover .content-box .size {
        opacity: 1;
        visibility: visible;
        transition-delay: 0.5s;
    }
    & .card:hover .content-box .color {
        opacity: 1;
        visibility: visible;
        transition-delay: 0.6s;
    }
    & .card .content-box .size h3,
    & .card .content-box .color h3 {
        color: #fff;
        font-weight: 300;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-right: 10px;
    }
    & .card .content-box .size span {
        width: 26px;
        height: 26px;
        text-align: center;
        line-height: 26px;
        font-size: 14px;
        display: inline-block;
        color: #111;
        background: #fff;
        margin: 0 5px;
        transition: 0.5s;
        cursor: pointer;
    }
    & .card .content-box .size span:hover {
        background: #9bdc28;
    }
    & .card .content-box .color span {
        width: 20px;
        height: 20px;
        background: #ff0;
        border-radius: 50%;
        margin: 0 5px;
        cursor: pointer;
    }
    & .card .content-box .color span:nth-child(2) {
        background: #9bdc28;
    }
    & .card .content-box .color span:nth-child(3) {
        background: #03a9f4;
    }
    & .card .content-box .color span:nth-child(4) {
        background: #e91e63;
    }
    }

    /* circle style */
    & .card::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background:   ${(props) => props.theme.colors.secondary};
        clip-path: circle(150px at 80% 20%);
        transition: 0.5s ease-in-out;
    }
    & .card:hover::before {
        clip-path: circle(300px at 80% -20%);
    }

    & .card:hover .image-box .text {
        color: #232323;
    }

    /* watermark */
    & .card::after {
        content: "${(props) => props.name}";
        position: absolute;
        top: 30%;
        left: -20%;
        font-size: 8em;
        font-weight: 800;
        font-style: italic;
        color: rgba(255, 255, 255, 0.04);
    }

    /* style product */
    & .card .image-box {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10000;
        width: 100%;
        height: 220px;
        transition: 0.5s;
    }
    & .card:hover .image-box {
        top: 0;
        transform: translateY(0);
    }
    & .card .image-box .text {
        position: absolute;
        font-size: 190px;
        top: -15%;
        color: #fff;
    
        transition: color 0.5s ease;
    }

    /* style product info */
    & .card .content-box {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100px;
        text-align: center;
        transition: 1s;
        z-index: 10;
    }
    & .card:hover .content-box {
        height: 150px;
    }
    & .card .content-box h2 {
        position: relative;
        font-weight: 600;
        letter-spacing: 1px;
        color: #fff;
        font-size: 28px;
    }
    & .card .content-box .size,
    & .card .content-box .color {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px 20px;
        transition: 0.5s;
        opacity: 0;
        visibility: hidden;
    }
    & .card:hover .content-box .size {
        opacity: 1;
        visibility: visible;
        transition-delay: 0.5s;
    }
    & .card:hover .content-box .color {
        opacity: 1;
        visibility: visible;
        transition-delay: 0.6s;
    }
    & .card .content-box .size h3,
    & .card .content-box .color h3 {
        color: #fff;
        font-weight: 300;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-right: 10px;
    }
    & .card .content-box .size span {
        width: 26px;
        height: 26px;
        text-align: center;
        line-height: 26px;
        font-size: 14px;
        display: inline-block;
        color: #111;
        background: #fff;
        margin: 0 5px;
        transition: 0.5s;
        cursor: pointer;
    }
    & .card .content-box .size span:hover {
        background: #9bdc28;
    }
    & .card .content-box .color span {
        width: 20px;
        height: 20px;
        background: #ff0;
        border-radius: 50%;
        margin: 0 5px;
        cursor: pointer;
    }
    & .card .content-box .color span:nth-child(2) {
        background: #9bdc28;
    }
    & .card .content-box .color span:nth-child(3) {
        background: #03a9f4;
    }
    & .card .content-box .color span:nth-child(4) {
        background: #e91e63;
    }
  
`;
