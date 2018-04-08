import React from 'react'
import { connect } from 'react-redux'

const Title = props => {
  return (
   <h1>{props.numbers.name}</h1>
  )
}

export default connect(state => state)(Title)