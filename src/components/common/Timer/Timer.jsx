import React from 'react';

import {useTimer} from '../../../hooks/useTimer';

import s from './Timer.scss';

export const Timer = () => {
  const {days, hours, minutes, seconds} = useTimer();

  return (
    <div className={s.root}>
      <p className={s.title}>до торжества осталось</p>
      <div className={s.timerWrapper}>
        <div className={s.item}>
          <span className={s.number}>{days}</span>
          <span className={s.text}>дней</span>
        </div>
        <div className={s.item}>
          <span className={s.number}>{hours}</span>
          <span className={s.text}>часов</span>
        </div>
        <div className={s.item}>
          <span className={s.number}>{minutes}</span>
          <span className={s.text}>минут</span>
        </div>
        <div className={s.item}>
          <span className={s.number}>{seconds}</span>
          <span className={s.text}>секунд</span>
        </div>
      </div>
    </div>
  );
};
