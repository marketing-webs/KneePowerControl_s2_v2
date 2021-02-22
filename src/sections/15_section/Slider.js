import React from 'react'
import Slider from "react-slick"
import styled from 'styled-components';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const SliderCarousell = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        vertical: false,
    };

    return (
        <Slider {...settings}>
            <div>
                <img src="http://placekitten.com/g/400/200" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ea officiis iste. Adipisci, sit voluptates nostrum dolorum consequuntur voluptatibus numquam!</p>
            </div>
            <div>
                <img src="http://placekitten.com/g/400/200" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ea officiis iste. Adipisci, sit voluptates nostrum dolorum consequuntur voluptatibus numquam!</p>
            </div>
            <div>
                <img src="http://placekitten.com/g/400/200" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ea officiis iste. Adipisci, sit voluptates nostrum dolorum consequuntur voluptatibus numquam!</p>
            </div>
        </Slider>
    )
}

export default SliderCarousell
