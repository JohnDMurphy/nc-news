import axios from 'axios';

const newsApi = axios.create({
  baseURL: 'https://nc-news-j-murphy.herokuapp.com/api',
});

export const getNewsArticles = () => {
  return newsApi.get('/articles').then(({ data }) => {
    return data.articles;
  });
};

export const getCodingArticles = () => {
  return newsApi.get('/articles?topic=coding').then(({ data }) => {
    return data.articles;
  });
};

export const getFootballArticles = () => {
  return newsApi.get('/articles?topic=football').then(({ data }) => {
    return data.articles;
  });
};

export const getCookingArticles = () => {
  return newsApi.get('/articles?topic=cooking').then(({ data }) => {
    return data.articles;
  });
};
