import React from 'react'

import {
    SectionBackground,
    MainTitle,
    ContentWrapper,
    FirstWrapper,
    SecondWrapper,
    FirstProductWrapper,
    SecondProductWrapper,
    FirstListWrapper,
    SecondListWrapper,

} from './EighthSection.styled'

import FirstProduct from '../../assets/images/Cool-Power-Gel-cold.png'
import SecondProduct from '../../assets/images/Repair-Power-Gel-fire.png'
import Bold from '../../assets/styles/Bold'
import { SecondTimerWrapper } from '../2_section/FormSection.styled'

const FirstListArray = [
    {
        id: 1,
        text: <Bold>posiada właściwości <strong>przeciwzapalne i antyseptyczne</strong></Bold>
    },
    {
        id: 2,
        text: <Bold><strong>usuwa przyczynę bólu</strong> stawów i kręgosłupa</Bold>
    },
    {
        id: 3,
        text: <Bold>zapobiega występowaniu <span>nowych zmian zwyrodnieniowych w stawach i kręgosłupie</span></Bold>
    },
    {
        id: 4,
        text: <Bold>uzupełnia niedobory mazi stawowej, zwiększając jej produkcję aż o <strong>274%</strong></Bold>
    },
];

const SecondListArray = [
    {
        id: 1,
        text: <Bold><strong>niweluje obrzęki</strong></Bold>
    },
    {
        id: 2,
        text: <Bold>wykazuje <strong>działanie rozgrzewające, regenerujące i utrwalające efekty całej kuracji</strong></Bold>
    },
    {
        id: 3,
        text: <Bold><strong>odbudowuje zniszczone chrząstki</strong></Bold>
    },
    {
        id: 4,
        text: <Bold>przygotowuje do procesu pełnej rekonstrukcji stawów kolanowych i kręgosłupa <strong>raz na zawsze</strong> cofając wszelkiego rodzaju patologie</Bold>
    },
]

const EighthSection = () => {
    return (
        <SectionBackground>
            <MainTitle>
                <span>Żele</span> - funkcje i sposób działania
            </MainTitle>
            <ContentWrapper>
                <FirstWrapper>
                    <FirstProductWrapper>
                        <img src={FirstProduct} alt="Product image" />
                    </FirstProductWrapper>
                    <FirstListWrapper>
                        <h3>
                            Cool Power Gel
                    </h3>
                        {
                            FirstListArray.map(({ id, text }) => {
                                return (
                                    <li key={id}>
                                        {text}
                                    </li>
                                )
                            })
                        }
                    </FirstListWrapper>
                </FirstWrapper>
                <SecondWrapper>
                    <SecondListWrapper>
                        <h3>
                            Repair Power Gel
                    </h3>
                        {
                            SecondListArray.map(({ id, text }) => {
                                return (
                                    <li key={id}>
                                        {text}
                                    </li>
                                )
                            })
                        }
                    </SecondListWrapper>
                    <SecondProductWrapper>
                        <img src={SecondProduct} alt="Product image" />
                    </SecondProductWrapper>
                </SecondWrapper>
            </ContentWrapper>

        </SectionBackground>
    )
}

export default EighthSection
