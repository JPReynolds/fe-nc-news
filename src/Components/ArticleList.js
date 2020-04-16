import React, { Component } from 'react';
import * as api from '../utils/api';
import ArticleCard from './ArticleCard';
import Loader from './Loader';
import SortArticles from './SortArticles';
import ErrorDisplay from './ErrorDisplay';

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
        <SortArticles fetchArticles={this.fetchArticles} />
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} {...article} />;
        })}
      </main>
    );
  }
}

export default ArticleList;
