import React from 'react';

class DigitalClicker extends React.Component{
  constructor(){
    super()

    this.state = {
      timesClicked: 0
    }
  }

  handleClick = (e) => {
    this.setState({
      timesClicked: (this.state.timesClicked + 1)
    })
  }

  render(){
    return(
      <div>
        <h1>Digital Clicker</h1>
          <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    )
  }

}

export default DigitalClicker
