import React from "react";
import {
  UnitName,
  UnitNumber,
  UnitWrapper,
  UnitsQuantityWrapper,
  IncrementButton,
  DecrementButton,
  Price,
  Info,
} from "./Units.styles";

const Unit = ({ name, unitNumber, handleInc, handleDec, price }) => {
  let newPrice = price * parseInt(unitNumber);

  return (
    <UnitWrapper>
      <UnitName>{name}*</UnitName>
      <UnitsQuantityWrapper>
        <DecrementButton
          onClick={handleDec}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
        >
          -
        </DecrementButton>
        <UnitNumber>{unitNumber} szt.</UnitNumber>
        <IncrementButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
          onClick={handleInc}
        >
          +
        </IncrementButton>
      </UnitsQuantityWrapper>
      <Price>{newPrice} zł</Price>
      <Info>*minimum jedna sztuka</Info>
    </UnitWrapper>
  );
};

export default Unit;
