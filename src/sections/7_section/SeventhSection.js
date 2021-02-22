import React from 'react'
import {
    SectionBackground,
    MainTitle,
    ContentWrapper,
    CardWrapper,
    StyledCard,
    GreenText

} from './SeventhSection.styled';

import icon1 from '../../assets/images/leg-1.png'
import icon2 from '../../assets/images/leg-2.png'
import icon3 from '../../assets/images/leg-3.png'
import icon4 from '../../assets/images/leg-4.png'

const ArrayList = [
    {
        id: 1,
        icon: icon1,
        text: "Korpus ze sprężynami przykładamy do wewnętrznej strony nogi",
    },
    {
        id: 2,
        icon: icon2,
        text: "Górny pasek z rzepem dopasowujemy i zapinamy nad kolanem w jego przedniej części",
    },
    {
        id: 3,
        icon: icon3,
        text: "Dolny pasek z rzepem dopasowujemy i zapinamy pod kolanem w jego przedniej części",
    },
    {
        id: 4,
        icon: icon4,
        text: "Jeżeli możesz swobodnie poruszać nogą, założyłeś stabilizator poprawnie",
    },
]



const SeventhSection = () => {
    return (
        <SectionBackground>
            <MainTitle>
                <span>Stabilizator</span> - jak się go używa?
            </MainTitle>
            <ContentWrapper>
                <CardWrapper>
                    {
                        ArrayList.map(({ id, icon, text }) => {
                            return (
                                <StyledCard key={id}>
                                    <img src={icon} alt="legs icon" />
                                    <p>
                                        {text}
                                    </p>
                                </StyledCard>
                            )
                        })
                    }
                </CardWrapper>
                <GreenText>
                    <p>
                        Stabilizator został przebadany i przetestowany w ekstremalnych warunkach, nie przemieszcza się na nodze podczas wykonywania ruchu. Można zakładać go bezpośrednio na ciało lub na spodnie.
                    </p>
                </GreenText>
            </ContentWrapper>
        </SectionBackground>
    )
}

export default SeventhSection
