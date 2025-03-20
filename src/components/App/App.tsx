import { Header } from "../Header/Header";
// import { Table } from "../Table/Table";

import { getList } from "../../lib/data";

import "./App.css";

export const App = () => {
  const list = getList();

  return (
    <div className="App">
      App
      <Header />
      {/* <Table list={list} /> */}
    </div>
  );
};
