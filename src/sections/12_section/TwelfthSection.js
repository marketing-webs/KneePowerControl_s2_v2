import React from 'react'

import {
    SectionBackground,
    MainTitle,
    ContentWrapper,
    CardWrapper,
    CardItem,
    StyledIcon,
} from './TwelfthSection.styled'

import pilar1 from '../../assets/images/pillars-1.png'
import pilar2 from '../../assets/images/pillars-2.png'
import pilar3 from '../../assets/images/pillars-3.png'
import pilar4 from '../../assets/images/pillars-4.png'
import pilar5 from '../../assets/images/pillars-5.png'


import icon1 from '../../assets/images/I.png'
import icon2 from '../../assets/images/II.png'
import icon3 from '../../assets/images/III.png'
import icon4 from '../../assets/images/IV.png'
import icon5 from '../../assets/images/V.png'

const ListArray = [
    {
        id: 1,
        firstIcon: pilar1,
        secondIcon: icon1,
        title: "Bezpowrotnie likwiduje ból",
        text: "Już po pierwszych 8 minutach od zastosowania zapomnisz o bólu w stawach czy kręgosłupie dzięki idealnej kombinacji składników zawartych w żelu regenerującym Repair Power Gel. Kuracja usunie bezpowrotnie wszystkie 41 dolegliwości bólowych.",
    },
    {
        id: 2,
        firstIcon: pilar2,
        secondIcon: icon2,
        title: "Już po 2 tygodniach stosowania zapomnisz o obrzękach i opuchliźnie",
        text: "Żele usprawnią obieg krwi w Twoim organizmie, dzięki czemu nie będziesz już doświadczać nieestetycznych obrzęków i zaczerwienionej skóry. Dodatkowo przestaniesz odczuwać bóle mięśni i kości w całym ciele.",
    },
    {
        id: 3,
        firstIcon: pilar3,
        secondIcon: icon3,
        title: "Po zakończeniu całej kuracji Twoje stawy będą zregenerowane nawet w 98,5%.",
        text: "Wszelkie czynności związane z ich zginaniem lub prostowaniem nie będą powodować już trudności. Twoje ciało przestanie trzeszczeć i strzykać, dzięki czemu znów nabierzesz płynności w poruszaniu się, a Twoje stawy odzyskają dawną elastyczność i giętkość.",
    },
    {
        id: 4,
        firstIcon: pilar4,
        secondIcon: icon4,
        title: "100% gwarancja bezpieczeństwa",
        text: "Zestaw wykonany jest z bezpiecznych dla  zdrowia materiałów i substancji. Jego stosowanie nie jest uzależniające i nie powoduje efektów ubocznych, jak leki przeciwbólowe czy operacje. Mogą go stosować osoby w każdym wieku, niezależnie od płci.",
    },
    {
        id: 5,
        firstIcon: pilar5,
        secondIcon: icon5,
        title: "97,4% skuteczność potwierdzona licznymi badaniami klinicznymi",
        text: "Odzyskasz sprawność i zregenerujesz stawy kolanowe i kręgosłup zaledwie w miesiąc! Już w połowie kuracji Twoje stawy zostaną wzmocnione aż 4-krotnie! Dołącz do ponad 80 tysięcy zadowolonych klientów i zapomnij o bólu stawów i kręgosłupa!",
    },
]

const TwelfthSection = () => {
    return (
        <SectionBackground>
            <MainTitle>
                <span>5 filarów</span> działania Knee Power Control
            </MainTitle>
            <ContentWrapper>
                <CardWrapper>
                    {ListArray.map(({ id, firstIcon, secondIcon, title, text }) => {
                        return (
                            <CardItem key={id} >
                                <StyledIcon src={secondIcon} alt="icon" />
                                <img src={firstIcon} alt="pillar" />
                                <h3>
                                    {title}
                                </h3>
                                <p>
                                    {text}
                                </p>
                            </CardItem>
                        )
                    })}
                </CardWrapper>
            </ContentWrapper>
        </SectionBackground>
    )
}

export default TwelfthSection
