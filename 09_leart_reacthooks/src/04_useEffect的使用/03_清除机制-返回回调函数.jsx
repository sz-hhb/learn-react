import React, { memo, useEffect } from "react";

const App = memo(() => {
  useEffect(() => {
    console.log("监听");

    return () => {
      console.log("取消监听");
    };
  });

  return <div>App</div>;
});

export default App;
