import React, { Component } from 'react';
import { Input, Boards, NavBar, Modal, Footer, PageLoader } from '../components'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <PageLoader barHeight='3px' barWidth='100%' bgColor='#CECECE' barColor='#e03997'/>
        <NavBar />
        <div className='container'>
          <Input />
          <Boards />
          <Modal />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
