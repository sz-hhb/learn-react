import { Component } from "react";

class HelloWorld extends Component {
  constructor() {
    console.log("HelloWorld constructor");
    super();
    this.state = {
      message: "Hello World",
    };
  }

  changeText() {
    this.setState({ message: "Hello User" });
  }

  render() {
    console.log("HelloWorld render");
    const { message } = this.state;

    return (
      <div>
        <h2>{message}</h2>
        <button onClick={(e) => this.changeText()}>修改文本</button>
      </div>
    );
  }

  componentDidMount() {
    console.log("HelloWorld componentDidMount");
  }

  componentDidUpdate() {
    console.log("HelloWorld componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("HelloWorld componentWillUnmount");
  }
}

export default HelloWorld;
