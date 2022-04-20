import axios from 'axios';

const newsApi = axios.create({
  baseURL: 'https://nc-news-j-murphy.herokuapp.com/api',
});

export const getNewsArticles = () => {
  return newsApi.get('/articles').then(({ data }) => {
    return data.articles;
  });
};
