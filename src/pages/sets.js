import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Order from '../components/Pages/Order/Order'
import orderBackground from '../assets/images/order-background.jpg'

const SetsWrapper = styled.div`
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

const Sets = () => {
  return (
    <SetsWrapper>
      <Helmet title="Stwórz własny zestaw!" defer={false}>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
        />
        <meta
          name="description"
          content="Knee Power Pad Control odmieni Twoje życie na zawsze!"
        />
        <html lang="pl" />
        <meta charSet="utf-8" />
      </Helmet>
      <Order />
    </SetsWrapper>
  );
};

export default Sets;
