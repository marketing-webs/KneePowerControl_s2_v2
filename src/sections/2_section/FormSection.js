import React from 'react'
import { StyledContainer } from '../../assets/styles/Layouts'
import Bold from '../../assets/styles/Bold'
import {
    ContentWrapper,
    ListWrapper,
    SectionBackground,
    ProductWrapper,
    StyledList,
    ListItem,
    ProductDescription,
    FormBox,
    FormWrapper,
    TimerWrapper,
    FormContentWrapper,
    PriceDiscount,
    TopTitle,
    PromotionTitle,
    SecondTimerWrapper,

} from './FormSection.styled'

import Product from '../../assets/images/Knee-Power-Pad-Set.png'
import ProductdEescription from '../../assets/images/product-description.png'
import FirstForm from './FirstForm'
import CountUp from 'react-countup'
import TimerForm from '../../components/Timer/TimerForm'
import Partners from '../../components/Partners/Partners'


const ListArray = [
    {
        id: 1,
        text: <Bold>powrót do <strong>pełnej sprawności fizycznej</strong> w zaledwie 4 tygodnie</Bold>,
    },
    {
        id: 2,
        text: <Bold><strong>bezpowrotna redukcja</strong> bólu i uczucia dyskomfortu</Bold>
    },
    {
        id: 3,
        text: <Bold>przywrócona <strong>prawidłowa motoryka i płynność</strong> ruchów</Bold>,
    },
    {
        id: 4,
        text: <Bold>kompleksowa <strong>regeneracja tkanki chrzęstnej</strong> i kostnej</Bold>,
    },
    {
        id: 5,
        text: <Bold><strong>6-krotny wzrost energii</strong> i poprawa samopoczucia</Bold>,
    }
]

const FormSection = (props) => {
    const partner = props.partner;


    return (
        <SectionBackground>
            <StyledContainer>
                <ContentWrapper>
                    <ListWrapper>
                        <h3>
                            Zaufaj <span>Knee Power Control </span>
                            i odzyskaj kontrolę nad swoimi stawami
                        </h3>
                        <StyledList>
                            {ListArray.map(({ id, text }) => {
                                return (
                                    <ListItem key={id}>
                                        {text}
                                    </ListItem>
                                )
                            })}
                        </StyledList>
                    </ListWrapper>
                    <ProductWrapper>
                        <img src={Product} alt="Product" />
                        <ProductDescription src={ProductdEescription} alt="Product" />
                    </ProductWrapper>
                </ContentWrapper>
                <FormBox>
                    <h2>
                        <span>Szkoda czasu zmarnowanego na ból!</span><br />
                        Nie zwlekaj i zamów swój zestaw.
                    </h2>
                        <FormContentWrapper  id={props.id}>
                        <FormWrapper>
                            <h3>
                                WYPEŁNIJ FORMULARZ
                        </h3>
                            <FirstForm />
                        </FormWrapper>
                        <TimerWrapper>
                            <TopTitle>
                                NIE ZWLEKAJ!
                            </TopTitle>
                            <h4>
                                Otrzymaj<span> Knee Power Control </span>za jedyne:
                            </h4>
                            <PriceDiscount>
                                <span>137 zł</span> zamiast <p>317 zł!</p>
                            </PriceDiscount>

                            <h3>
                                DO KOŃCA PROMOCJI:{' '}
                            </h3>
                            <SecondTimerWrapper>
                                <TimerForm hours={0} minutes={45} />
                            </SecondTimerWrapper>
                            <PromotionTitle>
                                W PROMOCJI POZOSTAŁO:{" "}
                                <span>
                                    <CountUp end={3} start={30} duration={600} useEasing={false} /> sztuk
                                </span>
                            </PromotionTitle>
                        </TimerWrapper>
                    </FormContentWrapper>
                </FormBox>
                {partner && <Partners />}
            </StyledContainer>
        </SectionBackground>
    )
}

export default FormSection
