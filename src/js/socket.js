import io from 'socket.io-client'
import { SOCKET_URL } from './config'

import * as actions from './actions/socket'

export default function (store) {
  const socket = io.connect(SOCKET_URL)

  socket.on('button_pushed', (button) => {
    store.dispatch(actions.buttonPushed(button.button))
  })

  socket.on('reload', () => {
    store.dispatch(actions.reload())
  })
}
