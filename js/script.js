require('es6-promise').polyfill();  
import 'nodelist-foreach-polyfill';
import tabs from './modules/tabs';
import calc from './modules/calc';
import timer from './modules/timer';
import slider from './modules/slider';
import modal from './modules/modal';
import cards from './modules/cards';
import forms from './modules/forms';
import {openModal} from './modules/modal';
try{
window.addEventListener('DOMContentLoaded', function () {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    calc();
    timer('.timer', '2021-08-11');
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slide',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    modal('[data-modal]', '.modal', modalTimerId);
    cards();
    forms('form', modalTimerId, 'http://localhost:3000/menu');
});
}catch(e){
    console.log(e);
}
