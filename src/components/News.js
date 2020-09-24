import React from 'react';

class News extends React.Component {
  constructor (props) {
    super();
    this.state = {
      msg: '新闻',
      list: ['111', '222', '333']
    }
    this.getData2 = this.getData2.bind(this)
  }
  getData () {
    console.log(this.state.msg)
  }
  getData2 () {
    console.log(this.state.msg)
  }
  render () {
    let listResult = this.state.list.map((value, index) => {
      return <li key={index}>{value}</li>
    })
    return (
      <>
        <h2 >{this.state.msg}</h2>
        <ul>{listResult}</ul>
        <button onClick={this.getData.bind(this)}>getData</button>
        <button onClick={this.getData2}>getData2</button>
      </>
    )
  }

}

export default News;