import React from 'react';

const ArticleHeader = (props) => {
  return (
    <header className="header__article">
      <p className="title__article">{props.title}</p>
      <p className="author__article">{props.author}</p>
    </header>
  );
};

export default ArticleHeader;
