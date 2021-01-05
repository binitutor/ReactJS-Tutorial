import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }
  
  render() {
    return (
      <div className="App">
        <h1>Number: { this.state.count }</h1>
        <button onClick = { () => this.setState({ count: this.state.count + 1 }) }>
          Click me!
        </button>
      </div>
     );
  }
}


export default App;
