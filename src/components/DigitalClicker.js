// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      timesClicked: 0
    };
  }

  handleClick = () => {
    console.log(this.state.timesClicked);
    this.setState({
      timesClicked: this.state.timesClicked += 1
    })
  }

  render(){
    return <button onClick={this.handleClick}>{this.state.timesClicked}</button>
  }
}
