import styled from 'styled-components'
import { mediaQueries } from "../../assets/styles/mediaQueries"

export const SectionBackground = styled.div`
    padding: 70px 0px;
    overflow-x: hidden;
    background-image: linear-gradient(
    to bottom,
    #282753,
    #4F4DA5
  );
    
    ${mediaQueries("xs")`
        height: 440px;
        overflow: visible;
        margin-bottom: 215px;
    `}
`;

export const MainTitle = styled.h2`
    font-size: 24px;
    text-align: center;
    text-shadow: none;
    color: ${({ theme }) => theme.colors.white};

    ${mediaQueries("xs")`
        font-size: 40px;
    `}

    span {
        color: ${({ theme }) => theme.colors.gold};
    }
`;

export const ProductWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
    }
    @media (min-width: 1440px) {
        align-items: center;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin: 10px;

        @media (max-width: 768px) {
            margin: 30px auto 10px;
        } 

        h3 {
            color: ${({ theme }) => theme.colors.white};
            font-size: 18px;
            text-align: center;
            margin-bottom: 0px;

            ::before {
            color: ${({ theme }) => theme.colors.gold};
            font-size: 40px;
            width: 10px;
            height: 10px;
        }
    
        }

        img {
            margin
            
            : 15px 15px 0px;

            width: auto;
            height: auto;
    
        }
    }
`;

export const FirstBox = styled.div`
    position: relative;
    @media (min-width: 1440px) {
        width: 450px;
    }
    h3 {
        @media (min-width: 1440px) {
            position: absolute;
            left: -70px;
            top: 40px;
        }

        ::before {
            content: '1. ';
        }
    }
        img {
            max-width: 310px;
            max-height: 317px;
            @media (min-width: 1440px) {
                max-height: 450px;
                max-width: 450px;
            }
        }
    
 
`;
export const SecondBox = styled.div`
  @media (min-width: 1440px) {
     margin-left: 20px;
    }
    h3 {
        ::before {
            content: '2. ';
        }
    }
    img {
       max-width: 150px;
       @media (max-width: 768px) {
            max-width: 130px
        }
    }
`;
export const ThirdBox = styled.div`
  @media (min-width: 1440px) {
     margin-left: 20px;
    }
  h3 {
        ::before {
            content: '3. ';
        }
    }
    img {
       max-width: 150px;
       @media (max-width: 768px) {
            max-width: 130px
        }
    }
`;