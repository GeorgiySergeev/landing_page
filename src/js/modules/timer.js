// const dayEl = document.querySelector('[data-days]');
// const hoursEl = document.querySelector('[data-hours]');
// const minEl = document.querySelector('[data-minutes]');

// function convertMs() {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   return { day, hour, minute, second };
// }

// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }

// function timer(ms) {
//   const { day, hour, minute, second } = convertMs(ms);

//   dayEl.textContent = addLeadingZero(Math.floor(ms / day));
//   hoursEl.textContent = addLeadingZero(Math.floor((ms % day) / hour));
//   minEl.textContent = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
// }
function timer() {
  const targetDate = new Date('2024-04-28T00:00:00');
  const currentDate = new Date();

  const totalSeconds = Math.floor((targetDate - currentDate) / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);

  const daysEl = document.querySelectorAll('[data-days]');
  const hoursEl = document.querySelectorAll('[data-hours]');
  const minutesEl = document.querySelectorAll('[data-minutes]');

  daysEl.forEach((element) => (element.textContent = days));
  hoursEl.forEach((element) => (element.textContent = hours < 10 ? '0' + hours : hours));
  minutesEl.forEach((element) => (element.textContent = minutes < 10 ? '0' + minutes : minutes));
}

setInterval(timer, 1000);
export default timer;
