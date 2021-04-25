import React, {createContext, useState } from 'react';

const CustomPrices = createContext();

const CustomPricesContextProvider = ({children}) => {
    const [initialPrice, setInitialPrice] = useState();
    const [reducedPrice, setReducedPrice] = useState();

    return (
        <CustomPrices.Provider
        value={{
            initialPrice,
            setInitialPrice,
            reducedPrice,
            setReducedPrice,

        }}>
            {children}
        </CustomPrices.Provider>
    );
};

export {CustomPricesContextProvider, CustomPrices}