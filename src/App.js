import React, { Component } from 'react';
import './stylesheets/style.css';
//const Footero = ({namedContent}) => {

const Appo= (props) => {
  return (
    <div className="App">

import logo from './logo.svg';
import './App.css';
import './style.css';
//const Footero = ({namedContent}) => {
const Footero= (props) => {
  return (
    <div>
      {props.namedContent}
    </div>
  )
}
const Appo= (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
>>>>>>> cd1f93e4b1b3513bed85cf0281a36d2166af299c
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div>
        {/*<Headero/>*/}
        <Appo/>
      </div>
    );
  }
}

export default App;
