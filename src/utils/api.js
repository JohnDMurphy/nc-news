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

export const getArticleById = (param) => {
  let query = `/articles/${param}`;

  return newsApi.get(query).then(({ data }) => {
    return data.article;
  });
};

export const updateVotes = (param) => {
  let query = `/articles/${param}`;

  return newsApi.patch(query, { inc_votes: 1 });
};

export const downVotes = (param) => {
  let query = `/articles/${param}`;

  return newsApi.patch(query, { inc_votes: -1 });
};

export const getComments = (param) => {
  let query = `/articles/${param}/comments`;

  return newsApi.get(query).then(({ data }) => {
    return data.comments;
  });
};
