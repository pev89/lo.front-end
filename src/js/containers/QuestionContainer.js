import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import Question from '../components/Question'

class QuestionContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      next_1: undefined,
      next_2: undefined,
    }
    this.findLinkedQuestionId = this.findLinkedQuestionId.bind(this)
    this.setNexts = this.setNexts.bind(this)
  }
  componentWillMount() {
    if (this.props.questionsData.list.length > 0) {
      this.setNexts(this.props)
    }
  }
  componentWillReceiveProps(nextProps) {
    //  change of url
    if (!nextProps.params.question_id || nextProps.params.question_id === undefined) {
      hashHistory.push('/')
    } else if (nextProps.params.question_id !== this.props.params.question_id) {
      this.setNexts(nextProps)
    }

    //  button pushed
    if (nextProps.timestamp !== this.props.timestamp) {
      this.route(nextProps.button)
    }

    //  new data in
    if (this.props.questionsData.list.length === 0 && nextProps.questionsData.list.length > 0) {
      this.setNexts(nextProps)
    }
  }
  setNexts(props) {
    this.setState({
      next_1: this.findLinkedQuestionId(props.params.question_id, props.questionsData, 1),
      next_2: this.findLinkedQuestionId(props.params.question_id, props.questionsData, 2),
    })
  }
  route(button) {
    if (button === 'yellow') {
      hashHistory.push('/')
    } else if (button === 'green') {
      hashHistory.goBack()
    } else if (button === 'pink') {
      hashHistory.push(`/questions/${this.state.next_1}`)
    } else {
      hashHistory.push(`/questions/${this.state.next_2}`)
    }
  }
  findLinkedQuestionId(current, questions, position) {
    const currentCat = questions.list[current].category
    let linkedId

    questions.by_category[currentCat].map((element, index) => {
      if (element.id === parseInt(current, 10)) {
        if (index + position >= questions.by_category[currentCat].length) {
          linkedId = questions.by_category[currentCat][index + position - questions.by_category[currentCat].length].id
        } else {
          linkedId = questions.by_category[currentCat][index + position].id
        }
      }
    })

    return linkedId
  }
  render() {
    const { params, questionsData, ifFetchingData } = this.props

    return <div>
      { params.question_id && !ifFetchingData && questionsData.list.length > 0 && this.state.next_1 !== null && this.state.next_2 !== null &&
        <Question current={questionsData.list[params.question_id]} left={questionsData.list[this.state.next_1]} right={questionsData.list[this.state.next_2]} />
      }
    </div>
  }
}

function mapStateToProps(state) {
  const { data, socket } = state

  const {
    isFetching: ifFetchingData,
    questions: questionsData,
  } = data || {
    questions: {},
    isFetching: true,
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
    button,
    questionsData,
    ifFetchingData,
  }
}

export default connect(mapStateToProps)(QuestionContainer)
