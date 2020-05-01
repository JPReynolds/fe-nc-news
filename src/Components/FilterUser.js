import React, { Component } from 'react';

class FilterUser extends Component {
  state = {
    username: '',
  };
  render() {
    return (
      <form className="filter__user">
        <label></label>
        <select className="dropdown" onChange={this.handleChange}>
          <option>USER</option>
          {this.props.users.map((user) => {
            return (
              <option key={user.username} value={`${user.username}`}>
                {user.username}
              </option>
            );
          })}
        </select>
      </form>
    );
  }
  handleChange = (event) => {
    this.setState({ username: event.target.value }, () => {
      this.props.filterByUser(this.state.username);
    });
  };
}

export default FilterUser;
