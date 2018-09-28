import React, { Component } from 'react';
import './App.css';
import SingleTodo from './components/SingleTodo'

// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       count: 0
//     };
//   }

//   increment = () => {
//     this.setState({count: this.state.count + 1});
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.increment}>Increment</button>
//         {this.state.count}
//       </div>
//     )
//   }

// }
class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      currentTodo: ''
    };
  }

  addTodo = () => {
    let todosCopy = this.state.todos.slice();
    todosCopy.push(this.state.currentTodo);
    this.setState({ todos: todosCopy, currentTodo: '' });
  }
  onInputChange = (e) => {
    this.setState({currentTodo: e.target.value});
  }
  deleteTodo = (i) => {
    let todosCopy = this.state.todos.slice();
    todosCopy.splice(i, 1);
    this.setState({todos: todosCopy});
  }

  render() {
    let todoList = this.state.todos.map((e, i) => {
      return (
        // <li key={i}>{e}<button>X</button></li>
        <SingleTodo key={i} todo={e} delete={() => this.deleteTodo(i)}/>
      );
    })
    return(
      <div>
        <input 
          placeholder="Enter Todo" 
          type="text" 
          value={ this.state.currentTodo }
          onChange={ this.onInputChange}
        />
        <button onClick={this.addTodo}>Add</button>
        { this.state.todos.length === 0 ? 
          "No todos yet" : 
          <ul>
            {todoList}
          </ul>
        }
      </div>
    )
  }
}

export default App;
