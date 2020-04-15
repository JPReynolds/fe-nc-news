import React, { Component } from 'react';
import * as api from '../utils/api';

class Voter extends Component {
  state = {
    optimisticVotes: 0,
  };
  render() {
    return (
      <section>
        <button
          onClick={() => {
            this.handleClick(1);
          }}
          disabled={this.state.optimisticVotes > 0}
        >
          UP
        </button>
        <p>{this.props.votes + this.state.optimisticVotes} votes</p>
        <button
          onClick={() => {
            this.handleClick(-1);
          }}
          disabled={this.state.optimisticVotes < 0}
        >
          DOWN
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
