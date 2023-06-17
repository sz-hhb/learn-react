import React, { PureComponent } from "react";
import themeContext from "./context/theme-context";
import Product from "./pages/Product";

export class App extends PureComponent {
  render() {
    return (
      <div>
        <themeContext.Provider value={{ color: "red", size: 30 }}>
          <Product />
        </themeContext.Provider>
      </div>
    );
  }
}

export default App;
