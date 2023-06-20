import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { fetchHomeMultidataAction } from "../store/actionCreator";

export class Category extends PureComponent {
  componentDidMount() {
    this.props.fetchHomeMultidata();
  }

  render() {
    const { counter } = this.props;

    return (
      <div>
        <h2>Category Page: {counter}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  fetchHomeMultidata: () => dispatch(fetchHomeMultidataAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
