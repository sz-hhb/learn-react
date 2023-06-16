import React, { Component } from "react";
import Home from "./Home";
import eventBus from "./utils/event-bus";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: 0,
      height: 0,
      info: {
        id: 0,
        name: "",
        level: 0,
      },
    };
  }

  componentDidMount() {
    eventBus.on("bannerPrev", this.bannerPrevClick.bind(this));
    eventBus.on("bannerNext", this.bannerNextClick);
  }

  bannerPrevClick(name, age, height) {
    console.log("App中监听到的bannerPrev", name, age, height);
    this.setState({ name, age, height });
  }

  bannerNextClick = (info) => {
    console.log("App中监听到的bannerNext", info);
    this.setState({ info });
  };

  componentWillUnmount() {
    eventBus.off("bannerPrev", this.bannerPrevClick);
    eventBus.off("bannerNext", this.bannerNextClick);
  }

  render() {
    const { name, age, height, info } = this.state;

    return (
      <div>
        <h1>
          App Component:{name}-{age}-{height}
        </h1>
        <h1>
          info: {info.id}-{info.name}-{info.level}
        </h1>
        <Home />
      </div>
    );
  }
}

export default App;
