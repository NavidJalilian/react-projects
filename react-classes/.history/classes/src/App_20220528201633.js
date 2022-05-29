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
          return { monsters: users };
        })
      );
  }
  render() {
    return (
      <div className="App flex">
        <input type="text" onChange={(e)=>
          this.setState({}
        } />
        {this.state.monsters.map((monster) => (
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
