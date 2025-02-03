import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {MainPage} from './components/pages/MainPage/MainPage';

import {AppRoute} from './data/constants';

export const App = () => (
  <Routes>
    <Route path={AppRoute.mainPage} element={<MainPage />} />
    <Route path="*" element={<Navigate to={AppRoute.mainPage} />} />
  </Routes>
);
