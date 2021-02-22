import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export const TimeRemainingContainer = styled.span`
  font-size: 38px;
  font-weight: 700;
  grid-column: 1 / 13;
  text-align: center;

  @media (min-width: 1024px) {
    grid-column: 2 / 7;
  }

  p {
    background-color: white;
    display: inline-block;
    border-radius: 15px;
    padding: 5px;
    margin: 5px;
    font-size: 23px;
  }
 
`;

const Timer = ({ hours, minutes = 10 }) => {
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  const [isMounted, setIsMounted] = useState(true);

  const promotionTime =
    (hours ? hours * 60 * 60 * 1000 : 0) + minutes * 60 * 1000; // 45 expected time
  const endTime = new Date().getTime() + promotionTime;

  useEffect(() => {
    if (isMounted) {
      const timer = setInterval(() => {
        const nowTime = new Date().getTime();
        const time = endTime - nowTime;

        let hours = Math.floor(
          (endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24
        );

        let minutes = Math.floor(
          (endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60
        );

        let seconds = Math.floor((endTime / 1000 - nowTime / 1000) % 60);

        if (time === 0 || time < 1000) {
          clearInterval(timer);
        } else {
          setTimerHours(hours < 10 ? '0' + hours : hours);
          setTimerMinutes(minutes < 10 ? '0' + minutes : minutes);
          setTimerSeconds(seconds < 10 ? '0' + seconds : seconds);
        }
      }, 1000);

      return () => clearInterval(timer);
    }
    return undefined;
  }, [isMounted]);

  return (
    <TimeRemainingContainer>
      <p>{timerHours} h</p>
      <p>{timerMinutes} min</p>
      <p>{timerSeconds} s</p>
    </TimeRemainingContainer>
  );
};

export default Timer;
