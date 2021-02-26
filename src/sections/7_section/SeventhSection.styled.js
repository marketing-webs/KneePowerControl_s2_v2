import styled from 'styled-components'
import { mediaQueries } from "../../assets/styles/mediaQueries"

import background from '../../assets/images/background-people.png'

export const SectionBackground = styled.div`
    overflow-x: hidden;
    background-image: url(${background}); 
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 70px;
    margin: 0px 0px 0px;

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

export const ContentWrapper = styled.div`
    max-width: 1100px;
    margin: auto;

`;

export const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const StyledCard = styled.div`
    max-width: 260px;
    height: auto;
    margin: auto;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 15px;
    margin: 7px;
    padding: 20px;

    -webkit-box-shadow: 0px 0px 10px 0px rgba(201,201,201,1);
    -moz-box-shadow: 0px 0px 10px 0px rgba(201,201,201,1);
    box-shadow: 0px 0px 10px 0px rgba(201,201,201,1);

    img {
        transform: translateX(-5px);
        width: 220px;
        height: 220px;
        margin: auto;
        margin-bottom: 10px;
    }
    
    p {
        font-size: 16px;
        font-weight: 700;
        width: 90%;
        margin: auto;
    }
`;

export const GreenText = styled.div`
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
    padding: 20px 25px;
    border-radius: 15px;
    margin: auto;
    margin-top: 20px;
    width: 95%;

    p {
        font-weight: 700;
    }
`;