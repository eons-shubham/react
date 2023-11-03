import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app.js';

class UI extends React.Component {
  render() {
    return (
      <div>
        <App diff={1} msg={'hi from parent 1'} />
        <App diff={10} msg={'hi from parent 10'} />
      </div>
    );
  }
}

const element = document.getElementById('root');
const root = createRoot(element);
root.render(<UI />);
