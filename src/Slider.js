import React, { Component } from 'react';
import formatTime from './formatTime';
import './Slider.css';

class Slider extends Component {

  constructor(props) {
    super();

    this.state = {
      value: 0
    }
  }

  sliderInput() {
    this.setState({
      value: parseInt(this.slider.value, 10)
    }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state.value);
      }
    });
  }

  render() {
    const stepValue = this.props.stepValue || 1;

    // const value = this.state.value;
    const displayValue = formatTime(this.state.value, true);
    return (
      <section>
        <label>{this.props.label}:
          <span className="counter"> {displayValue}</span>
        </label>
        <input type="range"
               onInput={this.sliderInput.bind(this)}
               min={this.props.minValue}
               max={this.props.maxValue}
               ref={(slider) => this.slider = slider}
               step={stepValue}
               value={this.state.value} />
      </section>
    );
  }
}

export default Slider;
