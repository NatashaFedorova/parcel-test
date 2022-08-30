const API_KEY = '1b6063555cd547c889bf5f23bdfaa2ad';
const BASE_URL = 'https://newsapi.org/v2';

export default class NewsApiSerice {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchArticles() {
    const url = `${BASE_URL}/everything?q=${this.searchQuery}&pageSize=6&page=${this.page}`;
    const options = {
      headers: {
        Authorization: API_KEY,
      },
    };

    return fetch(url, options)
      .then(response => response.json())
      .then(({ articles }) => {
        this.incrementPage();
        return articles;
      });
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
