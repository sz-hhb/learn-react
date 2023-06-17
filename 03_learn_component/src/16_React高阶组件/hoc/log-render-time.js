import { PureComponent } from "react";

function logRenderTime(OriginComponent) {
  return class extends PureComponent {
    UNSAFE_componentWillMount() {
      this.beginTime = new Date().getTime();
    }

    componentDidMount() {
      this.endTime = new Date().getTime();
      console.log(
        `当前${OriginComponent.name}页面花费了${
          this.endTime - this.beginTime
        }ms渲染完成`
      );
    }

    render() {
      return <OriginComponent {...this.props} />;
    }
  };
}

export default logRenderTime;
