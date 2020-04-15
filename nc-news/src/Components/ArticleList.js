import React, { Component } from 'react';
import * as api from '../utils/api';
import { Link } from '@reach/router';
import ArticleCard from './ArticleCard';
import Loader from './Loader';
import SortArticles from './SortArticles';

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
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
    api.getArticles(this.props.topic, sort_by).then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  };

  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) return <Loader />;
    return (
      <main className="ArticleList">
        <SortArticles fetchArticles={this.fetchArticles} />
        {articles.map((article) => {
          return (
            <Link
              to={`/topics/${article.topic}/${article.article_id}`}
              key={article.article_id}
            >
              <ArticleCard key={article.article_id} {...article} />
            </Link>
          );
        })}
      </main>
    );
  }
}

export default ArticleList;
