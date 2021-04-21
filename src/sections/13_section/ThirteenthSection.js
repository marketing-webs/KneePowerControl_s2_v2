import React from 'react'

import {
    MainTitle,
    SectionBackground,
    ContentWrapper,
    DoctorBox,
    DoctorSignature,
    DoctorImage,
    BackgroundMask,
} from './ThirteenthSection.styled';

import professor from '../../assets/images/profesor.png'

const ThirteenthSection = () => {
    return (
        <SectionBackground>
            <BackgroundMask />
            <ContentWrapper>
                <DoctorBox>
                    <MainTitle>
                        Jak opracowałem <span>antidotum</span> na bolące stawy?
                    </MainTitle>
                    <p>
                        „Większość życia zawodowego spędziłem na leczeniu dysfunkcji układu szkieletowo-mięśniowego w szpitalu Mercy Health & Medical Center w Perth. Na pewnym etapie swojej kariery byłem gotowy, by samemu opracować metodę, która pomoże moim <strong>pacjentom raz na zawsze uwolnić się od zwyrodnień i bólu stawów.</strong> Wiedziałem, że mój produkt musi łączyć działanie od środka i od zewnątrz: regenerować i chronić. Tak wpadłem na pomysł zestawu Knee Power Control składającego się ze stabilizatora i bioaktywnych żeli.
                    </p>
                    <p>
                        Biomechaniczny stabilizator dekompresyjny działa przeciwbólowo, likwiduje dokuczliwe objawy zwyrodnień i blokuje dalszą degenerację stawu. Zdejmując ciężar nawet do 20kg z uszkodzonego lub zdegenerowanego zmianami chorobowymi kolana, stabilizator sprawia, że kości przestają trzeć o siebie i uciskać na nerwy, a <strong>ból mija już nawet w ciągu 8 minut.</strong>
                    </p>
                    <p>
                        Nieodłącznym elementem kuracji są bioaktywne żele, zawierające nanocząsteczki naturalnych fitosteroli i przeciwutleniaczy. <strong>Automatycznie aktywizują całodobowy proces odbudowy uszkodzonej tkanki chrzęstnej.</strong> W odróżnieniu od niszczących wątrobę farmaceutyków działają natychmiastowo, stymulując organizm do procesu samoleczenia. Odbudowują zniszczone tkanki, uzupełniają wszelkie niedobory mazi stawowej i wygaszają sygnały bólu na poziomie wewnątrztkankowym.
                    </p>
                    <p>
                        <span>
                            Aż 9/10 pacjentów stosujących Knee Power Control pozbyło się bólu już po pierwszych 5-ciu dniach stosowania. Dzięki mojemu zestawowi widzę, jak ludzie wracają do młodzieńczej sprawności fizycznej.”
                        </span>
                    </p>
                    <DoctorSignature>
                        <p>
                            <strong><span>Robert McKenzie-Lachman, </span></strong>
                        specjalista chirurg ortopeda, reumatolog
                        – pomysłodawca i wykonawca zestawu
                        </p>
                    </DoctorSignature>
                    <DoctorImage src={professor} alt="professor" />
                </DoctorBox>
            </ContentWrapper>
        </SectionBackground>
    )
}

export default ThirteenthSection
