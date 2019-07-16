// Code DigitalClicker Component Here

import React from 'react'

class DigitalClicker extends React.Component {

  state = {
    timesClicked: 0
  }

  updateTime = () => {
    this.setState(previousState => ({
      timesClicked: previousState.timesClicked + 1
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.updateTime}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

export default DigitalClicker
