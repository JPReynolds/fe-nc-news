import './App.css';
import Header from './Components/Header';
import { Router } from '@reach/router';
import ArticleList from './Components/ArticleList';
import ArticlePage from './Components/ArticlePage';
import ErrorDisplay from './Components/ErrorDisplay';
import * as api from './utils/api';

import React, { Component } from 'react';

class App extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    api.getUsers().then((users) => this.setState({ users }));
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">
          <Router>
            <ArticleList path="/" users={this.state.users} />
            <ArticleList path="/topics/:topic" users={this.state.users} />
            <ArticlePage
              path="/topics/:topic/:article_id"
              users={this.state.users}
            />
            <ErrorDisplay
              default
              status={404}
              msg="Page not found"
              users={this.state.users}
            />
          </Router>
        </div>
        <footer className="footer">
          <p>Created by Jordan Reynolds</p>
        </footer>
      </div>
    );
  }
  fetchUsers = () => {
    api.getUsers().then((users) => this.setState({ users }));
  };
}

export default App;
