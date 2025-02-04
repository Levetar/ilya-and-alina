import React from 'react';
import cn from 'classnames';

import s from './FlowerImage.scss';

export const FlowerImage = ({src, modPosition = 'left', className}) => {
  return (
    <img
      src={src}
      alt="Декоративный цветок"
      className={cn(s.root, className, {
        [s.rootLeft]: modPosition === 'left',
        [s.rootRight]: modPosition === 'right',
      })}
    />
  );
};
