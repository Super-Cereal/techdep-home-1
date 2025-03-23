import { useState } from "react";

import "./style.css";

export const App = () => {
  console.log("app");
  return (
    <div className="app">
      app
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

const Header = () => {
  const [count, setCount] = useState(0);
  console.log("header");
  return (
    <div className="header">
      header {count}
      <button onClick={() => setCount(count + 1)}>↑↑↑</button>
    </div>
  );
};

const Main = () => {
  const [count, setCount] = useState(0);
  console.log("main");
  return (
    <div className="main">
      main {count}
      <button onClick={() => setCount(count + 1)}>↑↑↑</button>
    </div>
  );
};

const Footer = () => {
  console.log("footer");
  return <div className="footer">footer</div>;
};
