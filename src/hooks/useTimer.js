import {useState, useEffect, useRef} from 'react';

const weddingDate = new Date('2025-05-15T07:30:00.000Z');

const calcDiffInMs = (date) => {
  return Math.max(0, Math.ceil(weddingDate.getTime() - date.getTime()));
};

const formatDateToTimer = (time) => {
  return {
    days: Math.floor(time / (1000 * 60 * 60 * 24)),
    hours: Math.floor((time / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((time / (1000 * 60)) % 60),
    seconds: Math.floor((time / 1000) % 60),
  };
};

export function useTimer() {
  const [result, setResult] = useState(formatDateToTimer(calcDiffInMs(new Date())));
  const timer = useRef(0);

  useEffect(() => {
    if (timer.current === 0) {
      timer.current = window.setInterval(() => {
        setResult(formatDateToTimer(calcDiffInMs(new Date())));
      }, 1000);
    }

    if (result.days === 0 && result.hours === 0 && result.minutes === 0 && result.seconds === 0) {
      window.clearInterval(timer.current);
    }
  }, []);

  return result;
}
