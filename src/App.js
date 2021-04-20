import React, { Component } from 'react';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 1
    }

    // this.add = this.add.bind(this);
  }

  add = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <td>
          <tr>Hello React Project111</tr>
        </td>
        <h1>{this.state.count}</h1>
        {/* <button onClick={() => this.add()}> increase </button> */}
        <button onClick={this.add}> increase </button>
      </div>
    );
  }
}