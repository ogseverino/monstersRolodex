import React, { Component } from "react";
import "./App.css";
import { SearchBox } from "./components/searchbox/searchbox.component";
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      search: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(monsters => this.setState({ monsters }));
  }

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { monsters, search } = this.state;
    const filteredList = monsters.filter(monster =>
      monster.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monster"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredList} />
      </div>
    );
  }
}

export default App;
