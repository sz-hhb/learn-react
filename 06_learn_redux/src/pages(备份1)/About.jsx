import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addNumberAction, subNumberAction } from "../store/actionCreator";

export class About extends PureComponent {
  calcNumber(num, isAdd) {
    if (isAdd) {
      this.props.addNumber(num);
    } else {
      this.props.subNumber(num);
    }
  }

  render() {
    const { counter, banners, recommends } = this.props;

    return (
      <div>
        <h2>About Page: {counter}</h2>
        <button onClick={(e) => this.calcNumber(6, true)}>+6</button>
        <button onClick={(e) => this.calcNumber(88, true)}>+88</button>
        <button onClick={(e) => this.calcNumber(6, false)}>-6</button>
        <button onClick={(e) => this.calcNumber(88, false)}>-88</button>
        <div className="banners">
          <h2>轮播图数据:</h2>
          <ul>
            {banners.map((item, index) => {
              return <li key={index}>{item.title}</li>;
            })}
          </ul>
        </div>
        <div className="recommends">
          <h2>推荐数据:</h2>
          <ul>
            {recommends.map((item, index) => {
              return <li key={index}>{item.title}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

// connect()返回值是一个高阶组件
const mapStateToProps = (state) => ({
  counter: state.counter,
  banners: state.banners,
  recommends: state.recommends,
});

const mapDispatchToProps = (dispatch) => ({
  addNumber: (num) => dispatch(addNumberAction(num)),
  subNumber: (num) => dispatch(subNumberAction(num)),
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
