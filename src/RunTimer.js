import React, { Component } from 'react';
import formatTime from './formatTime';
import './RunTimer.css';

class RunTimer extends Component {

  constructor(props) {
    super();

    this.state = {
      phase: 'countdown',
      ...props.config
    }
  }

  changePhase() {
    var newPhase;
    switch(this.state.phase) {
      case 'countdown':
      case 'rest':
        newPhase = 'work';
        break;
      default:
        newPhase = 'rest';
        break;
    }

    this.setState({
      ...this.props.config,
      phase: newPhase
    });
  }

  decrement(key) {
    this.setState({
      ...this.state,
      [`${key}`]: this.state[key] - 1
    });
  }

  run() {
    if (this.state[this.state.phase] >= 0) {
      this.timeoutHandle = window.setTimeout(this.decrement.bind(this), 1000, this.state.phase);
    } else {
      window.setTimeout(this.changePhase.bind(this), 0);
    }
  }

  componentWillUnmount() {
    if (this.timeoutHandle) {
      window.clearTimeout(this.timeoutHandle);
    }
  }

  render() {
    const displayCount = formatTime(this.state[this.state.phase], true);

    this.run();

    return (
      <section className="RunTimer">
        <h3>{this.state.phase}</h3>
        <h1>{displayCount}</h1>
      </section>
    );
  }
}

export default RunTimer;
