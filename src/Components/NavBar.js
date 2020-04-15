import React, { Component } from 'react';
import { Link } from '@reach/router';
import * as api from '../utils/api';
import Loader from './Loader';

class NavBar extends Component {
  state = { topics: [], isLoading: true };

  componentDidMount() {
    api.getTopics().then((topics) => {
      this.setState({ topics, isLoading: false });
    });
  }

  render() {
    const { topics, isLoading } = this.state;
    if (isLoading) return <Loader />;
    return (
      <nav className="NavBar">
        <ul>
          {topics.map(({ slug, description }) => {
            return (
              <li key={description}>
                <Link to={`/topics/${slug}`}>{slug}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default NavBar;
