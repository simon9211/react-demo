/* eslint-disable */
import React, { Component } from 'react';
import './App.css';

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
      <div className='hello'>
        <div className='hello'>
          Hello React Project
        </div>
        <h1>{this.state.count}</h1>
        {/* <button onClick={() => this.add()}> increase </button> */}
        <button onClick={this.add}> increase </button>
      </div>
    );
  }
}
