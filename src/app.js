import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 10,
    };
  }

  inc = () => {
    this.setState((state, props) => {
      return { value: state.value + props.diff };
    });
  };

  dec = () => {
    this.setState((state, props) => {
      return { value: state.value - props.diff };
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.value}</h1>
        <button onClick={this.inc}>+{this.props.diff}</button>
        <button onClick={this.dec}>-{this.props.diff}</button>
      </div>
    );
  }
}

export default App;
