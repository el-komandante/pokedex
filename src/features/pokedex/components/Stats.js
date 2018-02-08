import React, { Component } from 'react'
import { graphql, createFragmentContainer } from 'react-relay'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

@observer
class Stats extends Component {
  componentDidMount() {
    if (this.input) {
      this.input.focus()
    }
  }
  @observable caretPosition = 0
  onInputClick = (e) => {
    this.input.focus()
  }
  onInputChange = (e) => {
    this.caretPosition = window.getSelection().getRangeAt(0).endOffset
    console.log(this.caretPosition)
  }
  renderStats = () => {
    const { name, height, weight, types, order, description, genus } = this.props.pokemon
    return (
      <React.Fragment>
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
  renderCaret = () => {
    if (this.input) {
      const { width } = this.input.getBoundingClientRect()
      if (this.input.textContent.length > 0) {
        const charWidth = width / this.input.textContent.length
        return (
          <span className="pokedex__search-input--caret" style={ { left: `${charWidth * this.caretPosition}px` } } />
        )
      }
    }
  }
  render() {
    console.log(this.props)
    console.log(this.caretPosition)
    return (
      <div className="pokedex__stats">
        <div className="pokedex__search-container" onClick={this.onInputClick}>
          <span
            className="pokedex__search-input"
            onInput={this.onInputChange}
            onKeyDown={this.props.onKeyDown}
            ref={node => this.input = node}
            contentEditable="true"
          />
          { this.renderCaret() }
        </div>
        { (!this.props.loading && !this.props.error) && this.renderStats() }
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