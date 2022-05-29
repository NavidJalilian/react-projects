import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [monsters, setMonsters] = useState([]);
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => setMonsters(data));
  return (
    <div className="App flex">
      <in
      {monsters.map((monster) => (
        <>
          <div className="">
            <h4>{monster.name}</h4>
            <p>{monster.email}</p>
          </div>
        </>
      ))}
    </div>
  );
}
export default App;
