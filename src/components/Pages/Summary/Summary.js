import React, { useContext, useEffect } from 'react';
import { FormContext } from '../../../context/formContext';
import {
  ImageContainer,
  OrderImage,
  SummaryContainer,
  SummaryWrapper,
  SummaryTitle,
  SummarySubtitle,
  SummaryDetails,
  SummaryDetail,
  Green,
  SummaryPageWrapper,
} from './Summary.styles';

import orderImage from '../../../assets/images/product-boxes.png';
// import { navigate } from '../../../../.cache/gatsby-browser-entry';

const SummaryPage = () => {
  const {
    firstName,
    lastName,
    phoneNumber,
    address,
    zipCode,
    city,
  } = useContext(FormContext);

  console.log(firstName)
  console.log(address)
  // useEffect(() => {
  //   firstName <= 0 && navigate('/');
  // }, [firstName]);

  return (
    <SummaryPageWrapper>
      <SummaryWrapper>
        <SummaryContainer>
          <SummaryTitle>
            Cześć <Green>{firstName ? firstName : 'osobo'}</Green>, dziękujemy
            za złożone zamówienie!
          </SummaryTitle>
          <SummarySubtitle>
            Twoje zamówienie zostało przyjęte a potwierdzenie wysłane zostało na
            podany podczas składania zamówienia adres e-mail. Zamówione przez
            Ciebie produkty zostaną wysłane na wcześniej podane dane adresowe:
          </SummarySubtitle>
          <SummaryDetails>
            <SummaryDetail>
              {firstName} {lastName},
            </SummaryDetail>
            <SummaryDetail>{address},</SummaryDetail>
            <SummaryDetail>{zipCode},</SummaryDetail>
            <SummaryDetail>{city}</SummaryDetail>
          </SummaryDetails>
          <SummarySubtitle>
            Kurier będzie się kontaktować pod numerem{' '}
            <Green>{phoneNumber}</Green>.
          </SummarySubtitle>
          <SummarySubtitle>
            Dziękujemy i zapraszamy do dalszych zakupów w naszym sklepie.
          </SummarySubtitle>
        </SummaryContainer>
        <ImageContainer>
          <OrderImage src={orderImage} />
        </ImageContainer>
      </SummaryWrapper>
    </SummaryPageWrapper>
  );
};

export default SummaryPage;
