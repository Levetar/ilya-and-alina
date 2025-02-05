import React, {useRef, useState} from 'react';
import cn from 'classnames';
import emailjs from 'emailjs-com';

import flower1Src from '../../../images/flower1.png';
import flower4Src from '../../../images/flower4.png';
import flower5Src from '../../../images/flower5.png';
import {FlowerImage} from '../FlowerImage/FlowerImage';
import {ArrowIcon} from '../ArrowIcon/ArrowIcon';

import s from './Form.scss';

export const Form = ({className}) => {
  const form = useRef();
  const [isLoading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm('service_yblcofk', 'template_vo8q8ef', form.current, 'DQkj8t58JAwSu0poE');
      alert('Форма отправлена. Спасибо!');
    } catch (e) {
      alert(`Ошибка - ${error.text}. Попробуйте еще раз`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={cn(s.root, className)}>
      <FlowerImage src={flower1Src} modPosition="left" className={s.imageFlower1} />
      <FlowerImage src={flower4Src} modPosition="right" className={s.imageFlower4} />
      <FlowerImage src={flower5Src} modPosition="left" className={s.imageFlower5} />
      <h2 className={s.title}>Анкета</h2>
      <p className={s.description}>Ответьте, пожалуйста, на&nbsp;пару вопросов, нам это очень важно!</p>
      <form ref={form} onSubmit={onSubmit} className={s.form}>
        <div className={s.item}>
          <label className={s.labelText}>
            <span className={s.itemTitle}>Ваше имя и&nbsp;фамилия</span>
            <input type="text" id="fio" name="fio" required className={s.input} />
          </label>
        </div>
        <div className={s.item}>
          <span className={s.itemTitle}>Вы&nbsp;сможете присутствовать на&nbsp;торжестве?</span>
          <label className={s.labelRadio}>
            <input type="radio" id="come_yes" name="come" value="да, обязательно приду" className={s.radio} />
            <span className={s.customRadio} />
            да, обязательно приду
          </label>
          <label className={s.labelRadio}>
            <input type="radio" id="come_no" name="come" value="к сожалению, не смогу придти" className={s.radio} />
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
            <div className={s.selectWrapper}>
              <select size={1} name="hotDish" className={s.select}>
                <option value="Белые трюфели">Белые трюфели</option>
                <option value="Мраморная говядина">Мраморная говядина</option>
                <option value="Фуа-гра">Фуа-гра</option>
                <option value="Золотые суши и роллы с жемчугом">Золотые суши и&nbsp;роллы с&nbsp;жемчугом</option>
              </select>
              <ArrowIcon className={s.selectArrow} />
            </div>
          </label>
        </div>
        <div className={s.item}>
          <label className={s.labelText}>
            <span className={s.itemTitle}>Салат</span>
            <div className={s.selectWrapper}>
              <select size={1} name="salad" className={s.select}>
                <option value="Оливье">Оливье</option>
                <option value="Сельдь под шубой">Сельдь под шубой</option>
                <option value="Мимоза">Мимоза</option>
                <option value="Руккола с креветками">Руккола с креветками</option>
              </select>
              <ArrowIcon className={s.selectArrow} />
            </div>
          </label>
        </div>
        <div className={s.item}>
          <span className={s.itemTitle}>Алкоголь</span>
          <label className={s.labelCheckbox}>
            <input
              type="checkbox"
              id="alco_wine_red"
              name="alco_wine_red"
              value="Вино красное"
              className={s.checkbox}
            />
            <span className={s.customCheckbox} />
            Вино красное
          </label>
          <label className={s.labelCheckbox}>
            <input
              type="checkbox"
              id="alco_wine_white"
              name="alco_wine_white"
              value="Вино белое"
              className={s.checkbox}
            />
            <span className={s.customCheckbox} />
            Вино белое
          </label>
          <label className={s.labelCheckbox}>
            <input type="checkbox" id="alco_samogon" name="alco_samogon" value="Самогонка" className={s.checkbox} />
            <span className={s.customCheckbox} />
            Самогонка
          </label>
          <label className={s.labelCheckbox}>
            <input type="checkbox" id="alco_vodka" name="alco_vodka" value="Водка" className={s.checkbox} />
            <span className={s.customCheckbox} />
            Водка
          </label>
          <label className={s.labelCheckbox}>
            <input type="checkbox" id="alco_eger" name="alco_eger" value="Егермейстер" className={s.checkbox} />
            <span className={s.customCheckbox} />
            Егермейстер
          </label>
          <label className={s.labelCheckbox}>
            <input
              type="checkbox"
              id="alco_non_alco"
              name="alco_non_alco"
              value="безалкогольные напитки"
              className={s.checkbox}
            />
            <span className={s.customCheckbox} />
            безалкогольные напитки
          </label>
        </div>
        <button type="submit" disabled={isLoading} className={s.submit}>
          Отправить
        </button>
      </form>
      <p className={s.endText}>Мы Вас очень ждем!</p>
    </section>
  );
};
