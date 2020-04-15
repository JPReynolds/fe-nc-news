import React from 'react';
import * as api from '../utils/api';

const DeleteBtn = (props) => {
  const handleClick = () => {
    api.deleteComment(props.comment_id).then(() => {
      props.removeComment(props.comment_id);
    });
  };

  return <button onClick={handleClick}>remove</button>;
};

export default DeleteBtn;
