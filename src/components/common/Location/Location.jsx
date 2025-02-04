import React from 'react';
import cn from 'classnames';

import location1Src from '../../../images/location1.jpg';
import location2Src from '../../../images/location2.jpg';
import flower1Src from '../../../images/flower1.png';
import flower4Src from '../../../images/flower4.png';
import {FlowerImage} from '../FlowerImage/FlowerImage';

import s from './Location.scss';

const LOCATIONS = [
  {
    title: 'Торжественная регистрация',
    image: location1Src,
    name: 'Дворец бракосочетания\n“Екатерининский зал”',
    address: 'Краснодар, ул. Офицерская, 47',
  },
  {
    title: 'Торжественный банкет',
    image: location2Src,
    name: 'Ресторан\n“Джан Баклажан”',
    address: 'Туапсинский р-н, пос. Майский',
  },
];

export const Location = ({className}) => (
  <section className={cn(s.root, className)}>
    <FlowerImage src={flower4Src} modPosition="left" className={s.imageFlower4} />
    <FlowerImage src={flower1Src} modPosition="right" className={s.imageFlower1} />
    {LOCATIONS.map(({title, image, name, address}) => (
      <div key={title} className={s.locationWrapper}>
        <h2 className={s.title}>{title}</h2>
        <img src={image} alt={title} className={s.image} />
        <p className={s.name}>{name}</p>
        <p className={s.address}>{address}</p>
      </div>
    ))}
  </section>
);
