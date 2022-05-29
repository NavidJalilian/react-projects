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
  fetch('https://jsonplaceholder.typicode.com/users')
  .then
}
  render() {
    return <div className="App"></div>;
  }
}


export default App;
