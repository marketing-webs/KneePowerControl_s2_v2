import React, { useContext } from 'react';
import { UnitsWrapper, ContentWrapper } from './Units.styles';
import Unit from './Unit';
import { UnitsContext } from '../../../context/unitsContext';

const Units = () => {
  const {
    handleIncrement,
    handleDecrement,
    detoxUnits,
    setDetoxUnits,
    burnUnits,
    setBurnUnits,
    akgUnits,
    setAkgUnits,
    totalUnitPrice,

  } = useContext(UnitsContext);


  return (
      <ContentWrapper>
    <UnitsWrapper>
      <Unit
        name="STABILIZATOR"
        unitNumber={detoxUnits}
        handleInc={() => handleIncrement(detoxUnits, setDetoxUnits)}
        handleDec={() => handleDecrement(detoxUnits, setDetoxUnits)}

        price={70}
      />

      <Unit
        name="REPAIR POWER GEL"
        unitNumber={burnUnits}
        handleInc={() => handleIncrement(burnUnits, setBurnUnits)}
        handleDec={() => handleDecrement(burnUnits, setBurnUnits)}
        handle
        price={35}
      />
      <Unit
        name="COOL POWER GEL"
        unitNumber={akgUnits}
        handleInc={() => handleIncrement(akgUnits, setAkgUnits)}
        handleDec={() => handleDecrement(akgUnits, setAkgUnits)}
        price={35}
      />

    </UnitsWrapper>
      <h2>Kwota zamówienia: {totalUnitPrice} zł</h2>
      </ContentWrapper>
  );
};

export default Units;
