import React from 'react';

const ArticleHeader = (props) => {
  return (
    <header className="ArticleHeader">
      <p>{props.title}</p>
      <p>{props.author}</p>
    </header>
  );
};

export default ArticleHeader;
