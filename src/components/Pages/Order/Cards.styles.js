import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CardsContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
  align-items: center;
  justify-content: center;
  margin: 50px auto 0 auto;
`;


export const CardWrapper = styled(motion.div)`
  cursor: pointer;
  background: rgb(77, 75, 162);
  background: linear-gradient(
    180deg,
    rgba(77, 75, 162, 1) 0%,
    rgba(41, 40, 86, 1) 100%
  );
  height: 463px;
  color: #fff;
  border-radius: 1.5rem;
  padding: 15px 10px 30px 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  position: relative;
  box-shadow: 5px 5px 16px -5px rgba(0, 0, 0, 0.6);

  @media (max-width: 1050px) {
    margin-bottom: 60px;
  }
`;

export const CardTitle = styled.h3`
  text-transform: uppercase;
  text-align: center;
`;

export const CardPercentage = styled.h4`
  font-weight: 400;
  font-size: 13px;
  margin: 15px 0;
`;

export const CardPriceWrapper = styled.span``;

export const CardOldPrice = styled.span`
  position: relative;
  font-size: 14px;

  &::after {
    content: '';
    width: 90%;
    height: 2px;
    background-color: red;
    position: absolute;
    left: 0;
    top: 7px;
  }
`;

export const CardNewPrice = styled.span`
  color: #ffcd49;
  font-weight: 700;
`;

export const CardSelectButton = styled.div`
  outline: none;
  background: linear-gradient(
    132deg,
    rgba(232, 93, 0, 1) 0%,
    rgba(255, 0, 161, 1) 100%
  );
  border: 2px solid #fff;
  box-shadow: 5px 5px 16px -5px rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 10px 20px;
  border-radius: 1rem;
  font-size: 14px;
  font-weight: 700;
  position: absolute;
  bottom: -20px;
`;

export const ProductWrapper = styled.div`
  background-color: #fff;
  color: #000;
  padding: 15px 30px;
  margin: 20px 0 10px 0;
  border-radius: 15px;
  position: relative;
  min-height: 250px;
  max-height: 250px;
  width: 219px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductPhotoWrapper = styled.div`
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
`;

export const ProductPhoto = styled.img``;

export const ProductItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 130px;
`;

export const ProductItem = styled.p`
  color: rgb(77, 75, 162);
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  width: 100%;
`;
