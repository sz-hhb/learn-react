import React, { PureComponent } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>App H1</h1>
        {createPortal(<h2>App H2</h2>, document.querySelector("#why"))}
        <Modal>
          <h2>我是标题</h2>
          <p>这是一个段落</p>
        </Modal>
      </div>
    );
  }
}

export default App;
