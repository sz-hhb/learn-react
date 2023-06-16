import React, { PureComponent } from "react";
import Home from "./Home";
import Recommend from "./Recommend";
import Profile from "./Profile";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      message: "Hello World",
      counter: 0,
    };
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (
  //     this.state.message !== nextState.message ||
  //     this.state.counter !== nextState.counter
  //   ) {
  //     return true;
  //   }
  //   return false;
  // }

  changeMessage() {
    this.setState({ message: "Hello React" });
    // this.setState({ message: "Hello World" });
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    const { message, counter } = this.state;
    console.log("App Render");

    return (
      <div>
        <h2>
          App-{message}-{counter}
        </h2>
        <button onClick={() => this.changeMessage()}>changeMessage</button>
        <button onClick={() => this.increment()}>changeCounter</button>
        <Home message={message} />
        <Recommend counter={counter} />
        <Profile message={message} />
      </div>
    );
  }
}

export default App;
