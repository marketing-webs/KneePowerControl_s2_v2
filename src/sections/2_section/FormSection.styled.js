import styled from 'styled-components'
import { mediaQueries } from "../../assets/styles/mediaQueries";
import Checkmark from "../../assets/images/checkmark-green.png"
import Arrow from "../../assets/images/Arrow.png"


export const SectionBackground = styled.div`
    padding: 70px 0px 0px;
    overflow-x: hidden;
    background-image: linear-gradient(
    to right,
    #FFE5A7,
    #FFF5DE,
    #FFE5A7
  );
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    ${mediaQueries("xs")`
        flex-direction: row;
    `}
`;

export const ListWrapper = styled.div`
    width: 100%;
    ${mediaQueries("xs")`
        width: 50%;
    `}

    h3 {
        span {
            color: #27A449;
        }
    }
`;

export const ProductWrapper = styled.div`
    width: 100%;
    position: relative;
    ${mediaQueries("xs")`
        width: 50%;
    `}

    img {
        
    }
`;

export const ProductDescription = styled.img`
    max-width: 350px;
    ${mediaQueries("lg")`
        position: absolute;
        top: 30px;
        left: 320px;
    `}
`;



export const StyledList = styled.ul`
    

`;

export const ListItem = styled.li`
    text-align: left;
    padding-left: 30px;
    margin-bottom: 15px;
    line-height: 1.5rem;
    position: relative;
    
    &::before {
        content: '';
        background-image: url(${Checkmark});
        background-repeat: no-repeat;
        position: absolute;
        width: 18px;
        height: 18px;
        left: 0px;
        top: 5px;
    }
`;

export const FormBox = styled.div`
    background-color: #27A449;
    padding: 20px;
    border-radius: 15px;
    margin: 40px auto;
    width: 100%;


    ${mediaQueries("xs")`
        padding: 20px 50px 60px;
    `}

    h2 {
        color: #fff;
        text-align: center;
        /* margin-bottom: 30px; */

        span {
            color: #F9BA20;
          
        }
    }
`;

export const FormWrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  ${mediaQueries("xs")`
        width: 50%;
    `}

  h3 {
    text-align: center;
    color: #fff;
    margin: 20px auto;
    position: relative;

    @media (min-width: 500px) {
      ::before {
        content: '';
        background-image: url(${Arrow});
        background-repeat: no-repeat;
        position: absolute;
        width: 100px;
        height: 100px;
        left: -60px;
        top: -50px;
        ${mediaQueries("lg")`
                left: -30pxS
            `}
      }
    }
  }
`;

export const FormContentWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    ${mediaQueries("xs")`
        flex-direction: row;
    `}
`;

export const TimerWrapper = styled.div`
        width: 100%;
        margin-top: 50px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: auto;
        border: 3px solid white;
        border-radius: 15px;
        padding: 40px 20px 20px;

        ${mediaQueries("xs")`
            width: 48%;
            margin-top: 25px;
        `}

    h3{
        color: white;
        text-align: center;
        font-size: 18px;
    }

    h4 {
        color: white;
        font-size: 16px;
        font-weight: 500;
        span {
            font-size: 22px;
        }
    }
`;

export const TopTitle = styled.h3`
    position: absolute;
    color: white;
    background-color: #F9BA20;
    display: inline-block;
    font-size: 26px !important;
    padding: 8px 10px;
    border-radius: 10px;  
    top: -32px;
`;

export const PriceDiscount = styled.h4`
    color: white;
    font-size: 22px !important;
    margin: 20px auto;
    
    span {
        color: #F9BA20;
        font-size: 32px !important;
        font-weight: 700;
      position: relative;
      &:before{
        position: absolute;
        content: "";
        width: 90px;
        height: 3px;
        background: red;
        top: 19px;
        left: 0px;
   
        //-webkit-transform: rotate(
        //        -9deg
        //);
        //-ms-transform: rotate(-9deg);
        //transform: rotate(
        //        -9deg
        //);
      }
    }
    p {
        font-size: 32px;
        font-weight: 700;
        display: inline-block;
    }
`;

export const PromotionTitle = styled.h3`
    color: #fff !important;
    border-top: 3px solid white;
    padding-top: 5px;
    margin-top: 30px;
    
    span {
        color: #F9BA20;
    }
`;

export const SecondTimerWrapper = styled.div`
    
`;