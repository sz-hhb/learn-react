import React, { PureComponent } from "react";

export class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      isAgree: false,
      hobbies: [
        { value: "sing", text: "唱", isChecked: false },
        { value: "dance", text: "跳", isChecked: false },
        { value: "rap", text: "rap", isChecked: false },
      ],
      fruit: ["orange"],
    };
  }

  // handleUsernameChange(event) {
  //   this.setState({ username: event.target.value });
  // }

  // handlePasswordChange(event) {
  //   this.setState({ password: event.target.value });
  // }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleAgreeChange(event) {
    this.setState({ isAgree: event.target.checked });
  }

  handleHobbyChange(event, index) {
    const hobbies = [...this.state.hobbies];
    hobbies[index].isChecked = event.target.checked;
    this.setState({ hobbies });
  }

  handleFruitChange(event) {
    const options = Array.from(event.target.selectedOptions);
    const values = options.map((item) => item.value);
    // const values = Array.from(event.target.selectedOptions, item => item.value)
    this.setState({ fruit: values });
  }

  handleSubmitClick(event) {
    event.preventDefault();
    console.log(this.state.username, this.state.password);
    const hobbies = this.state.hobbies
      .filter((item) => item.isChecked)
      .map((item) => item.value);
    console.log("爱好:", hobbies);
    console.log("水果:", this.state.fruit);
  }

  render() {
    const { username, password, isAgree, hobbies, fruit } = this.state;

    return (
      <div>
        <form onSubmit={(e) => this.handleSubmitClick(e)}>
          <div>
            <label htmlFor="username">
              用户:
              <input
                id="username"
                type="text"
                name="username"
                value={username}
                onChange={(e) => this.handleInputChange(e)}
              />
            </label>

            <label htmlFor="password">
              密码:
              <input
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => this.handleInputChange(e)}
              />
            </label>

            <label htmlFor="agree">
              <input
                type="checkbox"
                name="agree"
                id="agree"
                checked={isAgree}
                onChange={(e) => this.handleAgreeChange(e)}
              />
              同意协议
            </label>

            <div>
              爱好:
              {hobbies.map((item, index) => {
                return (
                  <label htmlFor={item.value} key={item.value}>
                    <input
                      type="checkbox"
                      id={item.value}
                      checked={item.isChecked}
                      onChange={(e) => this.handleHobbyChange(e, index)}
                    />
                    {item.text}
                  </label>
                );
              })}
            </div>

            <select
              multiple
              value={fruit}
              onChange={(e) => this.handleFruitChange(e)}
            >
              <option value="apple">苹果</option>
              <option value="orange">橘子</option>
              <option value="banana">香蕉</option>
            </select>
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default App;
