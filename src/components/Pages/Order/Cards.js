import React, { useContext } from 'react';
import Card from './Card';
import { CardsContainer } from './Cards.styles';
import { CardContext } from '../../../context/cardContext';

import padBox from '../../../assets/images/pad_box.png';
import gelBoxes from '../../../assets/images/zestaw-power-gel.png';
import setBoxes from '../../../assets/images/zestaw-knee-power-control.png';

const Cards = () => {
  const {
    handleBasicSelection,
    handleStandardSelection,
    handleOptimumSelection,
  } = useContext(CardContext);


  return (
    <CardsContainer>
      <Card
        title="STABILIZATOR KNEE POWER PAD"
        percentage="7%"
        oldPrice="400 zł"
        newPrice="125 zł - 70% taniej"
        onClick={handleBasicSelection}
        photo={padBox}
        items={['1 stabilizator']}
      />
      <Card
        title="ZESTAW POWER GEL"
        percentage="7%"
        oldPrice="400 zł"
        newPrice="125 zł - 70% taniej"
        onClick={handleStandardSelection}
        photo={gelBoxes}
        items={['1 żel rozgrzewający', '+', '1 żel chłodzący']}
      />
      <Card
        title="ZESTAW PODSTAWOWY KNEE POWER CONTROL"
        percentage="7%"
        oldPrice="400 zł"
        newPrice="125 zł - 70% taniej"
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
