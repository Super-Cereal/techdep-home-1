import React from "react";

import {
  getItems,
  getItemWithDescription,
  type Item,
  type ItemWithDescription,
} from "./lib/getItems";
import "./style.css";

interface State {
  count: number;
  items: Item[] | null;
  selectedItem: Item | null;
  itemWithDescription: ItemWithDescription | null;
}

export class App extends React.Component<object, State> {
  state: State = {
    count: 0,
    items: null,
    selectedItem: null,
    itemWithDescription: null,
  };

  componentDidMount() {
    console.log("component did mount");

    const response = getItems();
    response.then((items) => this.setState({ items }));
  }

  componentDidUpdate(_: object, prevState: State) {
    console.log("component did update");

    const selectedItem = this.state.selectedItem;

    if (selectedItem && prevState.selectedItem !== selectedItem) {
      console.log("request");
      const response = getItemWithDescription(selectedItem.id);
      response.then((item) => this.setState({ itemWithDescription: item }));
    }
  }

  render() {
    console.log("component render");

    const { count, items, itemWithDescription } = this.state;

    return (
      <div className="app">
        <button onClick={() => this.setState({ count: count + 1 })}>
          Счетчик {count}
        </button>

        {items?.map((item) => (
          <button onClick={() => this.setState({ selectedItem: item })}>
            {item.name}
          </button>
        ))}

        {itemWithDescription && (
          <div>
            <div>{itemWithDescription.name}</div>
            <div>{itemWithDescription.description}</div>
          </div>
        )}
      </div>
    );
  }
}
