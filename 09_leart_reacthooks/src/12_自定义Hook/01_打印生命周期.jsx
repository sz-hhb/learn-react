import React, { memo, useEffect, useState } from "react";

function useLogLife(cName) {
  useEffect(() => {
    console.log(cName + "组件被创建");

    return () => {
      console.log(cName + "组件被销毁");
    };
  }, [cName]);
}

const Home = memo(() => {
  useLogLife("home");
  return <h2>Home Page</h2>;
});

const About = memo(() => {
  useLogLife("about");
  return <h2>About Page</h2>;
});

const App = memo(() => {
  useLogLife("app");

  const [isShow, setIsShow] = useState(true);

  return (
    <div>
      <h2>App Page</h2>
      <button onClick={(e) => setIsShow(!isShow)}>切换</button>
      {isShow && <Home />}
      {isShow && <About />}
    </div>
  );
});

export default App;
