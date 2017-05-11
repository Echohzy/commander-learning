'use strict';

import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App.js';

import '../stylesheets/style.css';

ReactDOM.render(
  <Router>
    <App />
  </Router>, document.getElementById('app'));