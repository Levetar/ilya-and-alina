import React from 'react';
import s from './Timer.scss';

export const Timer = () => {
  return (
    <div className={s.root}>
      <p className={s.title}>до торжества осталось</p>
      <div className={s.timerWrapper}>
        <div className={s.item}>
          <span className={s.number}>320</span>
          <span className={s.text}>дней</span>
        </div>
        <div className={s.item}>
          <span className={s.number}>20</span>
          <span className={s.text}>часов</span>
        </div>
        <div className={s.item}>
          <span className={s.number}>14</span>
          <span className={s.text}>минут</span>
        </div>
        <div className={s.item}>
          <span className={s.number}>30</span>
          <span className={s.text}>секунд</span>
        </div>
      </div>
    </div>
  );
};
