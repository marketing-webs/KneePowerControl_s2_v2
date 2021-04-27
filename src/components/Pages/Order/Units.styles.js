import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  h2 {
    margin: 50px 50px;
    font-size: 28px;
  }
`;

export const UnitsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
`;

export const UnitWrapper = styled.div`
  width: 230px;
  height: 180px;
  margin-top: 20px;
  background: rgb(77, 75, 162);
  background: linear-gradient(
    180deg,
    rgba(77, 75, 162, 1) 0%,
    rgba(41, 40, 86, 1) 100%
  );
  border-radius: 20px;
  padding: 10px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const UnitName = styled.span`
  display: block;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  margin: 10px 0;
`;

export const UnitsQuantityWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const UnitNumber = styled.span`
  display: block;
  text-align: center;
`;

export const IncrementButton = styled(motion.button)`
  width: 35px;
  height: 35px;
  outline: none;
  color: #fff;
  background-color: transparent;
  font-size: 20px;
  border: 2px solid #ffcd49;
  border-radius: 50%;
`;

export const DecrementButton = styled(motion.button)`
  width: 35px;
  height: 35px;
  outline: none;
  color: #fff;
  background-color: transparent;
  font-size: 20px;
  border: 2px solid #ffcd49;
  border-radius: 50%;
`;
export const Price = styled.span`
  display: block;
  text-align: center;
  margin-top: 10px;
`;

export const Info = styled.span`
  display: block;
  font-size: 11px;
  font-weight: 300;
  text-align: center;
`;
