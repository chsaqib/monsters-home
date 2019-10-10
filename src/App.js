import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: 1
        },
        {
          name: 'Dracul',
          id: 2
        },
        {
          name: 'zombie',
          id: 3
        }
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.monsters.map(monster => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}
export default App;
