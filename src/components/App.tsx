import React from 'react';
import logo from './logo.svg';
import './App.css';

export const App = () => {

  const characters = [
    {name: "Pikachu", health: 100, fraction: "Electric", weapon: "Thunder Shock", damagePerHit: 40 },
    {name: "Charizard", health: 120, fraction: "Fire", weapon: "Fire Spin", damagePerHit: 60 },
    {name: "Zapdos", health: 150, fraction: "Electric", weapon: "Thunder Shock", damagePerHit: 70 },
  ]
  const header =  (
  <div className="App">
  <h1 className="jsx-style">  Hello, Sword Art Gamers</h1>
  <h3>Welcome</h3>
</div>
  );

const swordArtHeader = React.createElement(
  'h1',
  {className: 'sword-art-header'},
  'Hello, Sword Art Gamers'
);


  return (
    <div className="App">
    <ul>
      {characters.map(character => (
        <li key={character.name}>
          <h3>{character.name}</h3>
          <p>{character.health}</p>
          <p>{character.fraction}</p>
          <p>{character.weapon}</p>
        </li>
      ))}
    </ul>
    </div>
  )
}

export default App;
