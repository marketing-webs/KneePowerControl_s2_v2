import styled from 'styled-components'
import { mediaQueries } from "../../assets/styles/mediaQueries";


export const SectionBackground = styled.div`
    overflow-x: hidden;
    padding-bottom: 30px;
`;

export const MainTitle = styled.h2`
    font-size: 24px;
    text-align: center;
    text-shadow: none;
    color: ${({ theme }) => theme.colors.black};
    margin: 0px auto 40px;
    width: 95%;

    ${mediaQueries("xs")`
        font-size: 40px;
        width: 80%;
        margin: 50px auto 60px;  
    `}

    span {
        color: ${({ theme }) => theme.colors.green};
    }

`;

export const ContentWrapper = styled.div`
    max-width: 1364px;
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

// Swiper css

export const BoxWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 0px;

    @media (min-width: 1025px) {
        flex-direction: row;
    }
 
`;

export const ProductWrapper = styled.div`
    position: relative;
    width: 90%;
    margin: auto;
    /* height: 370px; */
    border-radius: 15px;
    z-index: 99;

    @media (min-width: 678px) {
        width: 536px;
        min-width: 300px;
    }

    ${mediaQueries("lg")`
        margin: 15px;
        min-width: 536px;
    `}
`;

export const ProductTitle = styled.div`
    background-color: ${({ theme }) => theme.colors.gold};
    border-radius: 15px 15px 0px 0px;
    padding: 1px 10px 8px;
    h3 {
        margin-bottom: 0px;
        text-align: center;
    }
`;

export const ProductDestcription = styled.div`
    background-color: ${({ theme }) => theme.colors.gold};
    border-radius: 0px 0px 15px 15px;
    padding: 8px 10px 8px;

    p {
        font-size: 14px;
    }
`;

export const RedWrapper = styled.div`
    max-width: 398px;
    border: 3px solid #E20000;
    background-color: #FEF2F2;
    border-radius: 15px;
    padding: 20px 15px 30px;
    transform: translateY(10px);
    
    @media (min-width: 1025px) {
        transform: translateY(0px);
    }

    p {
        font-size: 14px;
        text-align: left;
        font-weight: 500;
        @media (min-width: 768px) {
            font-size: 16px;
        }
    }

    h3 {
        color: #E20000;
    }
`;


export const GreenWrapper = styled.div`
    max-width: 398px;
    background-color: #F4FAF5;
    border: 3px solid #27A449;
    border-radius: 15px;
    padding: 20px 15px 30px;
    transform: translateY(-10px);
    z-index: 0;
    
    @media (min-width: 1025px) {
        transform: translateY(0px);
    }

    p {
        font-size: 14px;
        font-weight: 500;
        text-align: left;
        @media (min-width: 768px) {
            font-size: 16px;
        }
    }

    h3 {
        color: #27A449;
    }
`;