import { render } from 'react-dom'
import { connect } from 'react-redux'
import React from 'react'

class App extends React.Component {
  launchIntoFullscreen() {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen()
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen()
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen()
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen()
    }
  }
  exitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen()
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
    }
  }
  render() {
    return <div>
      <div className="screen-option">
        <div onClick={this.launchIntoFullscreen}>Enter Fullscreen</div>
        <div onClick={this.exitFullscreen}>Exit Fullscreen</div>
      </div>
      {this.props.children}
    </div>
  }
}

function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps)(App)
