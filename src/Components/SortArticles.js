import React from 'react';

class SortArticles extends React.Component {
  state = {
    sort_by: '',
  };

  render() {
    return (
      <form className="sort__articles">
        <label>
          <select
            value={this.state.sort_by}
            name="sort_by"
            onChange={this.handleChange}
            className="dropdown"
          >
            <option>SORT BY</option>
            <option value="created_at">Latest</option>
            <option value="votes">Most Votes</option>
            <option value="comment_count">Most Comments</option>
          </select>
        </label>
      </form>
    );
  }
  handleChange = (event) => {
    this.setState({ sort_by: event.target.value }, () => {
      this.props.fetchArticles(this.state.sort_by);
    });
  };
}

export default SortArticles;
