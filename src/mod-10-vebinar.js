import './css/style.css';
import axios from 'axios';

axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';

const refs = {
  form: document.querySelector('.form'),
  list: document.querySelector('.list'),
  buttons: document.querySelector('.pages'),
};
// http://hn.algolia.com/api/search?query=cats?page=1

let items = [];
let query = '';
let page = 0;
let totalPages = 0;

const render = () => {
  console.log(items);
};

const feachData = () => {
  axios
    .get(`/search/?query=${query}&page=${page}`)
    .then(({ data }) => {
      items = data.hits;
      totalPages = data.nBPages;
      render();
    })
    .catch(error => console.log(error.massage));
};

const handleSubmit = e => {
  e.preventDefault();

  query = e.target.elements.query.value;

  feachData();
};

refs.form.addEventListener('submit', handleSubmit);
