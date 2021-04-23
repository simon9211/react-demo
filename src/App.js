/* eslint-disable */
import React, { Component } from 'react';
import baseStyles from './base.scss'
import styles from './App.scss';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };

    // this.add = this.add.bind(this);
  }

  add = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div className={styles.hello}>
        <div>
          Hello React Project i am Simon
        </div>
        <h1>{this.state.count}</h1>
        {/* <button onClick={() => this.add()}> increase </button> */}
        <button onClick={this.add}> increase </button>
        <a style={{color: baseStyles.a}} href='#/home'>去detail</a>
      </div>
    );
  }
}
