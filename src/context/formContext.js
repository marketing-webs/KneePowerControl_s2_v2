import React, { createContext, useState } from 'react';

const FormContext = createContext();

const FormContextProvider = ({ children }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [city, setCity] = useState('');

  return (
    <FormContext.Provider
      value={{
        firstName,
        setFirstName,
        lastName,
        setLastName,
        phoneNumber,
        setPhoneNumber,
        address,
        setAddress,
        zipCode,
        setZipCode,
        city,
        setCity,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export { FormContextProvider, FormContext };
