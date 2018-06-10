/* eslint-disable*/

import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header style={ styles.header }>
          <h1 style={ styles.title }>Create a todo list</h1>
        </header>
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
};

// this.apiUrl = 'https://57b1924b46b57d1100a3c3f8.mockapi.io/api/todos';

export default App;
