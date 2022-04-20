import axios from 'axios';

const newsApi = axios.create({
  baseURL: 'https://nc-news-j-murphy.herokuapp.com/api',
});

export const getNewsArticles = (holder) => {
  let query = '/articles';

  if (holder) {
    query += `?topic=${holder}`;
  }

  return newsApi.get(query).then(({ data }) => {
    return data.articles;
  });
};
