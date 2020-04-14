import React from 'react';

const CommentHeader = (props) => {
  return (
    <header className="CommentHeader">
      <p>{props.author}</p>
      <p>Votes: {props.votes}</p>
    </header>
  );
};

export default CommentHeader;
