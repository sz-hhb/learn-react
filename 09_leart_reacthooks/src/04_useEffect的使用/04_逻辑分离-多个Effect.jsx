import React, { memo, useEffect, useState } from "react";

const App = memo(() => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 1. 修改document的title
    console.log("修改title");

    return () => {
      console.log("取消监听");
    };
  });

  useEffect(() => {
    // 2. redux数据变化监听
    console.log("redux数据变化监听");

    return () => {
      console.log("取消监听");
    };
  });

  useEffect(() => {
    // 3. EventBus事件监听
    console.log("EventBus事件监听");

    return () => {
      console.log("取消监听");
    };
  });

  return (
    <div>
      <button onClick={(e) => setCount(count + 1)}>+1({count})</button>
    </div>
  );
});

export default App;
