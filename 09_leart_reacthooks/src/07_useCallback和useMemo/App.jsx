import React, { memo, useCallback, useRef, useState } from "react";

const HYHome = memo((props) => {
  const { increment } = props;

  console.log("HYHome被渲染");

  return (
    <div>
      <button onClick={increment}>increment+1</button>
    </div>
  );
});

const App = memo(() => {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState("hello");

  // 进一步的优化
  const countRef = useRef();
  countRef.current = count;

  const increment = useCallback(() => {
    console.log("increment");
    setCount(countRef.current + 1);
    // setCount(count + 1);
  }, []);

  // function increment() {
  //   setCount(count + 1);
  // }

  return (
    <div>
      <h2>计数: {count}</h2>
      <button onClick={increment}>+1</button>
      <HYHome increment={increment} />

      <h2>message: {msg}</h2>
      <button onClick={(e) => setMsg(Math.random())}>修改message</button>
    </div>
  );
});

export default App;
