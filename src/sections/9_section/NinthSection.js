import React from 'react'
import {
    SectionBackground,
    MainTitle,
    ContentWrapper,
    PlayerWrapper,
    PlayerMobile,
    StyledParagraph,
    SecondTitle,
    ChartSection,
    ChartDescriptionWrapper,
    ChartWrapper,
    Chart,
    ChartList,
} from './NinthSection.styled';

import chart from '../../assets/images/chart.png'
import player from '../../assets/images/handball-player.png'
import playerMobile from '../../assets/images/PlayerMobile.png'



const NinthSection = () => {
    return (
        <SectionBackground>
            <PlayerMobile>
                <img src={playerMobile} alt="Player boy" />
            </PlayerMobile>
            <MainTitle>
                Badania obrazujące <span>wpływ kuracji</span>
                    na uszkodzony staw barkowy
                </MainTitle>
            <ContentWrapper>
                <PlayerWrapper>
                    <img src={player} alt="Player boy" />
                </PlayerWrapper>

                <StyledParagraph>
                    Pan Maciek z Warszawy podczas treningu piłki ręcznej doznał urazu stawu barkowego. Do kontuzji doszło w wyniku upadku na bark, poprzedzonego silnym zderzeniem z kolegą z drużyny. Nastąpiło uszkodzenie stawu barkowego, pojawił się ból, który uniemożliwił normalne poruszanie ręką. Pan Maciej zdecydował się na 4 tygodniową kurację Knee Power Control i regularnie smarował obolały fragment ciała żelami.
                    </StyledParagraph>
                <ChartSection>
                    <SecondTitle>
                        Wykres ilustruje działanie żeli*, przyczyniające się do eliminacji poszczególnych dolegliwości związanych z kontuzją:
                        </SecondTitle>
                    <ChartWrapper>
                        <Chart>
                            <img src={chart} alt="Chart" />
                        </Chart>
                        <ChartDescriptionWrapper>
                            <ChartList>
                                <li>
                                    Likwidacja bólu
                                    </li>
                                <li>
                                    Przywrócenie ruchomości
                                    </li>
                                <li>
                                    Eliminacja opuchlizny
                                    </li>
                                <li>
                                    Działanie przeciwzapalne
                                    i rozluźniające
                                    </li>
                            </ChartList>
                            <p>
                                *Procentowe wyniki 30-dniowej kuracji przy użyciu zestawu Knee Power Control, oparte na obserwacji i testach koordynowanych przez ośrodek rehabilitacyjny dla sportowców w Berlinie. Badanie przeprowadzone na próbie 1025 osób.
                                </p>
                        </ChartDescriptionWrapper>
                    </ChartWrapper>

                </ChartSection>

            </ContentWrapper>
        </SectionBackground>
    )
}

export default NinthSection
