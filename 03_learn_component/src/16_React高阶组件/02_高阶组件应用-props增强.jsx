import React, { PureComponent } from "react";
import enhancedUserInfo from "./hoc/enhanced-props";

const Home = enhancedUserInfo(function (props) {
  return (
    <h1>
      Home: {props.name}-{props.age}
    </h1>
  );
});

const Profile = enhancedUserInfo(function (props) {
  return (
    <h1>
      Profile: {props.name}-{props.age}
    </h1>
  );
});

const HelloFriend = enhancedUserInfo(function (props) {
  return (
    <h1>
      HelloFriend: {props.name}-{props.age}
    </h1>
  );
});

export class App extends PureComponent {
  render() {
    return (
      <div>
        <Home banners={["图1", "图2"]} />
        <Profile />
        <HelloFriend />
      </div>
    );
  }
}

export default App;
