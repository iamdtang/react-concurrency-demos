import React, { Component } from 'react';
import AsyncButton from './AsyncButton';

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
        // reject();
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
        <p>Click on the Save button and see how it works. Click on it again but this time click on "Toggle Async Button" to remove the Save button from the page. Notice how you don't get the setState warning.</p>
        <p>Also notice the derived state being shown on the Save button.</p>
        {asyncButton}
        <button onClick={this.toggleButton.bind(this)}>Toggle Async Button</button>
      </div>
    );
  }
}

export default App;
