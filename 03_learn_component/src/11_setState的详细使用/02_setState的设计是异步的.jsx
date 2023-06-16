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
    // 3 setState在React的事件处理中是一个异步调用
    // 如果希望在数据更新之后,获取到对应的结果执行一些逻辑代码
    // 那么可以在setState中传入第二个参数: callback
    this.setState({ message: "Hello React" }, () => {
      console.log("+++++++", this.state.message);
    });
    console.log("-------", this.state.message);
  }

  changeCounter() {
    // this.setState({ counter: this.state.counter + 1 });
    // this.setState({ counter: this.state.counter + 1 });
    // this.setState({ counter: this.state.counter + 1 });

    this.setState((state, props) => {
      return {
        counter: state.counter + 1,
      };
    });
    this.setState((state, props) => {
      return {
        counter: state.counter + 1,
      };
    });
    this.setState((state, props) => {
      return {
        counter: state.counter + 1,
      };
    });
  }

  render() {
    const { message, counter } = this.state;
    console.log("render被执行");

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
