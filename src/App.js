import React, { Component } from 'react';
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
        // resolve();
        reject();
      }, 2000);
    });
  }
  toggleButton() {
    this.setState({ showButton: !this.state.showButton });
  }
  render() {
    let asyncButton;

    if (this.state.showButton) {
      asyncButton = <AsyncButton
        default="Save"
        pending="Saving ..."
        success="Saved"
        error="Try Again"
        onClick={this.save} />;
    } else {
      asyncButton = null;
    }

    return (
      <div className="App">
        {asyncButton}
        <button onClick={this.toggleButton.bind(this)}>Toggle Async Button</button>
      </div>
    );
  }
}

export default App;
