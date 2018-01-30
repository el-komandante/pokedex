import React, { Component } from 'react'
import { graphql, createFragmentContainer } from 'react-relay'

class Stats extends Component {
  componentDidMount() {
    if (this.input) {
      this.input.focus()
    }
  }
  onInputClick = (e) => {
    this.input.focus()
  }
  // onInputDoubleClick = (e) => {
  //   this.input.select()
  // }
  renderStats = () => {
    const { name, height, weight, types, order, description, genus } = this.props.pokemon
    console.log(description)
    return (
      <React.Fragment>
        <div className="pokedex__search-container" onClick={ this.onInputClick }>
          {/* <input type="search" className="pokedex__search-input" onKeyDown={ this.props.onKeyDown } /> */}
          <span className="pokedex__search-input" onKeyDown={ this.props.onKeyDown } ref={node => this.input = node} contentEditable="true" />
          <span className="pokedex__search-input--caret" />
        </div>
        <div className="pokedex__stat">
          <b>{`${name.charAt(0).toUpperCase()}${name.slice(1)}`}</b> #{order}
        </div>
        <div className="pokedex__stat">
          HT: { height }m
        </div>
        <div className="pokedex__stat">
          WT: { weight }kg
        </div>
        <div className="pokedex__stat">
          TYPE: { types.join(', ').toUpperCase() }
        </div>
        <div className="pokedex__stat--description">
          <b className="pokedex__stat--genus">
            { genus }
          </b>
          <div>
            {description}
          </div>
        </div>
      </React.Fragment>
    )
  }
  render() {
    console.log(this.props)
    return (
      <div className="pokedex__stats">
        { !this.props.loading && this.renderStats() }
      </div>
    )
  }
}

export default createFragmentContainer(
  Stats,
  {
    pokemon: graphql`
      fragment Stats_pokemon on Pokemon {
        name
        height
        weight
        types
        order
        description
        genus
      }
    `
  }
)