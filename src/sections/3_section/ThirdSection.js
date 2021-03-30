import React from 'react'

import {
    MainTitle,
    SectionBackground,
    SttyledList,
    UnderTitle,
} from './ThirdSection.styled'

import icon1 from '../../assets/images/cure1.png'
import icon2 from '../../assets/images/cure2.png'
import icon3 from '../../assets/images/cure3.png'
import icon4 from '../../assets/images/cure4.png'
import icon5 from '../../assets/images/cure5.png'
import icon6 from '../../assets/images/cure6.png'

const ListArray = [
    {
        id: 1,
        icon: icon1,
        text: "Zmagających się z konsekwencjami przebytych urazów i kontuzji"
    },
    {
        id: 2,
        icon: icon2,
        text: "Cierpiących na różnego rodzaju choroby i zwyrodnienia stawów"
    },
    {
        id: 3,
        icon: icon3,
        text: "Narażonych na przeciążenia stawów, np. ze względu na dużą nadwagę lub charakter pracy"
    },
    {
        id: 4,
        icon: icon4,
        text: "Sportowców i osób o dużej aktywności fizycznej"
    },
    {
        id: 5,
        icon: icon5,
        text: "O osłabionej kondycji stawów, w tym przede wszystkim osób starszych"
    },
    {
        id: 6,
        icon: icon6,
        text: "Borykających się z bólem kręgosłupa, bioder czy kolan o różnego rodzaju podłożu"
    },
]

const ThirdSection = () => {
    return (
        <div>
            <SectionBackground>
                <MainTitle>
                    Dla kogo jest kuracja <span>Knee Power Control?</span>
                </MainTitle>
                <UnderTitle>
                    Kuracja jest skierowana do osób:
                </UnderTitle>
                <SttyledList>
                    {ListArray.map(({ id, icon, text }) => {
                        return (
                            <li key={id}>
                                <img src={icon} alt="icon cure" />
                                <p>{text}</p>
                            </li>
                        )
                    })}
                </SttyledList>
            </SectionBackground>
        </div>
    )
}

export default ThirdSection
