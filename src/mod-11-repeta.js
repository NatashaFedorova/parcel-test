// =======================GET========================
// const BASE_URL = 'http://localhost:8080/books';

// fetch(`${BASE_URL}`)
//   .then(r => r.json())
//   .then(console.log);

// function fetchBooks() {
//   fetch(`${BASE_URL}`)
//     .then(r => r.json())
//     .then(console.log);
// }

// fetchBooks();

// function fetchBook(bookId) {
//   fetch(`${BASE_URL}} /${bookId}`)
//     .then(r => r.json())
//     .then(console.log);
// }

// fetchBook(5); //{id: 5, title: 'Два солнца', author: 'Леонид Кудрявцев', genres: Array(1), rating: 6.36}
// fetchBook(10); // {}

// =======================POST========================
// const BASE_URL = 'http://localhost:8080';

// addNewBook({
//   title: 'HTML: для новачків',
//   author: 'Наталья Федорова',
//   genres: ['IT'],
//   rating: 9.56,
// }).then(renderBook);

// addNewBook({
//   title: 'CSS: для новачків',
//   author: 'Наталья Федорова',
//   genres: ['IT'],
//   rating: 9.0,
// }).then(renderBook);

// function addNewBook(newBook) {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//     },
//     body: JSON.stringify(newBook),
//   };

//   return fetch(`${BASE_URL}/books`, options).then(r => r.json());
// }

// function renderBook(book) {
//   console.log(book);
// }

// =======================PUT/PATCH========================
// const BASE_URL = 'http://localhost:8080';

// function updateBook(update, bookId) {
//   const options = {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//     },
//     body: JSON.stringify(update),
//   };

//   return fetch(`${BASE_URL}/books/${bookId}`, options).then(r => r.json());
// }

// updateBook({ title: 'Vue для новачків' }, 35).then(console.log);
// updateBook({ rating: 7.38 }, 39).then(console.log);
// updateBook({ rating: 8, genres: 'освіта, IT' }, 39).then(console.log);

// =======================DELETE========================
// const BASE_URL = 'http://localhost:8080';

// function deleteBook(bookId) {
//   const options = {
//     method: 'DELETE',
//   };

//   return fetch(`${BASE_URL}/books/${bookId}`, options).then(r => r.json());
// }

// deleteBook(39)
//   .then(console.log)
//   .catch(error => console.log(error));

// =======================Помилка ========================
// fetch('')
//   .then(response => {
//     if (response.ok) {
//       return response.json();
//     }

//     throw new Error(response.statusText);
//   })
//   .catch(error => console.log(error));

// ================Приклад 1. try...catch========================
const validJSON = '{"name": "Mango", "age": 3}';
const invalidJSON = '{ щось таке повернув бекенд }';
const validJSON2 = '{"name": "Pear", "age": 10}';

console.log(JSON.parse(validJSON)); //{name: 'Mango', age: 3}

try {
  console.log(JSON.parse(validJSON)); //{name: 'Mango', age: 3}
  console.log(JSON.parse(invalidJSON));
  console.log('Цей код не буде виконано'); //{name: 'Mango', age: 3}
} catch (error) {
  console.log(error); // SyntaxError: Expected property name or '}' in JSON at position 2
}
console.log(JSON.parse(validJSON2)); //цей код буде виконано, навідь після помилки
