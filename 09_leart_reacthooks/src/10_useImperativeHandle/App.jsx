import React, { forwardRef, memo, useImperativeHandle, useRef } from "react";

const HelloWorld = memo(
  forwardRef((props, ref) => {
    const inputRef = useRef();

    // 子组件对父组件传入的ref进行处理
    useImperativeHandle(ref, () => {
      return {
        focus() {
          inputRef.current.focus();
        },
      };
    });

    return <input type="text" ref={inputRef} />;
  })
);

const App = memo(() => {
  const titleRef = useRef();
  const inputRef = useRef();

  function handleDOM() {
    // console.log(inputRef.current);
    inputRef.current.focus();
  }

  return (
    <div>
      <h2 ref={titleRef}>哈哈哈</h2>
      <HelloWorld ref={inputRef} />
      <button onClick={handleDOM}>DOM操作</button>
    </div>
  );
});

export default App;
