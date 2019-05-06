import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'
import './components/Todos';
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./AddTodo";
import About from "./components/pages/About"
import uuid from 'uuid';

class App extends Component {
    state = {
        todos : [
            {
                id: uuid.v4(),
                title: "Reading React Book",
                completed: false
            },
            {
                id: uuid.v4(),
                title: "Gym",
                completed: true
            },
            {
                id: uuid.v4(),
                title: "Cooking",
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
        <Router>
          <div className="App">
              <div className="container">
                  <Header/>
                  <Route exact path="/" render={props => (
                      <React.Fragment>
                          <AddTodo addTodo={ this.addTodo }/>
                          <Todos todos={ this.state.todos } markeComplete={ this.markeComplete } delete={ this.delete } />
                      </React.Fragment>
                  )} />
                  <Route path="/about" component={About} />
              </div>
          </div>
        </Router>
    );
  }
}

export default App;
