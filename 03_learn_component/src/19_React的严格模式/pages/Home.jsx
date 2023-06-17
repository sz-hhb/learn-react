import React, { PureComponent } from "react";

export class Home extends PureComponent {
  constructor() {
    super();

    this.state = {};

    console.log("Home constructor");
  }

  // UNSAFE_componentWillMount() {
  //   console.log("UNSAFE_componentWillMount");
  // }

  componentDidMount() {
    console.log("Home componentDidMount");
  }

  render() {
    console.log("Home render");
    return (
      <div>
        {/* <h2 ref="title">Home</h2> */}
        <h2>Home</h2>
      </div>
    );
  }
}

export default Home;
