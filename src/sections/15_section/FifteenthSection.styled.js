import styled from 'styled-components';
import { mediaQueries } from "../../assets/styles/mediaQueries"

export const SectionBackground = styled.div`
    padding: 70px 0px;
    overflow-x: hidden;
    background-image: linear-gradient(
    to right,
    #FFE5A7,
    #FFF5DE,
    #FFE5A7
  );
`;

export const MainTitle = styled.h2`
    font-size: 24px;
    text-align: center;
    text-shadow: none;
    margin: 0px 0px 50px;

    ${mediaQueries("xs")`
        font-size: 40px;
        margin: 0px 0px 50px;
    `}

    span {
        color: ${({ theme }) => theme.colors.green};
    }
`;

export const UnderTitle = styled.h3`
    font-size: 16px;
    text-align: center;
    margin: 25px auto;

    ${mediaQueries("xs")`
        font-size: 26px;
    `}
`;

export const ContentWrapper = styled.div`
    max-width: 1227px;
    width: 98%;
    margin: auto;

`;