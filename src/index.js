import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app.js';
import Form from './form.js'
import CDMount from './CDMountActivity.js';
import CDUpdate from './CDUpdateActivity.js';
import StockData from './StockData.js';

class UI extends React.Component {

  render() {
    return (
      <div>
        <StockData />
      </div>
    );
  }
}

const element = document.getElementById('root');
const root = createRoot(element);
root.render(<UI />);
