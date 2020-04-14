import React, { Component } from 'react';
import * as api from '../utils/api';

class CommentForm extends Component {
  state = {
    userInput: '',
    username: 'jessjelly',
  };
  render() {
    const { userInput } = this.state;
    return (
      <form className="commentForm" onSubmit={this.handleSubmitComment}>
        <label>
          Write Comment...{''}
          <input
            type="text"
            onChange={this.handleInputChange}
            value={userInput}
          />
        </label>
        <button>Post</button>
      </form>
    );
  }

  handleInputChange = (event) => {
    const { value } = event.target;
    this.setState({ userInput: value });
  };

  handleSubmitComment = (event) => {
    event.preventDefault();
    const { userInput, username } = this.state;
    const newComment = {
      username,
      body: userInput,
    };
    api.postComment(this.props.article_id, newComment).then((comment) => {
      this.props.addCommentToList(comment);
    });
    this.setState({ userInput: '' });
  };
}

export default CommentForm;
