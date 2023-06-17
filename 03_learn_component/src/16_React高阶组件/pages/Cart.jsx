import React, { PureComponent } from "react";
import loginAuth from "../hoc/login-auth";

export class Cart extends PureComponent {
  render() {
    return <div>Cart Page</div>;
  }
}

export default loginAuth(Cart);
