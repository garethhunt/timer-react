import React, { Component } from 'react';
import logo from './logo.svg';
import './Timer.css';
import Configure from './Configure';
import RunTimer from './RunTimer';

class Timer extends Component {

  constructor() {
    super();
    this.state = {
      countdown: 0,
      rest: 0,
      running: false,
      work: 0
    }
  }

  changeConfiguration(newConfiguration) {
    this.setState({
      ...this.state,
      ...newConfiguration
    });
  }

  toggleRunning() {
    this.setState({
      ...this.state,
      running: !this.state.running
    });
  }

  render() {
    const displayButton = this.state.running ?
      <button className="controlButton"
              onClick={this.toggleRunning.bind(this)}>Stop</button> :
      <button className="controlButton"
              onClick={this.toggleRunning.bind(this)}>Start</button>;

    const displayBody = this.state.running ?
      <RunTimer config={this.state} /> :
      <Configure onChange={this.changeConfiguration.bind(this)}/>;

    return (
      <div className="Timer">
        <section className="Timer-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            {displayButton}
          </div>
        </section>
        {displayBody}
      </div>
    );
  }
}

export default Timer;
