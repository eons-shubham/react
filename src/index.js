import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app.js';

class UI extends React.Component {

  render() {
    return (
      <div>
        <App />
      </div>
    );
  }
}

const element = document.getElementById('root');
const root = createRoot(element);
root.render(<UI />);
