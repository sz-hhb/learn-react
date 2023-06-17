import React, { PureComponent, createRef, forwardRef } from "react";

const HelloWorld = forwardRef(function (props, ref) {
  return (
    <div>
      <h2 ref={ref}>Hello World </h2>
      <p>哈哈哈</p>
    </div>
  );
});

export class App extends PureComponent {
  constructor() {
    super();

    this.state = {};

    this.hwRef = createRef();
  }

  getComponent() {
    console.log(this.hwRef.current);
  }

  render() {
    return (
      <div>
        <HelloWorld ref={this.hwRef} />
        <button onClick={() => this.getComponent()}>获取组件实例</button>
      </div>
    );
  }
}

export default App;
