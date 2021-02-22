import React from 'react';
import {
  SmallParagraph,
  StyledContainer,
  StyledBlueTitle,
  SafeDeliveryContainer,
  SafeDeliveryIcon,
  SafeDeliveryParagraphFirst,
  SafeDeliveryParagraphSecond,
  SafeDeliveryParagraphs,
  TimerContainer,
  FormSubtitle,
  ParagraphInfo,
} from './FormContainer.styles';
import Paragraph from '../../components/Paragraph/Paragraph';
import Timer from '../../components/Timer/Timer';
import FirstForm from './FirstForm';
import ShieldIcon from '../../assets/icons/shield.svg';
import Accordion from '../../components/Accordion/Accordion';

const FormContainer = ({ id }) => {
  return (
    <StyledContainer id={id}>
      <StyledBlueTitle>Wypełnij formularz</StyledBlueTitle>
      <FormSubtitle textAlign="center" fontWeight="700">
        Zamów zestaw Knee Power Control w promocyjnej cenie!*
      </FormSubtitle>
      <TimerContainer>
        <Paragraph textAlign="center" fontWeight="500">
          Do końca promocji zostało:
        </Paragraph>
        <Timer hours={7} minutes={24} />
      </TimerContainer>
      <ParagraphInfo>
        W kolejnym kroku przejdziesz do sklepu, gdzie będziesz mógł
        spersonalizować swój zestaw <strong>Knee Power Control</strong>
      </ParagraphInfo>
      <FirstForm />
      <SmallParagraph>
        * Liczba produktów w magazynie jest ograniczona
      </SmallParagraph>
      <SafeDeliveryContainer>
        <SafeDeliveryIcon src={ShieldIcon} alt="Safe Delivery Icon" />
        <SafeDeliveryParagraphs>
          <SafeDeliveryParagraphFirst>
            BEZPIECZNA DOSTAWA
          </SafeDeliveryParagraphFirst>
          <SafeDeliveryParagraphSecond>
            sprawdź jak dbamy o zdrowie naszych klientów.
          </SafeDeliveryParagraphSecond>
          <Accordion />
        </SafeDeliveryParagraphs>
      </SafeDeliveryContainer>
    </StyledContainer>
  );
};

export default FormContainer;
