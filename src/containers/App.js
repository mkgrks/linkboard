import React, { Component } from 'react';
import { Input, Boards, NavBar, Modal } from '../components'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <div className='container'>
          <Input />
          <Boards />
        </div>
        <Modal />
      </div>
    );
  }
}

export default App;
