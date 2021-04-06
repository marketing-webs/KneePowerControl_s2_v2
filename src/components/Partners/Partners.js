import React from 'react'
import styled from 'styled-components'

import partner1 from '../../assets/images/partner1.png'
import partner2 from '../../assets/images/partner2.png'
import partner3 from '../../assets/images/partner3.png'
import partner4 from '../../assets/images/partner4.png'
import partner5 from '../../assets/images/partner5.png'
import partner6 from '../../assets/images/partner6.png'
import partner7 from '../../assets/images/partner7.png'

const StyledWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 15px 0px 50px;
    

    img {
      width: 110px;
      height: 62px;
      margin: 10px;
      
      @media (min-width: 500px) {
        width: 138px;
        height: 82px;
        margin: 5px;
      }
    }
`;

const Partners = () => {
    return (
        <StyledWrapper>
            <img src={partner1} alt="partner" />
            <img src={partner2} alt="partner" />
            <img src={partner3} alt="partner" />
            <img src={partner4} alt="partner" />
            <img src={partner5} alt="partner" />
            <img src={partner6} alt="partner" />
            <img src={partner7} alt="partner" />
        </StyledWrapper>
    )
}

export default Partners
