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
    margin: 30px auto 40px;
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
    max-width: 1370px;
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const CardItem = styled.div`
    width: 100%;
    box-shadow: 0px 0px 10px 0px rgb(201 201 201);
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 15px;
    margin: 7px;
    padding: 20px 15px;
    position: relative;

    ${mediaQueries("xs")`
        width: 260px;
    `}


    img {
        max-height: 80px;
        width: auto;
    }

    h3 {
        font-size: 18px;
    }

    p {
        font-size: 14px;
        text-align: left;
        
        ${mediaQueries("xs")`
            font-size: 16px;
        `}
    }
`;

export const StyledIcon = styled.img`
    position: absolute; 
    width: 39px;
    height: 73px;
    left: 10px;
    top: 10px;
`;