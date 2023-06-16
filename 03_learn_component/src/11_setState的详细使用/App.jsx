import React, { Component } from "react";
import { flushSync } from "react-dom";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello World",
      counter: 0,
    };
  }

  changeText() {
    setTimeout(() => {
      // 在 React18 之前是同步操作
      // 在 React18 之后是异步操作
      flushSync(() => {
        this.setState({ message: "Hello React" });
      });
      console.log(this.state.message);
    }, 0);
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
