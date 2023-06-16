import React, { PureComponent, createRef } from "react";

export class App extends PureComponent {
  constructor() {
    super();

    this.state = {};

    this.titleRef = createRef();
    this.titleEl = null;
  }

  getNativeDOM() {
    // 1. 在React元素上绑定一个ref字符串
    // console.log(this.refs.why);

    // 2. 提前创建好ref对象 createRef() 将创建出来的对象绑定到元素上
    console.log(this.titleRef.current);

    // 3. 绑定函数
    console.log(this.titleEl);
  }

  render() {
    return (
      <div>
        <h2 ref="why">Hello World</h2>
        <h2 ref={this.titleRef}>Hello React</h2>
        <h2 ref={(el) => (this.titleEl = el)}>Hello LiHua</h2>
        <button onClick={() => this.getNativeDOM()}>获取DOM</button>
      </div>
    );
  }
}

export default App;
