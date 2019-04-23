import React, { Component } from 'react';
import './components/Todos';
import Todos from "./components/Todos";

class App extends Component {
    state = {
        todos : [
            {
                id: 1,
                title: "Javascript",
                completed: false
            },
            {
                id: 2,
                title: "Gym",
                completed: true
            },
            {
                id: 3,
                title: "Iron clothes",
                completed: false
            },
        ]
    }
  render() {
        console.log(this.state.todos);
    return (
      <div className="App">
          <h1>
              ING
          </h1>
          <h1>
              <Todos todos={this.state.todos}/>
          </h1>
      </div>
    );
  }
}

export default App;
