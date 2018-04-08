import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchResults } from '../../modules/numberStore'

import { addToToday } from '../../modules/numberStore'

import './input.css';

class Input extends Component {
  componentDidMount() {
    this.props.dispatch(fetchResults())
  }
  handleInput = evt => {
    console.log('click')
    return this.props.dispatch(addToToday())
  }
  render() {
    return (
      <div className="wrapper">
      <div className="stack">
        <input
          type="button"
          className="incButton hover"
          onClick={() => this.props.dispatch({
            type: 'INC_NUMBER'
          })}
          value="+"
        />
        <input
          type="button"
          className="decButton hover"
          onClick={() => this.props.dispatch({
            type: 'DEC_NUMBER'
          })}
          value="-"
        />
      </div>
      <div>
        <input
          type="number"
          className="numberInput"
          value={this.props.number}
          onChange={evt => this.props.dispatch({
            type: 'INPUT_NUMBER',
            number: evt.target.value
          })}
        />
      </div>
      <div className="stack">
        <input
          type="button"
          className="subButton"
          onClick={this.handleInput}
          value="ADD"
        />
      </div>
      <div className="displayToday">{this.props.results[0].total}</div>
    </div>
    )
  }
};

export default connect(state => state.numbers)(Input)