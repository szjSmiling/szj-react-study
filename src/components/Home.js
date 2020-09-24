import React, { Component } from 'react';

class Home extends Component {
  constructor (props) {
    super();
    // 定义数据
    this.state = {
      name: '张三',
      age: 18,
      style: {
        color: 'red',
      }
    }
  }
  render () {
    return (
      <>
        <h5 title={this.state.name}>React 组件里所有的节点都要被根节点包含</h5>
        <p style={this.state.style}>我的名字是{this.state.name}</p>
      </>
    )
  }
}

export default Home;