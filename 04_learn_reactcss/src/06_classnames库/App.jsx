import React, { PureComponent } from "react";
import classNames from "classnames";

export class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      isShow: true,
    };
  }

  render() {
    const { isShow } = this.state;

    return (
      <div>
        <h2 className={classNames("aaa", { bbb: isShow, ccc: isShow })}>
          哈哈哈
        </h2>
      </div>
    );
  }
}

export default App;
