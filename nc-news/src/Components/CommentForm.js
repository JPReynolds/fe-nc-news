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
      <form
        className="form__comment"
        onSubmit={() => this.handleSubmitComment(1)}
      >
        <label>
          <p className="title__commentForm">Write Comment...{''}</p>
          <input
            onChange={this.handleInputChange}
            value={userInput}
            className="input__comment"
          />
        </label>
        <input type="submit" value="Submit" className="btn__submit " />
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
    if (userInput.length !== 0) {
      api.postComment(this.props.article_id, newComment).then((comment) => {
        this.props.addCommentToList(comment);
      });
      this.setState({ userInput: '' });
    }
  };
}

export default CommentForm;
