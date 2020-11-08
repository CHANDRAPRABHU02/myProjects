import React, { Component } from "react";
import counters from "./counters";
import "./styleForInput.css";

class InputForm extends Component {
  state = {
    isToggle: true,
  };
  render() {
    return (
      <span>
        <button
          id={this.state.isToggle ? "" : "AddButton"}
          onClick={this.changeToggle}
          className="btn btn-primary m-2"
        >
          {this.functionForInput()}
        </button>
      </span>
    );
  }
  changeToggle = () => {
    if (this.state.isToggle) this.setState({ isToggle: !this.state.isToggle });
    // console.log(this.state.isToggle);
  };
  functionForInput = () => {
    if (this.state.isToggle) return "Add";
    else
      return (
        <form
          style={{
            boxSizing: "border-box",
            position: "relative",
            backgroundColor: "#5e268c",
          }}
          onSubmit={this.mySubmitHandler}
        >
          <button
            style={{
              margin: 0,
              border: 1,
              backgroundColor: "darkblue",
              borderStyle: "solid",
              padding: 0,
              borderColor: "black",
              position: "absolute",
              right: 0.5,
            }}
            onClick={this.excapeAdd}
          >
            <span id="closeButtonForInput" className="">
              X
            </span>
          </button>
          <p style={{ paddingTop: 20 }}>Enter the item: </p>
          <input name="itemName" type="text" onChange={this.myChangeHandler} />
          <button type="submit">SUBMIT</button>
        </form>
      );
  };

  mySubmitHandler = (event) => {
    if (!event.target[1].value) alert("Empty");
    this.props.appendItem(event.target[1].value);
    this.setState({ isToggle: true });
  };
  excapeAdd = () => {
    this.setState({ isToggle: true });
  };
}

export default InputForm;
