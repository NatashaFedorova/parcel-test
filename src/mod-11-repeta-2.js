// ================Приклад 1. try...catch========================
// const validJSON = '{"name": "Mango", "age": 3}';
// const invalidJSON = '{ щось таке повернув бекенд }';
// const validJSON2 = '{"name": "Pear", "age": 10}';

// console.log(JSON.parse(validJSON)); //{name: 'Mango', age: 3}

// try {
//   console.log(JSON.parse(validJSON)); //{name: 'Mango', age: 3}
//   console.log(JSON.parse(invalidJSON));
//   console.log('Цей код не буде виконано'); //{name: 'Mango', age: 3}
// } catch (error) {
//   console.log(error); // SyntaxError: Expected property name or '}' in JSON at position 2
// }
// console.log(JSON.parse(validJSON2)); //цей код буде виконано, навідь після помилки

// =======================async/await===========================
// function getFruit(name) {
//   const fruits = {
//     strawberry: '🍓',
//     kiwi: '🥝 ',
//     apple: '🍎',
//   };

//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(fruits[name]), 1000);
//   });
// }

// складний код=========================
// function makeSmoothei() {
//   getFruit('apple').then(apple => {
//     console.log(apple);

//     getFruit('kiwi').then(apple => console.log(apple));
//   });
// }
// makeSmoothei();

// Зручно. Код асинхронний, але виглядає як синхронний. Виконується послідовно
// async function asyncMakeSmoothei() {
//   console.time('asyncMakeSmoothei');

//   const apple = await getFruit('apple');
//   console.log(apple);

//   const kiwi = await getFruit('kiwi');
//   console.log(kiwi);

//   const strawberry = await getFruit('strawberry');
//   console.log(strawberry);

//   console.timeEnd('asyncMakeSmoothei');
// }

// Зручно. Код асинхронний, але виглядає як синхронний. Проміси виокнуються одночасно
// async function asyncMakeSmoothei() {
//   console.time('asyncMakeSmoothei');

//   const apple = getFruit('apple');
//   const kiwi = getFruit('kiwi');
//   const strawberry = getFruit('strawberry');

//   const fruits = await Promise.all([apple, kiwi, strawberry]);
//   console.log(fruits);

//   console.timeEnd('asyncMakeSmoothei');
// }

// робота за помилками===========================
// async function asyncMakeSmoothei() {
//   try {
//     console.time('asyncMakeSmoothei');

//     const apple = getFruit('apple');
//     const kiwi = getFruit('kiwi');
//     const strawberry = getFruit('strawberry');

//     const fruits = await Promise.all([apple, kiwi, strawberry]);
//     console.log(fruits);

//     console.timeEnd('asyncMakeSmoothei');

//     return fruits;
//   } catch (error) {
//     console.log(error);
//   }
// }

// asyncMakeSmoothei().then(fruits => console.log(fruits));

// ==========================Приклад 2=====================
// переписуємо CRUD з поперереднього заняття на async/await
const BASE_URL = 'http://localhost:8080';

async function addBook(newBook) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(newBook),
  };

  const response = await fetch(`${BASE_URL}/books`, options);
  return await response.json();
}

// приклад, де э можливысть використати try...catch===============
// async function addBookAndUpdateUI() {
//   try {
//     const book = await addBook({});
//     console.log(book);
//   } catch (error) {
//     console.log(error);
//   }
// }

// addBookAndUpdateUI();

// ===============================================================
// async function fetchBools() {
//   const response = await fetch(`${BASE_URL}/books`);
//   const books = await response.json();
//   return books;
// }

// ===============================================================
// async function fetchBoolById(bookId) {
//   const response = await fetch(`${BASE_URL}/books/${bookId}`);
//   const book = await response.json();
//   return book;
// }
// ================================================================
// async function deleteBook(bookId) {
//   const options = {
//     method: 'DELETE',
//   };

//   const response = await fetch(`${BASE_URL}/books/${bookId}`, options);
//   return response;
// }

// ================================================================
// async function updateBook(update, bookId) {
//   const options = {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//     },
//     body: JSON.stringify(update),
//   };

//   const response = await fetch(`${BASE_URL}/books/${bookId}`, options);
//   const book = await response.json();
//   return book;
// }
