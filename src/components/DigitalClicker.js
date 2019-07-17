import React, { Component } from 'react'

export default class DigitalClicker extends Component {
    constructor(){
        super()
    this.state = {
        timesClicked: 0
    }
}
clickButton = () => {
    this.setState(prevState => ({
        timesClicked: prevState.timesClicked+1
    }))
}
    render() {
        return (
            <div>
                <button onClick={this.clickButton}>{this.state.timesClicked}</button>
            </div>
        )
    }
}

