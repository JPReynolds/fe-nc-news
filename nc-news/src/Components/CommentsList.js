import React, { Component } from 'react';
import * as api from '../utils/api';
import CommentCard from './CommentCard';
import CommentForm from './CommentForm';

class CommentsList extends Component {
  state = { comments: [], isLoading: true };

  componentDidMount() {
    api.getComments(this.props.article_id).then((comments) => {
      this.setState({ comments, isLoading: false });
    });
  }

  render() {
    const { comments } = this.state;
    return (
      <main className="list__comment">
        <CommentForm
          article_id={this.props.article_id}
          addCommentToList={this.addCommentToList}
          comment_count={this.props.comment_count}
        />
        {comments.map((comment) => {
          return (
            <CommentCard
              comment={comment}
              key={comment.comment_id}
              removeComment={this.removeComment}
            />
          );
        })}
      </main>
    );
  }
  addCommentToList = (newComment) => {
    this.setState((currentState) => {
      return { comments: [newComment, ...currentState.comments] };
    });
  };

  removeComment = (comment_id) => {
    const newCommentList = this.state.comments.filter((comment) => {
      if (comment.comment_id !== comment_id) return true;
      return false;
    });
    this.setState({ comments: newCommentList });
  };
}

export default CommentsList;
