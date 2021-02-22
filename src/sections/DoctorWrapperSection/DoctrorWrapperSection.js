import React from 'react'
import styled from 'styled-components'
import { mediaQueries } from "../../assets/styles/mediaQueries"

import background from '../../assets/images/DoctorBackground.png'
import TwelfthSection from '../12_section/TwelfthSection';
import ThirteenthSection from '../13_section/ThirteenthSection';

export const SectionBackground = styled.div`
    overflow-x: hidden;
    overflow-y: hidden;
    background-repeat: no-repeat;
    background-size: cover;
    
    background-image: url(${background}); 
    @media (min-width: 1080px) {
    }

    ${mediaQueries("xs")`
        margin: 50px 0px 0px;
    `}


`;

const DoctrorWrapperSection = () => {
    return (
        <SectionBackground>
            <TwelfthSection />
            <ThirteenthSection />
        </SectionBackground>
    )
}

export default DoctrorWrapperSection

