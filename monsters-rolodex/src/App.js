import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Muro'
        },
        {
          name: 'Salako'
        },
        {
          name: 'Maho'
        }
      ]
    };
  }

  render() {
    return(
      <div className="App">
        {
          this.state.monsters.map(monsters => <h1> { monsters.name } </h1>)
        }
      </div>
    )
  }
}

export default App;
