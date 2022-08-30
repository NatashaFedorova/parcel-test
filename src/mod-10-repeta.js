// ================Приклад 1======================
// fetch('https://pokeapi.co/api/v2/pokemon/3')
//   .then(response => {
//     return response.json();
//   })
//   .then(pokemon => {
//     console.log(pokemon);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// ================Приклад 2======================
// const refs = {
//   сardContainer: document.querySelector('.js-card-container'),
//   searchForm: document.querySelector('.js-search-form'),
// };

// refs.searchForm.addEventListener('submit', onSearch);

// function onSearch(e) {
//   e.preventDefault();

//   const form = e.currentTarget;
//   const searchQuery = form.elements.query.value;
//   fetchPokemon(searchQuery)
//     .then(renderPokimonCard)
//     .catch(onFetchError)
//     .finally(() => form.reset());
// }

// function fetchPokemon(pokemonId) {
//   const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
//   return fetch(url).then(response => response.json());
// }

// function creatCardTemp({ sprites, name, weight, height }) {
//   return `<div class="card">
//   <div class="card-img-top">
//     <img src="${sprites.front_default}" alt="${name}">
//   </div>
//   <div class="card-body">
//     <h2 class="card-title">Ім'я: ${name}</h2>
//     <p class="card-text">Вага: ${weight}</p>
//     <p class="card-text">Зріст: ${height}</p>
//   </div>
// </div>`;
// }

// function renderPokimonCard(pokemon) {
//   const markup = creatCardTemp(pokemon);
//   refs.сardContainer.innerHTML = markup;
// }

// function onFetchError(error) {
//   alert('Щось пішло не так...');
// }

// ================Приклад 3 Параметри запиту======================
// fetch(
//   'http://api.weatherstack.com/current?access_key=691038bc173ea5578f47195de82ef920&query=Kiev'
// )
//   .then(r => r.json())
//   .then(res => {
//     console.log(res);
//   });

// ===========================
// fetch(
//   'https://newsapi.org/v2/everything?q=tesla&from=2022-07-29&sortBy=publishedAt&apiKey=1b6063555cd547c889bf5f23bdfaa2ad'
// )
//   .then(r => r.json())
//   .then(res => {
//     console.log(res);
//   });

// ===========================
// const url =
//   'https://newsapi.org/v2/everything?q=tesla&from=2022-07-29&sortBy=publishedAt';

// const options = {
//   headers: {
//     Authorization: '1b6063555cd547c889bf5f23bdfaa2ad',
//   },
// };
// fetch(url, options)
//   .then(r => r.json())
//   .then(res => {
//     console.log(res);
//   });

// ================Приклад 4 ======================
