import React, { memo, useMemo, useState } from "react";

const HelloWorld = memo(() => {
  console.log("子组件HelloWorld被渲染~");
  return (
    <div>
      <h2>Hello World</h2>
    </div>
  );
});

function calcNumTotal(num) {
  console.log("calcNumTotal的计算过程被调用~");
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i;
  }
  return total;
}

const App = memo(() => {
  const [count, setCount] = useState(0);

  // const result = calcNumTotal(50)

  // const result = useMemo(() => {
  //   return calcNumTotal(50);
  // }, []);

  const info = useMemo(() => ({ name: "why", age: 18 }), []);

  const result = useMemo(() => {
    return calcNumTotal(count * 2);
  }, [count]);

  // function fn() {}
  // const increment = useCallback(fn, []);
  // const increment = useMemo(()=> fn, [])

  return (
    <div>
      <h2>计算结果:{result} </h2>
      <h2>计数: {count}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
      <HelloWorld result={result} info={info} />
    </div>
  );
});

export default App;
