import CommentHeader from './CommentHeader';
import Voter from './Voter';
import React, { Component } from 'react';
import DeleteBtn from './DeleteBtn';

class CommentCard extends Component {
  state = {
    type: 'comments',
    user: 'jessjelly',
  };

  render() {
    const { author, body, created_at, votes, comment_id } = this.props.comment;
    return (
      <div className="card__comment">
        <CommentHeader author={author} created_at={created_at} votes={votes} />
        <p className="body__comment">{body}</p>
        {author === this.state.user && (
          <DeleteBtn
            removeComment={this.props.removeComment}
            comment_id={comment_id}
          />
        )}
        <Voter id={comment_id} votes={votes} type={this.state.type} />
      </div>
    );
  }
}

export default CommentCard;
