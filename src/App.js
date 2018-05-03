import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';

// stateless component that makes use of 
// dereferencing the props object, into two variables.
const FooterComponent = ({namedContent, additionalContent}) => {
  return (
    <div>
      {namedContent}
    </div>
  )
}
// stateless component that makes use of the props object.
// also {} allow you to dereference html to javascript 
// inside a return of html to a render function or inside a render function.
const LandingPage= (props) => {
  console.log(props)
  return (
    <div className="App">
      <header className="App-header">
        <img src={props.logo} className="App-logo" alt="logo" />
        {/*logo is not passed in this circumstance so we are leaving it out.*/}
        <h1 className="App-title">{props.propExample}</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div>
        {/*<HeaderComponent/>*/}
        <LandingPage logo={logo}  propExample='prop example' />
        <FooterComponent namedContent='test passed' additionalContent='additional information'/>
      </div>
    );
  }
}

export default App;
