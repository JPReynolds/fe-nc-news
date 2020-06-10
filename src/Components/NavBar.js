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
        <ul className="NavBar__list">
          {topics.map(({ slug, description }) => {
            return (
              <li key={description} className="list__topic">
                <Link to={`/topics/${slug}`} className="topic__link">
                  {slug[0].toUpperCase() + slug.slice(1)}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default NavBar;
