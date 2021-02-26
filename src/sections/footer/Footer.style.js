import styled from 'styled-components'
import { mediaQueries } from "../../assets/styles/mediaQueries";
import Checkmark from "../../assets/images/checkmark-green.png"
import Arrow from "../../assets/images/Arrow.png"


export const SectionBackground = styled.div`
    padding: 5px 0px;
    overflow-x: hidden;
    background-image: linear-gradient(
    to right,
    #4F4DA4,
    #2A2957
  );
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-around;
    align-items: center;
    ${mediaQueries("sm")`
        flex-direction: row;
        width: 100%;
        margin: auto;
    `}

    img {
        width: 332px;
        padding: 10px 0px;
    }
`;

export const StyledList = styled.ul`
    width: 100%;
    max-width: 730px;
    padding: 10px 0px;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    
    ${mediaQueries("sm")`
        flex-direction: row;
        width: 40%;
    `}

    li {
        width: 100%;
        color: ${({ theme }) => theme.colors.white};
        margin: 0px 10px;

        ${mediaQueries("sm")`
            width: 70%;
            margin: 0px 10px;
        `}
    }
`;

export const Copyright = styled.p`
        color: ${({ theme }) => theme.colors.white};
        padding: 10px 0px;
        display: inline-block;
`;