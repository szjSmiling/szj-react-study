import React from 'react';

class Welcome extends React.Component {
  render () {
    return <h4>Hello, {this.props.name}</h4>
  }
}
export default Welcome;