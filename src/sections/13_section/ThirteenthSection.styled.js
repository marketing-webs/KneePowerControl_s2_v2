import styled from 'styled-components'
import { mediaQueries } from "../../assets/styles/mediaQueries";

export const SectionBackground = styled.div`
    overflow-x: hidden;
    padding: 50px 0px;
    position: relative;
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
        text-align: left;
        margin: 0px 0px 20px;  
    `}

    span {
        color: ${({ theme }) => theme.colors.green};
    }

`;

export const ContentWrapper = styled.div`
    max-width: 1088px;
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const DoctorBox = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 0px 10px 0px rgb(201 201 201);
    position: relative;
    border-radius: 15px;
    padding: 20px 20px 0px;

    @media (min-width: 769px) {
        padding: 20px;
    }    
    p {
        text-align: left;
        margin-bottom: 20px;
        width: 100%;

        ${mediaQueries("sm")`
            width: 80%;
        `}
    
        span {
            color: ${({ theme }) => theme.colors.green};
            font-weight: 700;
        }
    }
`;

export const DoctorSignature = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;

    @media (min-width: 769px) {
            width: 80%;
        }

    p {
        width: 100%;
        font-size: 16px;
        text-align: center;

        @media (min-width: 769px) {
            width: 44%;
        }
        span {
            font-size: 15px;
            color: ${({ theme }) => theme.colors.black};

            @media (min-width: 769px) {
                font-size: 18px;
            }
        }
    }
`;

export const DoctorImage = styled.img`
    position: relative;

    @media (min-width: 768px) {
        width: 50%;
    }

    @media (min-width: 1024px) {
        display: block;
        position: absolute;
        height: 714px;
        width: auto;
        bottom: -50px;
        right: -150px;
    }

`;

export const BackgroundMask = styled.div`
    z-index: 1;
${mediaQueries("xs")`
        position: absolute;
        opacity: 1;
        width: 100%;
        bottom: 0px;
        height: 150px;
        background-image: linear-gradient(
        to bottom,
        transparent,
        #fff,
        #fff
    );
    `}
`;