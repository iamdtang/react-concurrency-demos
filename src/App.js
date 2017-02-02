import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AsyncButton from './Async-Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: true
    };
  }
  save() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve();
      }, 2000);
    });
  }
  removeButton() {
    this.setState({ showButton: false });
  }
  render() {
    let button;

    if (this.state.showButton) {
      button = <AsyncButton default="Save" pending="Saving ..." onClick={this.save} />
    } else {
      button = null;
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {button}
        <button onClick={this.removeButton.bind(this)}>Remove Async Button</button>
      </div>
    );
  }
}

export default App;
