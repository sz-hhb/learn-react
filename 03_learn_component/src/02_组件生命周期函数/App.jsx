import { Component } from "react";
import HelloWorld from "./HelloWorld";

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello App",
      isShowHW: true,
    };
  }

  change() {
    this.setState({
      isShowHW: !this.state.isShowHW,
    });
  }

  render() {
    const { message, isShowHW } = this.state;

    return (
      <div>
        <h1>{message}</h1>
        <button onClick={(e) => this.change()}>切换</button>
        {isShowHW && <HelloWorld />}
      </div>
    );
  }
}

export default App;
