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
    userArticles: [],
    page: 'articleList',
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
    const { articles, isLoading, err, userArticles } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrorDisplay status={err.status} msg={err.msg} />;
    let articlesArray = [];
    if (userArticles.length !== 0) {
      articlesArray = userArticles;
    } else {
      articlesArray = articles;
    }

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
            src="https://lh3.googleusercontent.com/proxy/ohLAQUq9S17gTdj4r-U_IOmzaKsdeRTg44JM0MI7dCAK3mvtgHw5HkE9vOeuVSFP6vur5ISyLtAcafAQMn3Lnbo7lNrpDr0DkbLsBHxoGpdqtUv-KekG9QawXs5DnQe9sek"
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
          <FilterUser
            users={this.props.users}
            filterByUser={this.filterByUser}
          />
          <SortArticles fetchArticles={this.fetchArticles} />
        </div>
        {articlesArray.map((article) => {
          return (
            <ArticleCard
              key={article.article_id}
              {...article}
              page={this.state.page}
            />
          );
        })}
      </main>
    );
  }
  filterByUser = (user) => {
    const userArticles = this.state.articles.filter((article) => {
      if (article.author === user) return true;
      return false;
    });
    this.setState({ userArticles: userArticles });
  };
}

export default ArticleList;
