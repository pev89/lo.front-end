import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import List from '../components/List'

class Categories extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      buttons: ['yellow', 'green', 'pink', 'blue'],
      links: [],
      current: undefined,
    }
    this.updateCurrent = this.updateCurrent.bind(this)
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    if (nextProps.timestamp !== this.props.timestamp) {
      this.route(nextProps.button)
    }

    if (nextProps.params.category_id && this.state.current === undefined && nextProps.questionsData.list.length > 0) {
      this.setState({ current: 0 })
    }
  }
  route(button) {
    const { params, questionsData } = this.props

    if (!params.category_id) {
      const colorIndex = this.state.buttons.indexOf(button)
      const link = this.state.links[colorIndex]
      if (link.getAttribute('data-category') !== null) {
        hashHistory.push(`/categories/${link.getAttribute('data-category')}`)
      }
    } else {
      if (button === 'yellow') {
        hashHistory.push('/')
      } else if (button === 'green') {
        // select question
        hashHistory.push(`/questions/${questionsData.by_category[params.category_id][this.state.current].id}`)
      } else if (button === 'pink') {
        // go right
        this.list.slider.slickNext()
      } else {
        // go left
        this.list.slider.slickPrev()
      }
    }
  }
  updateCurrent(index) {
    this.setState({ current: index })
  }
  render() {
    const { questionsData, isFetching, params } = this.props

    return <div>
      {!isFetching && <div>
        {params.category_id
        ? <div className="home-header bg-dark-grey txt-grey">
            <div className="logo-icon small fixed"></div>
            <div className="sixteen-nine">
              <div className="content no-bg">
                <div className="safe-area">
                  <div className="header txt-white">
                    <h1>{params.category_id}<span className="txt-yellow">.</span></h1>
                    <nav>
                      <button className="rounded yellow"><span className="tooltip">home</span></button>
                    </nav>
                  </div>
                  <div className="center">
                    <List ref={c => this.list = c} updateCurrent={this.updateCurrent} questions={questionsData.by_category[params.category_id]} />
                  </div>
                  <div className="footer">
                    <nav>
                      <button className="rounded pink"><span className="tooltip">prev</span></button>
                      <button className="rounded green"><span className="tooltip">choose</span></button>
                      <button className="rounded red"><span className="tooltip">next</span></button>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        : <div className="home-header bg-dark-grey txt-grey category-page">
            <div className="logo-icon small fixed"></div>
            <div className="sixteen-nine hex">
              <div className="content no-bg">
                <div className="safe-area">
                  <div className="header">
                    <h1>Choose a <span className="txt-white">path</span><span className="txt-yellow">.</span></h1>
                    <p className="txt-yellow mt-20 ">Push the button related to the category</p>
                  </div>
                  <div className="center">
                      <div className="content">
                        <div className="icon-ball top-left"></div>
                        <div className="icon-ball small bottom-right"></div>
                        <div className="grid-box">
                          {
                            Object.keys(questionsData.by_category).map((key, index) =>
                              <div className="col-half box" data-category={key} key={key} ref={ref => this.state.links[index] = ref} onClick={() => hashHistory.push(`categories/${key}`)}>
                                  <div className="content" data-button={this.state.buttons[index]}>
                                    <div>
                                      <h3><span className="txt-white">{ key }</span><span className="txt-yellow">.</span></h3>
                                      <p>This is a description we can add to every category. this is a description we can add to every category</p>
                                    </div>
                                  </div>
                              </div>
                            )
                          }
                        </div>
                      </div>
                    
                  </div>
                </div>
              </div>
            </div>
        </div>
        }
      </div>
    }
    </div>
  }
}

function mapStateToProps(state) {
  const { data, socket } = state

  const {
    isFetching,
    questions: questionsData,
  } = data || {
    isFetching: true,
    questions: {},
  }

  const {
    button,
    timestamp,
  } = socket || {
    button: null,
    timestamp: 0,
  }

  return {
    timestamp,
    isFetching,
    button,
    questionsData,
  }
}

export default connect(mapStateToProps)(Categories)
