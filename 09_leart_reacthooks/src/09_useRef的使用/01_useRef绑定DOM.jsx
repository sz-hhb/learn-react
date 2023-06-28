import React, { memo, useRef } from "react";

const App = memo(() => {
  const titleRef = useRef();
  const inputRef = useRef();

  function showTitleDom() {
    console.log(titleRef.current);
    inputRef.current.focus();
  }

  return (
    <div>
      <div ref={titleRef} className="title">
        Hello World
      </div>
      <input ref={inputRef} type="text" />
      <button onClick={showTitleDom}>查看title的dom</button>
    </div>
  );
});

export default App;
