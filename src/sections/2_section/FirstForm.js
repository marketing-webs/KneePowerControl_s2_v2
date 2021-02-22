import React, { useContext } from 'react';
// import { navigate } from 'gatsby'
import styled from 'styled-components';
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup'
import { TextField } from '@material-ui/core'
import { FormContext } from '../../context/formContext'
import { OrderButton } from './FormContainer.styles';
import infoIcon from '../../assets/images/info.svg';
import ReactTooltip from 'react-tooltip'

export const MainFormWrapper = styled.div`
  background-color: transparent;
  padding: 0 20px;
`;

const Form = styled.form`

`;

const InputWrapper = styled.div`
  position: relative;
  border: none;

  input {
    background-color: white;
    border-radius: 15px;
    padding: 15px 10px;
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

const schema = yup.object().shape({
  phoneNumber: yup
    .number()
    .required('To pole jest wymagane!')
    .test('len', 'Proszę wpisać 9 cyfr', (val) => val.toString().length === 9)
    .typeError('To musi być cyfra!'),
  firstName: yup
    .string()
    .required('To pole jest wymagane!')
    .min(3, 'Minimum 3 znaki'),
  lastName: yup
    .string()
    .required('To pole jest wymagane!')
    .min(3, 'Minimum 3 znaki'),
});

const FirstForm = () => {
  const { setFirstName, setLastName, setPhoneNumber } = useContext(FormContext);
  const { control, handleSubmit, errors, getValues } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const onSubmit = (data, e) => {
    console.log(getValues());
    setFirstName(data.firstName);
    setLastName(data.lastName);
    setPhoneNumber(data.phoneNumber);

    // setTimeout(() => {
    //   navigate('/sets');
    // }, 1000);
  };

  const handleChange = () => {
    if (!errors.phoneNumber) {
      console.log(getValues('phoneNumber'));
      setPhoneNumber(getValues('phoneNumber'));
    }

    if (!errors.firstName) {
      setFirstName(getValues('firstName'));
    }

    if (!errors.lastName) {
      setLastName(getValues('lastName'));
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.03,
      textShadow: '0px 0px 8px rgba(255,255,255, 0.5)',
      transition: {
        duration: 0.6,
        yoyo: Infinity,
      },
    },
  };

  return (
    <MainFormWrapper>
      <Form onSubmit={handleSubmit(onSubmit)} onBlur={handleChange}>
        <InputWrapper>
          <Controller
            as={TextField}
            id="firstName-input"
            control={control}
            placeholder="Imię"
            label={errors.firstName ? errors.firstName?.message : 'Imię'}
            fullWidth
            variant="outlined"
            name="firstName"
            margin="normal"
            defaultValue=""
            error={!!errors.firstName}
          />
        </InputWrapper>
        <InputWrapper>
          <Controller
            as={TextField}
            id="lastName-input"
            control={control}
            placeholder="Nazwisko"
            label={errors.lastName ? errors.lastName?.message : 'Nazwisko'}
            fullWidth
            variant="outlined"
            name="lastName"
            defaultValue=""
            error={!!errors.lastName}
            margin="normal"
          />
        </InputWrapper>
        <InputWrapper>
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
            defaultValue=""
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
        <OrderButton variants={buttonVariants} animate="hover">
          ZAMÓW TERAZ
        </OrderButton>
      </Form>
    </MainFormWrapper>
  );
};

export default FirstForm;
