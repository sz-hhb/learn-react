import React, { Component } from "react";
import HomeBanner from "./HomeBanner";

export class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home Component</h1>
        <HomeBanner />
      </div>
    );
  }
}

export default Home;
