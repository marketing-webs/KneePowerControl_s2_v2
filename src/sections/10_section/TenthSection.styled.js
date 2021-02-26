import styled from 'styled-components'
import { mediaQueries } from "../../assets/styles/mediaQueries";

import checkmark from '../../assets/images/checkmark-green.png'


export const SectionBackground = styled.div`
    overflow-x: hidden;
    overflow-y: hidden;
    position: relative;
`;

export const MainTitle = styled.h2`
    font-size: 24px;
    text-align: center;
    text-shadow: none;
    color: ${({ theme }) => theme.colors.black};
    margin: 20px auto 40px;
    width: 95%;

    ${mediaQueries("xs")`
        font-size: 40px;
        width: 50%;
        margin: 50px auto 60px;  
    `}

    span {
        color: ${({ theme }) => theme.colors.green};
    }
`;

export const ContentWrapper = styled.div`
    max-width: 1100px;
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const StyledList = styled.ul`
    max-width: 800px;
    width: 90%;
    margin: auto;
`;

export const StyledItem = styled.li`
    font-weight: 700;
    text-align: left;
    position: relative;
    margin-bottom: 30px;
    font-size: 14px;

    ${mediaQueries("xs")`
        font-size: 18px;
    `}

    span {
        color: ${({ theme }) => theme.colors.green}
    }

    ::before {
        content: '';
        position: absolute;
        background-image: url(${checkmark});
        background-repeat: no-repeat;
        left: -25px;
        top: 5px;
        width: 20px;
        height: 20px;
    }
`;

export const MansWrapper = styled.div`
    display: none;
    @media (min-width: 1440px) {
        display: block;
        position: absolute;
        /* height: 100%; */
        width: auto;
        right: 0px;
    }
`;

export const WomansWrapper = styled.div`
    display: none;
    @media (min-width: 1440px) {
        display: block;
        position: absolute;
        /* height: 100%; */
        object-fit: cover;
        width: auto;
        left: 0px;
    }
`;