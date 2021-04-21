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
  overflow-y: hidden;

    ${mediaQueries("xs")`
        padding: 0px 0px 60px;
        
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

export const MainTitleMobile = styled.h2`
  display: none;
  @media (max-width: 1439px) {
    font-size: 24px;
    text-align: center;
    text-shadow: none;
    width: 90%;
    color: ${({ theme }) => theme.colors.black};
    margin: 40px auto 30px;
    z-index: 99;
    display: block;
    transform: translateX(1px);

    ${mediaQueries("xs")`
        font-size: 40px;
    `};
    span {
      color: ${({ theme }) => theme.colors.green};
    }
  }

  
`;

export const MainTitle = styled.h2`
    display: none;
  @media (min-width: 1440px) {
    font-size: 40px;
    text-align: center;
    text-shadow: none;
    width: 90%;
    color: ${({ theme }) => theme.colors.black};
    margin: 40px auto 40px;
    z-index: 99;
    display: block;
    transform: translateX(1px);
    
    
      margin: 50px auto 20px;
    }

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

export const GlobalWrapper = styled.div`
  max-width: 1440px;
  margin: auto;
  position: relative;
`;

export const ProductWrapper = styled.div`
      width: 90%;
      margin: auto;
      
      @media (min-width: 678px) {
        width: 50%;
    }
`;

export const ProductImage = styled.img`
  @media (max-width: 1440px) {
      width: auto;
      max-height: 700px;
  }
  
`;

export const ProductImageDesktop = styled.img`
    margin: auto;
    @media (max-width: 1439px) {
      width: 100%;
      max-width: 600px;
    }
      @media (min-width: 1440px) {
        width: 100%;
        height: auto;
        position: absolute;
        max-width: 1000px;
        left: -210px;
        z-index: 0;
      }
 `;


export const StyledList = styled.div`
  @media (min-width: 678px) {
        width: 100%;
    }
  @media (min-width: 1440px) {
    transform: translateX(50px);
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-bottom: 15px;
    display: none;

      @media (min-width: 500px) {
        display: block;
        width: 70%;
      }
    
  

    /* ${mediaQueries("xs")`
        width: 812px;
    `} */

      button {  
        font-size: 13px;
        padding: 0px;
        line-height: 18px;
        border: none;
        background: transparent;
        cursor: pointer;
        width: 70px;
        margin: auto;
        align-self: center;
        color: white;
        font-weight: 600;
        border-bottom: 1px solid white;
        align-self: center;
        outline: none;
      }
  
    div {
        background-color: ${({ theme }) => theme.colors.green};
        padding: 15px;
        border-radius: 15px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

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

export const MobileListItem = styled(ListItem)`
    @media (max-width: 500px) {
        display: block;
    }
  display: none;
`;
