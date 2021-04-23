import React, {useState} from 'react'

import {
    SectionBackground,
    GlobalWrapper,
    BackgroundMask,
    MainTitle,
    ContentWrapper,
    ProductWrapper,
    StyledList,
    ListItem,
    ProductImage,
    MainTitleMobile,
    ProductImageDesktop,
    MobileListItem,
} from './SixthSection.style';

import nextId from "react-id-generator";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons'

import Product from '../../assets/images/unique features.png'
import {mediaQueries} from "../../assets/styles/mediaQueries";
import Accordion from "../../components/MobileAccordion/Accordion";

const ListArray = [
    {
        // id: 1,
        title: "1. Ultralekki korpus wykonany ze specjalnego medycznego plastiku",
        text: "Dzięki niemu stabilizator jest wyjątkowo wygodny i wręcz niezauważalny. Po jego założeniu można nie tylko swobodnie się poruszać, ale nawet uprawiać sport, jednocześnie chroniąc zniszczone kolana.",
    },
    {
        // id: 2,
        title: "2. Wykończenie miękkim, antypoślizgowym materiałem z „oddychających” mikrowłókien",
        text: "Specjalnie przygotowane włókna przepuszczają powietrze i tym samym zapewniają odpowiedni poziom wentylacji. Noga w stabilizatorze nie przegrzewa się, więc nie ma ryzyka pojawiania się otarć i odparzeń.",
    },
    {
        // id: 3,
        title: "3. Wymienne sprężyny ze stopu aluminium (gatunek AI99)",
        text: "Dzięki sprężynom można skutecznie zmniejszyć nacisk na kolano. W ten sposób zostaje ono odciążone (nawet od 20 do 40 kg na jedną nogę, w zależności od wersji stabilizatora), a stawy mogą regenerować się w ekstremalnie szybkim tempie. Co ważne, sprężyny można łatwo oddzielić od reszty stabilizatora, co ułatwia jego czyszczenie.",
    },
    {
        // id: 4,
        title: "4. Regulowane rzepy do zapinania, umożliwiające indywidualne dostosowanie do rozmiaru nogi",
        text: "Dzięki nim stabilizator jest na tyle uniwersalny, że nosić może go każdy bez względu na płeć, wzrost i budowę ciała.",
    },
]



    const SixthSection = () => {
        // custom media queries for
    const isMobile = mediaQueries({
        query: '(max-device-width: 500px)'
    })
    const isBigScreen = mediaQueries({
        query: '(min-device-width: 500px)'
    })

    return (
        <SectionBackground>
            <BackgroundMask />
            <MainTitleMobile>
                Poznaj <span>wyjątkowe cechy</span> Knee Power Control
            </MainTitleMobile>
            <GlobalWrapper>
            <ProductImageDesktop src={Product} alt="product image" />

            <ContentWrapper>
                <ProductWrapper></ProductWrapper>
                <StyledList>
                    <MainTitle>
                        Poznaj <span>wyjątkowe cechy</span> Knee Power Control
                    </MainTitle>
                    {isMobile &&
                    <Accordion />
                    }
                    {ListArray.map(({ id, title, text }) => {
                            return (
                                <div>
                                    {isBigScreen &&
                                        <ListItem key={nextId}>
                                            <div>
                                                <p>
                                                    {title}
                                                </p>
                                            </div>
                                            <p>{text}</p>
                                        </ListItem>}
                                </div>
                            )
                        })
                    }

                </StyledList>
            </ContentWrapper>
            </GlobalWrapper>
        </SectionBackground>
    )
}

export default SixthSection
