/* eslint-disable */
import React, { Component } from 'react';
import { Button, List, WingBlank, WhiteSpace } from 'antd-mobile';
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
        <WingBlank>
          <Button>default</Button><WhiteSpace />
          <Button disabled>default disabled</Button><WhiteSpace />
          <Button type="primary">primary</Button><WhiteSpace />
        </WingBlank>
        <List style={{ margin: '5px 0', backgroundColor: 'white' }}>

          <List.Item extra={<Button type="ghost" size="small" inline>small</Button>} multipleLine>
            Regional manager
            <List.Item.Brief>
              Can be collected, refund, discount management, view data and other operations
            </List.Item.Brief>
          </List.Item>
          <List.Item extra={<Button type="primary" size="small" inline>small</Button>} multipleLine>
            Regional manager
            <List.Item.Brief>
              Can be collected, refund, discount management, view data and other operations
            </List.Item.Brief>
          </List.Item>
        </List>
        <div>
          Hello React Project i am Simon
        </div>
        <h1>{this.state.count}</h1>
        {/* <button onClick={() => this.add()}> increase </button> */}
        <button onClick={this.add}> increase </button>
        <a style={{ color: baseStyles.a }} href='#/home'>去detail</a>
      </div>
    );
  }
}
