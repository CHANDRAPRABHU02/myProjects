import React, { Component } from "react";

class ViewTotal extends Component {
  state = {};
  render() {
    return (
      <div style={{ position: "relative", top: 5 }}>
        <h1 style={{ width: "50%", paddingLeft: "13%" }}>
          <b>ABC super market</b>
        </h1>
        <h3 style={{ paddingLeft: "15%" }}>No:1 XYZ road , chennai.</h3>
        <h6 style={{ paddingLeft: "22%" }}>
          <b>contact no.</b> 1234567890.
        </h6>
        <ol>{this.listItems()}</ol>
      </div>
    );
  }
  listItems = () => {
    const ans = this.props.counters
      .filter((itr) => itr.value)
      .map((itr) => (
        <li>
          <span
            style={{
              display: "inline-block",
              width: 100,
            }}
          >
            {itr.name}
          </span>
          <span
            style={{
              textAlign: "right",
              display: "inline-block",
              width: 50,
            }}
          >
            {itr.rate}
          </span>
          <span
            style={{
              textAlign: "right",
              display: "inline-block",
              width: 100,
            }}
          >
            {itr.value}
          </span>
          <span
            style={{
              textAlign: "right",
              display: "inline-block",
              width: 100,
            }}
          >
            {itr.rate * itr.value}
          </span>
          <span
            style={{
              paddingLeft: 100,
              display: "inline-block",
              width: 100,
            }}
          >
            <b>
              {(
                ((100 - this.props.discountRate) * itr.rate * itr.value) /
                100
              ).toFixed(2)}
            </b>
          </span>
        </li>
      ));
    // console.log(this.props.counters);
    // return "hi";
    return ans;
  };
}

export default ViewTotal;
