import React from 'react'
import {
    SectionBackground,
    MainTitle,
    ProductWrapper,
    FirstBox,
    SecondBox,
    ThirdBox,
} from "./FourthSection.styled"

import Product1 from '../../assets/images/Knee-Power-Pad-stabilizer.png'
import Product2 from '../../assets/images/Cool-Power-Gel.png'
import Product3 from '../../assets/images/Repair-Power-Gel.png'

const FourthSection = () => {
    return (
        <SectionBackground>
            <MainTitle>
                W skład <span>Knee Power Control</span> wchodzi:
            </MainTitle>

            <ProductWrapper>
                <FirstBox>
                    <h3>
                        Stabilizator Knee Power Pad
                    </h3>
                    <img src={Product1} alt="product icon" />
                </FirstBox>
                <SecondBox>
                    <h3>
                        Żel Cool Power Gel
                    </h3>
                    <img src={Product2} alt="product icon" />
                </SecondBox>
                <ThirdBox>
                    <h3>
                        Żel Repair Power Gel
                    </h3>
                    <img src={Product3} alt="product icon" />
                </ThirdBox>
            </ProductWrapper>
        </SectionBackground>
    )
}

export default FourthSection
