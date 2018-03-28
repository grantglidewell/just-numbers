import React, { Component } from 'react'
import { connect } from 'react-redux'

class Title extends Component {
  render() {
    return <h1>{this.props.numbers.name}</h1>
  }
}

export default connect(state => state)(Title)