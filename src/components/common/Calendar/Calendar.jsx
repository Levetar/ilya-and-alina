import React from 'react';
import cn from 'classnames';

import flower2Src from '../../../images/flower2.png';
import flower3Src from '../../../images/flower3.png';
import heartSrc from '../../../images/heart.png';
import {FlowerImage} from '../FlowerImage/FlowerImage';

import s from './Calendar.scss';

const CALENDAR_HEADER = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
const CALENDAR_DAYS = [
  ['', '', '', '1', '2', '3', '4'],
  ['5', '6', '7', '8', '9', '10', '11'],
  ['12', '13', '14', '15', '16', '17', '18'],
  ['19', '20', '21', '22', '23', '24', '25'],
  ['26', '27', '28', '29', '30', '31', ''],
];

export const Calendar = ({className}) => (
  <section className={cn(s.root, className)}>
    <FlowerImage src={flower2Src} modPosition="left" className={s.imageFlower2} />
    <FlowerImage src={flower3Src} modPosition="right" className={s.imageFlower3} />
    <h2 className={s.title}>Мы женимся!</h2>
    <div className={s.descriptionWrapper}>
      <p className={s.description}>И&nbsp;очень хотим разделить с&nbsp;вами этот счастливый праздник</p>
      <p className={s.description}>Ждем вас на&nbsp;нашей свадьбе! Начало в&nbsp;10:30</p>
    </div>
    <p className={s.calendarTitle}>Май 2025</p>
    <div className={s.calendarWrapper}>
      <div className={s.calendarHeader}>
        {CALENDAR_HEADER.map((item) => (
          <div key={item} className={s.calendarHeaderItem}>
            {item}
          </div>
        ))}
      </div>
      <div className={s.calendarDays}>
        {CALENDAR_DAYS.map((week, index) => (
          <div key={index} className={s.calendarWeek}>
            {week.map((day) => (
              <div key={day} className={s.calendarDay}>
                {day === '15' ? (
                  <>
                    <img src={heartSrc} alt="День свадьбы" className={s.imageHeart} />
                    <span className={s.calendarDaySpan}>{day}</span>
                  </>
                ) : (
                  day
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </section>
);
