import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const HeroWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  padding-bottom: 80px;
  background-image: linear-gradient(
    to right bottom,
    #4f4da4,
    #454490,
    #3c3b7c,
    #333269,
    #2a2957
  );

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: -1;
  overflow: hidden;
`;

export const TitleWrapper = styled.div`
  overflow: hidden;
  @media (min-width: 1440px) {
  width: 55%;
  }
`;

export const VideoBigTitle = styled.h2`
  color: ${({ theme }) => theme.colors.gold};
  font-size: 40px;
  margin: 30px auto 10px;
  font-weight: 900;
  text-align: center;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 1);
  overflow: hidden;

  @media (min-width: 768px) {
    font-size: 39px;
  }

  @media (min-width: 1366px) {
    font-size: 60px;
  }
`;

export const VideoUpperTitle = styled(motion.h2)`
  color: ${({ theme }) => theme.colors.gold};
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 1);
  font-weight: 700;
  font-size: 20px;
  width: 95%;
  margin: auto;
  margin-bottom: 0px;
  text-align: center;
  overflow: hidden;
 

  @media (min-width: 768px) {
    font-size: 26px;
    line-height: 0.7rem;
    margin-top: 10px;
  }

  @media (min-width: 1366px) {
    font-size: 32px;
  }

  span {
    line-height: 2.4rem;
  }
`;

export const VideoUpperSubtitle = styled(motion.h3)`
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 1);
  font-size: 20px;
  text-align: center;
  margin: auto;
  margin-top: 0px;
  margin-bottom: 40px;
  line-height: 2.4rem;
  width: 95%;
  overflow: hidden;

  @media (min-width: 768px) {
    font-size: 24px;
  }

  @media (min-width: 1366px) {
    font-size: 32px;
  }

  span {
    color: ${({ theme }) => theme.colors.gold};
  }
`;


export const VideoWrapper = styled.div`

  video {
    border: 3px solid #F9BA20;
    @media (min-width: 1024px) {
      max-width: 1000px;
     }
    width: 100%;
    height: auto;
    margin: auto;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-self: center;
  margin: 20px auto;
  position: absolute;
  bottom: 38px;
  //@media (min-width: 1024px) {
  //transform: translateY(-52px);
  //}
`;

export const RoundedButton = styled.div`
  width: 150px;
  height: 150px;
`;