import React from 'react';
import cn from 'classnames';

import flower1Src from '../../../images/flower1.png';
import flower4Src from '../../../images/flower4.png';
import flower5Src from '../../../images/flower5.png';
import {FlowerImage} from '../FlowerImage/FlowerImage';

import s from './Form.scss';

export const Form = ({className}) => (
  <section className={cn(s.root, className)}>
    <FlowerImage src={flower1Src} modPosition="left" className={s.imageFlower1} />
    <FlowerImage src={flower4Src} modPosition="right" className={s.imageFlower4} />
    <FlowerImage src={flower5Src} modPosition="left" className={s.imageFlower5} />
    <h2 className={s.title}>Анкета</h2>
    <p className={s.description}>Ответьте, пожалуйста, на&nbsp;пару вопросов, нам это очень важно!</p>
    <form action="" method="post" className={s.form}>
      <div className={s.item}>
        <label className={s.labelText}>
          <span className={s.itemTitle}>Ваше имя и&nbsp;фамилия</span>
          <input type="text" id="fio" name="fio" required className={s.input} />
        </label>
      </div>
      <div className={s.item}>
        <span className={s.itemTitle}>Вы&nbsp;сможете присутствовать на&nbsp;торжестве?</span>
        <label className={s.labelRadio}>
          <input type="radio" id="come_yes" name="come" required className={s.radio} />
          <span className={s.customRadio} />
          да, обязательно приду
        </label>
        <label className={s.labelRadio}>
          <input type="radio" id="come_no" name="come" required className={s.radio} />
          <span className={s.customRadio} />
          к&nbsp;сожалению, не&nbsp;смогу придти
        </label>
      </div>
      <div className={s.item}>
        <p className={s.formTitle}>Что вы предпочитаете?</p>
      </div>
      <div className={s.item}>
        <label className={s.labelText}>
          <span className={s.itemTitle}>Горячее блюдо</span>
          <input type="text" id="fio" name="fio" required className={s.input} />
        </label>
      </div>
      <div className={s.item}>
        <label className={s.labelText}>
          <span className={s.itemTitle}>Салат</span>
          <input type="text" id="fio" name="fio" required className={s.input} />
        </label>
      </div>
      <div className={s.item}>
        <span className={s.itemTitle}>Алкоголь</span>
        <label className={s.labelCheckbox}>
          <input type="checkbox" id="alco_wine_red" name="alco_wine_red" required className={s.checkbox} />
          <span className={s.customCheckbox} />
          Вино красное
        </label>
        <label className={s.labelCheckbox}>
          <input type="checkbox" id="alco_wine_white" name="alco_wine_white" required className={s.checkbox} />
          <span className={s.customCheckbox} />
          Вино белое
        </label>
        <label className={s.labelCheckbox}>
          <input type="checkbox" id="alco_samogon" name="alco_samogon" required className={s.checkbox} />
          <span className={s.customCheckbox} />
          Самогонка
        </label>
        <label className={s.labelCheckbox}>
          <input type="checkbox" id="alco_vodka" name="alco_vodka" required className={s.checkbox} />
          <span className={s.customCheckbox} />
          Водка
        </label>
        <label className={s.labelCheckbox}>
          <input type="checkbox" id="alco_eger" name="alco_eger" required className={s.checkbox} />
          <span className={s.customCheckbox} />
          Егермейстер
        </label>
        <label className={s.labelCheckbox}>
          <input type="checkbox" id="alco_non_alco" name="alco_non_alco" required className={s.checkbox} />
          <span className={s.customCheckbox} />
          безалкогольные напитки
        </label>
      </div>
      <button type="submit" className={s.submit}>
        Отправить
      </button>
    </form>
    <p className={s.endText}>Мы Вас очень ждем!</p>
  </section>
);
