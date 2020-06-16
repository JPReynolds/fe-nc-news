import React from 'react';
import Select from 'react-select';

class SortArticles extends React.Component {
  state = {
    sort_by: '',
  };

  render() {
    const options = [
      { value: 'created_at', label: 'Latest' },
      { value: 'votes', label: 'Most Votes' },
      { value: 'comment_count', label: 'Most Comments' },
    ];
    return (
      <Select
        placeholder="FILTER"
        onChange={this.handleChange}
        options={options}
        className="dropdown"
      />
    );
  }
  handleChange = (sort_by) => {
    this.setState({ sort_by: sort_by.value }, () => {
      this.props.fetchArticles(this.state.sort_by);
    });
  };
}

export default SortArticles;
