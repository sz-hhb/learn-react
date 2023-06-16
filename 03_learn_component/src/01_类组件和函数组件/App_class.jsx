import { Component } from "react";

// 1. 类组件
class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "App Component",
    };
  }

  render() {
    const { message } = this.state;

    return <h2>{message}</h2>;
  }
}

export default App;
