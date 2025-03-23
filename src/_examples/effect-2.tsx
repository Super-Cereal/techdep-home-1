import { useEffect, useState } from "react";

import {
  getItems,
  getItemWithDescription,
  type Item,
  type ItemWithDescription,
} from "./lib/getItems";
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

  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [itemWithDescription, setItemWithDescription] =
    useState<ItemWithDescription | null>(null);

  useEffect(() => {
    console.log("effect getItemWithDescriptions");

    if (selectedItem) {
      console.log("request");
      const response = getItemWithDescription(selectedItem.id);
      response.then((item) => {
        setItemWithDescription(item);
      });
    }

    return () => {
      console.log('effect getItemWithDescriptions clear');
      setItemWithDescription(null);
    };
  }, [selectedItem]);

  return (
    <div className="app">
      <button onClick={() => setCount(count + 1)}>Счетчик {count}</button>

      {items?.map((item) => (
        <button onClick={() => setSelectedItem(item)}>{item.name}</button>
      ))}

      {itemWithDescription && (
        <div>
          <div>{itemWithDescription.name}</div>
          <div>{itemWithDescription.description}</div>
        </div>
      )}
    </div>
  );
};
