import {
  Environment,
  RecordSource,
  Store
} from 'relay-runtime'
import { Network } from 'relay-local-schema'
import schema from './LocalSchema'

const store = new Store(new RecordSource())

// const network = Network.create((operation, varibles) => {
//   return fetch('http://localhost:5000', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       query: operation.text,
//       varibles
//     })
//   }).then(res => {
//     return res.json()
//   })
// })

const network = Network.create({ schema })

const environment = new Environment({
  network,
  store
})

export default environment