import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: this.props.default
    };
  }
  handleClick() {
    this.setState({ label: this.props.pending });
    this.props.onClick().then(() => {
      this.setState({ label: this.props.default });
    });
  }
  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>
        {this.state.label}
      </button>
    );
  }
}

export default App;
