import {
  BUTTON_PUSHED,
} from '../actions/socket'

/*
/////////////
SOCKET DATA
/////////////
*/

function socket(state = {
  button: null,
}, action) {
  switch (action.type) {
    case BUTTON_PUSHED:
      return {
        ...state,
        timestamp: +new Date(),
        button: action.button,
      }
    default:
      return state
  }
}

export default socket
