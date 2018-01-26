const {
  Environment,
  Network,
  RecordSource,
  Store
} = require('relay-runtime')

const store = new Store(new RecordSource())

const network = Network.create((operation, varibles) => {
  return fetch('http://localhost:5000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      varibles
    })
  }).then(res => {
    return res.json()
  })
})

const environment = new Environment({
  network,
  store
})

export default environment