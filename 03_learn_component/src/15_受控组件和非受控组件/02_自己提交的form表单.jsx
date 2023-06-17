import React, { PureComponent } from "react";

export class App extends PureComponent {
  constructor() {
    super();

    this.state = { username: "" };
  }

  inputChange(event) {
    console.log("inputChange:", event.target.value);
    this.setState({ username: event.target.value });
  }

  handleSubmitClick(event) {
    event.preventDefault();
    console.log(this.state.username);
  }

  render() {
    const { username } = this.state;

    return (
      <div>
        <form onSubmit={(e) => this.handleSubmitClick(e)}>
          <label htmlFor="username">
            <input
              id="username"
              type="text"
              name="username"
              value={username}
              onChange={(e) => this.inputChange(e)}
            />
          </label>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default App;
