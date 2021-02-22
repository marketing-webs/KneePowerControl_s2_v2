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

    ${mediaQueries("xs")`
        font-size: 40px;
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

export const SttyledList = styled.ul`
    width: 100%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;

    li {
        width: 290px;
        height: auto;
        margin: 20px;

        ${mediaQueries("xs")`
            transform: translateX(-30px);
        `}

        img {
            transform: translateX(-15px);
            @media (min-width: 678px) {
                transform: translateX(0px);
            }
        }

        p {
            font-size: 16px;
            font-weight: 500px;
            ${mediaQueries("xs")`
                transform: translateX(15px);
                margin-top: 10px;
            `}
        }
    }
`;