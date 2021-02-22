import React from 'react';
import styled, { css } from 'styled-components';
import ReactCompareImage from 'react-compare-image'
const StyledWrapper = styled.div`
  min-width: 280px;
  display: flex;
  position: relative;
  place-self: center;
  grid-column: 1 / 13;
  box-shadow: 5px 5px 21px -5px rgba(0, 0, 0, 0.5);
  z-index: 3;

  @media (min-width: 1024px) {
    grid-column: 5 / 9;
  }

  @media (min-width: 1440px) {
    width: 280px;
    display: flex;
  }
`;

const UpperBadgeWrapper = styled.div`
  position: absolute;
  top: -45px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.gold};
  padding-bottom: 20px;
  width: 100%;
  border-radius: 15px;
  z-index: -1;

  @media (min-width: 1366px) {
    display: block;
  }

  ${(props) =>
    props.bigger &&
    css`
      top: -60px;
    `}
`;

const UpperBadgeText = styled.p`
  text-align: center;
  padding: 15px;
  font-weight: 600;
`;

const BottomBadgeWrapper = styled.div`
  position: absolute;
  bottom: -55px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.gold};
  padding-top: 20px;
  width: 100%;
  border-radius: 15px;
  z-index: -1;

  @media (min-width: 1366px) {
    display: block;
  }
`;

const BottomBadgeText = styled.p`
  font-size: 13px;
  text-align: center;
  padding: 15px;
  font-weight: 600;
`;

const ImageComparison = ({ upperText, bigger, image1, image2 }) => {
  return (
    <StyledWrapper>
      <ReactCompareImage leftImage={image1} rightImage={image2} hover="true" />
      <UpperBadgeWrapper bigger={!!bigger}>
        <UpperBadgeText>{upperText}</UpperBadgeText>
      </UpperBadgeWrapper>
      <BottomBadgeWrapper>
        <BottomBadgeText>
          Przesuń w lewo lub w prawo żeby zobaczyć efekty działania kuracji
        </BottomBadgeText>
      </BottomBadgeWrapper>
    </StyledWrapper>
  );
};

export default ImageComparison;
