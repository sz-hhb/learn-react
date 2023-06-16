import React, { PureComponent } from "react";

export class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      friends: [],
    };
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.message !== nextProps.message) {
  //     return true;
  //   }
  //   return false;
  // }

  render() {
    console.log("Home Render");
    return (
      <div>
        <h2>Home Page: {this.props.message}</h2>
      </div>
    );
  }
}

export default Home;
