import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app.js';
import Form from './form.js'
import CDMount from './CDMountActivity.js';

class UI extends React.Component {
  render() {
    return (
      <div>
        <CDMount />
      </div>
    );
  }
}

const element = document.getElementById('root');
const root = createRoot(element);
root.render(<UI />);
