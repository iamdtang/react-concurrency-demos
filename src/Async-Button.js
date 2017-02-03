import React from 'react';
import { task, timeout, ConcurrentComponent } from './task';

class AsyncButton extends ConcurrentComponent {
  constructor(props) {
    super(props);
    this.state = {
      label: this.props.default
    };
  }

  handleClick = task(function*() {
    try {
      this.setState({ label: this.props.pending });
      yield this.props.onClick();
      this.setState({ label: this.props.success });
      yield timeout(2000);
      this.setState({ label: this.props.default });
    } catch (e) {
      this.setState({ label: this.props.error });
    }
  })

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>
        {this.state.label}
      </button>
    );
  }
}

export default AsyncButton;
