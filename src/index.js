'use strict';
// полифилы
import 'nodelist-foreach-polyfill';
import '@babel/polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'promise-polyfill';
import 'fetch-polyfill';
// модули импорт

import chooseClub from './modules/chooseClub';
import burgerMenu from './modules/burgerMenu';

// вызов функций
// выбор клуба
chooseClub();
// фиксация бургер меню
burgerMenu();


// Выбор клуба
chooseClub();