import React, { Component } from "react";
import eventBus from "./utils/event-bus";

export class HomeBanner extends Component {
  preClick() {
    console.log("上一个");
    eventBus.emit("bannerPrev", "why", 18, 1.88);
  }

  nextClick() {
    console.log("下一个");
    eventBus.emit("bannerNext", { id: 1, name: "aaa", level: 999 });
  }

  render() {
    return (
      <div>
        <h1>Home Banner</h1>
        <button onClick={(e) => this.preClick()}>上一个</button>
        <button onClick={(e) => this.nextClick()}>下一个</button>
      </div>
    );
  }
}

export default HomeBanner;
