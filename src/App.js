import React, { Component } from 'react';
import { graphql, QueryRenderer } from 'react-relay'
import environment from './Environment'
import Viewer from './features/viewer/Viewer'
import './App.css';

class App extends Component {
  render() {
    const { pokemonName } = this.props
    console.log(this.props)
    return (
      <QueryRenderer
        environment={ environment }
        query={ graphql`
          query AppPokemonQuery {
            pokemon(name: "Mew") {
              name
            }
          }
        ` }
        variables={ { pokemonName } }
        render={ ({error, props}) => {
          if (error) {
            return <div>Errrrror</div>
          }
          if (!props) {
            return <div>Loading...</div>
          }
          return <div><Viewer {...props} /></div>
        }}
      />
    )
  }
}

export default App;
