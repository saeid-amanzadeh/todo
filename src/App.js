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
            }
        ]
    }

    delete = (id) => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id != id)]});
    }



    markeComplete = (id) => {
        this.setState({todos: this.state.todos.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed;
                }
                return todo;
            }) });
    }

  render() {
    return (
      <div className="App">
          <h1>
              ING
          </h1>
          <h1>
              <Todos todos={ this.state.todos } markeComplete={ this.markeComplete } delete={ this.delete } />
          </h1>
      </div>
    );
  }
}

export default App;
