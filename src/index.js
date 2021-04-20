import React, { Component } from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import 'babel-polyfill'
import App from './App'

const renderDom = Item => {
	render(
		<AppContainer>
			<Item />
		</AppContainer>,
		document.getElementById('app')
	);
}

renderDom(App);

if (module.hot) {
	module.hot.accept('./App', () => {
		const App = require('./App').default;
		renderDom(App);
	})
}