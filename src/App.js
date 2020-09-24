import React from 'react';
import { Button } from 'antd';
import logo from './logo.svg';
import './App.scss';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.
          <a className="App-link"
            target="_blank"
            href="https://reactjs.org"
            rel="noopener noreferrer"
          >Learn React</a>
        </p>
        <p>(注意:a标签跳外链,需要加rel属性)</p>
        <Button type="primary">Button</Button>
      </header>
      <ul className="App-nav">
        <li><Link to="/one">组件, props, state, 事件(Link)</Link></li>
        <li><Link to="/two">条件, 循环, 表单(Link)</Link></li>
        <li><a href="/three">状态提升(a)</a></li>
        <li><a href="/four">组件 VS 继承(a)</a></li>
      </ul>
    </div>
  );
}

export default App;
