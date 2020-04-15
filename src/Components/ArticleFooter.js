import React from 'react';

const ArticleFooter = (props) => {
  return <p className="footer__article">comments: {props.commentCount}</p>;
};

export default ArticleFooter;
