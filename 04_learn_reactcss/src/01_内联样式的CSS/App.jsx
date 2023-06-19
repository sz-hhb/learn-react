import React, { PureComponent } from "react";

export class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      titleSize: 30,
    };
  }

  render() {
    const { titleSize } = this.state;

    return (
      <div>
        <h2 style={{ color: "red", fontSize: `${titleSize}px` }}>我是标题</h2>
        <p style={{ color: "blue", fontSize: "20px" }}>我是内容,哈哈哈</p>
      </div>
    );
  }
}

export default App;
