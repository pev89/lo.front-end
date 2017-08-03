import { fetchEndpoint } from '../lib/api'
import { raiseError } from './errors'
import { API_ROOT } from '../config'

export const DATA_REQUEST = 'DATA_REQUEST'
export const DATA_SUCCESS = 'DATA_SUCCESS'

/*
/////////////
LOAD DATA
/////////////
*/

function requestData() {
  return {
    type: DATA_REQUEST,
    isFetching: true,
  }
}

function receiveData(data) {
  return {
    type: DATA_SUCCESS,
    isFetching: false,
    data: data,
  }
}

export function loadData() {
  const url = API_ROOT + 'api/data'

  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }
  return (dispatch) => {
    const startFunction = () => dispatch(requestData())
    const completeFunction = _json => dispatch(receiveData(_json))
    const error500 = () => dispatch(raiseError({ code: 500, message: 'We had a problem retrieving the data.' }))
    const error400 = _json => dispatch(raiseError({ code: 400, fields: _json }))
    return fetchEndpoint(url, config, startFunction, completeFunction, error500, error400)
  }
}
