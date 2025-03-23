import { useState } from "react";

import "./style.css";

export const App = () => {
  console.log("app");
  return (
    <div className="app">
      app
      <Header />
      <Main />
      <Footer name="app" />
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
      <Footer name="header" />
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
      <Footer name="main" />
    </div>
  );
};

const Footer = ({ name }: { name: string }) => {
  console.log(`footer (${name})`);
  return <div className="footer">footer ({name})</div>;
};
