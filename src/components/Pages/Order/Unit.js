import React, {useContext, useEffect} from "react";
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
import {UnitsContext} from "../../../context/unitsContext";

const Unit = ({ name, unitNumber, handleInc, handleDec, price }) => {
  const {
    setTotalUnitPrice,
    detoxUnits,
    burnUnits,
    akgUnits,

  } = useContext(UnitsContext);

  let newPrice = price * parseInt(unitNumber);
  let detox = detoxUnits * 70;
  let burn = burnUnits * 35;
  let akg = akgUnits * 35;
  let total = detox + burn + akg;


  useEffect(() => {
    setTotalUnitPrice(total)
  }, [total])

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
