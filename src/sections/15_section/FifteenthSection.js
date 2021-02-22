import React from 'react'

import {
    SectionBackground,
    MainTitle,
    ContentWrapper,
} from './FifteenthSection.styled'

import SliderCarousell from './Slider'

const FifteenthSection = () => {
    return (
        <SectionBackground>
            <ContentWrapper>
                <MainTitle>
                    Zapoznaj się z <span>opiniami zadowolonych
                    użytkowników</span> Knee Power Control, którzy pozbyli
                    się dokuczliwych problemów ze stawami:
                </MainTitle>
                <SliderCarousell />
            </ContentWrapper>
        </SectionBackground>
    )
}

export default FifteenthSection
