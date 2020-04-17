import React from 'react';
import * as api from '../utils/api';

const DeleteBtn = (props) => {
  const handleClick = () => {
    api.deleteComment(props.comment_id).then(() => {
      props.removeComment(props.comment_id);
    });
  };

  return (
    <button className="btn btn__delete" onClick={handleClick}>
      <img src="/images/bin.jpeg" alt="bin" className="icon__bin" />
    </button>
  );
};

export default DeleteBtn;
