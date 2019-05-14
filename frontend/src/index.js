import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { AppContainer } from 'react-hot-loader';

const root = document.getElementById('root');

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>
        ,
        root,
    );
  };
  render(App);