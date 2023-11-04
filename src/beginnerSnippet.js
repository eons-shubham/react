import React from 'react'
import { createRoot } from 'react-dom'


class App extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <h2>this is the skeleton code</h2>
    )
  }
}


const element = document.getElementById('root');
const root = createRoot(element);
root.render(<App />)