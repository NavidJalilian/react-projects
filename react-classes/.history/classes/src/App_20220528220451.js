import "./App.css";

FUNC

    return (
      <div className="App flex">
        <input
          type="text"
          onChange={(e) => {
            this.setState(() => {
              return {searchInput: e.target.value}}
            });
          }}
        />
        {filterdMonsters.map((monster) => (
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
