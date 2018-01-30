import React, { Component } from 'react'

const Type = (props) => {
  return (
    <div className="viewer__info--type" style={ { backgroundColor: props.color } }>
      { props.children }
    </div>
  )
}

export default Type