import React from "react";
import axios from "axios";
import Page from "./Page.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ""
    };
  }

  update = (e) => {
    this.setState((state, props) => {
      return { id: e.target.value };
    });
  };

  render() {
    return (
      <div>
        <h3>{this.state.id}</h3>
        <button value={1} onClick={this.update}>
          1
        </button>
        <button value={2} onClick={this.update}>
          2
        </button>
        <button value={3} onClick={this.update}>
          3
        </button>
        <button value={100} onClick={this.update}>
          100
        </button>

        <Page id={this.state.id} />
      </div>
    );
  }
}
