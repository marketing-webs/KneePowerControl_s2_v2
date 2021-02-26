import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Cards from './Cards';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CardContext } from '../../../context/cardContext';
import { UnitsContext } from '../../../context/unitsContext';
import Units from './Units';

const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      yoyo: 10,
    },
  },
};

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 450px) {
    padding: 30px 10px;
    margin-top: 0;
  }
`;

const OrderPageContainer = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.green};
  font-size: 40px;
  font-weight: 800;
  text-align: center;
  margin-top: 50px;
`;

const SubTitle = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-size: 28px;
  font-weight: 600;
  text-align: center;
`;

const StyledLinkWrapper = styled(motion.span)`
  display: block;
  background: linear-gradient(
    132deg,
    rgba(232, 93, 0, 1) 0%,
    rgba(255, 0, 161, 1) 100%
  );
  border: 2px solid #fff;
  padding: 10px 30px;
  border-radius: 10px;
  max-width: fit-content;
  text-align: center;
  margin: 50px auto 20px auto;

  a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: 600;
`;

export const StyledParagraph = styled(motion.span)`
  cursor: pointer;
  display: block;
  background-color: #27a449;
  border: 3px solid #fff;
  color: #fff;
  font-weight: 600;
  padding: 15px 30px;
  border-radius: 10px;
  max-width: fit-content;
  text-align: center;
  margin: 50px auto 0 auto;

  @media (max-width: 450px) {
    margin-top: 0;
  }
`;

const Order = () => {
  const { cardSelected, setCardSelected } = useContext(CardContext);
  const {
    unitsSelected,
    setUnitsSelected,
    detoxUnits,
    burnUnits,
    akgUnits,
  } = useContext(UnitsContext);

  const handleUnitsClick = () => {
    setCardSelected(false);
    setUnitsSelected(true);
  };

  return (
    <ContentWrapper>
      <OrderPageContainer>
        <Title>Tylko dzisiaj!</Title>
        <SubTitle>
          Wybierz opcję, która najbardziej Ci odpowiada i zaoszczędź nawet do
          -88%!
        </SubTitle>
        <Cards />

        {cardSelected && (
          <StyledLinkWrapper
            variants={buttonVariants}
            animate="hover"
            whileHover={{ scale: 1.15 }}
          >
            <StyledLink to="/order">ZAMÓW ZESTAW</StyledLink>
          </StyledLinkWrapper>
        )}

        <StyledParagraph
          whileHover={{ scale: 1.05 }}
          onClick={handleUnitsClick}
        >
          LUB UŁÓŻ SWÓJ ZESTAW SAM WG. WŁASNYCH POTRZEB
        </StyledParagraph>

        {unitsSelected && <Units />}
        {burnUnits >= 1 && detoxUnits >= 1 && akgUnits >= 1 && !cardSelected ? (
          <StyledLinkWrapper
            variants={buttonVariants}
            animate="hover"
            whileHover={{ scale: 1.15 }}
          >
            <Link to="/order">Zamów swoje ilości</Link>
          </StyledLinkWrapper>
        ) : null}
      </OrderPageContainer>
    </ContentWrapper>
  );
};

export default Order;
