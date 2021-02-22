import styled from 'styled-components';

export const Wrapper = styled.div`

    margin: auto;
    background-image: linear-gradient(
    to right bottom,
    #4f4da4,
    #454490,
    #3c3b7c,
    #333269,
    #2a2957
  );
  -webkit-box-shadow: 5px 10px 16px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 10px 16px -5px rgba(0, 0, 0, 0.75);
  box-shadow: 5px 10px 16px -5px rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(3px);
/* 
  -webkit-box-shadow: 0px 33px 18px 0px rgba(0,0,0,1);
-moz-box-shadow: 0px 33px 18px 0px rgba(0,0,0,1);
box-shadow: 0px 33px 18px 0px rgba(0,0,0,1); */
z-index: 10;
`;

export const StyledHeader = styled.header`
  height: 84px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100vw;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  opacity: 0.95;
  z-index: 999999;

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 20px 50px;
  }

  @media (min-width: 1366px) {
    height: 90px;
  }

  /* @media (min-width: 1900px) {
    padding: 20px 150px;
  } */
`;



export const SpecialOfferWrapper = styled.div`
  display: none;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  max-width: 1300px;

  @media (min-width: 1366px) {
    display: flex;
  }
`;

export const StyledLogo = styled.h2`
  font-size: 22px;
  color: #f9ba20;
  font-weight: 700;
  display: none;
  text-align: left;

  @media (min-width: 1366px) {
    display: block;
    margin: 0px;
  }

  @media (min-width: 1440px) {
    font-size: 30px;
  }
`;

export const StyledWhiteText = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 600;

  @media (min-width: 1440px) {
    font-size: 17px;
  }
`;

export const TimeLeftWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 13px;
  text-align: center;
  max-width: 200px;

  @media (min-width: 768px) {
    flex-direction: row;
    font-size: 16px;
    max-width: 100%;
  }
`;

export const TimeLeftText = styled.p`
  color: #fff;
  font-weight: 600;
  margin-right: 5px;
  display: inline;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1440px) {
    font-size: 18px;
  }

  span {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.gold}
  }
`;

export const TimerText = styled.p`
  display: inline;
  color: ${({ theme }) => theme.colors.gold};
  font-weight: 600;

  > span {
    font-size: 16px !important;
    display: inline;

    @media (min-width: 768px) {
      font-size: 18px !important;
    }
  }
`;

export const QuantityLeftWrapper = styled.div`
  align-items: center;
  display: none;

  @media (min-width: 768px) {
    display: flex;
    /* flex-direction: column; */
  }
`;

export const QuantityLeftText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 600;
  margin-right: 5px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const QuantityNumber = styled.p`
  color: ${({ theme }) => theme.colors.gold};
  font-size: 18px;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const ButtonDiscountWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 15px;
`;

export const DiscountGreenWrapper = styled.div`
  height: 100%;
  padding: 0 20px;
  display: none;

  p {
    text-transform: uppercase;
    text-align: center;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};
  }

  @media (min-width: 1024px) {
    display: block;
  }
`;

export const DiscountGreenNow = styled.p`
  font-size: 16px;
`;

export const DiscountValue = styled.p`
  font-size: 20px;
`;
