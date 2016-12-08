import React, { Component } from 'react';
// import './Timer.css';
import Slider from './Slider';

class Configure extends Component {

  constructor() {
    super();
    this.state = {
      countdown: 0,
      rest: 0,
      work: 0
    }
  }

  changeConfiguration() {
    if (this.props.onChange) {
      this.props.onChange(this.state);
    }
  }

  countdownChanged(newValue) {
    this.setState({
      ...this.state,
      countdown: newValue
    }, this.changeConfiguration.bind(this));
  }

  workChanged(newValue) {
    this.setState({
      ...this.state,
      work: newValue
    }, this.changeConfiguration.bind(this));
  }

  restChanged(newValue) {
    this.setState({
      ...this.state,
      rest: newValue
    }, this.changeConfiguration.bind(this));
  }

  render() {
    return (
      <section>
        <h1>Configure:</h1>
        <Slider onChange={this.countdownChanged.bind(this)} label="Countdown" minValue={0} maxValue={5}/>
        <Slider onChange={this.workChanged.bind(this)} label="Work" minValue={0} maxValue={120} stepValue={5}/>
        <Slider onChange={this.restChanged.bind(this)} label="Rest" minValue={0} maxValue={30} stepValue={5}/>
      </section>
    );
  }
}

export default Configure;
