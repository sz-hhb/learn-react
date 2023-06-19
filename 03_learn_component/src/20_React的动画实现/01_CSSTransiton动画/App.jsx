import React, { PureComponent, createRef } from "react";
import { CSSTransition } from "react-transition-group";
import "./style.css";

export class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isShow: true,
    };

    this.sectionRef = createRef();
  }

  render() {
    const { isShow } = this.state;

    return (
      <div>
        <button onClick={(e) => this.setState({ isShow: !isShow })}>
          切换
        </button>
        {/* {isShow && <h2>哈哈哈</h2>} */}

        <CSSTransition
          nodeRef={this.sectionRef}
          in={isShow}
          unmountOnExit={true}
          classNames="why"
          timeout={2000}
          appear
        >
          <div className="section" ref={this.sectionRef}>
            <h2>哈哈哈</h2>
            <p>我是内容,哈哈哈</p>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default App;
