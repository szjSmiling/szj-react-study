//启动的文件（开始执行的入口）！！！！
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import './assets/css/common.scss';
import './assets/css/reset.scss';
import './assets/css/variable.scss';
import BasicRoute from './router/Router';
let ele = (
  <BasicRoute>
    <App />
  </BasicRoute>
);
ReactDOM.render(
  ele, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
