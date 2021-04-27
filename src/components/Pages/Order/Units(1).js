import React, { useContext } from 'react';
import { UnitsWrapper } from './Units.styles';
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
  } = useContext(UnitsContext);

  let Go

  return (
    <UnitsWrapper>
      <Unit
        name="STABILIZATOR"
        unitNumber={detoxUnits}
        handleInc={() => handleIncrement(detoxUnits, setDetoxUnits)}
        handleDec={() => handleDecrement(detoxUnits, setDetoxUnits)}
        price={20}
      />

      <Unit
        name="REPAIR POWER GEL"
        unitNumber={burnUnits}
        handleInc={() => handleIncrement(burnUnits, setBurnUnits)}
        handleDec={() => handleDecrement(burnUnits, setBurnUnits)}
        price={30}
      />
      <Unit
        name="COOL POWER GEL"
        unitNumber={akgUnits}
        handleInc={() => handleIncrement(akgUnits, setAkgUnits)}
        handleDec={() => handleDecrement(akgUnits, setAkgUnits)}
        price={40}
      />
    </UnitsWrapper>
  );
};

export default Units;
