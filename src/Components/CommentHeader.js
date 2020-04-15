import React from 'react';

const CommentHeader = (props) => {
  return (
    <header className="header__comment">
      <p className="author__comment">{props.author}</p>
      <p className="votes__comment">Votes: {props.votes}</p>
    </header>
  );
};

export default CommentHeader;
