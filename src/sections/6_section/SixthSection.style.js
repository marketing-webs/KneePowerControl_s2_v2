import styled from 'styled-components'
import { mediaQueries } from "../../assets/styles/mediaQueries"
import { theme } from '../../assets/styles/Theme';

export const SectionBackground = styled.div`
    position: relative;
    overflow-x: hidden;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: linear-gradient(
    to bottom,
    #FFE5A7,
    #FFF5DE,
    #FFF5DE
  );

    ${mediaQueries("xs")`
        padding: 50px 0px 70px;
    `}
    /* margin: 50px 0px; */
`;

export const BackgroundMask = styled.div`
    z-index: 1;
${mediaQueries("xs")`
        position: absolute;
        opacity: 1;
        width: 100%;
        bottom: 0px;
        height: 110px;
        background-image: linear-gradient(
        to bottom,
        transparent,
        #fff,
        #fff
    );
    `}
`;

export const MainTitle = styled.h2`
    font-size: 24px;
    text-align: center;
    text-shadow: none;
    width: 90%;
    color: ${({ theme }) => theme.colors.black};
    margin: 20px auto 40px;

    ${mediaQueries("xs")`
        font-size: 40px;
        margin: 20px auto 40px;
    `}

    span {
        color: ${({ theme }) => theme.colors.green};
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1440px;
    margin: auto;

    @media (min-width: 1440px) {
        flex-direction: row;
    }
`;

export const ProductWrapper = styled.div`
      width: 90%;
      margin: auto;
      
      @media (min-width: 678px) {
        width: 50%;
    }
`;

export const ProductImage = styled.img`
    width: 100%;
`;


export const StyledList = styled.div`
  @media (min-width: 678px) {
        width: 70%;
    }
`;

export const ListItem = styled.div`
    background: ${({ theme }) => theme.colors.white};
    width: 90%;
    margin: auto;
    padding: 5px;
    border-radius: 15px;
    text-align: left;
    margin-bottom: 20px;
    
  

    /* ${mediaQueries("xs")`
        width: 812px;
    `} */
    
    div {
        background-color: ${({ theme }) => theme.colors.green};
        padding: 15px;
        border-radius: 15px;

        p {
            font-size: 16px;
            font-weight: 700;
            z-index: 99;
            
            color: ${({ theme }) => theme.colors.white};

            ${mediaQueries("xs")`
                font-size: 18px;
            `}
        }
    }

    p {
        font-size: 16px;
        padding: 5px;
    }
`;
