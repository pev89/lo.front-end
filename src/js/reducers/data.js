import {
  DATA_SUCCESS,
  DATA_REQUEST,
} from '../actions/data'

/*
/////////////
LOAD DATA
/////////////
*/

function normalizeByKey(key, array) {
  const normalizedObj = {}
  array.map((_item, _index) => {
    const item = _item
    if (!normalizedObj[item[key]]) {
      normalizedObj[item[key]] = []
    }
    item['id'] = _index
    normalizedObj[item[key]].push(item)
  })
  return normalizedObj
}

function data(state = {
  questions: {
    list: [],
    by_category: {},
  },
}, action) {
  let newState
  switch (action.type) {
    case DATA_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case DATA_SUCCESS:
      newState = JSON.parse(JSON.stringify(state))
      newState = {
        isFetching: false,
        questions: {
          list: action.data.questions,
          by_category: normalizeByKey('category', action.data.questions),
        },
      }
      return newState
    default:
      return state
  }
}

export default data
