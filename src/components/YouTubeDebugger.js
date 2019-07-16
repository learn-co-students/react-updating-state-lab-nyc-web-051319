import React, { Component } from 'react'
// Code YouTubeDebugger Component Here

export default class YouTubeDebugger extends Component {
  constructor() {
    super()
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

  incrementBitrate = () => {
    this.setState({
      settings: {
       ...this.state.settings,
       bitrate: 12
     }
    })
  }

  incrementRes = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.incrementBitrate}>{this.state.settings.bitrate}</button>
        <button className='resolution' onClick={this.incrementRes}>{this.state.settings.video.resolution}</button>
      </div>
    )
  }
}
