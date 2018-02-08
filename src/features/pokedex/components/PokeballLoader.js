import React, { Component } from 'react'

export default class PokeballLoader extends Component {
  render() {
    const { error } = this.props
    return (
      <div className="pokeball-loader">
        <div className="pokeball-loader__top" />
        <div className="pokeball-loader__centerline" />
        <div className="pokeball-loader__center" />
        {error && <div className="pokeball-loader__bottom" />}
      </div>
    )
  }
}