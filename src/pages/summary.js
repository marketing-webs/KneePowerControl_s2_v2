import React from 'react';
import SummaryPage from '../components/Pages/Summary/Summary';
import styled from 'styled-components';
import orderBackground from '../assets/images/order-background.jpg';

const SummaryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: 100%;
  position: relative;
  background-image: url(${orderBackground});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Summary = () => {
  return (
    <SummaryWrapper>
      <SummaryPage />
    </SummaryWrapper>
  );
};

export default Summary;
