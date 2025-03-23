import { useEffect, useState } from "react";

import { getItems, type Item } from "./lib/getItems";
import "./style.css";

export const App = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState<Item[] | null>(null);

  console.log("component render");

  useEffect(() => {
    console.log("effect getItems");

    const response = getItems();
    response.then((items) => {
      setItems(items);
    });
  }, []);

  return (
    <div className="app">
      <span>app </span>
      <button onClick={() => setCount(count + 1)}>Счетчик {count}</button>

      {items?.map((item) => (
        <button key={item.id}>{item.name}</button>
      ))}
    </div>
  );
};
