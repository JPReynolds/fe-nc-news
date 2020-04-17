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
              <li key={description}>
                <Link to={`/topics/${slug}`} className="topic__link">
                  <img
                    src={`/images/${slug}.jpeg`}
                    alt={`${slug}`}
                    className="topicIcon__nav"
                  />
                  <p className="NavBar__topic">
                    {slug[0].toUpperCase() + slug.slice(1)}
                  </p>
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
