import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledContainer = styled.div`
  max-width: 400px;
  position: relative;
  background-color: #fff;
  color: #000;
  font-size: 16px;
  transform: translateY(-30px);
  margin: 30px auto 0 auto;
  text-align: center;
  padding: 0 0 0 0;
  border-radius: 15px;
  -webkit-box-shadow: 5px 5px 16px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 5px 16px -5px rgba(0, 0, 0, 0.75);
  box-shadow: 5px 5px 16px -5px rgba(0, 0, 0, 0.75);
  grid-column: 1 / 13;

  @media (min-width: 768px) {
    grid-row: 1 / 4;
    grid-column: 1 / 7;
    height: 100%;
    transform: none;
    margin-top: 0;
  }
`;

export const StyledBlueTitle = styled.span`
  display: block;
  text-align: center;
  background-color: #4f4da5;
  color: ${({ theme }) => theme.colors.gold};
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 15px 10px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`;

export const DiscountWrapper = styled.div`
  padding: 10px 0;
  font-weight: 700;
`;

export const RedBackground = styled.div`
  background-color: #ec1b23;
  display: flex;
  border-radius: 50px;
`;

export const Percentage = styled.span`
  color: #fff;
  font-size: 19px;
  padding: 10px;
`;

export const PricesWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  background-color: #fff;
  border: 2px solid #f9ba20;
  border-radius: 50px;
`;

export const OldPrice = styled.span`
  color: #000;
  position: relative;

  &::after {
    content: '';
    height: 2px;
    width: 100%;
    background-color: #ec1b23;
    position: absolute;
    top: 50%;
    transform: translateY(-50%) rotate(5deg);
    left: 0;
  }
`;
export const NewPrice = styled.span`
  color: #27a449;
  font-size: 24px;
`;

export const SmallParagraph = styled.p`
  font-size: 10px;
  color: #000;
  font-weight: 500;
  text-align: center;
  margin: 10px 0;
`;

export const OrderButton = styled(motion.button)`
  padding: 10px 30px;
  margin-top: 20px;
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft + 'px' : '0')};
  background: linear-gradient(
    132deg,
    rgba(232, 93, 0, 1) 0%,
    rgba(255, 0, 161, 1) 100%
  );
  font-family: inherit;
  border-radius: 15px;
  outline: none;
  color: #fff;
  cursor: pointer;
  width: 70%;
  font-size: 18px;
  font-weight: 700;
  -webkit-box-shadow: 5px 5px 16px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 5px 16px -5px rgba(0, 0, 0, 0.75);
  box-shadow: 5px 5px 16px -5px rgba(0, 0, 0, 0.75);
  border: 2px solid #fff;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const SafeDeliveryContainer = styled.div`
  background-color: #27a449;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  box-shadow: 5px 5px 16px -5px rgba(0, 0, 0, 0.75);
  width: 100%;
  position: absolute;
  top: 99%;
  left: 0;

  @media (min-width: 1366px) {
    top: 91%;
  }
`;

export const SafeDeliveryIcon = styled.img`
  width: 36px;
  height: 46px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
`;

export const SafeDeliveryParagraphs = styled.div``;

export const SafeDeliveryParagraphFirst = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  margin: 0 0 5px 0;
`;

export const SafeDeliveryParagraphSecond = styled.p`
  color: #fff;
  font-size: 13px;
  text-align: center;
  font-weight: 500;
  padding-left: 25px;

  @media (min-width: 1024px) {
    padding-left: 30px;
  }
`;

export const StyledImageContainer = styled.div`
  max-width: 300px;
  height: auto;
  margin: 10px auto;
`;

export const ParagraphInfo = styled.p`
  padding: 10px 20px 0 20px;
  margin-top: 10px;
  font-size: 15px;
`;

export const TimerContainer = styled.div`
  background-color: #27a449;
  color: #fff !important;
  padding: 10px 20px;
  width: 85%;
  margin: 0 auto;
  border-radius: 15px;

  > :nth-child(1) {
    margin: 0;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
  }
`;

export const FormSubtitle = styled.span`
  display: block;
  font-size: 20px;
  line-height: 1.4;
  font-weight: 700;
  margin: 10px auto 10px auto;
  padding: 0 10px;
`;
