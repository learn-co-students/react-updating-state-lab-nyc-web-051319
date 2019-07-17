import React from 'react'

export default class DigitalClicker extends React.Component{

state = {
    timesClicked: 0
}

handleChange = () => {
    this.setState({
        timesClicked: ++this.state.timesClicked
    })
}
render (){
    return(
        <button onClick={this.handleChange} >{this.state.timesClicked}</button>
    )
}
}