import React, { useContext, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import { TextField } from '@material-ui/core';
import { SecondaryFormWrapper, SubmitButton } from './OrderPage.styles';
import { FormContext } from '../../context/formContext';
import { withRouter, useHistory } from 'react-router-dom'
import infoIcon from "../../assets/images/info.svg";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";




const InputWrapper = styled.div`
  position: relative;
  border: none;
  border-radius: 15px;

  input {
    background-color: white;
    border-radius: 15px;
    padding: 15px 10px;
    outline: none;

    &:focus {
      outline: none;
    }
  }
`;

const StyledPopover = styled.img`
  width: 30px;
  height: auto;
  position: absolute;
  top: 35%;
  right: 10px;
`;

const PopoverText = styled.p`
  width: 250px;
`;

const zipCodeRegExp = /[0-9]{2}-[0-9]{3}/;

const schema = yup.object().shape({
  address: yup
    .string()
    .min(5, 'Minimum 5 znaków')
    .required('To pole jest wymagane!'),
  zipCode: yup
    .string()
    .matches(zipCodeRegExp, 'Podany kod pocztowy jest nieprawidłowy')
    .required('To pole jest wymagane!'),
  city: yup
    .string()
    .required('To pole jest wymagane!')
    .min(3, 'Minimum 3 znaki'),
});

const SecondaryForm = () => {
  const {
    setAddress,
    setZipCode,
    setCity,
    firstName,
    lastName,
    phoneNumber,
  } = useContext(FormContext);
  const { control, handleSubmit, errors, getValues } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  });


  let history = useHistory();
  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(getValues());
    console.log(firstName, lastName, phoneNumber);
    console.log(setAddress, setZipCode, setCity);

    if (!errors.address) {
      setAddress(getValues('address'));
    }

    if (!errors.zipCode) {
      setZipCode(getValues('zipCode'));
    }

    if (!errors.city) {
      setCity(getValues('city'));
    }

    history.push("/summary");

  };

  return (
    <>
      <SecondaryFormWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper>
            {/*css added in global styles to the controller*/}
            <Controller
                style={{ textDecoration: 'none' }}
                as={TextField}
                id="firstName-input"
                control={control}
                placeholder="Imię"
                label={errors.firstName ? errors.firstName?.message : 'Imię'}
                fullWidth
                variant="outlined"
                name="firstName"
                margin="normal"
                defaultValue={firstName ? firstName : ''}
                error={!!errors.firstName}
            />
          </InputWrapper>
          <InputWrapper>
            {/*css added in global styles to the controller*/}
            <Controller
                as={TextField}
                id="lastName-input"
                control={control}
                placeholder="Nazwisko"
                label={errors.lastName ? errors.lastName?.message : 'Nazwisko'}
                fullWidth
                variant="outlined"
                name="lastName"
                defaultValue={lastName ? lastName : ""}
                error={!!errors.lastName}
                margin="normal"
            />
          </InputWrapper>
          <InputWrapper>
            {/*css added in global styles to the controller*/}
            <Controller
                as={TextField}
                id="phoneNumber-input"
                control={control}
                fullWidth
                name="phoneNumber"
                placeholder="Numer telefonu"
                type="tel"
                variant="outlined"
                label={
                  errors.phoneNumber
                      ? errors.phoneNumber?.message
                      : 'Numer telefonu'
                }
                margin="normal"
                defaultValue={phoneNumber ? phoneNumber : ""}
                error={!!errors.phoneNumber}
            />
            <StyledPopover
                alt="info icon"
                src={infoIcon}
                data-tip
                data-for="happyFace"
            />
            <ReactTooltip id="happyFace" type="info" place="left">
              <PopoverText>
                Dlaczego muszę podać nr telefonu? Podany nr zostanie automatycznie
                autoryzowany do kontaktu z naszym biurem obsługi klienta. Na
                podany numer może również kontaktować się firma kurierska w celu
                umówienia dogodnego dla Państwa terminu odbioru przesyłki
              </PopoverText>
            </ReactTooltip>
          </InputWrapper>
          <Controller
            as={TextField}
            control={control}
            name="address"
            fullWidth
            placeholder="Ulica i numer domu"
            label={
              errors.address ? errors.address?.message : '*Ulica i numer domu:'
            }
            margin="normal"
            defaultValue=""
            variant="outlined"
            error={!!errors.address}
          />
          <Controller
            as={TextField}
            control={control}
            name="zipCode"
            fullWidth
            placeholder="Kod pocztowy"
            label={errors.zipCode ? errors.zipCode?.message : '*Kod pocztowy:'}
            margin="normal"
            defaultValue=""
            variant="outlined"
            error={!!errors.zipCode}
          />
          <Controller
            as={TextField}
            control={control}
            name="city"
            fullWidth
            placeholder="Miejscowość"
            label={errors.city ? errors.city?.message : '*Miejscowość:'}
            margin="normal"
            defaultValue=""
            variant="outlined"
            error={!!errors.city}
          />

          <Controller
            as={TextField}
            name="extra"
            control={control}
            id="outlined-multiline-static"
            label="Uwagi dla dostawcy:"
            multiline
            defaultValue=""
            margin="normal"
            rows={4}
            placeholder="Uwagi dla dostawcy"
            fullWidth
            variant="outlined"
          />
          <Controller
            as={TextField}
            control={control}
            name="email"
            fullWidth
            placeholder="Adres email"
            label={errors.email ? errors.email?.message : 'Adres email:'}
            margin="normal"
            defaultValue=""
            variant="outlined"
            error={!!errors.email}
          />
          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Odbierz zniżkę i zamów Knee Power Control z przesyłką GRATIS
          </SubmitButton>
        </form>
      </SecondaryFormWrapper>
    </>
  );
};

export default withRouter(SecondaryForm);
