import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import {
  ButtonMainText,
  ButtonNormalText,
  ButtonSubText,
  ButtonWrapper,
} from './Button.styles';

const StyledButtonContainerWithScroll = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  span {
    font-size: 12px;

    @media (min-width: 1024px) {
      font-size: 22px;
    } 
  }
`;

const StyledButtonWithScroll = ({
  mainText,
  subText,
  normalText,
  to,
  ...props
}) => {
  return (
    <ButtonWrapper whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <StyledButtonContainerWithScroll
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to={to}
        {...props}
      >
        {mainText && <ButtonMainText>{mainText}</ButtonMainText>}
        {subText && <ButtonSubText>{subText}</ButtonSubText>}
        {normalText && <ButtonNormalText>{normalText}</ButtonNormalText>}
      </StyledButtonContainerWithScroll>
    </ButtonWrapper>
  );
};

export default StyledButtonWithScroll;
