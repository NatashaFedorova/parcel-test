// &q=butterfly&image_type=photo&per_page=5
import './css/style.css';
import axios from 'axios';

axios.defaults.baseURL =
  'https://pixabay.com/api?key=29685313-2ba6443e06a4499ef383b21bf';

const refs = {
  form: document.querySelector('.form'),
  list: document.querySelector('.list'),
  loader: document.querySelector('.loader'),
  pages: document.querySelector('.pages'),
  loadMore: document.querySelector('.load-more'),
};

const DEFAULT_CURRENT_PAGE = 1;
const HITS_PER_PAGE = 5;

let isLoading = false;
let items = [];
let query = '';
let currentPage = DEFAULT_CURRENT_PAGE;

const renderList = items => {
  const list = items
    .map(
      ({ previewURL, pageURL }) =>
        `<li><a href="${pageURL}"><img src="${previewURL}" /></a></li>`
    )
    .join('');

  refs.list.insertAdjacentHTML('beforeend', list);
};

const loaderOn = () => refs.loader.classList.add('visible');

const loaderOff = () => refs.loader.classList.remove('visible');

const fetchData = async () => {
  isLoading = true;
  loaderOn();

  try {
    const response = await fetch(
      `https://pixabay.com/api?key=29685313-2ba6443e06a4499ef383b21bf&q=${query}&per_page=${HITS_PER_PAGE}&page=${currentPage}`
    );
    const data = await response.json();
    items = [...items, data.hits];
    totalPages = data.totalHits / HITS_PER_PAGE;
    renderList(data.hits);
  } catch (error) {
    console.log(error.message);
  }

  loaderOff();
  isLoading = false;
};

const handleSubmit = e => {
  e.preventDefault();

  if (query === e.target.elements.query.value) return;

  query = e.target.elements.query.value;
  refs.list.innerHTML = '';
  currentPage = DEFAULT_CURRENT_PAGE;
  items = [];

  if (!query) return;

  fetchData();
};

const handleLoadMoreClick = () => {
  currentPage += 1;
  fetchData();
};

const handleWindowScroll = ({ target }) => {
  if (
    target.scrollTop + target.clientHeight + 10 >= target.scrollHeight &&
    !isLoading
  ) {
    handleLoadMoreClick();
  }
};

refs.form.addEventListener('submit', handleSubmit);
refs.list.addEventListener('scroll', handleWindowScroll);
