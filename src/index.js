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
import callPopup from './modules/callPopup';
import validateForms from './modules/validateForms';
import sendForm from './modules/sendForm';
import mainSlider from './modules/mainSlider';

// вызов функций
// выбор клуба
chooseClub();
// фиксация бургер меню
burgerMenu();
// Записаться на бесплатное посещение
// freeVisit(); совмещен с callMeBack
// Перезвоните мне
callPopup();
// Валидация форм
validateForms();
// Отправка форм
sendForm();
// Главный слайдер
mainSlider();