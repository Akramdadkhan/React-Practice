import React, { Component } from "react";
import ClassCounterChild from "./ClassCounterChild";

export class ClassCounter extends Component {
  state = { counter: 0 };

  handleIncriment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  handleDecriment = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  render() {
    return (
      <div>
        <ClassCounterChild  countValue={this.state.counter} />
        <button onClick={this.handleIncriment}>Incriment</button>
        <button onClick={this.handleDecriment}>Decriment</button>
      </div>
    );
  }
}
