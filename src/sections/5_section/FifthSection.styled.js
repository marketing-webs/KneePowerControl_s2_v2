import styled from 'styled-components'
import { mediaQueries } from "../../assets/styles/mediaQueries"

import background from '../../assets/images/background-5.png'

export const SectionBackground = styled.div`
    overflow-x: hidden;
    background-image: url(${background}); 
    background-repeat: no-repeat;
    background-size: cover;

    ${mediaQueries("xs")`
        padding: 70px 0px;
    `}

    margin: 50px 0px 0px;

`;

export const MainTitle = styled.h2`
    font-size: 24px;
    text-align: center;
    text-shadow: none;
    color: ${({ theme }) => theme.colors.black};
    margin: 50px auto 40px;

    ${mediaQueries("xs")`
        font-size: 40px;
        width: 40%;
        margin: 40px auto 40px;
    `}

    span {
        color: ${({ theme }) => theme.colors.green};
    }
`;

export const CardWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;


export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    width: 260px;
    margin: 10px;
    padding:  20px;
    margin: 10px;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colors.white};

    h3 {
        width: 100%;
        font-size: 22px;
        text-align: center;
        color: ${({ theme }) => theme.colors.green};
        @media (min-width: 768px) {
            font-size: 26px;
        }
    }

    img {
        width: 80px;
        height: auto;
        margin: 10px auto;
    }

    div {
        text-align: left;
        font-size: 14px;
        @media (min-width: 768px) {
            font-size: 16px;
        }

        span {
            margin-top: 10px;
            position: relative;

            ::before {
                content: '•';
                position: relative;
                font-size: 50px;
                line-height: 0px;
                top: 10px;

                color: ${({ theme }) => theme.colors.gold}
            }
        }
    }
`;