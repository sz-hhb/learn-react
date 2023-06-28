import React, { memo, useEffect, useState } from "react";

const App = memo(() => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("hello world");

  useEffect(() => {
    console.log("修改title");

    return () => {};
  }, [count]);

  useEffect(() => {
    console.log("redux数据变化监听");

    return () => {};
  }, []);

  useEffect(() => {
    console.log("EventBus事件监听");

    return () => {};
  }, []);

  useEffect(() => {
    console.log("发送网络请求, 从服务器获取数据");

    return () => {};
  }, []);

  return (
    <div>
      <button onClick={(e) => setCount(count + 1)}>+1({count})</button>
      <button onClick={(e) => setMessage("hello react")}>
        修改message({message})
      </button>
    </div>
  );
});

export default App;
