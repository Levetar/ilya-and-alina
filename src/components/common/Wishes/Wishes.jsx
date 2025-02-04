import React from 'react';
import cn from 'classnames';

import flower2Src from '../../../images/flower2.png';
import flower3Src from '../../../images/flower3.png';
import {FlowerImage} from '../FlowerImage/FlowerImage';

import s from './Wishes.scss';

const WISHES = [
  {
    title: 'Подарки',
    description: ['Свои теплые слова и пожелания приносите в сердцах, а подарки — в конверте'],
  },
  {
    title: 'Цветы',
    description: ['Приятным комплиментом для нас будет, если вместо цветов Вы возьмете с собой отличное настроение'],
  },
  {
    title: 'Детали',
    description: [
      'Чтобы все могли как следует отдохнуть, просим мам и пап приходить на наше торжество без маленьких детей',
      'От всего сердца просим Вас воздержатся от криков «Горько» и сохранить атмосферу уютного семейного таинства',
    ],
  },
];

export const Wishes = ({className}) => (
  <section className={cn(s.root, className)}>
    <FlowerImage src={flower3Src} modPosition="left" className={s.imageFlower3} />
    <FlowerImage src={flower2Src} modPosition="right" className={s.imageFlower2} />
    <h2 className={s.title}>Пожелания</h2>
    <ul className={s.list}>
      {WISHES.map(({title, description}) => (
        <div key={title} className={s.item}>
          <p className={s.itemTitle}>{title}</p>
          {description.map((d, index) => (
            <p key={index} className={s.itemDescription}>
              {d}
            </p>
          ))}
        </div>
      ))}
    </ul>
  </section>
);
