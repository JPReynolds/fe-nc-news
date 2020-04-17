import React, { Component } from 'react';
import * as api from '../utils/api';

class Voter extends Component {
  state = {
    optimisticVotes: 0,
  };
  render() {
    return (
      <section className="voter">
        <button
          onClick={() => {
            this.handleClick(1);
          }}
          disabled={this.state.optimisticVotes > 0}
          className="voter__btn"
        >
          <img
            src="/images/down-arrow.jpeg"
            alt="down arrow"
            className="voter__btn--img voter__btn--up"
          />
        </button>
        <p className="voter__votes">
          {this.props.votes + this.state.optimisticVotes}
        </p>
        <button
          onClick={() => {
            this.handleClick(-1);
          }}
          disabled={this.state.optimisticVotes < 0}
          className="voter__btn"
        >
          <img
            src="/images/down-arrow.jpeg"
            alt="down arrow"
            className="voter__btn--img"
          />
        </button>
      </section>
    );
  }

  handleClick = (vote) => {
    this.setState((currentState) => {
      return { optimisticVotes: currentState.optimisticVotes + vote };
    });
    api.patchVotes(vote, this.props.id, this.props.type);
  };
}

export default Voter;
