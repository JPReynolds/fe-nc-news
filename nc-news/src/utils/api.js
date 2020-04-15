import axios from 'axios';

const request = axios.create({
  baseURL: 'https://jordans-nc-news.herokuapp.com/api',
});

export const getTopics = () => {
  return request.get('/topics').then(({ data }) => {
    return data.topics;
  });
};

export const getArticles = (topic, sort_by) => {
  return request
    .get('/articles', {
      params: { topic, sort_by },
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getArticle = (article_id) => {
  return request.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getComments = (article_id) => {
  return request.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const postComment = (article_id, newComment) => {
  return request
    .post(`/articles/${article_id}/comments`, newComment)
    .then(({ data }) => {
      return data.comment;
    })
    .catch((err) => console.dir(err));
};

export const patchVotes = (vote, id, type) => {
  return request
    .patch(`/${type}/${id}`, vote)
    .then(({ data }) => {
      return data.article;
    })
    .catch((err) => console.dir(err));
};

export const deleteComment = (comment_id) => {
  return request.delete(`/comments/${comment_id}`);
};
