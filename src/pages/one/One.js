import React from 'react';
import './One.scss';
import Welcome from '../../components/testOne/Test';
import Welcome2 from '../../components/testOne/Test2';
import Welcome3 from '../../components/testOne/Test3';
import Welcome4 from '../../components/testOne/Test4';

function data () {
  return {
    info: { name: "Sara",age: 28,sex: "female" },
    info2: { name: "Timi",age: 20,sex: "male" }
  }
}
// const info = { name: "Sara",age: 28,sex: "female" };
// const info2 = { name: "Timi",age: 20,sex: "male" };

const One = () => { // 1.函数组件
  let element = (
    <div className="one-page">
      <h3 className="one-page-title">React 学习之路才刚刚开始,召唤师</h3>
      <div className="one-page-content">
        <Welcome  user={data().info} />
        <Welcome2  user={data().info2} func="纯函数" />
        <Welcome3  />
        <Welcome4  />
      </div>
    </div>
  );
  return element;
}
// class One extends React.Component { // 2.ES6 的class形式
//   render () {
//     return (
//       <div className="one-page">
//         <h3 className="one-page-title">函数组件与 class 组件</h3>
//         <div className="one-page-content">
//           <Welcome  user={info} />
//           <Welcome2  user={info2} func="纯函数" />
//         </div>
//       </div>
//     )
//   }
// }
export default One;