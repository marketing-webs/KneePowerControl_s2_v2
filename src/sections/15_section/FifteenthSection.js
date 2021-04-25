import React from 'react'
import SliderCarousel from "./Slider"


import {
    SectionBackground,
    MainTitle,
    ContentWrapper,
} from './FifteenthSection.styled'


const FifteenthSection = ({innerRef}) => {
    return (
        <SectionBackground  ref={innerRef}>
            <ContentWrapper>
                <MainTitle>
                    Zapoznaj się z <span>opiniami zadowolonych
                    użytkowników</span> Knee Power Control, którzy pozbyli
                    się dokuczliwych problemów ze stawami:
                </MainTitle>
                <SliderCarousel />
            </ContentWrapper>
        </SectionBackground>
    )
}

export default FifteenthSection
