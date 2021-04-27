import React, {createContext, useState } from 'react';

const CustomPrices = createContext();

const CustomPricesContextProvider = ({children}) => {
    const [initialStabilizerPrice, setInitialStabilizerPrice] = useState();
    const [initialPrice, setInitialPrice] = useState();
    const [reducedPrice, setReducedPrice] = useState();
    const [stabilizerPercentage, setStabilizerPercentage] = useState();

    return (
        <CustomPrices.Provider
        value={{
            // Stabilizer Price
            initialStabilizerPrice,
            setInitialStabilizerPrice,
            stabilizerPercentage,
            setStabilizerPercentage,

            // Gel Price
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