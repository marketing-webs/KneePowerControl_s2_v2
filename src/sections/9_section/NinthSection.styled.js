import styled from 'styled-components'
import { mediaQueries } from "../../assets/styles/mediaQueries"

import background from '../../assets/images/BackgroundTenis.png'

export const SectionBackground = styled.div`
    overflow-x: hidden;
    overflow-y: hidden;
    background-repeat: no-repeat;
    background-size: cover;
    
    @media (min-width: 1080px) {
        background-image: url(${background}); 
    }

    ${mediaQueries("xs")`
        margin: 50px 0px 0px;
    `}


`;

export const MainTitle = styled.h2`
    font-size: 24px;
    text-align: center;
    text-shadow: none;
    color: ${({ theme }) => theme.colors.black};
    margin: 50px auto 40px;
    width: 90%;

    ${mediaQueries("xs")`
        font-size: 40px;

        margin: 40px auto 40px;

    `}
    ${mediaQueries("lg")`
       transform: translate(90px);
       width: 50%;
    `}


    span {
        color: ${({ theme }) => theme.colors.green};
    }
`;

export const StyledParagraph = styled.p`
    width: 90%;
    font-size: 14px;
    line-height: 1.7rem;
    text-align: left;
    margin: auto;


    ${mediaQueries("xs")`
        width: 80%;
        font-size: 16px;
    `}
`;

export const ContentWrapper = styled.div`
    max-width: 1100px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    ${mediaQueries("sm")`
        justify-content: flex-end;
        align-items: flex-end;
        margin-bottom: 55px;
    `}
`;

export const PlayerWrapper = styled.div`
    position: absolute;
    left: -200px;
    bottom: -60px;

    @media (min-width: 1024px) {
        left: -160px;
        bottom: -55px;
    }

    @media (min-width: 1440px) {
        left: -250px;
        bottom: -55px;
    }

    display: none;

    ${mediaQueries("sm")`
        display: block;
    `};
`;

export const PlayerMobile = styled.div`
   display: block;

   ${mediaQueries("xs")`
        display: none;
    `};
`;


export const ChartSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 00px 30px;
    width: 95%;

    ${mediaQueries("xs")`
        width: 80%;
        margin: 40px 30px;
    `};
    ${mediaQueries("sm")`
        width: 70%;
    `};
`;

export const ChartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 95%;
    margin: auto;

    ${mediaQueries("xs")`
        flex-direction: row;
    `};
    
    ${mediaQueries("sm")`
        width: 90%;
    `};
`;

export const ChartDescriptionWrapper = styled.div`
    max-width: 310px;

    p {
        font-size: 12px;

        font-weight: 500;

        ${mediaQueries("xs")`
            margin-left: 21px;
        text-align: left;
    `};
    }
`;

export const Chart = styled.div`
    max-width: 400px;
    height: auto;
`;

export const ChartList = styled.ul`
        margin: 30px 0px;

       ${mediaQueries("xs")`
            margin-left: 30px;
       `};
    li {
        text-align: left;
        font-weight: 700;
        margin-bottom: 10px;
        position: relative;
        margin-left: 20px;

        :nth-child(1){
            ::before {
            content: '■';
            font-size: 30px;
            position: absolute;
            left: -27px;
            bottom: -4px;
            color: #F9BA20;
        }
        }
        :nth-child(2){
            ::before {
            content: '■';
            font-size: 30px;
            position: absolute;
            left: -27px;
            bottom: -4px;
            color: #27A449;
        }
        }
        :nth-child(3){
            ::before {
            content: '■';
            font-size: 30px;
            position: absolute;
            left: -27px;
            bottom: -4px;
            color: #4F4DA5;
        }
        }
        :nth-child(4){
            ::before {
            content: '■';
            font-size: 30px;
            position: absolute;
            left: -27px;
            bottom: 24px;
            color: #8169B2;
        }
        }
    }
`;


export const SecondTitle = styled.h3`
    font-size: 18px;
    margin: 40px 0px 50px;
    text-align: center;

    ${mediaQueries("xs")`
        margin-left: 30px;
        font-size: 22px;
    `};
`;