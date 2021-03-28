import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Muro',
          id: 'adc1'
        },
        {
          name: 'Salako',
          id: 'adc2'
        },
        {
          name: 'Maho',
          id: 'adc3'
        }
      ]
    };
  }

  render() {
    return(
      <div className="App">
        {
          this.state.monsters.map(monsters => 
            <h1 key={monsters.id}> { monsters.name } </h1>)
        }
      </div>
    )
  }
}

export default App;
