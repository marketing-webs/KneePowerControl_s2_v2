import React, { createContext, useContext, useState } from "react";

import { UnitsContext } from "./unitsContext";

const CardContext = createContext();

const CardContextProvider = ({ children }) => {
  const [basicSelected, setBasicSelected] = useState(false);
  const [standardSelected, setStandardSelected] = useState(false);
  const [optimumSelected, setOptimumSelected] = useState(false);
  const [deluxSelected, setDeluxSelected] = useState(false);
  const [cardSelected, setCardSelected] = useState(false);

  const { setUnitsSelected } = useContext(UnitsContext);

  const handleBasicSelection = () => {
    setBasicSelected(true);
    setStandardSelected(false);
    setOptimumSelected(false);
    setDeluxSelected(false);
    setCardSelected(true);
    setUnitsSelected(false);
  };

  const handleStandardSelection = () => {
    setBasicSelected(false);
    setStandardSelected(true);
    setOptimumSelected(false);
    setDeluxSelected(false);
    setCardSelected(true);
    setUnitsSelected(false);
  };

  const handleOptimumSelection = () => {
    setBasicSelected(false);
    setStandardSelected(false);
    setOptimumSelected(true);
    setDeluxSelected(false);
    setCardSelected(true);
    setUnitsSelected(false);
  };

  const handleDeluxSelection = () => {
    setBasicSelected(false);
    setStandardSelected(false);
    setOptimumSelected(false);
    setDeluxSelected(true);
    setCardSelected(true);
    setUnitsSelected(false);
  };

  return (
    <CardContext.Provider
      value={{
        basicSelected,
        setBasicSelected,
        standardSelected,
        setStandardSelected,
        optimumSelected,
        setOptimumSelected,
        deluxSelected,
        setDeluxSelected,
        cardSelected,
        setCardSelected,
        handleBasicSelection,
        handleStandardSelection,
        handleOptimumSelection,
        handleDeluxSelection,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export { CardContextProvider, CardContext };
