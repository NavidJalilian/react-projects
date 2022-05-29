import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const filterdMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchValue.toLowerCase());
  });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => setMonsters(data));
  console.log("before return in the app");

  return (
    <div className="App flex">
      {console.log("in the return")}
      <input
        type="text"
        placeholder="Search"
        style={{ margin: "3rem" }}
        onChange={(e) => {
          setSearchValue(e.target.value);
          console.log('in')
        }}
        value={searchValue}
      />
      {filterdMonsters.map((monster) => (
        <div className="" key={monster.id}>
          <h4>{monster.name}</h4>
          <p>{monster.email}</p>
        </div>
      ))}
    </div>
  );
}
export default App;
