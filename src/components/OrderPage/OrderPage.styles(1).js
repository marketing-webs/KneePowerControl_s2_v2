import styled from 'styled-components';
import { motion } from 'framer-motion';

export const OrderPageWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubmitButton = styled(motion.button)`
  padding: 10px 30px;
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft + 'px' : '0')};
  background: linear-gradient(
    132deg,
    rgba(232, 93, 0, 1) 0%,
    rgba(255, 0, 161, 1) 100%
  );
  font-family: inherit;
  border-radius: 10px;
  outline: none;
  font-size: 15px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  box-shadow: 5px 5px 16px -5px rgba(0, 0, 0, 0.75);
  border: 1px solid #fff;
  text-align: center;

  @media (min-width: 768px) {
    padding: 10px 20px;
  }
`;

export const Box = styled.div`
  max-width: 510px;
  display: block;
  background: #fff;
  -webkit-box-shadow: 5px 5px 16px -5px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 5px 5px 16px -5px rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 16px -5px rgba(0, 0, 0, 0.2);
  position: relative;

  @media (max-width: 420px) {
    height: 100%;
  }
`;

export const SecondaryFormWrapper = styled.div`
  background-color: #fff;
  padding: 0 20px;
  box-shadow: 5px 5px 20px -15px rgba(0, 0, 0, 0.2);
  position: relative;
`;

export const UpperWrapper = styled.div`
  background: #fff;
  padding: 20px 20px 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Subtitle = styled.h2`
  color: #000;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
`;

export const ImportantInfo = styled(motion.span)`
  background-color: #492bc4;
  padding: 10px 20px;
  color: #fff;
  font-weight: 300;
  font-size: 15px;
  line-height: 1.4;
  max-width: 450px;
  -webkit-box-shadow: 5px 5px 16px -5px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 5px 5px 16px -5px rgba(0, 0, 0, 0.6);
  box-shadow: 5px 5px 16px -5px rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 20px;
  left: -450px;

  @media (max-width: 1450px) {
    top: 20px;
    left: 510px;
    min-width: 300px;
  }

  @media (max-width: 1100px) {
    top: 20px;
    left: 510px;
    min-width: 200px;
    max-width: 250px;
  }

  @media (max-width: 450px) {
    display: none;
  }
`;

export const MainWrapper = styled.div`
  padding: 0 20px 20px 20px;
  background-color: #fcfcfd;
`;

export const PartnersWrapper = styled.div``;

export const Gold = styled.span`
  color: #ffcd49;
  font-weight: 700;
`;
