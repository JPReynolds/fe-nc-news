import React from 'react';
import CommentHeader from './CommentHeader';

const CommentCard = (props) => {
  const { author, body, created_at, votes } = props.comment;
  return (
    <div className="CommentCard">
      <CommentHeader author={author} created_at={created_at} votes={votes} />
      <p>{body}</p>
    </div>
  );
};

export default CommentCard;
