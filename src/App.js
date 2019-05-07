import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'
import './components/Todos';
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./AddTodo";
import About from "./components/pages/About"
//import uuid from 'uuid';
import axios from 'axios'

class App extends Component {
    state = {
        todos : [
        ]
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos/?limit=10')
            .then(res => this.setState({ todos: res.data }))

    }

    delete = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => this.setState( { todos: [...this.state.todos.filter(todo => todo.id !== id)]} ));
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
        axios.post('https://jsonplaceholder.typicode.com/todos/',{
                title,
                completed: false
            })
            .then(res => this.setState({ todos: [...this.state.todos, res.data] }))
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
