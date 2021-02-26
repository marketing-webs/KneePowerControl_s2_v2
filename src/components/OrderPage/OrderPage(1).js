import {
  Box,
  MainWrapper,
  PartnersWrapper,
  UpperWrapper,
  ImportantInfo,
  Gold,
  Subtitle,
  OrderPageWrapper,
} from './OrderPage.styles';

import React from 'react';
import OrderForm from './OrderForm';
import Partners from './Partners';

const importantInfo = {
  hidden: { x: 450, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 2 },
  },
};

const OrderPage = () => {
  return (
    <OrderPageWrapper>
      <Box>
        <UpperWrapper>
          <PartnersWrapper>
            <Partners />
            <Subtitle>NASI PARTNERZY</Subtitle>
          </PartnersWrapper>
          <ImportantInfo
            variants={importantInfo}
            initial="hidden"
            animate="visible"
          >
            <Gold>WAŻNE!&nbsp;</Gold>
            Nie płać dodatkowo za przesyłkę. Koszt dostarczenia paczki, w
            określonych rejonach w 100% refunduje producent. By sprawdzić czy
            Tobie również przysługuje pełne dofinansowanie, uzupełnij formularz
            o prawidłowe dane adresowe i naciśnij przycisk poniżej.
          </ImportantInfo>
        </UpperWrapper>
        <MainWrapper>
          <OrderForm />
        </MainWrapper>
      </Box>
    </OrderPageWrapper>
  );
};

export default OrderPage;
