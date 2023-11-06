import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app.js';
import Form from './form.js'
import CDMount from './CDMountActivity.js';
import CDUpdate from './CDUpdateActivity.js';

class UI extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userId: 1
    }
  }

  updateUserId = (e) => {
    this.setState( (state, props) => {
      return { userId: e.target.value }
    } )
  }

  render() {
    return (
      <div>
        <input 
          type='number'
          value={this.state.userId}
          onChange={this.updateUserId}
          max={6}
          min={1}
        />
        <CDUpdate userId = {this.state.userId} />
      </div>
    );
  }
}

const element = document.getElementById('root');
const root = createRoot(element);
root.render(<UI />);
