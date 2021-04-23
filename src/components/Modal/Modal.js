import React from 'react';

import {
  StyledBackdrop,
  StyledModal,
  ModalWrapper,
  ProductImageContainer,
  CloseButton,
  DiscountBadge,
  WaitParagraph,
  PickupDiscountParagraph,
  OfferParagraph,
  EndOfferParagraph,
  BackToPageParagraph,
  TimerWrapper,
  NoThanksParagraph,
  BackToPageButtonWrapper,
  DiscountBadgeWrapper,
  DiscountText,
} from './Modal.styles';
// import { graphql, useStaticQuery } from 'gatsby';
// import Img from 'gatsby-image/index';
import product from '../../assets/images/Knee-Power-Pad-Set.png'
import Timer from '../Timer/Timer';
import xIcon from '../../assets/images/close.svg'
import { AnimatePresence } from 'framer-motion';
import StyledButtonWithLink from '../Button/StyledButtonWithLink';
import { Link } from "react-router-dom"


const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 1 },
  },
};

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence>
      {showModal && (
        <StyledBackdrop
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <StyledModal variants={modal}>
            <ModalWrapper>
              <WaitParagraph>POCZEKAJ!</WaitParagraph>
              <PickupDiscountParagraph>
                Odbierz jednorazowy rabat!
              </PickupDiscountParagraph>
              <OfferParagraph>
                Oferta skierowana jest TYLKO do Ciebie i za 15 minut wygaśnie.
              </OfferParagraph>
              <TimerWrapper>
                <EndOfferParagraph>
                  Do końca promocji zostało:
                </EndOfferParagraph>
                <Timer hours={0} minutes={15} />
              </TimerWrapper>
              <BackToPageParagraph>
                By odebrać promocyjne opakowanie, wróć na stronę.
              </BackToPageParagraph>
              <ProductImageContainer>
                <img src={product} alt="product" />
              </ProductImageContainer>
              <DiscountBadgeWrapper>
                <DiscountText>PROMOCJA</DiscountText>
                <DiscountBadge>-73%</DiscountBadge>
              </DiscountBadgeWrapper>
              <BackToPageButtonWrapper>
                <Link to="/sets">
                  <StyledButtonWithLink mainText="CHCĘ ODEBRAĆ ZNIŻKĘ"
                  >
                  </StyledButtonWithLink>
                </Link>

              </BackToPageButtonWrapper>

              <NoThanksParagraph onClick={() => setShowModal(false)}>
                Nie, dziękuję
              </NoThanksParagraph>
            </ModalWrapper>
            <CloseButton
              src={xIcon}
              alt="close button"
              onClick={() => setShowModal(false)}
              whileHover={{ scale: 0.9 }}
            />
          </StyledModal>
        </StyledBackdrop>
      )}
    </AnimatePresence>
  );
};

export default Modal;
