import React from 'react';
import cn from 'classnames';

import s from './Chat.scss';

export const Chat = ({className}) => (
  <section className={cn(s.root, className)}>
    <h2 className={s.title}>Чат для гостей</h2>
    <div className={s.descriptionWrapper}>
      <p className={s.description}>
        Для Вашего удобства мы&nbsp;создали чат в&nbsp;Telegram, где можно будет узнать дополнительную информацию,
        добавлять фото и&nbsp;видео в&nbsp;день и&nbsp;после свадьбы
      </p>
      <p className={s.description}>
        Давайте поделимся друг с&nbsp;другом счастливыми моментами этого важного дня и&nbsp;будем на&nbsp;свзязи!
      </p>
    </div>
    <a href="https://t.me/+CDq5JXh4Gw44ZWIy" target="_blank" rel="noreferrer" className={s.link}>
      Вступить в&nbsp;чат
    </a>
  </section>
);
