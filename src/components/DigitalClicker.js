// Code DigitalClicker Component Here
import React, { Component } from 'react';

class DigitalClicker extends Component {
    state = {
        timesClicked: 0
    }

    incrementTime = () => {
        this.setState({
            timesClicked: this.state.timesClicked + 1
        })
    }
    render() {
        return (
            <button onClick={this.incrementTime}>{this.state.timesClicked}</button>
        );
    }
}

export default DigitalClicker;
