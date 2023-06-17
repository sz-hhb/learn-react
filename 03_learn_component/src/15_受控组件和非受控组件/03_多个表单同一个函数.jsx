import React, { PureComponent } from "react";

export class App extends PureComponent {
  constructor() {
    super();

    this.state = { username: "", password: "" };
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

  handleSubmitClick(event) {
    event.preventDefault();
    console.log(this.state.username, this.state.password);
  }

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <form onSubmit={(e) => this.handleSubmitClick(e)}>
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
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default App;
