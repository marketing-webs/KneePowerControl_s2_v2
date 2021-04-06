import React from 'react'
import styled from 'styled-components';
import { mediaQueries } from "../../assets/styles/mediaQueries"
import { CarouselArray } from './Slider';

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 95%;
    height: 680px;
    margin: auto;

    ${mediaQueries("xs")`
        width: 420px;
    `}
  
    ${mediaQueries("lg")`
        width: 398px;
        height: 700px;
    `}



    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 15px;
    padding: 20px;
    /* margin: 20px; */
`;

const AvatarIcon = styled.img`
    width: 120px;
    height: 120px;
    margin-bottom: 10px;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #707070;

`;

const StyledTitle = styled.h3`
    font-size: 18px;
    width: 50%;
    text-align: center;
`;

const StyledText = styled.p`
    font-size: 14px;
    text-align: left;

    ${mediaQueries("xs")`
        font-size: 16px;
    `}
`;

const RatingWrapper = styled.div`   
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 100%;
`;

const StyledRating = styled.img`
    max-width: 259px;
    margin: 20px 0px 10px;
    align-self: flex-end;
    justify-self: flex-end;
`;


const SliderTemplate = ({ id, icon, title, text, rating }) => {
    return (
        <StyledCard key={id} >
            <AvatarIcon src={icon} alt="Avatar" />
            <ContentWrapper>
                <StyledTitle>{title}</StyledTitle>
                <StyledText>{text}</StyledText>
            </ContentWrapper>
            <RatingWrapper>
                <StyledRating src={rating} alt="stars" />
            </RatingWrapper>
        </StyledCard>
    )
}

export default SliderTemplate
