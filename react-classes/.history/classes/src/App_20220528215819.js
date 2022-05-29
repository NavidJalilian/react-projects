import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users, searchInput: "" };
        })
      );
  }
  render() {
    const filterdMonsters
    return (
      <div className="App flex">
        <input
          type="text"
          onChange={(e) => {
            const searchInput = e.target.value;
            return {searchInput}
          }}
        />
        {this.state.filterdMonsters.map((monster) => (
          <div className="">
            <h1>{monster.name}</h1>
            <p>{monster.email}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
