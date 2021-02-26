import React, { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import { TextField } from '@material-ui/core';
import { SecondaryFormWrapper, SubmitButton } from './OrderPage.styles';
import { FormContext } from '../../context/formContext';
import { navigate } from 'gatsby';

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

  const onSubmit = (data, e) => {
    console.log(getValues());
    console.log(firstName, lastName, phoneNumber);

    if (!errors.address) {
      setAddress(getValues('address'));
    }

    if (!errors.zipCode) {
      setZipCode(getValues('zipCode'));
    }

    if (!errors.city) {
      setCity(getValues('city'));
    }

    navigate('/summary');
  };

  return (
    <>
      <SecondaryFormWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
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

export default SecondaryForm;
