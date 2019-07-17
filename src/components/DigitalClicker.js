// Code DigitalClicker Component Here
import React from 'react'

export default class DigitalClicker extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    this.setState({
      timesClicked: ++this.state.timesClicked
    })
  }
  render(){
    return(
      <button className = "bitrate" onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }
}
