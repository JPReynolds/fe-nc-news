import React, { Component } from 'react';
import Select from 'react-select';

class FilterUser extends Component {
  state = {
    username: '',
  };
  render() {
    const options = this.props.users.map((user) => {
      return { value: user.username, label: user.username };
    });
    return (
      <Select
        onChange={this.handleChange}
        options={options}
        className="dropdown"
        placeholder="USER"
      />
    );
  }
  handleChange = (username) => {
    this.setState({ username: username.value }, () => {
      this.props.filterByUser(this.state.username);
    });
  };
}

export default FilterUser;
