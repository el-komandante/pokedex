import React, { Component } from 'react';
import { graphql, QueryRenderer } from 'react-relay'
import environment from './Environment'
import Pokedex from './features/pokedex'
import { observer } from 'mobx-react'
import './App.css';

@observer
class App extends Component {
  onSubmit = (e) => {
    if (e.keyCode === 13) {
      this.props.store.changePokemon(e.target.value.toLowerCase())
    }
  }
  render() {
    return (
      <QueryRenderer
        environment={ environment }
        query={ graphql`
          query AppPokemonQuery($name: String) {
            pokemon(name: $name) {
              ...Viewer_pokemon
              ...Stats_pokemon
            }
          }
        `}
        variables={ { name: this.props.store.pokemon } }
        render={ ({error, props}) => {
          console.log(error, props)
          if (error) {
            return (
              <div className="app">
                <Pokedex onKeyDown={ this.onSubmit } error={ true } />
              </div>
            )
          }
          if (!props) {
            return (
              <div className="app">
                <Pokedex onKeyDown={ this.onSubmit } loading={ true } />
              </div>
            )
          }
          return (
            <div className="app">
              <Pokedex onKeyDown={ this.onSubmit } pokemon={ props.pokemon } />
            </div>
          )
        }}
      />
    )
  }
}

export default App;
