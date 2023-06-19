import React, { PureComponent } from "react";
import homeStyle from "./Home.module.css";

export class Home extends PureComponent {
  render() {
    return <div className={homeStyle.title}>Home的标题</div>;
  }
}

export default Home;
