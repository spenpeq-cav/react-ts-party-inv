import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";

interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Bobby Jones",
      url: "https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
      age: 43,
      note: "He is cool.",
    },
  ]);

  return (
    <div className="App">
      <h1>People Invited to the Party</h1>
      <List people={people} />
    </div>
  );
}

export default App;
