import styled from 'styled-components';

export const SummaryPageWrapper = styled.div``;

export const SummaryWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1300px;
  height: 100vh;
  padding: 30px;
  color: #000;
  place-items: center;
  margin: 0 auto;

  @media (max-width: 1050px) {
    grid-template-columns: 1fr;
    grid-row-gap: 50px;
  }
`;

export const Green = styled.span`
  color: #27a449;
  font-weight: 800;
`;

export const SummaryTitle = styled.h1`
  font-weight: 500;
  margin-bottom: 20px;

  @media (max-width: 1050px) {
    font-size: 24px;
  }
`;

export const SummaryDetails = styled.div`
  display: inline-block;
  background-color: #fff;
  color: #000;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 1rem;
  -webkit-box-shadow: 5px 5px 16px -5px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 5px 5px 16px -5px rgba(0, 0, 0, 0.6);
  box-shadow: 5px 5px 16px -5px rgba(0, 0, 0, 0.6);
`;

export const SummaryDetail = styled.span`
  display: block;
`;

export const SummarySubtitle = styled.span`
  display: block;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const ImageContainer = styled.div`
  max-width: 600px;
  height: auto;
`;

export const OrderImage = styled.img`
  width: 100%;
`;

export const SummaryContainer = styled.div``;
