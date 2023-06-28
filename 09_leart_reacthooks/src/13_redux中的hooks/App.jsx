import React, { memo } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import {
  addNumberAction,
  subNumberAction,
  changeMessageAction,
} from "./store/modules/counter";

const Home = memo((props) => {
  const { message } = useSelector(
    (state) => ({
      message: state.counter.message,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  console.log("home render");

  const changeMessageHandle = () => {
    dispatch(changeMessageAction("hello react"));
  };

  return (
    <div>
      <h2>Home: {message}</h2>
      <button onClick={(e) => changeMessageHandle()}>修改message</button>
    </div>
  );
});

const App = memo((props) => {
  const { count } = useSelector(
    (state) => ({
      count: state.counter.count,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  console.log("app render");

  const addNumberHandle = (num, isAdd = true) => {
    if (isAdd) {
      dispatch(addNumberAction(num));
    } else {
      dispatch(subNumberAction(num));
    }
  };

  return (
    <div>
      <h2>当前计数: {count}</h2>
      <button onClick={(e) => addNumberHandle(1)}>+1</button>
      <button onClick={(e) => addNumberHandle(6)}>+6</button>
      <button onClick={(e) => addNumberHandle(6, false)}>-6</button>
      <Home />
    </div>
  );
});

export default App;
