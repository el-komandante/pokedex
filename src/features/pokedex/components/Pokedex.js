import React, { Component } from 'react'
import Viewer from './Viewer'
import Stats from './Stats'

export default class Pokedex extends Component {
  renderButtons = () => {
    const buttons = []
    for (let i = 0; i < 10; i++) {
      buttons.push(
        <div className="pokedex__right--rect-button" />
      )
    }
    return <div className="pokedex__right--rect-buttons">{ buttons }</div>
  }
  render() {
    return (
      <div className="pokedex__container">
        <svg className="pokedex__svg" viewBox="0 0 800 600">
        <g>
          <path className="pokedex__left" d="M30,1 400,1 400,600, 30,600 Q1,600 1,570 L1,30 Q1,1 30,1" />
          <path className="pokedex__left--curve" d="M1,70 1,30 Q1,1 30,1 L 400,1 400,35 277,35 Q250,35 240,52.5 T210,70" />
          <circle className="pokedex__left--red-light" cx="100" cy="17" r="10" />
          <circle className="pokedex__left--yellow-light" cx="130" cy="17" r="10" />
          <circle className="pokedex__left--green-light" cx="160" cy="17" r="10" />
          <circle className="pokedex__left--glass" cx="45" cy="35" r="27" />
          <rect className="pokedex__left--hinge" width="50" height="565" x="350" y="35" />
          <path className="pokedex__screen--bezel" d="M50,80 300,80 Q320,80 320,100 L320,450 Q320,470 300,470 L70,470 30,440 30,100 Q30,80 50,80" />
          <circle className="pokedex__bezel--dot" cx="155" cy="90" r="5" />
          <circle className="pokedex__bezel--dot" cx="195" cy="90" r="5" />
          <circle className="pokedex__bezel--button" cx="95" cy="455" r="12" />
          <path className="pokedex__bezel--speaker" d="M 210,447 280,447" />
          <path className="pokedex__bezel--speaker" d="M 210,454 280,454" />
          <path className="pokedex__bezel--speaker" d="M 210,461 280,461" />
          <circle className="pokedex__left--circular-button" r="25" cx="70" cy="520" />
          <rect className="pokedex__left--radius-button-green" width="55" height="13" rx="7" ry="10" x="120" y="505" />
          <rect className="pokedex__left--radius-button-red" width="55" height="13" rx="7" ry="10" x="185" y="505" />
          <g>
            <rect width="30" height="30" ry="6" y="500" x="255" className="pokedex__left--dpad" />
            <rect width="30" height="30" ry="6" y="530" x="285" className="pokedex__left--dpad" />
            <rect width="30" height="30" ry="6" y="560" x="255" className="pokedex__left--dpad" />
            <rect width="30" height="30" ry="6" y="530" x="225" className="pokedex__left--dpad" />
            <rect width="30" height="30" ry="6" y="530" x="225" className="pokedex__left--dpad" />
            <rect width="30" height="40" x="255" y="525" className="pokedex__left--dpad" />
            <rect width="40" height="30" x="250" y="530" className="pokedex__left--dpad" />
            <circle r="9" cy="545" cx="270" className="pokedex__left--dpad-center" />
          </g>
        </g>
        <g>
          <path className="pokedex__right" d="M400,35 460,35 Q480,35 500,55 T535,75 L750,75 750,570 Q750,600 720,600 L400,600" />
          <rect className="pokedex__left--radius-button-green" width="55" height="13" rx="7" ry="10" x="600" y="500 " />
          <rect className="pokedex__left--radius-button-red" width="55" height="13" rx="7" ry="10" x="665" y="500" />
          <circle className="pokedex__right--dot-orange" r="8" cx="434" cy="508" />
          <circle className="pokedex__right--dot-green" r="8" cx="459" cy="508" />
        </g>
        </svg>
        { this.renderButtons() }
        <div className="pokedex__right--yellow-screens">
          <div className="pokedex__right--yellow-screen" />
          <div className="pokedex__right--yellow-screen" />
        </div>
        <Viewer pokemon={ this.props.pokemon } error={ this.props.error } loading={ this.props.loading } />
        <Stats onKeyDown={ this.props.onKeyDown } error={ this.props.error } pokemon={ this.props.pokemon } loading={ this.props.loading } />
      </div>
    )
  }
}