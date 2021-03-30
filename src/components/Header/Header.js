import React from 'react';
import {
  ButtonDiscountWrapper,
  Wrapper,
  QuantityLeftText,
  QuantityLeftWrapper,
  QuantityNumber,
  SpecialOfferWrapper,
  StyledHeader,
  StyledLogo,
  StyledWhiteText,
  TimeLeftText,
  TimeLeftWrapper,
  TimerText,
} from './Header.styles';
import StyledButtonWithScroll from '../Button/StyledButtonWithScroll';
import Timer from '../Timer/Timer';
import CountUp from 'react-countup'

const Header = () => {
  return (
    <Wrapper>
      <StyledHeader>
        <SpecialOfferWrapper>
          <StyledLogo>WYJĄTKOWA OFERTA!</StyledLogo>
          <StyledWhiteText>
            Nie zwlekaj czas promocji jest ograniczony.
        </StyledWhiteText>
        </SpecialOfferWrapper>
        <TimeLeftWrapper>
          <TimeLeftText>
            Do końca promocji zostało:{" "}
            <Timer hours={0} minutes={45} />
          </TimeLeftText>
          <TimerText>
          </TimerText>
        </TimeLeftWrapper>
        <QuantityLeftWrapper>
          <QuantityLeftText>Pozostało:</QuantityLeftText>
          <QuantityNumber>
            <CountUp end={3} start={30} duration={600} useEasing={false} /> sztuk
        </QuantityNumber>
        </QuantityLeftWrapper>
        <ButtonDiscountWrapper>
          <StyledButtonWithScroll to="partner" mainText="ODBIEŻ ZNIŻKĘ" />
        </ButtonDiscountWrapper>


      </StyledHeader>
    </Wrapper>
  );
};
export default Header;
