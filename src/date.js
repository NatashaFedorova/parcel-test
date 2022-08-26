// import moment from 'moment';
// import flatpickr from 'flatpickr';

// import 'flatpickr/dist/flatpickr.min.css';

// const dateNow = Date.now();

// варіант без бібілотеки====================================
// const formatDate = dateMillis => {
//   const createAt = new Date(dateMillis);
//   const year = createAt.getFullYear();
//   const month = (createAt.getMonth() + 1).toString().padStart(2, 0);
//   const day = createAt.getDate().toString().padStart(2, 0);
//   const hours = createAt.getHours().toString().padStart(2, 0);
//   const minutes = createAt.getMinutes().toString().padStart(2, 0);
//   const seconds = createAt.getSeconds().toString().padStart(2, 0);

//   return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`; // YYYY/MM/DD HH:MM:SS
// };
// const dateTemplate = date => {
//   const formatedDate = formatDate(date);
//   return `<p>${formatedDate}</p>`;
// };

// варіант з бібіліотекою======================================
// const INPUT_DATE_FORMAT = 'DD/MM/YYYY HH:mm:ss'; // формат вводу дати
// const DATE_FORMAT = 'DD/MM/YYYY HH:mm:ss';

// const dateTemplate = date => {
//   const formatedDate = moment(date).format(DATE_FORMAT);
//   //   const deadline = moment('2022/08/27 16:00:00', INPUT_DATE_FORMAT).format(
//   //     DATE_FORMAT
//   //   );
//   return `<p class="current-date">current date: ${formatedDate}</p>`;
// };

// const refs = {
//   clock: document.querySelector('.clock'),
//   blockDate: document.querySelector('.js-date'),
//   input: document.querySelector('.js-input'),
//   setDeadline: document.querySelector('.deadline > span'),
//   timeLeft: document.querySelector('.time-left > span'),
// };

// refs.input.addEventListener('input', onInputDeadline);

// refs.blockDate.insertAdjacentHTML('beforeend', dateTemplate(dateNow));
// refs.setDeadline.textContent = '';

// renderClock();
// setInterval(renderClock, 1000);

// flatpickr('.js-input', {
//   allowInput: true,
//   dateFormat: 'd/m/Y',
// });

// function onInputDeadline(e) {
//   refs.setDeadline.textContent = e.currentTarget.value || '--/--/--';
//   timeLeftBeforeDeadline(e.currentTarget.value);
// }
// function renderClock() {
//   refs.clock.textContent = moment().format('DD/MM/YYYY HH:mm:ss');
// }

// function timeLeftBeforeDeadline(time) {
//   const timeEnd = moment(time, 'DD/MM/YYYY').valueOf();
//   const currentTime = moment().valueOf();
//   const dist = timeEnd - currentTime;
//   const { days, hours, minutes, seconds } = convertMs(dist);
//   refs.timeLeft.textContent = `${days}:${hours}:${minutes}:${seconds} `;
// }

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }
