import React, { Component } from 'react'
import Slider from 'react-slick'
import SliderTemplate from './SliderTemplate'
import styled from 'styled-components'

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import icon1 from '../../assets/images/avatar1.png'
import icon2 from '../../assets/images/avatar2.png'
import icon3 from '../../assets/images/avatar3.png'
import icon4 from '../../assets/images/avatar4.png'

import star1 from '../../assets/images/five-stars.png'
import star2 from '../../assets/images/four-half-stars.png'
import star3 from '../../assets/images/four-stars.png'
import { CardItem } from '../12_section/TwelfthSection.styled'

import arrowleft from '../../assets/images/arrow-left.png'
import arrowright from '../../assets/images/arrow-right.png'



export const CarouselArray = [
    {
        id: 1,
        icon: icon1,
        title: 'Grażyna (36 l.) ze Skierniewic',
        text: 'Kilka lat temu miałam wypadek samochodowy, w którym mocno uszkodziłam swój kręgosłup i staw biodrowy. Rehabilitacje i leki nie pomagały mi wystarczająco. Byłam załamana – przecież jestem wciąż młoda, a już mam problemy z chodzeniem! Na szczęście przyjaciółka przeczytała w gazecie o Knee Power Control i podzieliła się tą informacją ze mną. Ból przestałam odczuwać już w pierwszych minutach od rozpoczęcia kuracji, a po jej zakończeniu moja sprawność fizyczna stała się jeszcze lepsza niż przed wypadkiem!',
        rating: star1,
    },
    {
        id: 2,
        icon: icon2,
        title: 'Roman (43 l.) z Płocka',
        text: 'Od dziecka cierpiałem na nadwagę, która była spowodowana źle leczoną tarczycą. Zbyt duże obciążenie spowodowało u mnie przeciążenie stóp i koślawienie kolan.  Poddałem się zalecanej operacji, ale niestety mój problem nie minął. Dopiero zestaw dr McKenziego-Lachmana naprawił moje stawy i sprawił, że w końcu mogę poruszać się bez bólu. Z powodu mojej wagi zaproponowano mi wzmocnione sprężyny, nie wahałem się, ponieważ zrobiłbym wszystko żeby pozbyć się tych wszystkich dolegliwości. Wystarczyło 28 dni by całkowicie odnowić mój aparat ruchu! Nigdy nie byłem sprawniejszy, niż teraz!',
        rating: star3,
    },
    {
        id: 3,
        icon: icon3,
        title: 'Katarzyna (68 l.) ze Szczecina',
        text: 'Reumatyzm pojawił się u mnie jako powikłanie po nieleczonej boreliozie. Próbowałam wielu środków, które obiecywały mi odbudowanie mazi stawowej… Tabletki, zastrzyki itd. Kuracja z Knee Power Control w końcu przyniosła to, na co tak długo czekałam, czyli poprawę! I to jaką! Pierwszy żel błyskawicznie zlikwidował ból, a po 3 tygodniach kuracji w końcu mogłam swobodnie zginać i prostować kolano bez żadnego chrupania czy strzykania w środku! Ponad to skończyły się te nieznośne bóle pleców! Czuję się jak nowo narodzona!',
        rating: star2,
    },
    {
        id: 4,
        icon: icon4,
        title: 'Marian (52 l.) z Poznania',
        text: 'Jestem pracownikiem budowlanym od 19. roku życia. W ostatnich miesiącach zacząłem czuć, że moje ciało, zwłaszcza nogi, są przeciążone. Nie mówiąc już o odcinku krzyżowym w kręgosłupie, łupał mnie straszliwie przy podnoszeniu cięższych rzeczy! Ale przecież nie zrezygnuję z pracy, z czego miałbym żyć? O Knee Power Control pierwszy raz dowiedziałem się od kolegi z budowy. Już po pierwszym założeniu stabilizatora i posmarowaniu pleców żelami poczułem ulgę! Polecam ten zestaw każdemu! W końcu nie boję się o stan moich kolan i kręgosłupa oraz nie odczuwam zmęczenia po całym dniu na budowie.',
        rating: star1,
    },
];

const SliderWrapper = styled.div`
        /* min-height: 950px; */
        overflow: visible;
        @media (min-width: 500px) {
          min-height: 600px;
        }
        @media (min-width: 769px) {
          min-height: 500px;
        }
`;

const RightArrow = function SampleNextArrow(props) {

    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                width: "35px",
            }}

            onClick={onClick}
        />
    );
}

const NextArrow = styled(RightArrow)`
    /* position: relative; */
    background-color: transparent;
    top: 750px;
    right: 370px;

    @media (min-width: 1440px) {
        top: 758px;
        right: 500px;
  }
    @media (min-width: 2555px) {
        left: 690px;
  }
    &::before {
        content: "";
        @media (min-width: 1023px) {
            content: url(${arrowright});
        font-size: 25px;
        
        }
    }
  `;

const LeftArrow = function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
            }}
            onClick={onClick}
        />
    );
}

const BeforeArrow = styled(LeftArrow)`
    background-color: transparent;
    top: 750px;
    left: 372px;
    @media (min-width: 1440px) {
        top: 758px;
        left: 502px;
  }
    @media (min-width: 2555px) {
    right: 1150px;
  }
    &::before {
        content: "";
        @media (min-width: 1023px) {
            content: url(${arrowleft});
            font-size: 25px;
        }
    }
  `;


export default class SliderCarousel extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            nextArrow: <NextArrow />,
            prevArrow: <BeforeArrow />,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };


        const CarouselItem = CarouselArray.map(({ id, icon, title, text, rating }) => {
            return (
                <SliderTemplate key={id} icon={icon} title={title} text={text} rating={rating} />
            )
        })

        return (
            <SliderWrapper>
                <Slider {...settings}>
                    {CarouselItem}
                </Slider>
            </SliderWrapper>
        )
    }
}