import "./style.css";
import Dog from "./Dog.js";
import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "random"
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
        <select onChange={this.update}>
          <option value="random">Random</option>
          <option value="beagle">Beagle</option>
          <option value="boxer">Boxer</option>
          <option value="dalmatian">Dalmatian</option>
          <option value="husky">Husky</option>
        </select>

        <Dog id={this.state.id} />
        
      </div>
    );
  }
}
