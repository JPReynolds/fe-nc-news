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
        onSubmit={this.handleSubmitComment}
        for="submit"
      >
        <label>
          <textarea
            onChange={this.handleInputChange}
            value={userInput}
            className="input__comment"
            placeholder="Write comment here..."
            required
          />
        </label>
        {/* <input type="submit" value="COMMENT" className="btn btn__submit" /> */}
        <button className="btn btn__submit" id="submit">
          COMMENT
        </button>
        <button className="btn btn__cancel" onClick={this.handleClick}>
          CANCEL
        </button>
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
    api
      .postComment(this.props.article_id, newComment, username)
      .then((comment) => {
        this.props.addCommentToList(comment);
      });
    this.setState({ userInput: '' });
  };

  handleClick = () => {
    this.setState({ userInput: '' });
  };
}

export default CommentForm;
