import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { hashHistory } from 'react-router'

class Welcome extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.timestamp !== this.props.timestamp) {
      this.route(nextProps.button)
    }
  }
  route(button) {
    if (button === 'yellow') {
      hashHistory.push('/categories')
    }
  }
  render() {
    return <div className="sixteen-nine bg-dark-grey txt-grey welcome-page">
      <div className="content">
        <div className="safe-area">
          <div className="center">
              <div className="content">
                <div className="logo-icon"></div>
                <h1>We <span className="txt-white">start</span> and <span className="txt-white">grow</span> businesses that will define the future<span className="txt-yellow">.</span></h1>
                <p className="txt-yellow mt-100 mb-100">Welcome screen, push the yellow button!</p>
                {/*<Link to={'/categories'} className="button cta btn" data-category="Press to Start">
                Press to start
                  <div className="icon-ball"></div>
                  <div className="icon-ball small"></div>
                </Link>*/}
                 <button className="rounded yellow animated"></button>
              </div>
          </div>
        </div>
      </div>
    </div>
  }
}

function mapStateToProps(state) {
  const { socket } = state

  const {
    button,
    timestamp,
  } = socket || {
    button: null,
    timestamp: 0,
  }

  return {
    timestamp,
    button,
  }
}

export default connect(mapStateToProps)(Welcome)
