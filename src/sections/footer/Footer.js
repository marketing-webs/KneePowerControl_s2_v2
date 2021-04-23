import React from 'react'
import {
    SectionBackground,
    ContentWrapper,
    StyledList,
    Copyright,
} from './Footer.style'

import logo from '../../assets/images/footer-logo.png'

const Footer = ({innerRef}) => {
    return (
        <SectionBackground ref={innerRef}>
            <ContentWrapper>
                <img src={logo} alt="logo" />
                <StyledList>
                    <li>
                        Polityka prywatności
                </li>
                    <li>
                        Pliki Cookies
                </li>
                    <li>
                        Mapa strony
                </li>
                </StyledList>
                <Copyright>
                    © 2020 Copyright. All rights reserved
            </Copyright>
            </ContentWrapper>
        </SectionBackground>
    )
}

export default Footer
