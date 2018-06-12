/* eslint-disable*/

import React, { Component } from 'react';
// import { Button, Input } from 'semantic-ui-react';
import './App.css';
import axios from 'axios';

//components
import InputBar from './Input';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Bob Burgers',
      todos: []
    };
  }
  
  handleOnInput = (event) => {
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = () => {
    var list = [...this.state.todos.slice(), this.state.value]
    this.setState({
      value: '',
      todos: list
    });
  }

  handleRemove = (index) => {
    var list = this.state.todos.slice();
    list.splice(index, 1);
    this.setState({
      todos: list
    });
  }
  
  render() {
    return (
      <div className="App">
        <header style={ styles.header }>
          <h1 style={ styles.title }>Create a todo list</h1>
        </header>
        <InputBar 
          value={ this.state.value } 
          style={ styles } input={ this.handleOnInput } 
          submit={this.handleSubmit}/>
        <div>
          <TodoList 
            style={ styles } 
            handleRemove={ this.handleRemove } 
            todos={ this.state.todos }/>
        </div>
      </div>
    );
  }
}

const styles = {
  header: {
    backgroundColor: '#59ABE3',
    height: '150px',
    padding: '20px',
    color: 'white',
  },
  title: {
    fontSize: '2em',
  },
  input: {
    margin: '20px auto 30px',
  },
  inputBar : {
    marginRight: '4px'
  },
  list:{
    listStyle: 'none',
    width: '75vh',
    margin: '0 auto'
  },
  todoContainer:{
    position: 'relative',
    border: '1px solid black',
    borderRadius: '3px',
    height: '40px',
    margin: '0 auto 8px',
  },
  todoName:{
    position: 'absolute',
    float: 'left',
    marginLeft: '5px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontWeight: '700',
    fontSize: '28px'
  },
  todoRemove:{
    float:'right',
    margin: '5px 5px',
    color: 'red',
  }
};

// this.apiUrl = 'https://57b1924b46b57d1100a3c3f8.mockapi.io/api/todos';
// this.apiUrl = 'https://5b1d914ba1c56c001458c64d.mockapi.io/api/list/items'

export default App;
