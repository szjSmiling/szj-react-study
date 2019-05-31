import React from 'react';
import './One.scss';
// class One extends React.Component { // 1.ES6 的class形式
//   render () {
//     return (
//       <div className="one-page">
//         <h3 className="one-page-title">函数组件与 class 组件</h3>
//         <pre className="one-page-content">
//           ReactDOM.render(element, document.getElementById('root'));
//         </pre>
//       </div>
//     )
//   }
// }
const One = (props) => { // 2.函数组件
  console.log(props.name);
  let element = (
    <div className="one-page">
      <h3 className="one-page-title">函数组件与 class 组件</h3>
      <div className="one-page-content">
        <div>Hello, {props.name}</div>
      </div>
    </div>
  );
  return element;
}
export default One;