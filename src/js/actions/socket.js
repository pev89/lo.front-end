import { loadData } from './data'

export const RELOAD = 'RELOAD'
export const BUTTON_PUSHED = 'BUTTON_PUSHED'

/*
/////////////
SOCKET DATA
/////////////
*/

export function buttonPushed(button) {
  return {
    type: BUTTON_PUSHED,
    button,
  }
}

export function reload() {
  return (dispatch) => {
    dispatch(loadData())
  }
}