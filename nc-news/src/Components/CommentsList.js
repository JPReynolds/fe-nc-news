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
      <main>
        <CommentForm
          article_id={this.props.article_id}
          addCommentToList={this.addCommentToList}
        />
        {comments.map((comment) => {
          return <CommentCard comment={comment} key={comment.comment_id} />;
        })}
      </main>
    );
  }
  addCommentToList = (newComment) => {
    this.setState((currentState) => {
      return { comments: [newComment, ...currentState.comments] };
    });
  };
}

export default CommentsList;
