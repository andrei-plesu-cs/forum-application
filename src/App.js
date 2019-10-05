import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Cathegorie from './components/Cathegory';
import Thread from './components/Thread';
import CreateThread from './components/CreateThread'
import Login from './components/Login';
import Profile from './components/Profile';
import SignUp from './components/SignUp';

class App extends Component {
  render() {

    const thread = 
      {
        name: 'How o win friends and influence people',
        creation: new Date(),
        author: 'andrei_plesu1998',
        id: 1
      }

    return (
      <div>
        {/* <Cathegorie cathName="Sports"/> */}
        {/* <Thread threadInfo={thread} /> */}
        {/* <Login /> */}
        <SignUp />
      </div>
    );
  }
}

export default App;
