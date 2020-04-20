import React, { Component } from 'react';
import * as api from '../utils/api';
import ArticleCard from './ArticleCard';
import Loader from './Loader';
import SortArticles from './SortArticles';
import ErrorDisplay from './ErrorDisplay';
import FilterUser from './FilterUser';

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    err: null,
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.topic !== this.props.topic) {
      this.fetchArticles();
    }
  }

  fetchArticles = (sort_by) => {
    api
      .getArticles(this.props.topic, sort_by)
      .then((articles) => {
        this.setState({ articles, isLoading: false });
      })
      .catch((err) => {
        console.dir(err);
        const { status, data } = err.response;
        this.setState({
          err: {
            status,
            msg: data.msg,
          },
          isLoading: false,
        });
      });
  };

  render() {
    const { articles, isLoading, err } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrorDisplay status={err.status} msg={err.msg} />;

    return (
      <main className="list__article">
        {this.props.topic === 'coding' ? (
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/coding-317-517904.png"
            alt="coding"
            className="topicIcon topicIcon--border"
          />
        ) : this.props.topic === 'football' ? (
          <img
            src="https://p7.hiclipart.com/preview/690/974/369/computer-icons-football-icon-design-football.jpg"
            alt="football"
            className="topicIcon topicIcon--border"
          />
        ) : this.props.topic === 'cooking' ? (
          <img
            src="https://image.flaticon.com/icons/png/512/113/113339.png"
            alt="cooking"
            className="topicIcon topicIcon--border"
          />
        ) : (
          this.props.path === '/' && (
            <img
              src="https://images.vexels.com/media/users/3/157231/isolated/preview/7c9a3c3d7e81dc61dfd56a1be6cabc09-simple-house-icon-by-vexels.png"
              alt="cooking"
              className="topicIcon topicIcon--border"
              id="house-icon"
            />
          )
        )}
        <div className="sort">
          <FilterUser users={this.props.users} />
          <SortArticles fetchArticles={this.fetchArticles} />
        </div>
        {articles.map((article) => {
          const userAvi = this.props.users.filter((user) => {
            if (user.username === article.author) return true;
            return false;
          });
          return (
            <ArticleCard
              key={article.article_id}
              {...article}
              avatar_url={userAvi[0].avatar_url}
            />
          );
        })}
      </main>
    );
  }
  filterByUser = (user) => {
    const userArticles = this.state.articles.filter((article) => {
      if (article.user === user) return true;
      return false;
    });
    return userArticles;
  };
}

export default ArticleList;
