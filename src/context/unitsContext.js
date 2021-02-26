import React, { createContext, useState } from 'react';

const UnitsContext = createContext();

const UnitsContextProvider = ({ children }) => {
  const [unitsSelected, setUnitsSelected] = useState(false);
  const [detoxUnits, setDetoxUnits] = useState(0);
  const [burnUnits, setBurnUnits] = useState(0);
  const [akgUnits, setAkgUnits] = useState(0);

  const handleIncrement = (unit, setUnit) => {
    if (unit >= 0) {
      setUnit(unit + 1);
    }
  };

  const handleDecrement = (unit, setUnit) => {
    if (unit > 1) {
      setUnit(unit - 1);
    }
  };

  return (
    <UnitsContext.Provider
      value={{
        unitsSelected,
        setUnitsSelected,
        detoxUnits,
        setDetoxUnits,
        burnUnits,
        setBurnUnits,
        akgUnits,
        setAkgUnits,
        handleIncrement,
        handleDecrement,
      }}
    >
      {children}
    </UnitsContext.Provider>
  );
};

export { UnitsContextProvider, UnitsContext };
