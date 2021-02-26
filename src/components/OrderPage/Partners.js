import React from 'react';
import styled from 'styled-components';
import inPostLogo from '../../assets/images/partner2.png';
import pocztaPolskaLogo from '../../assets/images/partner1.png';
import dpdLogo from '../../assets/images/partner4.png';
import visaLogo from '../../assets/images/partner5.png';
import dhlLogo from '../../assets/images/partner3.png';
import mastercardLogo from '../../assets/images/partner6.png';

import { motion } from 'framer-motion';

const PartnersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  margin-bottom: 10px;
`;

const Partner = styled(motion.div)`
  max-width: 150px;
  height: auto;
  padding: 10px;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 5px 5px 16px -5px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 5px 5px 16px -5px rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 16px -5px rgba(0, 0, 0, 0.2);
`;

const PartnerLogo = styled.img`
  width: 100%;
`;

const Partners = () => {
  return (
    <PartnersContainer>
      <Partner whileHover={{ scale: 1.05 }}>
        <PartnerLogo src={inPostLogo} />
      </Partner>
      <Partner whileHover={{ scale: 1.05 }}>
        <PartnerLogo src={pocztaPolskaLogo} />
      </Partner>
      <Partner whileHover={{ scale: 1.05 }}>
        <PartnerLogo src={dpdLogo} />
      </Partner>
      <Partner whileHover={{ scale: 1.05 }}>
        <PartnerLogo src={visaLogo} />
      </Partner>
      <Partner whileHover={{ scale: 1.05 }}>
        <PartnerLogo src={dhlLogo} />
      </Partner>
      <Partner whileHover={{ scale: 1.05 }}>
        <PartnerLogo src={mastercardLogo} />
      </Partner>
    </PartnersContainer>
  );
};

export default Partners;
