import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const[filterdMonsters, setFilterdMonsters] = useState([]);
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => setMonsters(data));
set
  return (
    <div className="App flex">
      <input
        type="text"
        placeholder="Search"
        style={{ margin: "3rem" }}
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
      {filterdMonsters.map((monster) => (
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
