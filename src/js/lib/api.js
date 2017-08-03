export function fetchEndpoint(url, config, onStart, onSuccess,
  error500, error400, additionalFunction) {
  onStart()

  return fetch(url, config)
  .then((response) => {
    return response.json().then((json) => {
      if (!response.ok) {
        error400(json)
      } else {
        if (additionalFunction) {
          additionalFunction(json)
        }
        onSuccess(json)
        return json
      }
    })
  })
  .catch(() => {
    error500()
  })
}
