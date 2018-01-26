import React, { Component } from 'react'
import { graphql, createFragmentContainer } from 'react-relay'

class Viewer extends Component {
  render() {
    const { pokemon } = this.props
    console.log(this.props)
    return (
      <div>{ pokemon }</div>
    )
  }
}

export default createFragmentContainer(
  Viewer,
  {
    pokemon: graphql`
      fragment Viewer_pokemon on Pokemon {
        name
        types
      }
    `
  }
)