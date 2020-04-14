import React, { Component } from 'react';
import * as api from '../utils/api';
import ArticleCard from './ArticleCard';
import CommentsList from './CommentsList';

class ArticlePage extends Component {
  state = {
    article: {},
    isLoading: true,
  };

  componentDidMount() {
    api.getArticle(this.props.article_id).then((article) => {
      this.setState({ article, isLoading: false });
    });
  }

  render() {
    const { article } = this.state;
    return (
      <div>
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
