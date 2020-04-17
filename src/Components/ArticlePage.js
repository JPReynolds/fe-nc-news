import React, { Component } from 'react';
import * as api from '../utils/api';
import ArticleCard from './ArticleCard';
import CommentsList from './CommentsList';
import Loader from './Loader';
import ErrorDisplay from './ErrorDisplay';

class ArticlePage extends Component {
  state = {
    article: {},
    isLoading: true,
    error: null,
  };

  componentDidMount() {
    api
      .getArticle(this.props.article_id)
      .then((article) => {
        this.setState({ article, isLoading: false });
      })
      .catch((err) => {
        console.dir(err);
        const { status, data } = err.response;
        this.setState({
          error: {
            status,
            msg: data.msg,
          },
          isLoading: false,
        });
      });
  }

  render() {
    const { article, error, isLoading } = this.state;
    if (isLoading) return <Loader />;
    if (error) return <ErrorDisplay status={error.status} msg={error.msg} />;
    return (
      <div className="page__article">
        <ArticleCard {...article} />
        <CommentsList
          article_id={this.props.article_id}
          comment_count={article.comment_count}
        />
      </div>
    );
  }
}

export default ArticlePage;
