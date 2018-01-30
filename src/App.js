import React, { Component } from 'react';
import { graphql, QueryRenderer } from 'react-relay'
import environment from './Environment'
import Pokedex from './features/pokedex'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: 'charmander'
    }
  }
  onSubmit = (e) => {
    if (e.keyCode === 13) {
      console.log(Object.keys(e.target))
      this.setState({
        name: e.target.textContent
      })
      console.log('submitted', e.target.value)
    }
  }
  render() {
    const { name } = this.state
    console.log(this.props)
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
        variables={ { name } }
        render={ ({error, props}) => {
          console.log(error, props)
          if (error) {
            return <div>{ error.message }</div>
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
