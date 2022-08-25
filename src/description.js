// =========================subscription (m-9-rep-1-task-2-subscription)==========================
// import BSN from 'bootstrap.native';

// const PROMPT_DELAY = 1000;
// const MAX_PROMPT_ATTEMPTS = 3;

// const modal = new BSN.Modal('#subscription-modal');

// let promptCounter = 0;
// let hasSubscribed = false;

// const refs = {
//   modal: document.querySelector('#subscription-modal'),
//   subscribeBtn: document.querySelector('button[data-subscribe]'),
// };

// refs.modal.addEventListener('hide.bs.modal', () => {
//   console.log(
//     'Ця функція викликана кастомною подією hide.bs.modal - закриття модалки кнопкою close'
//   );
//   openModal();
// });

// // можна записати, варіант нижче, якщо не потрібен console.log()
// // refs.modal.addEventListener('hide.bs.modal', openModal);

// refs.subscribeBtn.addEventListener('click', onSubscribeBtnClick);

// openModal();

// function openModal() {
//   if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
//     console.log(
//       'Необхідно зупинити інтервал, оскільки встановлена мах кількість відкриттів модалки або користувач підписався'
//     );
//     return;
//   }
//   setTimeout(() => {
//     console.log('Відкривається модальне вікно');
//     modal.show();
//     promptCounter += 1;
//   }, PROMPT_DELAY);
// }

// function onSubscribeBtnClick() {
//   hasSubscribed = true;
//   modal.hide();
// }
