import React from 'react'
import styled from 'styled-components'
import { mediaQueries } from "../../assets/styles/mediaQueries"
import TenthSection from '../10_section/TenthSection';
import EleventhSection from '../11_section/EleventhSection';
import NinthSection from '../9_section/NinthSection';

const StyledBackground = styled.div`
    background-image: linear-gradient(
        
        to bottom,
        #FFFFFF,
        #FFFFFF,
        #FFFFFF,
        #FFFFFF,
        #FFF5DE,
        #FFF5DE,
        #FFE5A7,
        #FFE5A7,
        #FFE5A7,
        #FFF5DE,
        #FFFFFF
      );
`;

const SectionBackground = () => {
    return (
        <StyledBackground>
            <NinthSection />
            <TenthSection />
            <EleventhSection />
        </StyledBackground>
    )
}

export default SectionBackground
