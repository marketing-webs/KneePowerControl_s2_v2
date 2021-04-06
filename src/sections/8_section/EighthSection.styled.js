import styled from 'styled-components'
import { mediaQueries } from "../../assets/styles/mediaQueries"

import checkmark from '../../assets/images/checkmark-gold.png'

export const SectionBackground = styled.div`
    padding: 30px 0px 50px;
    overflow-x: hidden;
    background-image: linear-gradient(
    to bottom,
    #282753,
    #4F4DA5
  );

  ${mediaQueries("lg")`
        margin-bottom: 150px;
        height: 410px;
        overflow-x: visible;
    `}
`;

export const MainTitle = styled.h2`
    font-size: 24px;
    text-align: center;
    text-shadow: none;
    color: ${({ theme }) => theme.colors.white};

    ${mediaQueries("xs")`
        font-size: 40px;
    `}
    ${mediaQueries("sm")`
    margin-bottom: 40px;
    `}

    span {
        color: ${({ theme }) => theme.colors.gold};
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${mediaQueries("xs")`
        flex-direction: row;
        max-width: 1088px;
        margin: auto;
    `}
`;

export const FirstWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    

    ${mediaQueries("lg")`
        flex-direction: row;
    `}
`;

export const SecondWrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    width: 100%;

    ${mediaQueries("lg")`
        flex-direction: row;
    `}
`;

export const FirstProductWrapper = styled.div`
    width: 260px;
    height: auto;
    margin: auto;
    transform: translate(0px, 80px);
    


    @media (min-width: 1240px) {
        transform: translate(70px, 20px);
    }
`;

export const SecondProductWrapper = styled.div`
    width: 260px;
    height: auto;
    margin: auto;
    transform: translateY(80px);

    ${mediaQueries("lg")`
        transform: translate(-75px, 18px);
    `}
`;

export const FirstListWrapper = styled.ul`
    background-color: ${({ theme }) => theme.colors.white};
    margin: 10px;
    padding: 70px 20px 20px 35px;
    border-radius: 15px;
    box-shadow: 0px 0px 10px 0px rgb(201 201 201);

    ${mediaQueries("xs")`
        padding: 40px 20px 20px 50px;
        width: 363px;
        height: auto;
    `}
       ${mediaQueries("lg")`
            width: 383px;
            padding: 10px 20px 20px 50px;
        `}

    li {
        text-align: left;
        margin-bottom: 10px;
        font-size: 16px;
        position: relative;

        ::before {
            content: '';
            position: absolute;
            background-repeat: no-repeat;
            background-image: url(${checkmark});
            left: -22px;
            top: 7px;
            width: 20px;
            height: 20px;
            font-size: 40px;
        }
    }

    h3 {
        color: #26B0E3;
    }
`;

export const SecondListWrapper = styled.ul`
    background-color: ${({ theme }) => theme.colors.white};
    margin: 10px;
    padding: 70px 20px 20px 35px;
    border-radius: 15px;
    box-shadow: 0px 0px 10px 0px rgb(201 201 201);

    ${mediaQueries("xs")`
        padding: 40px 20px 20px 40px;
        width: 363px;
        height: auto;
    `}
        ${mediaQueries("lg")`
            width: 383px;
            padding: 10px 20px 20px 40px;
        `}

    li {
        text-align: left;
        margin-bottom: 10px;
        font-size: 16px;
        position: relative;

        ::before {
            content: '';
            position: absolute;
            background-repeat: no-repeat;
            background-image: url(${checkmark});
            left: -22px;
            top: 7px;
            width: 20px;
            height: 20px;
            font-size: 40px;
        }
    }

    h3 {
        color: #27A449;
    }
`;