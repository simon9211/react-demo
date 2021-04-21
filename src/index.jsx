/* eslint-disable */
import React, { Component } from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'babel-polyfill';
import App from './Router';

const renderDom = (Item) => {
  render(
    <AppContainer>
      <Item />
    </AppContainer>,
    document.getElementById('app'),
  );
};

renderDom(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    const app = require('./App').default;
    renderDom(app);
  });
}
