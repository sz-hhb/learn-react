import React, { memo } from "react";
import { useLocalStorage } from "./hooks";

const App = memo(() => {
  const [token, setToken] = useLocalStorage("token");

  function setTokenHandle() {
    setToken("james");
  }

  const [avatarUrl, setAvatarUrl] = useLocalStorage("avatarUrl");

  function setAvatarUrlHandle() {
    setAvatarUrl("http://www.jkl.com/jkl.png");
  }
 
  return (
    <div>
      <h2>App Page token: {token}</h2>
      <button onClick={setTokenHandle}>设置token</button>
      <h2>App Page avatar: {avatarUrl}</h2>
      <button onClick={setAvatarUrlHandle}>设置avatarUrl</button>
    </div>
  );
});

export default App;
