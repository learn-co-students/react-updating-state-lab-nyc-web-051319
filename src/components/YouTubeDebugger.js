import React from 'react';

class YouTubeDebugger extends React.Component{
  constructor(){
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }

  }

  handleClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
    }})

  }

  handleResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }



  render(){
    return(
      <div>
        <h1>Debugger</h1>
          <button onClick={this.handleClick} className="bitrate">Bitrate: {this.state.settings.bitrate}</button>
          <button onClick={this.handleResolution} className="resolution">Resolution: {this.state.settings.video.resolution}</button>
      </div>
    )
  }

}

export default YouTubeDebugger
