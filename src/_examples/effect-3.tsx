import { useEffect, useState } from "react";

import "./style.css";

export const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);

    const func = () => {
      console.log("scroll");
    };

    window.addEventListener("scroll", func);

    return () => {
      window.removeEventListener("scroll", func);
    };
  }, [count]);

  return (
    <div className="app">
      <button onClick={() => setCount(count + 1)}>Счетчик {count}</button>

      <div style={{ height: "2000px" }} />
    </div>
  );
};
