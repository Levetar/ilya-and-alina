import React, {useState, useEffect, useRef} from 'react';
import cn from 'classnames';

import {useElementInViewport} from '../../../hooks/useElementInViewport';

import s from './FlowerImage.scss';

export const FlowerImage = ({src, modPosition = 'left', className}) => {
  const [showImage, setShowImage] = useState(false);
  const imageRef = useRef(null);

  const isVisible = useElementInViewport({
    containerRef: imageRef,
    options: {threshold: 0.7},
  });

  useEffect(() => {
    if (!showImage) {
      setShowImage(isVisible);
    }
  }, [isVisible]);

  return (
    <img
      ref={imageRef}
      src={src}
      alt="Декоративный цветок"
      className={cn(s.root, className, {
        [s.visible]: showImage,
        [s.rootLeft]: modPosition === 'left',
        [s.rootRight]: modPosition === 'right',
      })}
    />
  );
};
