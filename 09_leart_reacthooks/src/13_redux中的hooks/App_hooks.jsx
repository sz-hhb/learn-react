import React, { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNumberAction, subNumberAction } from "./store/modules/counter";

const App = memo((props) => {
  const { count } = useSelector((state) => ({
    count: state.counter.count,
  }));

  const dispatch = useDispatch();

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
    </div>
  );
});

export default App;
