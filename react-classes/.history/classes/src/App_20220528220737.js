import "./App.css";
import {useState,useEffect}from 'react'
function App() {
  const [monsters, setMonsters] = useState([]);
  return <div className="App flex">
    {monsters}
  </div>;
}
export default App;
