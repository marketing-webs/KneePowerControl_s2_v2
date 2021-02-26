import React from 'react'

import {
    SectionBackground,
    MainTitle,
    CardWrapper,
    StyledCard,
    SecondTitle,
} from './FifthSection.styled';

import { v4 as uuidv4 } from 'uuid'

import Bold from '../../assets/styles/Bold'

import icon1 from '../../assets/images/week-1.png'
import icon2 from '../../assets/images/week-2.png'
import icon3 from '../../assets/images/week-3.png'
import icon4 from '../../assets/images/week-4.png'

const ListArray = [
    {
        id: 1,
        title: "Tydzień 1",
        icon: icon1,
        text: [
            <Bold><strong>natychmiastowe uśmierzenie dolegliwości bólowych dzięki efektowi chłodzenia</strong></Bold>,
            <Bold>rozszerzenie naczyń krwionośnych</Bold>,
            <Bold>uruchomienie procesów naprawczych w uszkodzonych tkankach</Bold>
        ]
    },
    {
        id: 2,
        title: "Tydzień 2",
        icon: icon2,
        text: [
            <Bold>uzupełnienie niedoborów mazi stawowej w <strong>97,9%</strong></Bold>,
            <Bold><strong>8-krotne dotlenienie i odżywienie komórek</strong></Bold>,
            <Bold><strong>usunięcie przyczyny</strong> trzeszczenia i strzykania w stawach kolanowych i kręgosłupie</Bold>
        ]
    },
    {
        id: 3,
        title: "Tydzień 3",
        icon: icon3,
        text: [
            <Bold>bezpowrotna likwidacja stanów zapalnych</Bold>,
            <Bold><strong>cofnięcie zwyrodnienia w stawach i kręgosłupie w 98,5%</strong></Bold>,
            <Bold><strong>całkowite odnowienie chrząstki stawowej</strong></Bold>
        ]
    },
    {
        id: 4,
        title: "Tydzień 4",
        icon: icon4,
        text: [
            <Bold><strong>całkowita eliminacja źródła bólu i dolegliwości</strong></Bold>,
            <Bold>utrwalenie działania poprzednich tygodni kuracji</Bold>,
            <Bold><strong>dodatkowe wzmocnienie więzadeł stawowych</strong></Bold>,
            <Bold><strong>5-krotne</strong> poprawienie sprawności ruchowej</Bold>,
        ]
    },
]

const FifthSection = () => {
    return (
        <SectionBackground>
            <MainTitle>
                Kuracja z Knee Power Control
                zajmie Ci <span>jedynie 28 dni!</span>
            </MainTitle>
            <SecondTitle>
                Proces odbudowy stawów przebiega następująco:
            </SecondTitle>
            <CardWrapper>
                {
                    ListArray.map(({ id, title, icon, text }) => {
                        return (
                            <StyledCard key={uuidv4()} title={title} icon={icon}>
                                <h3>
                                    {title}
                                </h3>
                                <img src={icon} alt="" />
                                <>
                                    {text}
                                </>
                            </StyledCard  >
                        )
                    })
                }
            </CardWrapper>
        </SectionBackground>
    )
}

export default FifthSection
