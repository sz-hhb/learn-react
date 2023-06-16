import React, { Component } from "react";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello World",
      counter: 0,
    };
  }

  changeText() {
    // 1. setState的更多用法
    // 基本使用
    // this.setState({ message: "Hello React" });

    // 2 可以传入一个回调函数
    // 好处1: 可以在回调函数中编写新的state的逻辑
    // 好处2: 当前的回调函数会将之前的state和props传递进来
    // this.setState((state, props) => {
    //   // 编写一些新的state处理逻辑
    //   // 可以获取之前的state和props值
    //   console.log(this.state.message, this.props);
    //   return {
    //     message: "Hello React"
    //   };
    // });

    // 3 setState在React的事件处理中是一个异步调用
    // 如果希望在数据更新之后,获取到对应的结果执行一些逻辑代码
    // 那么可以在setState中传入第二个参数: callback
    this.setState({ message: "Hello React" }, () => {
      console.log("+++++++", this.state.message);
    });
    console.log("-------", this.state.message);
  }

  changeCounter() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    const { message, counter } = this.state;

    return (
      <div>
        <h1>message: {message}</h1>
        <button onClick={(e) => this.changeText()}>改变文本</button>
        <h1>当前计数: {counter}</h1>
        <button onClick={(e) => this.changeCounter()}>counter+1</button>
      </div>
    );
  }
}

export default App;
