import React from 'react';
import ArticleHeader from './ArticleHeader';
import ArticleBody from './ArticleBody';
import ArticleFooter from './ArticleFooter';

const ArticleCard = (props) => {
  return (
    <div className="ArticleCard">
      <ArticleHeader
        title={props.title}
        author={props.author}
        created_at={props.created_at}
      />
      <ArticleBody body={props.body} />
      <ArticleFooter commentCount={props.comment_count} />
    </div>
  );
};

export default ArticleCard;
