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
import freeVisit from './modules/freeVisit';
import callMeBack from './modules/callMeBack';
import validateForms from './modules/validateForms';
import sendForm from './modules/sendForm';

// вызов функций
// выбор клуба
chooseClub();
// фиксация бургер меню
burgerMenu();
// Записаться на бесплатное посещение
freeVisit();
// Перезвоните мне
callMeBack();
// Валидация форм
validateForms();
// Отправка форм
sendForm();