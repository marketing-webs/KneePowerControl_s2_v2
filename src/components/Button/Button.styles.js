import styled from 'styled-components';
import { motion } from 'framer-motion'

export const ButtonWrapper = styled(motion.div)`
  padding: 10px 15px;
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft + 'px' : '0')};
  background: linear-gradient(
    132deg,
    rgba(232, 93, 0, 1) 0%,
    rgba(255, 0, 161, 1) 100%
  );
  font-family: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 16px;
  outline: none;
  color: #fff;
  cursor: pointer;
  box-shadow: 5px 5px 16px -5px rgba(0, 0, 0, 0.75);
  border: 2px solid #fff;
  text-align: center;
  grid-column: 1 / 13;

  @media (min-width: 768px) {
    padding: 10px 40px;
  }

  @media (min-width: 1024px) {
    grid-column: 2 / 7;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ButtonMainText = styled.span`
  font-size: 18px;
  font-weight: 700;

  @media (min-width: 1024px) {
    font-size: 22px;
  }
`;

export const ButtonSubText = styled.span`
  font-size: 9px;
  font-weight: 600;

  @media (min-width: 1024px) {
    font-size: 12px;
  }
`;

export const ButtonNormalText = styled.span`
  font-size: 13px;
  font-weight: 600;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 15px;
  }
`;
