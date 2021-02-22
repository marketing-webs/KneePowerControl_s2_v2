import React from 'react'
import {
    SectionBackground,
    MainTitle,
    ContentWrapper,
    BoxWrapper,
    ProductWrapper,
    ProductTitle,
    ProductDestcription,
    RedWrapper,
    GreenWrapper
} from './EleventhSection.styled';

import ReactCompareImage from 'react-compare-image'

import xray1 from '../../assets/images/xray1.png'
import xray2 from '../../assets/images/xray2.png'
import xray3 from '../../assets/images/xray3.png'
import xray4 from '../../assets/images/xray4.png'

const EleventhSection = () => {
    return (
        <SectionBackground>
            <MainTitle>
                Zobacz <span>efekty działania</span> działania kuracji
                Knee Power Control
            </MainTitle>
            <ContentWrapper>
                <BoxWrapper>
                    <RedWrapper>
                        <h3>
                            Przed kuracją
                        </h3>
                        <p>
                            <strong>Staw kolanowy dotknięty zwyrodnieniem</strong><br /><br />
                            Ból wywołany przez nadmierny ucisk kości na siebie, widoczny stan zapalny w obrębie stawu. Brak ochrony w postaci przestrzeni międzystawowej wypełnionej mazią zwiększa tarcie chrząstek o siebie, przyczyniając się do utraty płynności ruchów, bólu oraz uczucia trzeszczenia w stawie. Powstałe na powierzchni kości mikrourazy nasilają postęp zwyrodnień, <strong>co w przypadku braku odpowiedniej interwencji może skutkować nawet całkowitą utratą sprawności ruchowej.</strong>

                        </p>

                    </RedWrapper>
                    <ProductWrapper>
                        <ProductTitle>
                            <h3>
                                Staw kolanowy
                            </h3>
                        </ProductTitle>
                        <ReactCompareImage leftImage={xray1} rightImage={xray2} hover="true" />
                        <ProductDestcription>
                            <p>
                                Przesuń w lewo lub w prawo żeby zobaczyć efekty działania kuracji
                            </p>
                        </ProductDestcription>
                    </ProductWrapper>
                    <GreenWrapper>
                        <h3>
                            Po kuracji
                        </h3>
                        <p>
                            <strong>Sprawny staw kolanowy</strong><br /><br />
                            Sprawny staw kolanowy w wyniku działania dekompresji przy użyciu stabilizatora, powiększyła się przestrzeń międzystawowa, umożliwiając odnowienie się mazi stawowej i kolagenu, pełniących funkcję naturalnego „smaru”. Dzięki prawidłowemu poślizgowi, kości przestały trzeć o siebie, niwelując uczucie bólu i sztywności kolana. Bioaktywne żele odbudowały chrząstkę stawową i usunęły zmiany patologiczne tkanek, dzięki czemu zwyrodnienia cofnęły się.

                        </p>
                    </GreenWrapper>
                </BoxWrapper>
                <BoxWrapper>
                    <RedWrapper>
                        <h3>
                            Przed kuracją
                        </h3>
                        <p>
                            <strong>Kręgosłup dotknięty zwyrodnieniem </strong><br /><br />
                            Na zdjęciu rentgenowskim przykład <strong>ostrego lumbago</strong>. Wystąpiło gwałtowne nasilenie zmian zwyrodnieniowych krążka międzykręgowego pod wpływem nadmiernego obciążenia. Spowodowało to pęknięcie włókien pierścienia włóknistego i przesunięcie się jądra miażdżystego do tyłu, <strong>wywołując ostry ból kręgosłupa</strong>. Dodatkowo lumbago doprowadziło do wystąpienia <strong>rwy kulszowej</strong>. Jądro miażdżyste, które normalnie stanowi centralną część krążka międzykręgowego, uległo przesunięciu do tyłu w takim stopniu, że spowodowało ucisk na korzenie nerwowe w kanale kręgowym. Do bólu kręgosłupa dołączył <strong>ból promieniujący do pośladka, uda lub stopy.</strong>
                        </p>

                    </RedWrapper>
                    <ProductWrapper>
                        <ProductTitle>
                            <h3>
                                Staw kolanowy
                            </h3>
                        </ProductTitle>
                        <ReactCompareImage leftImage={xray3} rightImage={xray4} hover="true" />
                        <ProductDestcription>
                            <p>
                                Przesuń w lewo lub w prawo żeby zobaczyć efekty działania kuracji
                            </p>
                        </ProductDestcription>
                    </ProductWrapper>
                    <GreenWrapper>
                        <h3>
                            Po kuracji
                        </h3>
                        <p>
                            <strong>Sprawny kręgosłup</strong><br /><br />
                            Kręgosłup został odciążony dzięki zastosowaniu stabilizatora, a dzięki używaniu bioaktywnych żeli, zmiany zwyrodnieniowe w krążkach zostały zniwelowane. Jądro miażdżyste powróciło na swoje miejsce, w centralną część krążka międzykręgowego. Żele pozwoliły na eliminację bólu i dostarczyły komórki naprawcze do jądra miażdżystego, czyli galaretowatej substancji, która występuje między dyskami kręgosłupa i odpowiedzialna jest za jego elastyczność. W ten sposób możliwe stało się złagodzenie bólu pleców, charakterystycznego dla chorób zwyrodnieniowych kręgosłupa. Żele wspomogły prawidłową amortyzację kręgów.
                        </p>
                    </GreenWrapper>
                </BoxWrapper>
            </ContentWrapper>
        </SectionBackground>
    )
}

export default EleventhSection
