import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";
import InputForm from "./components/input";

import Counter from "./components/counter";
import { render } from "@testing-library/react";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1, name: "Milk" },
      { id: 2, value: 0, name: "GoodDay" },
      { id: 3, value: 2, name: "Bread" },
      { id: 4, value: 0, name: "Fruits" },
      { id: 5, value: 0, name: "Vegetables" },
    ],
    newId: 6,
    items: ["apple", "banana", "grape"],
  };
  resetAll = () => {
    const counters = [...this.state.counters];
    counters.map((itr) => {
      itr.value = 0;
    });
    this.setState(counters);
    // console.log(counters);
  };

  appendItem = (itemName) => {
    // console.log(itemName);
    let counters = [
      ...this.state.counters,
      {
        id: this.state.newId++,
        value: 0,
        name: itemName,
      },
    ];
    this.setState({ counters });
    // console.log(counters);
  };

  increaseValue = (gnId) => {
    let counters = [...this.state.counters];
    counters.map((itr) => {
      if (itr.id === gnId) itr.value++;
    });
    this.setState(counters);
  };

  decreaseValue = (gnId) => {
    let counters = [...this.state.counters];
    counters.map((itr) => {
      if (itr.id === gnId && itr.value > 0) itr.value--;
    });
    this.setState(counters);
  };

  deleteItem = (deleteId) => {
    const newCounter = this.state.counters.filter((itr) => itr.id !== deleteId);
    this.setState({ counters: newCounter });
    // console.log();
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          positiveTotalCount={
            this.state.counters.filter((itr) => itr.value).length
          }
        />
        <main className="container">
          <InputForm appendItem={this.appendItem} />
          <Counters
            counters={this.state.counters}
            items={this.state.items}
            resetAll={this.resetAll}
            increaseValue={this.increaseValue}
            decreaseValue={this.decreaseValue}
            deleteItem={this.deleteItem}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
