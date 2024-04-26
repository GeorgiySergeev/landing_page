// Галерея и лайтбоксы от Fancybox
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import timer from './modules/timer';
import initializeDropdown from './modules/dropdoun';

Fancybox.bind('[data-fancybox]', {
  // Your custom options
});

// Мобильная навигация
// import mobileNav from './modules/mobile-nav.js';
// mobileNav();

// const targetDate = new Date('2024-04-22T00:00:00'); // Установка целевой даты
// const currentDate = new Date(); // Получение текущей даты
// const remainingTime = targetDate - currentDate; // Вычисление оставшегося времени
initializeDropdown();
