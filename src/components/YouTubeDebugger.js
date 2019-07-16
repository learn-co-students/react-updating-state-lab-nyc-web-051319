import React from 'react'

class YouTubeDebugger extends React.Component {
    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    bitClick = (e) => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    resClick = (e) => {
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
                <button className='bitrate' onClick={this.bitClick}>Bitrate: {this.state.settings.bitrate}</button>
                <button className='resolution' onClick={this.resClick}>Resolution: {this.state.settings.video.resolution}</button>
            </div>
        )
    }
}

export default YouTubeDebugger
