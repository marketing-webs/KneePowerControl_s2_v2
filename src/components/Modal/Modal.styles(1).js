import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledBackdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(79, 77, 165, 0.75);
  padding: 20px;
  z-index: 99999999;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledModal = styled(motion.div)`
  position: relative;
  max-width: 800px;
  height: 100%;
  overflow-y: auto;
  margin: 0 auto;
  padding: 20px;
  background-image: radial-gradient(
    circle,
    #fff7e4,
    #fff3d5,
    #ffeec5,
    #ffeab6,
    #ffe5a7
  );
  z-index: 1001;
  border: 1px solid #f1e8df;
  box-shadow: 5px 5px 21px -5px rgba(0, 0, 0, 0.5);

  @media (min-width: 768px) {
    overflow: hidden;
    max-height: 440px;
  }
`;

export const ModalWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  place-items: center;
  height: 100%;
`;

export const WaitParagraph = styled.span`
  font-size: 33px;
  font-weight: 700;
  color: #000;
  margin: 10px 0;
  text-align: center;
  grid-column: 1 / 13;

  @media (min-width: 768px) {
    font-size: 70px;
    grid-column: 1 / 8;
    grid-row: 1;
  }
`;

export const PickupDiscountParagraph = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #000;
  margin: 10px 0;
  text-align: center;
  grid-column: 1 / 13;

  @media (min-width: 768px) {
    font-size: 26px;
    grid-column: 1 / 8;
    grid-row: 2;
  }
`;

export const OfferParagraph = styled.span`
  font-size: 18px;
  font-weight: 600;
  width: 80%;
  color: #27a449;
  margin: 10px 0;
  text-align: center;
  grid-column: 1 / 13;

  @media (min-width: 768px) {
    grid-column: 1 / 8;
    grid-row: 3;
  }
`;

export const EndOfferParagraph = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #000;
  margin: 10px 10px 0 10px;
  text-align: center;
  grid-column: 1 / 13;

  @media (min-width: 768px) {
    grid-column: 1 / 8;
    grid-row: 4;
  }
`;

export const BackToPageButtonWrapper = styled.div`
  grid-column: 1 / 13;

  @media (min-width: 768px) {
    grid-column: 1 / 8;
    grid-row: 7;
  }
`;

export const BackToPageParagraph = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: #000;
  margin: 0;
  text-align: center;
  grid-column: 1 / 13;

  @media (min-width: 768px) {
    grid-column: 1 / 8;
    grid-row: 6;
    margin-bottom: 10px;
  }
`;

export const TimerWrapper = styled.div`
background-color: #fff;
  grid-column: 1 / 13;
  margin-bottom: 10px;
  border-radius: 20px;
  padding: 10px;

  @media (min-width: 768px) {
    grid-column: 1 / 8;,
    grid-row: 5;
  }
  
    > :nth-child(2) {
    display: block;
  }
`;

export const NoThanksParagraph = styled.span`
  font-size: 10px;
  font-weight: 500;
  color: #b5b5b5;
  cursor: pointer;
  grid-column: 1 / 13;
  margin: 20px 0;

  @media (min-width: 768px) {
    margin-top: 10px;
    grid-column: 1 / 8;
    grid-row: 8;
  }
`;

export const ProductImageContainer = styled.div`
  width: 280px;
  height: auto;
  margin: 10px 0;
  grid-column: 1 / 13;

  @media (min-width: 768px) {
    width: 330px;
    grid-column: 8 / 13;
    grid-row: 1 / 9;
    transform: translateX(-20px);
  }
`;

export const CloseButton = styled(motion.img)`
  cursor: pointer;
  height: 12px;
  width: 12px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const DiscountBadgeWrapper = styled.div`
  width: 115px;
  height: 115px;
  border-radius: 50%;
  background-color: #f9ba20;
  font-weight: 600;
  color: #32308f;
  position: absolute;
  top: 320px;
  right: 15px;
  transform: rotate(15deg);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 5px 5px 21px -5px rgba(79, 77, 165, 0.5);

  @media (min-width: 768px) {
    top: 50px;
    right: 20px;
  }
`;

export const DiscountText = styled.p`
  font-size: 14px;
`;

export const DiscountBadge = styled.span`
  display: inline-block;
  font-size: 30px;
  font-weight: 900;
`;
