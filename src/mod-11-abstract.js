import './css/style.css';
//=========================Приклад 1. CRUD. Читання(GET)======================
// вся колекція
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(posts => console.log(posts))
//   .catch(error => console.log(error));

// один елемент з колекції
// const postId = 2;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//   .then(response => response.json())
//   .then(post => console.log(post))
//   .catch(error => console.log(error));

//=========================Приклад 2. CRUD. Створення(POST)======================
// const postToAdd = {
//   author: 'Mango',
//   body: 'CRUD is awesome',
// };

// const options = {
//   method: 'POST',
//   body: JSON.stringify(postToAdd),
//   headers: {
//     'Content-Type': 'application/json; charset=UTF-8',
//   },
// };

// fetch('https://jsonplaceholder.typicode.com/posts', options)
//   .then(response => response.json())
//   .then(post => console.log(post))
//   .catch(error => console.log(error));

// результат - {author: 'Mango', body: 'CRUD is awesome', id: 101}

//=========================Приклад 3. CRUD. Оновлення(PUT і PATCH)======================
// Change value of id property to update different post
// const postToUpdate = {
//   id: 1,
//   body: 'CRUD is really awesome',
// };

// const options = {
//   method: 'PATCH',
//   body: JSON.stringify(postToUpdate),
//   headers: {
//     'Content-Type': 'application/json; charset=UTF-8',
//   },
// };

// fetch(`https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`, options)
//   .then(response => response.json())
//   .then(post => console.log(post))
//   .catch(error => console.log('ERROR' + error));

//=========================Приклад 4. CRUD. Видалення(DELETE)======================
// const postIdToDelete = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
//   method: 'DELETE',
// })
//   .then(() => console.log('Post deleted'))
//   .catch(error => console.log('Error:', error));

//=========================Приклад 5. Асинхронні функції======================
// варіант довгого та складного коду
// const fetchFriends = () => {
//   return fetch('my-api.com/me')
//     .then(token => {
//       return fetch(`my-api.com/profile?token=${token}`);
//     })
//     .then(user => {
//       return fetch(`my-api.com/users/${user.id}/friends`);
//     });
// };

// fetchFriends()
//   .then(friends => console.log(friends))
//   .catch(error => console.error(error));

//  зручний код
// const fetchFriends = async () => {
//   const token = await fetch('my-api.com/me');
//   const user = await fetch(`my-api.com/profile?token=${token}`);
//   const friends = await fetch(`my-api.com/users/${user.id}/friends`);
//   return friends;
// };

// fetchFriends()
//   .then(friends => console.log(friends))
//   .catch(error => console.error(error));

//=========================Приклад 6. Асинхронні функції. Обробка помилок======================
// try...catch - полимка не використовується в зовнішньому коді
// const fetchUsers = async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const users = await response.json();
//     console.log(users);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// fetchUsers();

//catch() - полимка використовується в зовнішньому коді
// const fetchUsers = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   const users = await response.json();
//   return users;
// };

// fetchUsers()
//   .then(users => console.log(users))
//   .catch(error => console.log(error));

// try...catch - результат асинхронної функції використовується в іншій асинхронній функції
// const fetchUsers = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   const users = await response.json();
//   return users;
// };

// const doStuff = async () => {
//   try {
//     const users = await fetchUsers();
//     console.log(users);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// doStuff();

//=========================Приклад 7. Асинхронні функції. Паралельні запити======================
// приклад, де кожен наступний запит виконується після попереднього
// const fetchUsers = async () => {
//   const baseUrl = 'https://jsonplaceholder.typicode.com';
//   const firstResponse = await fetch(`${baseUrl}/users/1`);
//   const secondResponse = await fetch(`${baseUrl}/users/2`);
//   const thirdResponse = await fetch(`${baseUrl}/users/3`);

//   const firstUser = await firstResponse.json();
//   const secondUser = await secondResponse.json();
//   const thirdUser = await thirdResponse.json();

//   console.log(firstUser, secondUser, thirdUser);
// };

// fetchUsers();

// паралельні запити
// const fetchUsers = async () => {
//   const baseUrl = 'https://jsonplaceholder.typicode.com';
//   const userIds = [1, 2, 3];

//   // 1. Створюємо масив промісів
//   const arrayOfPromises = userIds.map(async userId => {
//     const response = await fetch(`${baseUrl}/users/${userId}`);
//     return response.json();
//   });

//   // 2. Запускаємо усі проміси паралельно і чекаємо на їх завершення
//   const users = await Promise.all(arrayOfPromises);
//   console.log(users);
// };

// fetchUsers();

//==============================Приклад 8. Паралельні запит===============================
// const fetchUsersBtn = document.querySelector('.btn');
// const userList = document.querySelector('.user-list');

// fetchUsersBtn.addEventListener('click', async () => {
//   try {
//     const users = await fetchUsers();
//     renderUserListItems(users);
//   } catch (error) {
//     console.log(error.message);
//   }
// });

// async function fetchUsers() {
//   const baseUrl = 'https://jsonplaceholder.typicode.com';
//   const userIds = [1, 2, 3, 4, 5];

//   const arrayOfPromises = userIds.map(async userId => {
//     const response = await fetch(`${baseUrl}/users/${userId}`);
//     return response.json();
//   });

//   const users = await Promise.all(arrayOfPromises);
//   return users;
// }

// function renderUserListItems(users) {
//   const markup = users
//     .map(
//       user => `<li class="item">
//         <p><b>Name</b>: ${user.name}</p>
//         <p><b>Email</b>: ${user.email}</p>
//         <p><b>Company</b>: ${user.company.name}</p>
//       </li>`
//     )
//     .join('');
//   userList.innerHTML = markup;
// }
