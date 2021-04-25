import React, { useContext, useEffect } from 'react';
import Card from './Card';
import { CardsContainer } from './Cards.styles';
import { CardContext } from '../../../context/cardContext';

import padBox from '../../../assets/images/pad_box.png';
import gelBoxes from '../../../assets/images/zestaw-power-gel.png';
import setBoxes from '../../../assets/images/zestaw-knee-power-control.png';
import {FormContext} from "../../../context/formContext";
import {CustomPrices} from "../../../context/customPrices";

const Cards = () => {
  const {
    handleBasicSelection,
    handleStandardSelection,
    handleOptimumSelection,
  } = useContext(CardContext);

    const {
        firstName,
        lastName,
        phoneNumber,
    } = useContext(FormContext);

    const {
        initialPrice,
        setInitialPrice,
        reducedPrice,
        setReducedPrice,
    } = useContext(CustomPrices);

    console.log(firstName)
    if (firstName) {
        setInitialPrice('317 zł')
        setReducedPrice('137 zł')
    }


  return (
    <CardsContainer>
      <Card
        title="STABILIZATOR KNEE POWER PAD"
        percentage="7%"
        oldPrice={initialPrice ? initialPrice : "400 zł"}
        newPrice={reducedPrice ? reducedPrice : "125 zł - 73% taniej"}
        onClick={handleBasicSelection}
        photo={padBox}
        items={['1 stabilizator']}
      />
      <Card
        title="ZESTAW POWER GEL"
        percentage="7%"
        oldPrice={initialPrice ? initialPrice : "400 zł"}
        newPrice={reducedPrice ? reducedPrice : "125 zł - 73% taniej"}
        onClick={handleStandardSelection}
        photo={gelBoxes}
        items={['1 żel rozgrzewający', '+', '1 żel chłodzący']}
      />
      <Card
        title="ZESTAW PODSTAWOWY KNEE POWER CONTROL"
        percentage="7%"
        oldPrice={initialPrice ? initialPrice : "400 zł"}
        newPrice={reducedPrice ? reducedPrice : "125 zł - 73% taniej"}
        onClick={handleOptimumSelection}
        photo={setBoxes}
        items={[
          '1 stabilizator',
          '+',
          '1 żel rozgrzewający',
          '+',
          '1 żel chłodzący',
        ]}
      />
    </CardsContainer>
  );
};

export default Cards;
