import styled from 'styled-components'
import { mediaQueries } from "../../assets/styles/mediaQueries";

export const SectionBackground = styled.div`
    overflow-x: hidden;
    padding: 50px 0px 20px;
    background-image: linear-gradient(
    to bottom,
    #282753,
    #4F4DA5
  );

    ${mediaQueries("sm")`
        padding: 50px 0px;
    `}
`;

export const MainTitle = styled.h2`
    font-size: 24px;
    text-align: center;
    text-shadow: none;
    color: ${({ theme }) => theme.colors.white};
    margin: 0px auto 40px;
    width: 95%;

    ${mediaQueries("xs")`
        font-size: 40px;
    `}

    ${mediaQueries("sm")`
        text-align: left;
    `}

    span {
        color: ${({ theme }) => theme.colors.green};
    }

`;

export const ContentWrapper = styled.div`
    max-width: 1199px;
    width: 98%;
    margin: auto;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    position: relative;

    ${mediaQueries("sm")`
        flex-direction: row;
    `}
`;

export const CertificateWrapper = styled.div`
    width: 95%;

    ${mediaQueries("xs")`
        width: 367px;
    `}
`;

export const DescriptionWrapper = styled.div`
        width: 95%;

        ${mediaQueries("xs")`
            width: 80%;
        `}

        p {
            color: ${({ theme }) => theme.colors.white};
            text-align: left;
        }
`;