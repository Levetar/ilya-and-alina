import {useCallback, useEffect, useRef, useState} from 'react';

export function useElementInViewport({containerRef, onIntersection, options}) {
  const observer = useRef(null);
  const [isVisible, setVisible] = useState(false);

  const handleIntersection = useCallback(
    (entries, observer) => {
      entries.forEach((entry) => {
        setVisible(entry.isIntersecting);
      });

      if (onIntersection) {
        onIntersection(entries, observer);
      }
    },
    [onIntersection]
  );

  useEffect(() => {
    if (containerRef.current) {
      observer.current = new IntersectionObserver(handleIntersection, options);
      observer.current.observe(containerRef.current);
    }

    return () => {
      containerRef.current && observer.current && observer.current.unobserve(containerRef.current);
    };
  }, [containerRef, handleIntersection, options]);

  return isVisible;
}
