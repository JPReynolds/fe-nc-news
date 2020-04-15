import React from 'react';
import ArticleHeader from './ArticleHeader';
import ArticleBody from './ArticleBody';
import ArticleFooter from './ArticleFooter';
import Voter from './Voter';
import { Link } from '@reach/router';

class ArticleCard extends React.Component {
  state = {
    type: 'articles',
  };

  render() {
    return (
      <div className="card__article">
        <Link to={`/topics/${this.props.topic}/${this.props.article_id}`}>
          <ArticleHeader
            title={this.props.title}
            author={this.props.author}
            created_at={this.props.created_at}
          />
          <ArticleBody body={this.props.body} />
          <ArticleFooter commentCount={this.props.comment_count} />
        </Link>
        <Voter
          id={this.props.article_id}
          votes={this.props.votes}
          type={this.state.type}
        />
      </div>
    );
  }
}

export default ArticleCard;
