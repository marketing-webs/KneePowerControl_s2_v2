import React, {useEffect} from 'react';
import { motion } from 'framer-motion'
import {
  HeroBox,
  HeroWrapper,
  TitleWrapper,
  VideoBigTitle,
  VideoUpperSubtitle,
  VideoUpperTitle,
  VideoWrapper,
  ButtonWrapper,
} from './Hero.styles';
import CheckButton from '../../components/Button/CheckButton';
import sample from "../../assets/videos/product-video.mp4"
import enableInlineVideo from 'iphone-inline-video';

const words = [
  'Reumatyzm,',
  ' artroza,',
  ' lumbago,',
  ' bóle kręgosłupa',
  ' czy kolan?',
];

const Hero = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.5,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        type: 'spring',
        mass: 0.4,
        damping: 8,
        staggerChildren: 1,
        when: 'beforeChildren',
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const sentenceVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: 5,
      transition: {
        delay: 6.5,
      },
    },
  };

  return (
      <HeroBox>
    <HeroWrapper>
      <VideoBigTitle>KNEE POWER CONTROL</VideoBigTitle>

      <TitleWrapper>
        <VideoUpperTitle
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {words.map((word, i) => (
            <motion.span key={i} variants={childVariants}>
              {word}
            </motion.span>
          ))}
        </VideoUpperTitle>
        <VideoUpperSubtitle
          variants={sentenceVariants}
          initial="hidden"
          animate="visible"
        >
          Zapomnij o schorzeniach stawów w zaledwie <span>4 tygodnie</span> dzięki Knee Power Control!
        </VideoUpperSubtitle>
      </TitleWrapper>

      <VideoWrapper>
        <video src={sample}
               type='video/mp4'
               preload="yes"
               className='video'
               width="100%"
               height="auto"
               autoPlay
               playsInline
               loop
               muted>
        </video>
      </VideoWrapper>

    </HeroWrapper>
        <ButtonWrapper>
          <CheckButton to="partner" />
        </ButtonWrapper>
      </HeroBox>
  );
};

export default Hero;
