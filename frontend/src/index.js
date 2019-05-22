import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = document.getElementById('root');

const render = (Component) => {
    ReactDOM.render(
        <Component />
        ,
        root,
    );
  };
  render(App);