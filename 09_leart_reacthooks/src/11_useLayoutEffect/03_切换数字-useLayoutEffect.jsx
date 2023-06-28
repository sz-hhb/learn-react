import React, { memo, useLayoutEffect, useState } from "react";

const App = memo(() => {
  const [count, setCount] = useState(100);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
    if (count === 0) {
      setCount(Math.random() + 99);
    }
  }, [count]);

  console.log("App render");

  return (
    <div>
      <h2>count: {count}</h2>
      <button onClick={(e) => setCount(0)}>+1</button>
    </div>
  );
});

export default App;
