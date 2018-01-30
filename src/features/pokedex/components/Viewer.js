import React, { Component } from 'react'
import { graphql, createFragmentContainer } from 'react-relay'
import typeColors from '../../../helpers/typeColors'
import Type from './Type'

class Viewer extends Component {
  renderTypes = () => {
    const { types } = this.props.pokemon
    return types.map((type, i) => {
      return <Type key={ i } color={ typeColors[type] }>{ type }</Type>
    })
  }
  render() {
    console.log(this.props)
    const { pokemon } = this.props
    return (
      <div className="viewer">
        <div className="viewer__image-container">
          <img className="viewer__image" src={ pokemon.image } alt={ pokemon.name }/>
        </div>
        {/* <div className="viewer__info">
          <div className="viewer__info--item">
            <b className="viewer__info--title">HT:</b> { pokemon.height }m
          </div>
          <div className="viewer__info--item">
            <b className="viewer__info--title">WT:</b> { pokemon.weight}kg
          </div>
          <div className="viewer__info--item">
            <b className="viewer__info--title">TYPES:</b> { this.renderTypes() }
          </div>
        </div> */}
      </div>
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
        height
        weight
        image
      }
    `
  }
)