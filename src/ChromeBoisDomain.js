import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY)

  }

  keyPress = (event) =>{
    event.key === 'a'? resize('+'): resize('-')
  }

  render() {
    return (
      <canvas
        onClick = {toggleCycling()}
        onMouseMove={this.handleMouseMove}
        onKeyDown = {this.keyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
