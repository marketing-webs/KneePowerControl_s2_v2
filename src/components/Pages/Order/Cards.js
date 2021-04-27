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
        initialStabilizerPrice,
        setInitialStabilizerPrice,
        stabilizerPercentage,
        setStabilizerPercentage,
    } = useContext(CustomPrices);


    // The Price after submitting form
    // if (firstName) {
    //     // Stabilizer Price
    //
    //     initialStabilizerPrice()
    //     setInitialStabilizerPrice()
    //     stabilizerPercentage()
    //     setStabilizerPercentage( )
    //
    //
    //     setInitialPrice('317 zł')
    //     setReducedPrice('137 zł')
    //     setStabilizerPercentage('8%')
    // }


  return (
    <CardsContainer>
      <Card
        title="STABILIZATOR KNEE POWER PAD"
        percentage="8%"
        oldPrice={"160 zł"}
        newPrice={"70 zł"}
        onClick={handleBasicSelection}
        photo={padBox}
        items={['1 stabilizator']}
      />
      <Card
        title="ZESTAW POWER GEL"
        percentage="10%"
        oldPrice={"160 zł"}
        newPrice={"70 zł"}
        onClick={handleStandardSelection}
        photo={gelBoxes}
        items={['1 żel rozgrzewający', '+', '1 żel chłodzący']}
      />
      <Card
        title="ZESTAW PODSTAWOWY KNEE POWER CONTROL"
        percentage="82%"
        oldPrice={"320 zł"}
        newPrice={"140 zł"}
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
