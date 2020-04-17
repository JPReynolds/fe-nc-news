import Voter from './Voter';
import React, { Component } from 'react';
import DeleteBtn from './DeleteBtn';

class CommentCard extends Component {
  state = {
    type: 'comments',
    user: 'jessjelly',
  };

  render() {
    const { author, body, votes, comment_id } = this.props.comment;
    return (
      <div className="card__comment">
        <p className="header__comment author__comment">{author}</p>
        <p className="header__comment votes__comment">Votes: {votes}</p>
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
