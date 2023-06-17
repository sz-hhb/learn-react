import { PureComponent } from "react";

function enhancedUserInfo(OriginComponent) {
  class newComponent extends PureComponent {
    constructor() {
      super();

      this.state = {
        userInfo: {
          name: "why",
          age: 18,
        },
      };
    }

    render() {
      return <OriginComponent {...this.props} {...this.state.userInfo} />;
    }
  }

  return newComponent;
}

export default enhancedUserInfo;
