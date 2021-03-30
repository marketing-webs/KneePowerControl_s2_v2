import React from 'react'
import styled from 'styled-components'
import CovidLogo from '../assets/images/covid-icon.png'

const Wrapper = styled.div`
    @media (max-width: 1023px) { 
        display: none;
    }
    background: #F9BA20;
    padding: 15px 20px;
`;

const SecurityWrapper = styled.div`
    max-width: 1400px;
    margin: auto;
    display: flex;
    align-items: center;
  justify-content: space-around;
`;

const ImageWrapper = styled.div`
    
    img {
        width: 60px;
        height: 60px;
    }
`;

const TextWrapper = styled.div`
     
    p {
        text-align: left;
        margin: 0px 10px;
        font-weight: 700;
        font-size: 16px;
    }
`;

const Securitiy = () => {
    return (
        <Wrapper>
            <SecurityWrapper>
                <ImageWrapper>
                    <img src={CovidLogo} alt="logo-covid" />
                </ImageWrapper>
                <TextWrapper>
                    <p>
                        GWARANCJA BEZPIECZNEJ DOSTAWY! Dbamy o bezpieczeństwo swoje i naszych klientów! Nasi kurierzy zmieniają maski i rękawiczki co 2 godziny. Nie musisz się o nic martwić! Zadbaliśmy o to, by proces dostawy i płatności odbywał się bez bezpośredniego kontaktu.
                    </p>
                </TextWrapper>
            </SecurityWrapper>
        </Wrapper>
    )
}

export default Securitiy
