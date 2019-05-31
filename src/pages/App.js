import React from 'react';
import logo from '../logo.svg';
import './App.scss';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.
          <a className="App-link" href="https://reactjs.org"
            target="_blank" rel="noopener noreferrer"
          >Learn React</a>
        </p>
        <p>(注意:a标签跳外链,需要加rel属性)</p>
      </header>
      <ul className="App-nav">
        <li><Link to="/one">组件和props(Link)</Link></li>
        <li><Link to="/two">state和生命周期(Link)</Link></li>
        <li><a href="/three">事件处理(a)</a></li>
        <li><a href="/four">条件渲染(a)</a></li>
      </ul>
    </div>
  );
}

export default App;
