import React from 'react';
import './App.css';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import { Router } from '@reach/router';
import ArticleList from './Components/ArticleList';
import ArticlePage from './Components/ArticlePage';
import ErrorDisplay from './Components/ErrorDisplay';

const App = () => {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Router>
        <ArticleList path="/" />
        <ArticleList path="/topics/:topic" />
        <ArticlePage path="/topics/:topic/:article_id" />
        <ErrorDisplay default status={404} msg="Page not found" />
      </Router>
      <footer className="footer"></footer>
    </div>
  );
};

export default App;
