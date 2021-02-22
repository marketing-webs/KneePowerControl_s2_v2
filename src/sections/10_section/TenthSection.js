import React from 'react'
import Bold from '../../assets/styles/Bold'
import { SttyledList } from '../3_section/ThirdSection.styled'

import {
    SectionBackground,
    MainTitle,
    ContentWrapper,
    StyledList,
    StyledItem,
    MansWrapper,
    WomansWrapper
} from './TenthSection.styled';

import ManRighth from '../../assets/images/man_right_side.png';
import WomanLeft from '../../assets/images/woman_left_side.png';

const ListArray = [
    {
        id: 1,
        text: <Bold>To <span>jedyna kuracja,</span> która łączy działanie od zewnątrz i od wewnątrz</Bold>
    },
    {
        id: 2,
        text: <Bold><span>Żele działają na wszystkie obarczone bólem stawy:</span> w rękach, w kręgosłupie i w nogach</Bold>
    },
    {
        id: 3,
        text: <Bold>Stabilizator posiada uniwersalny rozmiar i zapięcie na rzepy, które <span>zapewnia idealne dopasowanie,</span> pozwalając na zachowanie swobody ruchów w każdej sytuacji</Bold>
    },
    {
        id: 4,
        text: <Bold>Produkt <span>odciąża stawy kolanowe nawet o 20 kg,</span> a dla osób z nadwagą przewidziano stabilizator o silniejszych, specjalnie wzmocnionych sprężynach, które zdejmą nawet do 40 kg z ciężaru ciała</Bold>
    },
    {
        id: 5,
        text: <Bold>Bioaktywne substancje zawarte w żelach <span>działają przeciwbólowo, regenerująco, odbudowująco i ochronnie</span> na stawy kolanowe i kręgosłup</Bold>
    },
    {
        id: 6,
        text: <Bold>Zniszczone <span>tkanki są naprawiane od wewnątrz</span> bez interwencji chirurgicznej</Bold>
    },
    {
        id: 7,
        text: <Bold>Zestaw jest <span>w 100% bezpieczny</span> i nie powoduje alergii.</Bold>
    },
]

const TenthSection = () => {
    return (
        <SectionBackground>
            <WomansWrapper>
                <img src={WomanLeft} alt="Woman stand" />
            </WomansWrapper>
            <MansWrapper>
                <img src={ManRighth} alt="Man stand" />
            </MansWrapper>
            <MainTitle>
                Dlaczego Knee Power Control
                jest <span>najlepszą kuracją</span> na rynku?
            </MainTitle>
            <ContentWrapper>

                <StyledList>
                    {
                        ListArray.map(({ id, text }) => {
                            return (
                                <StyledItem key={id}>
                                    {text}
                                </StyledItem>
                            )
                        })
                    }
                </StyledList>

            </ContentWrapper>
        </SectionBackground>
    )
}

export default TenthSection
