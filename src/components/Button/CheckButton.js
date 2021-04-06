import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// import { Link } from 'react-scroll';
import { Link } from 'react-scroll'
import { ButtonMainText } from './Button.styles';

const CheckButtonWrapper = styled(motion.div)`
 max-width: 250px;
 margin: auto;
 padding: 5px 55px;
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft + 'px' : '0')};
  background: linear-gradient(
    132deg,
    rgba(248, 182, 34, 1) 0%,
    rgba(248, 182, 34, 1) 0%,
    rgba(255, 0, 161, 1) 80%
  );
  font-family: inherit;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  outline: none;
  color: #fff;
  cursor: pointer;
  box-shadow: 5px 5px 16px -5px rgba(0, 0, 0, 0.75);
  border: 1px solid #fff;
  text-align: center;
  


  @media (min-width: 768px) {
    display: flex;
  }
`;

const StyledButtonContainerWithScroll = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  span {
    @media (min-width: 500px) {
      font-size: 24px;
    }
  }
`;

const CheckButton = ({ to, ...props }) => {
  const buttonVariants = {
    hover: {
      scale: 1.1,
      textShadow: '0px 0px 8px rgb(255,255,255)',
      transition: {
        duration: 0.4,
        yoyo: Infinity,
      },
    },
  };

  return (
    <CheckButtonWrapper variants={buttonVariants} animate="hover">
      <StyledButtonContainerWithScroll
        spy={true}
        smooth={true}
        offset={-200}
        duration={500}
        to={to}
        {...props}
      >
        <ButtonMainText>SPRAWDŹ</ButtonMainText>
      </StyledButtonContainerWithScroll>
    </CheckButtonWrapper>
  );
};

export default CheckButton;
