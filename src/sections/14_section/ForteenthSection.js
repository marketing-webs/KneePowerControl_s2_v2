import React from 'react'

import {
    SectionBackground,
    MainTitle,
    ContentWrapper,
    CertificateWrapper,
    DescriptionWrapper,
} from './ForteenthSection.styled'

import certificate from '../../assets/images/Certificate.png'

const ForteenthSection = () => {
    return (
        <SectionBackground>
            <ContentWrapper>
                <CertificateWrapper>
                    <img src={certificate} alt="certificate" />
                </CertificateWrapper>
                <DescriptionWrapper>
                    <MainTitle>
                        PONAD <span>15 LAT BADAŃ</span> NAUKOWYCH – JEDNOZNACZNE REZULTATY
                    </MainTitle>
                    <p>
                        Wysoka skuteczność w walce ze schorzeniami układu kostno-stawowego, dolegliwościami bólowymi odcinków kręgosłupa i kolan została potwierdzona przez niezależne badania kliniczne, przeprowadzone w wielu renomowanych ośrodkach ortopedycznych na całym świecie oraz liczne badania konsumenckie. Zestaw <strong>KNEE POWER CONTROL</strong> zdobył uznanie wśród specjalistów z zakresu ortopedii, reumatologii i  fizjoterapii na skalę międzynarodową. Światowi specjaliści polecają go swoim pacjentom. Produkt <strong>KNEE POWER CONTROL</strong> posiada Europejską Gwarancję Najwyższej Jakości i został nagrodzony wieloma wyróżnieniami oraz certyfikatami.
                    </p>
                </DescriptionWrapper>
            </ContentWrapper>
        </SectionBackground>
    )
}

export default ForteenthSection
