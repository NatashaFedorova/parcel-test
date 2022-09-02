import './css/style.css';
import axios from 'axios';
// ======================Пагінація. Варіант з кнопками===============
// axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';

// const refs = {
//   form: document.querySelector('.form'),
//   list: document.querySelector('.list'),
//   buttons: document.querySelector('.buttons'),
//   loader: document.querySelector('.loader'),
// };

// const HITS_PER_PAGE = 5;
// let items = [];
// let query = '';
// let page = 0;
// let totalPages = 0;

// const renderList = () => {
//   const list = items
//     .map(({ title, url }) => `<li><a href="${url}">${title}</a></li>`)
//     .join('');
//   refs.list.innerHTML = '';
//   refs.list.insertAdjacentHTML('beforeend', list);
// };

// const renderButtons = () => {
//   const buttonsList = Array(totalPages)
//     .fill()
//     .map((_, idx) => `<button data-page="${idx}">${idx + 1}</button>`)
//     .join('');
//   refs.buttons.innerHTML = '';
//   refs.buttons.insertAdjacentHTML('beforeend', buttonsList);
// };

// const loaderOn = () => refs.loader.classList.add('visible');
// const loaderOff = () => refs.loader.classList.remove('visible');

// const feachData = () => {
//   refs.list.innerHTML = '';
//   loaderOn();
//   axios
//     .get(`/search/?query=${query}&page=${page}&hitsPerPage=${HITS_PER_PAGE}`)
//     .then(({ data }) => {
//       items = data.hits;
//       totalPages = data.nbPages;
//       renderList();
//       renderButtons();
//     })
//     .catch(error => console.log(error.massage))
//     .finally(loaderOff);
// };

// const handleSubmit = e => {
//   e.preventDefault();

//   query = e.target.elements.query.value;

//   feachData();
// };

// const handlePageClick = e => {
//   page = e.target.dataset.page;
//   feachData();
// };

// refs.form.addEventListener('submit', handleSubmit);
// refs.buttons.addEventListener('click', handlePageClick);

// ======================Пагінація. Дозавантаження (скрол)===============
// axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';

// const refs = {
//   form: document.querySelector('.form'),
//   list: document.querySelector('.list'),
//   loader: document.querySelector('.loader'),
//   loadMore: document.querySelector('.load-more'),
// };

// const HITS_PER_PAGE = 40;
// let isLoading = false;
// let items = [];
// let query = '';
// let totalPages = 0;
// let currentPage = 0;

// const renderList = items => {
//   const list = items
//     .map(({ title, url }) => `<li><a href="${url}">${title}</a></li>`)
//     .join('');
//   refs.list.insertAdjacentHTML('beforeend', list);
// };

// const loaderOn = () => refs.loader.classList.add('visible');
// const loaderOff = () => refs.loader.classList.remove('visible');

// const feachData = () => {
//   isLoading = true;
//   loaderOn();
//   axios
//     .get(
//       `/search/?query=${query}&page=${currentPage}&hitsPerPage=${HITS_PER_PAGE}`
//     )
//     .then(({ data }) => {
//       items = [...items, data.hits];
//       totalPages = data.nbPages;
//       renderList(data.hits);
//     })
//     .catch(error => console.log(error.massage))
//     .finally(() => {
//       loaderOff();
//       isLoading = false;
//     });
// };

// const handleSubmit = e => {
//   e.preventDefault();
//   if (query === e.target.elements.query.value) return;
//   query = e.target.elements.query.value;
//   refs.list.innerHTML = '';
//   currentPage = 0;
//   items = [];
//   if (!query) return;
//   feachData();
// };

// const handleLoadMoreClick = () => {
//   currentPage += 1;
//   feachData();
// };

// const handleListScroll = ({ target }) => {
//   if (
//     target.scrollTop + target.clientHeight + 10 >= target.scrollHeight &&
//     !isLoading
//   ) {
//     handleLoadMoreClick();
//   }
// };

// refs.form.addEventListener('submit', handleSubmit);
// refs.loadMore.addEventListener('click', handleLoadMoreClick);
// refs.list.addEventListener('scroll', handleListScroll);
