import React from 'react';
import cn from 'classnames';

import flowerSrc from '../../../images/flower1.png';
import {FlowerImage} from '../FlowerImage/FlowerImage';

import s from './Appeal.scss';

export const Appeal = ({className}) => (
  <section className={cn(s.root, className)}>
    <FlowerImage src={flowerSrc} modPosition="right" className={s.image} />
    <h2 className={s.title}>Дорогие наши друзья и&nbsp;родные!</h2>
    <p className={s.description}>
      Вы&nbsp;получили эту ссылку, а&nbsp;значит, мы&nbsp;спешим сообщить вам&#10;важную новость
    </p>
  </section>
);
