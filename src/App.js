import './App.css';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
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
        <NavBar />
        <Router>
          <ArticleList path="/" users={this.state.users} />
          <ArticleList path="/topics/:topic" />
          <ArticlePage path="/topics/:topic/:article_id" />
          <ErrorDisplay default status={404} msg="Page not found" />
        </Router>
        <footer className="footer"></footer>
      </div>
    );
  }
  fetchUsers = () => {
    api.getUsers().then((users) => this.setState({ users }));
  };
}

export default App;
