import React, { Component } from 'react';
import './App.css'
import './components/Todos';
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./AddTodo";
import uuid from 'uuid';

class App extends Component {
    state = {
        todos : [
            {
                id: uuid.v4(),
                title: "Javascript",
                completed: false
            },
            {
                id: uuid.v4(),
                title: "Gym",
                completed: true
            },
            {
                id: uuid.v4(),
                title: "Iron clothes",
                completed: false
            }
        ]
    }

    delete = (id) => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
    }

    markeComplete = (id) => {
        this.setState({todos: this.state.todos.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed;
                }
                return todo;
            }) });
    }

    addTodo  =  (title) => {
        const newTodo = {
            id : uuid.v4(),
            title,
            completed: false
        }
        this.setState({ todos: [...this.state.todos, newTodo] });
    }

  render() {
    return (
      <div className="App">
          <div className="container">
              <Header/>
              <AddTodo addTodo={ this.addTodo }/>
              <h1>
                  <Todos todos={ this.state.todos } markeComplete={ this.markeComplete } delete={ this.delete } />
              </h1>
          </div>
      </div>
    );
  }
}

export default App;
