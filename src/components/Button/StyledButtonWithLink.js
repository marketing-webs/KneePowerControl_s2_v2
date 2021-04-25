import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import {
  ButtonMainText,
  ButtonNormalText,
  ButtonSubText,
  ButtonWrapper,
} from './Button.styles';


const StyledButtonWithLink = ({
  mainText,
  subText,
  normalText,
  to,
  ...props
}) => {
  return (
    <ButtonWrapper whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      {mainText && <ButtonMainText>{mainText}</ButtonMainText>}
      {subText && <ButtonSubText>{subText}</ButtonSubText>}
      {normalText && <ButtonNormalText>{normalText}</ButtonNormalText>}
    </ButtonWrapper>
  );
};

export default StyledButtonWithLink;
