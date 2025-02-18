import React from 'react';
import imageSrc from '../../../images/intro.jpg';
import arrowSrc from '../../../images/arrow.svg';
import {Timer} from '../Timer/Timer';

import s from './Intro.scss';

export const Intro = () => (
  <section className={s.root}>
    <img src={imageSrc} alt="" className={s.image} />
    <div className={s.content}>
      <h1 className={s.title}>
        Илья <span className={s.titleSpan}>&</span> Алина
      </h1>
      <p className={s.dayText}>
        ЧЕТВЕРГ | <span className={s.dayTextSpan}>15</span> | МАЯ
      </p>
      <p className={s.yearText}>2025</p>
      <Timer />
    </div>
    <img src={arrowSrc} alt="" className={s.arrow} />
  </section>
);
