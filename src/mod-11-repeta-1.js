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
