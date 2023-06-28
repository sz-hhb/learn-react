import React, { memo } from "react";
import { useUserToken } from "./hooks";

const Home = memo(() => {
  const [user, token] = useUserToken();

  return (
    <h2>
      Home Page: {user.name}-{user.age}-{token}
    </h2>
  );
});

const About = memo(() => {
  const [user, token] = useUserToken();

  return (
    <h2>
      About Page: {user.name}-{user.age}-{token}
    </h2>
  );
});

const App = memo(() => {
  return (
    <div>
      <h2>App Page</h2>
      <Home />
      <About />
    </div>
  );
});

export default App;
