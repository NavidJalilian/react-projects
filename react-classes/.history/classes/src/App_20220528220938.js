import "./App.css";
import {useState,useEffect}from 'react'
function App() {
  const [monsters, setMonsters] = useState([]);
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  
  return <div className="App flex">
    {monsters.map(monster => <div className="monster" key={monster.id}/>)}
  </div>;
}
export default App;
