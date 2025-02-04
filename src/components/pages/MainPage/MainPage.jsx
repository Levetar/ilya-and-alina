import React from 'react';
import {Intro} from '../../common/Intro/Intro';
import {Appeal} from '../../common/Appeal/Appeal';
import {Calendar} from '../../common/Calendar/Calendar';
import {Location} from '../../common/Location/Location';
import {Wishes} from '../../common/Wishes/Wishes';
import {Chat} from '../../common/Chat/Chat';
import {Form} from '../../common/Form/Form';

import s from './MainPage.scss';

export const MainPage = () => (
  <main className={s.root}>
    <Intro />
    <div className={s.wrapper}>
      <Appeal className={s.appeal} />
      <Calendar className={s.calendar} />
      <Location className={s.location} />
      <Wishes className={s.wishes} />
      <Chat className={s.chat} />
      <Form />
    </div>
  </main>
);
